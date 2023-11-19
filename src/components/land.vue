<template>

 
    <ais-instant-search index-name="Properties"  
    :search-client="searchClient"
    >
        <div class="left-panel ma-4">
        <ais-clear-refinements  hidden />
        <h2>Filters</h2> 
    
        
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
        <ais-refinement-list attribute="ListingType"/>
        
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
        <div class="right-panel">
        
    
        <!-- search panel to start with -->
    
        <v-row>
            <v-col cols="8" class="ma-8">
               <ais-search-box  v-model="currentType" submit-title="Submit the query"  autofocus show-loading-indicator />
      
    
                </v-col>
                </v-row>
    
        <!-- end of panel -->
        <v-row>
        <ais-hits>
          
      <template v-slot="{ items, sendEvent }">
        
        <v-row>
          <v-col cols="10" v-for="item in items" :key="item.objectID" @click="">
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
            <h4 @click="gotoProduct()"> {{item.propertyName}} 605 unités résidentielles d'appartements de 1 à 4 chambres et un sky club dans chaque tour.</h4>
            <p @click="gotoProduct()">{{item.propertyDescription}}Lentor Modern comprend trois tours de 25 étages avec 605 unités résidentielles d'appartements de 1 à 4 chambres et un sky club dans chaque tour.</p>
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
          
        </v-col>
            </v-row>
    
            <v-divider class="ma-6"></v-divider>
    
        </v-col>
        </v-row>
      </template>
    </ais-hits>
    
        <ais-pagination />
      </v-row>
        </div>
        
    </ais-instant-search>
 
    </template>
    
    
    <script>
    import algoliasearch from 'algoliasearch/lite'; 
    //import 'instantsearch.css/themes/algolia-min.css';

    
    export default {
    
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
    gotoProduct() {
      this.$router.push("/Property")
    }
    }
    };
    </script>
    
   
    