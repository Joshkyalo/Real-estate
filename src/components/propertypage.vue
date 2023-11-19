<template> 
<!-- Plan 

    - have the following sections 
        - Images section 

        - Price, location, name section 
        - Contact details and house details section 
-->
<!-- Plan End -->

<!-- im,ages section start -->
<v-container class="mt-16"> 

  <!---------------------------------------------------------------------------->


 
  
 
     <v-row>
          <v-card-text>

 <!--Carousel start -->
 <v-carousel show-arrows="hover" height=""  class="v-flex">
  <v-carousel-item height=""
    src="../assets/house6.jpg"
    max-height="500"
              cover
  ></v-carousel-item>

  <v-carousel-item class="h-75"
    src="../assets/house4.jpg"
    max-height="500"
              cover
  ></v-carousel-item>

  <v-carousel-item class="h-75"
    src="../assets/house5.jpg"
    max-height="500"
              cover
  ></v-carousel-item>
  <v-carousel-item class="h-75"
  src="../assets/house3.jpg"
  max-height="500"
              cover
  ></v-carousel-item>
</v-carousel>
                <!-- Carousel End -->
          </v-card-text>
        </v-row>    
      
 

<!-- Image dialog ends here -->

  <!---------------------------------------------------------------------------->
  
    <v-col hidden
      class=""
      cols="6"
      sm="12" 
      lg="12" 
      md="12"
      height="400">
      
      <v-img
      height="400"
      cover
      outlined
        :src="currPropertyImages[1]"
        :lazy-src="`https://picsum.photos/10/6?image=${1 * 5 + 10}`"
        aspect-ratio="1"
        class="bg-grey-lighten-2 rounded-lg"
      >
        <template v-slot:placeholder>
          <v-row
            class="fill-height ma-0"
            align="center"
            justify="center"
          >
            <v-progress-circular
              indeterminate
              color="grey-lighten-5"
            ></v-progress-circular>
          </v-row>
        </template>
      </v-img>
    </v-col>

    <v-col 
    cols="6"
    sm="12" 
    lg="12" 
    md="12" hidden>
        <v-row>
<v-col cols="6">
    <v-img 
      height="200"
      cover
      outlined
        :src="currPropertyImages[0]"
        :lazy-src="`https://picsum.photos/10/6?image=${2 * 5 + 10}`"
        aspect-ratio="1"
        class="bg-grey-lighten-2 rounded-lg"
      >
        <template v-slot:placeholder>
          <v-row
            class="fill-height ma-0"
            align="center"
            justify="center"
          >
            <v-progress-circular
              indeterminate
              color="grey-lighten-5"
            ></v-progress-circular>
          </v-row>
        </template>
      </v-img>
</v-col>
<v-col cols="6">
    <v-img 
      height="200"
      cover
      outlined
      :src="currPropertyImages[2]"
        :lazy-src="`https://picsum.photos/10/6?image=${6 * 5 + 10}`"
        aspect-ratio="1"
        class="bg-grey-lighten-2 rounded-lg"
      >
        <template v-slot:placeholder>
          <v-row
            class="fill-height ma-0"
            align="center"
            justify="center"
          >
            <v-progress-circular
              indeterminate
              color="grey-lighten-5"
            ></v-progress-circular>
          </v-row>
        </template>
      </v-img>
</v-col>
<v-col cols="6">
    <v-img 
      height="200"
      cover
      outlined
      :src="currPropertyImages[3]"
        :lazy-src="`https://picsum.photos/10/6?image=${5 * 5 + 10}`"
        aspect-ratio="1"
        class="bg-grey-lighten-2 rounded-lg"
      >
        <template v-slot:placeholder>
          <v-row
            class="fill-height ma-0"
            align="center"
            justify="center"
          >
            <v-progress-circular
              indeterminate
              color="grey-lighten-5"
            ></v-progress-circular>
          </v-row>
        </template>
      </v-img>
</v-col>
<v-col cols="6">
    <v-img
      height="200"
      cover
      outlined
      :src="currPropertyImages[4]"
        :lazy-src="`https://picsum.photos/10/6?image=${4 * 5 + 10}`"
        aspect-ratio="1"
        class="bg-grey-lighten-2 rounded-lg"
      >
        <template v-slot:placeholder>
          <v-row
            class="fill-height ma-0"
            align="center"
            justify="center"
          >
            <v-progress-circular
              indeterminate
              color="grey-lighten-5"
            ></v-progress-circular>
          </v-row>
        </template>
      </v-img>
</v-col>
        </v-row>
    </v-col>
    

<!-- Image dialog starts here -->
  
<v-dialog hidden 
        v-model="dialog"
        activator="parent"
         
      >
        <v-card>
          <v-card-text>

 <!--Carousel start -->
 <v-carousel show-arrows="hover" height=""  class="v-flex">
  <v-carousel-item height=""
    src="../assets/house6.jpg"
    max-height="500"
              cover
  ></v-carousel-item>

  <v-carousel-item class="h-75"
    src="../assets/house4.jpg"
    max-height="500"
              cover
  ></v-carousel-item>

  <v-carousel-item class="h-75"
    src="../assets/house5.jpg"
    max-height="500"
              cover
  ></v-carousel-item>
  <v-carousel-item class="h-75"
  src="../assets/house3.jpg"
  max-height="500"
              cover
  ></v-carousel-item>
</v-carousel>
                <!-- Carousel End -->
          </v-card-text>
          <v-card-actions>
            <v-btn color="primary" block @click="dialog = false">Close </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    
 

<!-- Image dialog ends here -->
 


  <!-- starting price, location and name section -->

  <v-row class="mt-4 mb-4"> 
    <v-col > 
<h1 class=""> {{ this.currentProperty.propertyName }} </h1>
<div><v-icon color="blue">mdi-map-marker</v-icon>
  {{ ` ${currPropertyLocation.province}, ${currPropertyLocation.ward}, ${currPropertyLocation.city}, ${currPropertyLocation.street}` }}
   </div>

<v-btn rounded variation="outlined" class="text-caption  mt-4 mb-4" color="grey" elevation="o" @click="dialog=true"> Condominium </v-btn>

    </v-col>


    <v-divider class="ma-4"></v-divider>

    <v-row> 

        <v-col cols="6"> 
            <h2>CFA {{ formatPrice(this.currentProperty.propertyPrice) }} </h2>
    <div class="red-text">   <v-icon color="blue" variation="outlined" class="ml-4">mdi-check-circle-outline</v-icon> {{  this.currentProperty.propertyAvailability }}</div>
        </v-col>

        <v-divider vertical></v-divider>

        <v-col cols="6" hidden> 

          <h3> Available Utilities </h3>

            <h3 class="pa-4">
            <v-icon color="blue">mdi-shower</v-icon>3 
      
      <v-icon color="blue">mdi-bed</v-icon> 3
  
      <v-icon color="blue">mdi-square</v-icon> 400 
  
      <v-icon color="blue">mdi-car</v-icon> 2  
      <v-icon color="blue">mdi-air-conditioner</v-icon> Available

      <v-divider vertical> </v-divider>

    
    </h3>
        </v-col>
   
</v-row>
<v-divider class="ma-4"></v-divider>
  
  </v-row>

  <!-- End price, location and name sections -->

  <!-- Start About this property section -->
  
  <v-row class="mt-4 mb-4"> 

    <v-col cols="12" justify="left" align="left" class="ma-2 pa-0">
     <h2> About this Property </h2>
     
      <p class="ma-4"> {{ this.currentProperty.propertyDescription }} 
      </p>
      <v-divider></v-divider>
      <h2> Additional Information </h2>

      <p class="ma-4"> {{ this.currentProperty.propertyAdditionalInformation }}</p>

<div>


</div>

<br/>


</v-col>
  </v-row>

  <!-- End About this property section -->

  <!-- Start more details -->

  <v-divider class="3"></v-divider>
  <v-row class="mt-4 mb-4">
    
    <v-col cols="12">
    <h2> More Details </h2>
    </v-col>

<div cols="12">

    <v-col cols="8" class="pa-4" align="left" justify="left">
        <v-row > 
            <v-col cols="6" color="blue">
                <v-icon color="blue">mdi-car</v-icon> 3 Car Garage & Guest Parking
            </v-col>


            <v-col cols="6" color="blue">
                <v-icon color="blue">mdi-shower</v-icon> 3 Bathrooms 
            </v-col>
            <v-col cols="6" color="blue">
                <v-icon color="blue">mdi-bed</v-icon> 4 Bedrooms
            </v-col>
            <v-col cols="6" color="blue">
                <v-icon color="blue">
                    mdi-square
                </v-icon> 512 Sq Metres
            </v-col>
            <v-col cols="6" color="blue">
                <v-icon color="blue">
                    mdi-pool
                </v-icon> Swimming Pool
            </v-col>
            <v-col cols="6" color="blue">
                <v-icon color="blue">mdi-security</v-icon> Secutiry 
            </v-col>
        
            <v-col cols="6" color="blue">
                <v-icon color="blue">mdi-wall</v-icon> Perimeter Wall 
            </v-col>
            <v-col cols="6" color="blue">
                <v-icon color="blue">
                    mdi-school
                </v-icon> Schools nearby
            </v-col>
            <v-col cols="6">
                <v-icon color="blue">
                    mdi-cart-plus
                </v-icon> Shopping Centers Nearby 
            </v-col>
            <v-col cols="6">
                <v-icon color="blue"> mdi-water</v-icon> Connected to Water Supply 
            </v-col>
        </v-row>
    </v-col>

</div>
  </v-row>



  <!-- End more details -->
</v-container>

<!-- Images section end -->


</template>

<script> 
  import { doc, getDoc } from "firebase/firestore";
  import {db } from '../firebaseConfig'
 
//data 
// methods 
//computer 

export default {

  created() {
      this.propertyId = this.$route.params.propertyId
this.getProperty();
  
    },

data() {
  return {
dialog: false,
currentProperty: [],
propertyId: '',
propertyName: '',
currPropertyLocation: '',
currPropertyImages: '',
  }
},

methods: {
loadImages() {
  console.log('Image dowloading started');
},
async getProperty(){


const docRef = doc(db, "Properties",this.$route.params.propertyId );
const docSnap = await getDoc(docRef);

if (docSnap.exists()) {
  console.log("Document data:", docSnap.data());
  this.currentProperty = docSnap.data();
  this.currPropertyLocation = docSnap.data().propertyLocation;
  this.currPropertyImages = docSnap.data().propertyImages;
} else {
  // docSnap.data() will be undefined in this case
  console.log("No such document!");
}
},
formatPrice(value) {
          let val = (value/1).toFixed(2).replace('.', ',')
          return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
      
},
}
}
</script>