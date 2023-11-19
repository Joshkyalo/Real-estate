<template>

<div class="mt-16 mb-16">
<!-- desktop start -->
<div v-if="!isMobile" width="100%">
  <desktop>
    <v-div justify="center">
      <ais-instant-search index-name="Properties"   :search-client="searchClient">
  
  
      <div class="left-panel ma-4">
      <ais-clear-refinements  hidden />

      <!--
      <h2>Filters</h2> 
  
      <div>
  Location : {{ this.$route.query.searchLocation }}
  </div>
  
  <div>
  Bedrooms : {{ this.$route.query.searchBed }}
  </div>
  
  <div>
  Type :  {{ this.$route.query.searchType }}
  
  </div>
-->
      <ais-configure :hitsPerPage="20"   />

      <v-col cols="12"  align="center" justify="center">
      <v-col cols="6">
             <ais-search-box width="50" v-model="currentType" submit-title="Submit the query"  autofocus show-loading-indicator />
            </v-col>  
          </v-col>
      <!-- Price filter start-->
      <v-row class="mt-4" justify="center" align="center">  
        <v-col cols="12" class="pa-6"> 
                  
                 <h4> Price Range </h4><ais-range-input class="ml-4"
                  attribute="propertyPrice">
      <template
        v-slot="{
          currentRefinement,
          range,
          canRefine,
          refine,
          sendEvent,
        }"
      >
        <input
          type="number"
          :min="range.min"
          :max="range.max"
          :placeholder="range.min"
          :disabled="!canRefine"
          :value="formatMinValue(currentRefinement.min, range.min)"
          @input="refine({
            min:$event.currentTarget.value,
            min: formatMinValue(currentRefinement.max, range.max),
          })"
        >
        →
        <input
          type="number"
          :min="range.min"
          :max="range.max"
          :placeholder="range.max"
          :disabled="!canRefine"
          :value="formatMaxValue(currentRefinement.max,range.max)"
          @input="refine({
            max:formatMinValue(currentRefinement.min, range.min),
            max: $event.currentTarget.value,
          })"
        >
      </template>
    </ais-range-input>
  </v-col>
  </v-row>
  <!-- Price filter end -->
  
  <!-- Location filter start
  TODO: put the categories list under an expansion panel
  -->
  <v-expansion-panels class=""  justify="left" align="left">
  
  <v-expansion-panel elevation="0">
    <v-expansion-panel-title color="white-lighten-2 white--text" class="text-caption " align="left" justify="right"> <v-icon color="blue">mdi-domain</v-icon><h2>Type</h2> </v-expansion-panel-title>
      <!-- Expansion panel for categories -->
      <!-- text goes here -->
  
  <v-expansion-panel-text>
      <v-container fluid>
  
        <!-- 
          condo
  appartment
  studio
  flat
  house
        -->
        <ais-refinement-list attribute="ListingType"  show-more >
     
  </ais-refinement-list>
  
  
      
    </v-container>
  
  
    </v-expansion-panel-text>
  
    </v-expansion-panel>
     
  <v-expansion-panel elevation="0" >
      <v-expansion-panel-title color="white-lighten-2 white--text" class="text-caption " align="left" justify="right"> <v-icon color="blue">mdi-home-city</v-icon><h2>Category</h2> </v-expansion-panel-title>
  
      <v-expansion-panel-text>
        <v-container fluid> 
  
      <ais-refinement-list attribute="propertyCategory"/>
      
    </v-container>
  </v-expansion-panel-text>
  </v-expansion-panel>
  
  <v-expansion-panel elevation="0" >
      <v-expansion-panel-title color="white-lighten-2 white--text" class="text-caption " align="left" justify="right"> <v-icon color="blue">mdi-calendar-check</v-icon><h2>Availability</h2> </v-expansion-panel-title>
  
      <v-expansion-panel-text>
        <v-container fluid> 
    
      <ais-refinement-list attribute="propertyAvailability"/>
      
    </v-container>
  </v-expansion-panel-text>
  </v-expansion-panel>
  </v-expansion-panels>
  
  <!-- Location filter start-->
  
      </div>

      <div class="">
      
      <!-- search panel to start with -->
 
              
  
      <!-- end of panel -->

   
      <v-row>
      <ais-hits :transform-items="transformItems">
        
    <template v-slot="{ items, sendEvent }">
      
      <v-row align="center" justify="center">
        <v-col cols="10"  v-for="item in items" :key="item.objectID" @click="">
          <v-row>
              <v-col cols="4">
                 <!-- <v-img :src="item.imageUrl" height="200"></v-img> --> 
  
                  <!--Carousel start -->
  <v-carousel show-arrows="hover" height="210" >
    
    <v-carousel-item v-for="image in item.propertyImages"  height="180"
      :src="image"
      cover
    ></v-carousel-item>
  </v-carousel>
                  <!-- Carousel End -->
  
              </v-col>
         <v-col cols="8">
          <h3 class="ma-3"> CFA {{ this.formatPrice( item.propertyPrice  * 190) }}   </h3>
        
          <H5>{{ item.propertyCategory }}</H5>
          <h4 @click="gotoProduct(`${item.objectID}`)"> {{item.propertyName}} </h4>
          <p @click="gotoProduct(`${item.objectID}`)">{{item.propertyDescription}}</p>
          <!--location -->
          <div class="ma-3">  <v-icon>mdi-map-marker</v-icon>Green Street, Abidjan</div>
          <!-- price & Availability --> 
         
          <!--  Features/ Amenities -->
       
       

          <!-- feature icons start 
          
          "garden" : this.garageIconVisible, 
      "terrace": this.terraceIconVisible, 
      "garage": this.garageIconVisible, 
      "elevator": this.elevatorIconVisible,
      "seaView": this.seaViewIconVisible,
      "mountainView": this.mountainView,
      "pool": this.poolIconVisible, 
      "exteriorFacade" : this.exteriorFacadeIconVisible, 
      "concierge": this.conciergeIconVisible,
          -->
<!--
     
     <div>
          <v-icon>mdi-yard</v-icon>  Garden 
          <v-divider class="border-opacity-75" vertical></v-divider>
     </div>
     
     <div>
          <v-icon>mdi-balcony</v-icon> Balcony
          <v-divider ></v-divider>
     </div>
     
     <div>
          <v-icon>mdi-garage</v-icon>  Garage
          <v-divider vertical></v-divider>
     </div>

     <div>
          <v-icon>mdi-elevator</v-icon> Elevator
          <v-divider vertical></v-divider>
     </div>

     <div>
          <v-icon>mdi-waves</v-icon> Sea View
          <v-divider vertical></v-divider>
     </div>

     <div>
          <v-icon>mdi-landscape</v-icon> Landscape
          <v-divider vertical></v-divider>
     </div>

     <div>
          <v-icon>mdi-pool</v-icon> Pool
          <v-divider vertical></v-divider>
     </div>

     <div>
          <v-icon>mdi-house-siding</v-icon> Exterior Facade
          <v-divider vertical></v-divider>
     </div>

     <div>
          <v-icon>mdi-concierge</v-icon>   Concierge
          <v-divider vertical></v-divider>
     </div> 
  
    -->
          <!-- feature icons end -->
           
          
          <!-- Directions and Nearby -->
          <!-- Property type -->
          <div class="ma-2">
          <v-btn variant="outlined" rounded color="" class="text-caption "
            
          >{{item.ListingType}}</v-btn>
         </div>
        
      </v-col>
          </v-row>
  
          <v-divider class="ma-6"></v-divider>
  
      </v-col>
      </v-row>
    </template>
  </ais-hits>
  
  <v-row justify="center" align="center">
  <ais-pagination />
</v-row>
    </v-row>
    
</div>
  </ais-instant-search> 
      </v-div>
      </desktop>
      </div>

<!-- desktop end -->


<!-- mobile start -->

<div v-else>
  <mobile>

 <!-- search & filter  start -->

   

       <ais-instant-search index-name="Properties"   :search-client="searchClient">

        <ais-clear-refinements  hidden />
        
      <h2>Filters</h2> 
  
      <div>
  Location : {{ this.$route.query.searchLocation }}
  </div>
  
  <div>
  Bedrooms : {{ this.$route.query.searchBed }}
  </div>
  
  <div>
  Type :  {{ this.$route.query.searchType }}
  
  </div>
      

  <ais-search-box  class="ma-4"/>
      <ais-configure :hitsPerPage="8"   />
      <!-- Price filter start-->
      <v-row class="mt-4">  
        <v-col cols="12" class="pa-6"> 
                  
                 <h4> Price Range </h4><ais-range-input class="ml-4"
                  attribute="propertyPrice">
      <template
        v-slot="{
          currentRefinement,
          range,
          canRefine,
          refine,
          sendEvent,
        }"
      >
        <input
          type="number"
          :min="range.min"
          :max="range.max"
          :placeholder="range.min"
          :disabled="!canRefine"
          :value="formatMinValue(currentRefinement.min, range.min)"
          @input="refine({
            min:$event.currentTarget.value,
            min: formatMinValue(currentRefinement.max, range.max),
          })"
        >
        →
        <input
          type="number"
          :min="range.min"
          :max="range.max"
          :placeholder="range.max"
          :disabled="!canRefine"
          :value="formatMaxValue(currentRefinement.max,range.max)"
          @input="refine({
            max:formatMinValue(currentRefinement.min, range.min),
            max: $event.currentTarget.value,
          })"
        >
      </template>
    </ais-range-input>
  </v-col>
  </v-row>
  <!-- Price filter end -->
  
  <!-- Location filter start
  TODO: put the categories list under an expansion panel
  -->
  <v-expansion-panels class=""  justify="left" align="left">
  
  <v-expansion-panel elevation="0">
    <v-expansion-panel-title color="white-lighten-2 white--text" class="text-caption " align="left" justify="right"> <v-icon color="blue">mdi-domain</v-icon><h2>Type</h2> </v-expansion-panel-title>
      <!-- Expansion panel for categories -->
      <!-- text goes here -->
  
  <v-expansion-panel-text>
      <v-container fluid>
  
        <!-- 
          condo
  appartment
  studio
  flat
  house
        -->
        <ais-refinement-list attribute="ListingType"    show-more >
     
  </ais-refinement-list>
  
  
      
    </v-container>
  
  
    </v-expansion-panel-text>
  
    </v-expansion-panel>
     
  <v-expansion-panel elevation="0" >
      <v-expansion-panel-title color="white-lighten-2 white--text" class="text-caption " align="left" justify="right"> <v-icon color="blue">mdi-home-city</v-icon><h2>Category</h2> </v-expansion-panel-title>
  
      <v-expansion-panel-text>
        <v-container fluid> 
  
      <ais-refinement-list attribute="propertyCategory"/>
      
    </v-container>
  </v-expansion-panel-text>
  </v-expansion-panel>
  
  <v-expansion-panel elevation="0" >
      <v-expansion-panel-title color="white-lighten-2 white--text" class="text-caption " align="left" justify="right"> <v-icon color="blue">mdi-calendar-check</v-icon><h2>Availability</h2> </v-expansion-panel-title>
  
      <v-expansion-panel-text>
        <v-container fluid> 
    
      <ais-refinement-list attribute="propertyAvailability"/>
      
    </v-container>
  </v-expansion-panel-text>
  </v-expansion-panel>
  </v-expansion-panels>
  <!-- filter end -->
             
      <ais-hits :transform-items="transformItems">
        
    <template v-slot="{ items, sendEvent }">
      
        <v-col cols="12" v-for="item in items" :key="item.objectID" @click="">  

  <v-carousel show-arrows="hover" height="210" >
    <v-carousel-item v-for="image in item.propertyImages"  height="180"
      :src="image"
      cover
    ></v-carousel-item>
  </v-carousel>
                  <!-- Carousel End -->
  
       
          <h3 class="ma-3"> CFA {{ this.formatPrice( item.propertyPrice  * 190) }}   </h3>
        
          <H5>{{ item.propertyCategory }}</H5>
          <h4 @click="gotoProduct(`${item.objectID}`)"> {{item.propertyName}} </h4>
          <p @click="gotoProduct(`${item.objectID}`)">{{item.propertyDescription}}Lentor Modern compappartements de 1 à 4 </p>
          <!--location -->
          <div class="ma-3">  <v-icon>mdi-map-marker</v-icon>Green Street, Abidjan</div>
          <!-- price & Availability --> 
         
          <!--  Features/ Amenities -->
       
          
              <v-icon color="blue">mdi-shower</v-icon>3 
        
              <v-icon color="blue">mdi-bed</v-icon> 3
          
              <v-icon color="blue">mdi-square</v-icon> 400 
          
              <v-icon>mdi-car</v-icon> 2  
          
          <!-- Directions and Nearby -->
          <!-- Property type -->
          <div class="ma-2">
          <v-btn variant="outlined" rounded color="" class="text-caption "
            
          >Condominium</v-btn>
         </div>
        
       
  
          <v-divider class="ma-6"></v-divider>
  
      </v-col>
  
    </template>
  </ais-hits>
  
   
 

  </ais-instant-search> 
 
</mobile>
</div>
<!-- mobile end -->
 
</div>
  </template>
  
  
  <script>
  import algoliasearch from 'algoliasearch/lite';
  //import 'instantsearch.css/themes/algolia-min.css';
  
  export default {

    computed: {
   isMobile() {
   if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
     return true
   } else {
     return false
   }
 },
 
},
  
    created() {
      this.currentType = this.$route.params.type
  
    },
  
  data() {
      return {
        currentType: '',
        selected: ['Abidjan'],
        searchParameters: 'BOOKS',
      searchClient: algoliasearch(
          'O4WOYZ1DG6',
          'd554c899fcd8da7bdaa1a73dd4ee0c28',
          
      ),
      };
  },
  
  methods: {
        formatMinValue(minValue, minRange) {
          return minValue !== null && minValue !== minRange ? minValue : '';
        },
        formatMaxValue(maxValue, maxRange) {
          return maxValue !== null && maxValue !== maxRange ? maxValue : '';
        },
      
      formatPrice(value) {
          let val = (value/1).toFixed(2).replace('.', ',')
          return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
      
  }, 
  
  transformItems(items, { results }) {
  
  
   // let updatedList = [];
    return results.page === 0
            ? items.filter(function (item) {
              
       /*if(item.propertyCategory === "condo" && item.propertyFeatures.bedrooms === "1"){*/
        if(item.propertyCategory === '' )
       // updatedList.push(item)
      
       
        return item.propertyCategory === '';
      
   
  }) :items;
        },
  gotoProduct(propertyId) {
    console.log(propertyId)
    this.$router.push("/Property/"+propertyId)
    
  }
  }
  };
  </script>
  
  <style>
 
  
   
  </style>
  