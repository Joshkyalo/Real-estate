<template>

<!-- web start -->
<div v-if="!isMobile" width="100%" class="mt-16">
  <desktop>
    <v-div>

      <v-locale-provider locale="jp">
<!-- Jumbotron -->

<!-- test bg here -->
<!--
  - update the color from red to grey on the filter card 
  - add a way to filter the price of the elements
  - borrow from mubawab as much as posible 

-->

<!-- end bg test -->

  <v-jumbotron height="50%">
    <v-span class="bg"> </v-span>
    <v-container style="height:50%; width:75%">
      <v-layout align="center" class="pr-6 pl-6 " >

        
          
        
      </v-layout>
   
<v-jumbotron >

</v-jumbotron>
 

      <v-row align="center" justify="center" color="">
            <v-col cols="12" >   
  <v-card
  color="blue-grey-lighten-1"
  elevation="6"
  outlined
    flat
    class="ma-4"
  >
    <v-card-text>
        <v-sheet rounded class="pa-1" color="blue-grey-lighten-1">
      <v-row 
        align="center"
        justify="center"
        outlined   
      >
      
        <v-col cols="12">
           
        </v-col>
        <v-btn-toggle
          v-model="toggle_exclusive"
          mandatory
        >
          <v-btn  >
            <p>Buy</p>
          </v-btn>
          <v-btn>
            <p>Rent</p>
          </v-btn>
          <v-btn>
            <p>Land</p>
          </v-btn>
          <v-btn>
           <p>Commercial</p>
          </v-btn>
        </v-btn-toggle>
      </v-row>

      <v-row
      align="center"
      justify="center"
      >

      <v-col
      cols="12" class="pa-4" >

      <v-row
      align="center"
      justify="center"
      class="text-caption"
      >
        <v-col cols="4">
            <v-text-field
  
  chips
  label="where do you want to Live?"
  v-model="searchLocation"
  multiple
  variant="outlined"
></v-text-field>
        </v-col>
        <v-col cols="2">
            <v-autocomplete
  label="Type"
  :items="['Apartment','House','Condo','Commercial','Studio','Own Compound']"
  variant="outlined"
  v-model="searchType"
></v-autocomplete>
        </v-col>

        <v-col cols="2">
            <v-autocomplete
  label="Bed"
  :items="['Studio','1', '2', '3', '4', '5', '6','7','8','Studio']"
  variant="outlined"
  v-model="searchBed"
></v-autocomplete>
        </v-col>

        <v-col cols="2" justify="center" align="center" class="pa-2">
        <v-btn  color="white" @click="showSearchPage()">
  <v-icon color="white">mdi-search</v-icon>Search
</v-btn>
</v-col>
        
        </v-row>
    </v-col>
      </v-row>  
    </v-sheet>
    </v-card-text>
  </v-card>
 </v-col>
 </v-row>


  <v-layout align="center" class="pr-2 pl-2 mt-4 mb-4 ">
 
      </v-layout>

      <v-layout align="center" justify="center" >



        <!-- start agent onboarding banner  -->

    

<!-- end agent onboarding banner -->




<!-- properties list start -->

</v-layout>

<!-- site statistics start -->

<v-row justify="center" align="center">
    <v-col cols="8">


</v-col>
</v-row>
<!-- site statistics end -->


<!-- Featured listings start -->
<v-row class="mt-16"  >
    <v-col cols="12" align="center" justify="center" class="ma-4 pt-10">
        <p class="text-caption blue--text">Featured Listing</p>
        <h2>Find your ideal property</h2>
    </v-col>

 </v-row>


 <v-row class="" justify="center" align="center">
    <v-col cols="12" justify="center" align="center">
        <v-row justify="center" align="center">

       
    <v-col class="pa-2" cols="3" v-for="property in properties">
  <v-card 
    class="mx-auto"
    max-width="344"
  >
    <v-img
      :src=property.image
      height="200px"
      cover
    ></v-img>
<v-card-subtitle>
   <h3 class="pt-4"> {{ this.formatPrice(property.price * 1000) }} F  CFA </h3>
</v-card-subtitle>
    <v-card-title>
      {{property.name}}
    </v-card-title>
    <v-card-subtitle>
       <v-icon>mdi-map-marker</v-icon> {{ property.location }}
    </v-card-subtitle>

    <v-card-title>
        <v-sheet class="hit-price blue"><v-btn variant="outlined"   class="text-caption"  @click="showFearured"> {{property.type}}  </v-btn> </v-sheet>

    </v-card-title>
 
 
    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>

        <v-card-text>
          I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
</v-col>
</v-row>
    </v-col>
</v-row>


<v-row>

    <v-col cols="12" justify="center" align="center" class="ma-4"> 
        <v-btn rounded variant="outlined"   @click="showFearured()">
View All Featured Properties <v-icon>mdi-arrow-right</v-icon>
        </v-btn>
    </v-col>
</v-row>
 
 

<v-divider class="my-3"></v-divider>

<!-- featured listing end -->

<v-row class="ma-4"  >
    <v-row>
    <v-col align="center" justify="center" class="ma-4">
        <p class="text-caption blue--text">Sale Listing</p>
        <h2>Explore Properties for Sale</h2>
    </v-col>
</v-row>
 
<v-row class="" justify="center" align="center">
    <v-col cols="12" justify="center" align="center">
        <v-row justify="center" align="center">

       
    <v-col class="pa-2" cols="3" v-for="property in properties">
  <v-card 
    class="mx-auto"
    max-width="344"
  >
    <v-img
      :src=property.image
      height="200px"
      cover
    ></v-img>
<v-card-subtitle>
   <h3 class="pa-4"> {{ this.formatPrice(property.price * 1000) }} F  CFA </h3>
</v-card-subtitle>
    <v-card-title class="ma-0 pa-1">
      {{property.name}}
    </v-card-title>
    <v-card-subtitle>
       <v-icon>mdi-map-marker</v-icon> {{ property.location }}
    </v-card-subtitle>

    <v-card-title>
        <v-sheet class="hit-price ma-2 blue"><v-btn variant="outlined"   class="text-caption"  @click="showFearured"> {{ property.type }}  </v-btn> </v-sheet>

    </v-card-title>
 

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>

        <v-card-text>
          I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
</v-col>
</v-row>
    </v-col>
</v-row>
<v-row>

    <v-col cols="12"  justify="center" align="center" class="ma-4"> 
        <v-btn rounded variant="outlined"   @click="showSale()">
View All Properties for Sale <v-icon>mdi-arrow-right</v-icon>
        </v-btn>
    </v-col>
</v-row>
</v-row>
<v-divider class="my-3"></v-divider>

<!-- Properties for sale start -->
<v-row class="ma-4"  >
    <v-row>
    <v-col align="center" justify="center" class="ma-4">
        <p class="text-caption blue--text">Rental Listing</p>
        <h2>Discover Rental Properties</h2>
    </v-col>
</v-row>
 
<v-row class="" justify="center" align="center">
    <v-col cols="12" justify="center" align="center">
        <v-row justify="center" align="center">

       
    <v-col class="pa-2" cols="3" v-for="property in properties">
  <v-card 
    class="mx-auto"
    max-width="344"
  >
    <v-img
      :src=property.image
      height="200px"
      cover
    ></v-img>
<v-card-subtitle>
   <h3 class="pa-4"> {{ this.formatPrice(property.price * 1000) }} F  CFA </h3>
</v-card-subtitle>
    <v-card-title>
      {{property.name}}
    </v-card-title>
    <v-card-subtitle>
       <v-icon>mdi-map-marker</v-icon> {{ property.location }}
    </v-card-subtitle>

    <v-card-title>
        <v-sheet class="hit-price ma-2 blue"><v-btn variant="outlined"   class="text-caption" @click="showFearured"> {{ property.type }}  </v-btn> </v-sheet>

    </v-card-title>
 
 
    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>

        <v-card-text>
          I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
</v-col>
</v-row>
    </v-col>
</v-row>
<v-row>
    <v-col cols="12" justify="center" align="center" class="ma-4"> 
        <v-btn rounded variant="outlined"   @click="showRent()">
View All Properties for Rent<v-icon>mdi-arrow-right</v-icon>
        </v-btn>
    </v-col>
</v-row>
</v-row>

<v-divider class="my-3"></v-divider>
<!-- Properties for sale end -->



<!-- properties for rent start -->
<v-row class="ma-4">
    <v-row>
    <v-col align="center" justify="center" class="ma-4">
        <p class="text-caption blue--text">Land for Sale</p>
        <h2>Find the Perfect Land</h2>
    </v-col>
</v-row>
 
<v-row class="" justify="center" align="center">
    <v-col cols="12" justify="center" align="center">
        <v-row justify="center" align="center">

       
    <v-col class="pa-2" cols="3" v-for="property in properties">
  <v-card 
    class="mx-auto"
    max-width="344"
  >
    <v-img
      :src=property.image
      height="200px"
      cover
    ></v-img>
<v-card-subtitle>
   <h3 class="pa-4"> {{ this.formatPrice(property.price * 1000) }} F  CFA </h3>
</v-card-subtitle>
    <v-card-title>
      {{property.name}}
    </v-card-title>
    <v-card-subtitle>
       <v-icon>mdi-map-marker</v-icon> {{ property.location }}
    </v-card-subtitle>

    <v-card-title>
        <v-sheet class="hit-price ma-2 blue"><v-btn variant="outlined"   class="text-caption" @click="showFearured"> {{ property.type }}  </v-btn> </v-sheet>

    </v-card-title>
 
    
   

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>

        <v-card-text>
          I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
</v-col>
</v-row>
    </v-col>
</v-row>
<v-row>
    <v-col cols="12"  justify="center" align="center" class="ma-4"> 
        <v-btn rounded variant="outlined"   @click="showLands()">
View All Land for Sale<v-icon>mdi-arrow-right</v-icon>
        </v-btn>
    </v-col>
</v-row>
</v-row>
<v-divider class="my-3"></v-divider>
<!-- Properties for rent end -->

<!-- Properties list end -->

      
</v-container>
</v-jumbotron>

<!-- jumbotron end -->

<v-sheet
      max-width="512"
      class="mx-auto mt-8 rounded-sm"
      height="128"
      width="100%"
    ></v-sheet>
  </v-locale-provider>

      </v-div>
      </desktop>
      </div>

<!-- web end -->

  <!-- mobile start -->

  <div v-else class="mt-16">
  <mobile width="100%">

 <!-- search & filter  start -->

      <v-flex row
      align="center"
      justify="center"
      class="text-caption"
      >
        <v-col cols="12">
            <v-text-field
  
  chips
  label="where do you want to Live?"
  v-model="searchLocation"
  multiple
  variant="outlined"
></v-text-field>
        </v-col>
        <v-col cols="12">
            <v-autocomplete
  label="Type"
  :items="['Apartment','House','Condo','Commercial','Studio','Own Compound']"
  variant="outlined"
  v-model="searchType"
></v-autocomplete>
        </v-col>

        <v-col cols="12">
            <v-autocomplete
  label="Bed"
  :items="['Studio','1', '2', '3', '4', '5', '6','7','8','Studio']"
  variant="outlined"
  v-model="searchBed"
></v-autocomplete>
        </v-col>
 
        <v-btn  block color="white" @click="showSearchPage()" class="ma-4">
  <v-icon color="white">mdi-search</v-icon>Search
</v-btn>
 
        
      </v-flex>  

      <v-divider></v-divider>
      <!-- search & filter  end -->

      <v-col cols="12" align="center" justify="center" class="ma-4 pt-10">
        <p class="text-caption blue--text">Featured Listing</p>
        <h2>Find your ideal property</h2>
    </v-col>


      <!-- Featured list start -->

      <v-row class="" justify="center" align="center">
    <v-col cols="12" justify="center" align="center">
        <v-row justify="center" align="center">

       
    <v-col class="pa-2" cols="6" v-for="property in properties">
  <v-card 
    class="mx-auto"
  >
    <v-img
      :src=property.image
      height="200px"
      cover
    ></v-img>
<v-card-subtitle>
   <h3 class="pt-4"> {{ this.formatPrice(property.price * 1000) }} F  CFA </h3>
</v-card-subtitle>
    <v-card-title>
      {{property.name}}
    </v-card-title>
    <v-card-subtitle>
       <v-icon>mdi-map-marker</v-icon> {{ property.location }}
    </v-card-subtitle>

    <v-card-title>
        <v-sheet class="hit-price blue"><v-btn variant="outlined"   class="text-caption"  @click="showFearured"> {{property.type}}  </v-btn> </v-sheet>

    </v-card-title>
 
 
    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>

        <v-card-text>
          I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
</v-col>
</v-row>
    </v-col>
</v-row>


<v-row>

    <v-col cols="12"  justify="center" align="center" class="ma-4"> 
        <v-btn rounded variant="outlined"   @click="showFearured()">
View All Featured Properties <v-icon>mdi-arrow-right</v-icon>
        </v-btn>
    </v-col>
</v-row>
 
 

      <!-- Featured list end -->


      <!-- Sale list start -->

      <v-row class="ma-4"  >
    <v-row>
    <v-col align="center" justify="center" class="ma-4">
        <p class="text-caption blue--text">Sale Listing</p>
        <h2>Explore Properties for Sale</h2>
    </v-col>
</v-row>
 
<v-row class="" justify="center" align="center">
 
        <v-row justify="center" align="center">

       
    <v-col class="pa-2" cols="6" v-for="property in properties">
  <v-card 
    class="mx-auto"
    max-width="344"
  >
    <v-img
      :src=property.image
      height="200px"
      cover
    ></v-img>
<v-card-subtitle>
   <h3 class="pa-4"> {{ this.formatPrice(property.price * 1000) }} F  CFA </h3>
</v-card-subtitle>
    <v-card-title class="ma-0 pa-1">
      {{property.name}}
    </v-card-title>
    <v-card-subtitle>
       <v-icon>mdi-map-marker</v-icon> {{ property.location }}
    </v-card-subtitle>

    <v-card-title>
        <v-sheet class="hit-price ma-2 blue"><v-btn variant="outlined"   class="text-caption"  @click="showFearured"> {{ property.type }}  </v-btn> </v-sheet>

    </v-card-title>
 

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>

        <v-card-text>
          I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
</v-col>
</v-row>
 
</v-row>
<v-row>

    <v-col cols="12"  justify="center" align="center" class="ma-4"> 
        <v-btn rounded variant="outlined"   @click="showSale()">
View All Properties for Sale <v-icon>mdi-arrow-right</v-icon>
        </v-btn>
    </v-col>
</v-row>
</v-row>
<v-divider class="my-3"></v-divider>
      <!-- Sale list end  -->

      <!-- Properties for sale start -->
<v-row class="ma-4"  >
    <v-row>
    <v-col align="center" justify="center" class="ma-4">
        <p class="text-caption blue--text">Rental Listing</p>
        <h2>Discover Rental Properties</h2>
    </v-col>
</v-row>
 
<v-row class="" justify="center" align="center">
    
    <v-col class="pa-2" cols="6" v-for="property in properties">
  <v-card 
    class="mx-auto" 
  >
    <v-img
      :src=property.image
      height="200px"
      cover
    ></v-img>
<v-card-subtitle>
   <h3 class="pa-4"> {{ this.formatPrice(property.price * 1000) }} F  CFA </h3>
</v-card-subtitle>
    <v-card-title>
      {{property.name}}
    </v-card-title>
    <v-card-subtitle>
       <v-icon>mdi-map-marker</v-icon> {{ property.location }}
    </v-card-subtitle>

    <v-card-title>
        <v-sheet class="hit-price ma-2 blue"><v-btn variant="outlined"   class="text-caption" @click="showFearured"> {{ property.type }}  </v-btn> </v-sheet>

    </v-card-title>
 
 
    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>

        <v-card-text>
          I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
</v-col>
 
   
</v-row>
<v-row>
    <v-col cols="12"  justify="center" align="center" class="ma-4"> 
        <v-btn rounded variant="outlined"   @click="showRent()">
View All Properties for Rent<v-icon>mdi-arrow-right</v-icon>
        </v-btn>
    </v-col>
</v-row>
</v-row>

<v-divider class="my-3"></v-divider>
<!-- Properties for sale end -->


<!-- properties for rent start -->
<v-row class="ma-4">
    <v-row>
    <v-col align="center" justify="center" class="ma-4">
        <p class="text-caption blue--text">Land for Sale</p>
        <h2>Find the Perfect Land</h2>
    </v-col>
</v-row>
 
<v-row class="" justify="center" align="center">
    <v-col cols="12" justify="center" align="center">
        <v-row justify="center" align="center">

       
    <v-col class="pa-2" cols="6" v-for="property in properties">
  <v-card 
    class="mx-auto"
    max-width="344"
  >
    <v-img
      :src=property.image
      height="200px"
      cover
    ></v-img>
<v-card-subtitle>
   <h3 class="pa-4"> {{ this.formatPrice(property.price * 1000) }} F  CFA </h3>
</v-card-subtitle>
    <v-card-title>
      {{property.name}}
    </v-card-title>
    <v-card-subtitle>
       <v-icon>mdi-map-marker</v-icon> {{ property.location }}
    </v-card-subtitle>

    <v-card-title>
        <v-sheet class="hit-price ma-2 blue"><v-btn variant="outlined"   class="text-caption" @click="showFearured"> {{ property.type }}  </v-btn> </v-sheet>

    </v-card-title>
 
    
   

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>

        <v-card-text>
          I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
</v-col>
</v-row>
    </v-col>
</v-row>
<v-row>
    <v-col cols="12"  justify="center" align="center" class="ma-4"> 
        <v-btn rounded variant="outlined"   @click="showLands()">
View All Land for Sale<v-icon>mdi-arrow-right</v-icon>
        </v-btn>
    </v-col>
</v-row>
</v-row>
<v-divider class="my-3"></v-divider>
<!-- Properties for rent end -->

    </mobile>
    </div>
  <!-- mobile end -->




    
</template>



<style>
.button-color {
    color: lightblue;
}
.off-sheet {
color: grey-lighten-4;
}
.on-sheet {
color: white;
}
.bg {
    width: 100%;
    height: 350px;
    position: absolute;
    left: 0;
    background: url( '../assets/bg1.jpg') no-repeat center center;
    background-size: cover;
    transform: scale(1.1);
  }
</style>

<script> 
import AisRangeInput  from 'vue-instantsearch/vue3/es';

import { useLocale } from 'vuetify'

  export default {
    
 
    setup () {
      const { current } = useLocale()

      return {
        changeLocale: locale => current.value = locale
      }
    },

    
 created(){
  this.changeLocale();
 },

 computed: {
   isMobile() {
   if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
     return true
   } else {
     return false
   }
 }
},
 

    components: {
    AisRangeInput
  },
    data () {
      return {
        toggle_exclusive: undefined,
        searchLocation: '',
        searchType: '',
        searhBed: '',
        properties: [
            {name: "PRODE D'ABIDJAN",
            price:'2348',
            location:'Abidjan',
            type: "Landed",
            image: require("../assets/house1.jpg")},
            {name: 'La promenade',
            price:'67540',
            location:'Man',
            type:"High Rise",
            image:require("../assets/house2.jpg")},
            {name: 'Ville technologique',
            price:'78620',
            location:'San-Pedro',
            type: "Flat",
            image:require("../assets/house3.jpg")},
            {name: 'Appartements du ciel dansant',
            price:'87900',
            location:'Divo',
            type: 'Condominium',
            image:require("../assets/house4.jpg")},
        ]
      }
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

// navbigation methods 
showFearured()
    {
    this.$router.push("/Properties");
    //add parameter to send here 
    },
    showLands() {
      this.$router.push("/Land");
    }, 
    showRent(){
      this.$router.push("/Rent");
    },
    showSale() {
      this.$router.push("/Buy");
      
    }, 
    showSearchPage() {
      // router redirect to the product page 
      // attach filter values 
  
      this.$router.push({ path: "/Properties", query: { searchLocation: this.searchLocation,searchBed: this.searchBed,searchType: this.searchType},query2: { searchBed: this.searchBed},query3: { searchType: this.searchType } });

    }
}, 
  }
</script>

 