<template>
    <div>
      <div ref="map" class="map-container"></div>
      <div
        class="location-picker"
        :style="{ top: pickerTop, left: pickerLeft }"
        @mousedown="startDragging"
      ></div>
      <div class="current-place">{{ currentPlace }}</div>
    </div>
    
  </template>
  
  <script>
  import { ref, onMounted } from "vue";
  
  export default {
    name: "Map",
    data() {
      return {
        map: null,
        marker: null,
        pickerTop: "0px",
        pickerLeft: "0px",
        currentPlace: "",
        isDragging: false,
      };
    },
    methods: {
      async initMap() {
        try {
          // Load Google Maps API with your API key
          const script = document.createElement("script");
          script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyAc7hrbMQaRRyLiN2iAeUoNMCH8o-SIYdU&libraries=places&callback=initMap`;
          script.defer = true;
          script.async = true;
  
          script.onload = () => {
            const mapOptions = {
              center: { lat: 5.320357, lng: -4.019007 }, // Abidjan coordinates
              zoom: 12,
            };
  
            this.map = new google.maps.Map(this.$refs.map, mapOptions);
  
            this.marker = new google.maps.Marker({
              draggable: true,
              position: { lat: 5.320357, lng: -4.019007 },
              map: this.map,
            });
  
            this.marker.addListener("dragend", () => {
              const newPosition = this.marker.getPosition();
              this.pickerTop = `${newPosition.lat()}`;
              this.pickerLeft = `${newPosition.lng()}`;
  
              // Fetch place details using Geocoding API
              const geocoder = new google.maps.Geocoder();
              geocoder.geocode({ location: newPosition }, (results, status) => {
                if (status === "OK" && results[0]) {
                  this.currentPlace = results[0].formatted_address;
                 // alert(`New position: ${this.currentPlace}`);
                  const dataToSend = `${this.currentPlace}`;
                 this.$emit("childEvent", dataToSend);
                }
              });
            });
          };
  
          document.head.appendChild(script);
        } catch (error) {
          console.error("Error loading Google Maps API:", error);
        }
      },
      startDragging(event) {

        try {
        this.isDragging = true;
        const markerPosition = this.marker.getPosition();
        const markerPixel = this.map.getProjection().fromLatLngToPoint(markerPosition);
        const offsetX = event.clientX - markerPixel.x;
        const offsetY = event.clientY - markerPixel.y;
  
        const moveMarker = (e) => {
          if (this.isDragging) {
            const newLeft = e.clientX - offsetX;
            const newTop = e.clientY - offsetY;
            const newPosition = this.map.getProjection().fromPointToLatLng(
              new google.maps.Point(newLeft, newTop)
            );
            this.marker.setPosition(newPosition);
          }
        };
  
        const stopDragging = () => {
          this.isDragging = false;
          window.removeEventListener("mousemove", moveMarker);
          window.removeEventListener("mouseup", stopDragging);
        };
  
        window.addEventListener("mousemove", moveMarker);
        window.addEventListener("mouseup", stopDragging);
    }
 catch (error) {
          console.error("Error loading Google Maps API after dragging:", error);
        }
      },
    },
    mounted() {
      this.initMap();
    },
  };
  </script>
  
  <style scoped>
  .map-container {
    width: 100%;
    height: 400px;
    position: relative;
  }
  
  .location-picker {
    width: 20px;
    height: 20px;
    background-color: blue;
    border-radius: 50%;
    position: absolute;
    cursor: pointer;
    transform: translate(-50%, -50%);
  }
  
  .current-place {
    position: absolute;
    bottom: 10px;
    left: 10px;
    background: rgba(255, 255, 255, 0.8);
    padding: 5px;
    border-radius: 5px;
  }
  </style>
  