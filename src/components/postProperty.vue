 
<template>
  
<!-- create a property upload wizzard here and use the fields in the im=nitial form here -->

<!-- start start -->



<!-- end wizzard -->

<v-row class="mt-3 mb-3" align="center" justify="center">

  
   
      <h3 class="mt-4" > Create a Listing </h3> 
    
      </v-row>

      <v-row align="center" justify="center">
<v-col cols="12">
  
      
      <v-stepper v-model="step" :items="['Step 1', 'Step 2', 'Step 3','Step 4']" elevation="0" class="pl-4 pt-4 pr-4">

        
  <template v-slot:item.1>
    <v-card class="pa-2 ma-4 card1" align="center" justify="center" elevation="0">

 <v-row justify="center" align="center">   
<v-card-title > Property Details</v-card-title>
 </v-row>


<v-card-text>

<v-row align="center" justify="center">


<v-col cols="6" class="ma-2 pa-2" >



<!-- turn this into a radio button group -->


<v-row> 

<v-col cols="12">
<v-radio-group label="Listing Type" class="">

<template rounded

v-for="item in type"
> 

<v-row class="mt-2">
<input type="radio" v-model="selectedType" :name="item" :value="item" class="mr-3"  :label="item"> <v-span align="center" justify="center" align-self="center"
> {{ item }}</v-span>
</v-row>


</template>
</v-radio-group>
</v-col>

<!-- two start -->

<v-col cols="12" >
<v-radio-group label="Availability" class="">

<template rounded

v-for="item in availabilty"
> 

<v-row class="mt-2">
<input type="radio" v-model="selectedAvailability" :name="item" :value="item" class="mr-3"> {{ item }}
</v-row>


</template>
</v-radio-group>
</v-col>

<!-- two end -->


<!-- three start-->
<v-col cols="12">
<v-radio-group label="Category" class="">

<template rounded

v-for="item in category"
> 

<v-row class="mt-2">
<input type="radio" v-model="selectedCategory" :name="item" :value="item" class="mr-3"> {{ item }}
</v-row>


</template>
</v-radio-group>
</v-col>

<!-- three end -->

</v-row>



</v-col>




</v-row>



</v-card-text>
</v-card>


    <!-- property location details go here * start -->
    <v-card  class="ma-4 pa-3 card2" justify="center" align="center" elevation="0"> 
      
  <v-row>
  <v-card-title> Location Information</v-card-title>
  </v-row>

  <v-card-text justify="center" align="center"> 
    <v-row>
      <v-col cols="12">
<v-text-field  

variant="outlined"
label="Province"
v-model="location.province"></v-text-field>
      </v-col>

      <v-col cols="12" >
        <v-text-field
        
        variant="outlined"
        label="Ward"
        v-model="location.ward">

        </v-text-field>
      </v-col>

      <v-col cols="12">
        <v-text-field
        
        variant="outlined"
        label="City"
        v-model="location.city">

        </v-text-field>

      </v-col>

      <v-col cols="12">
        <v-text-field
        
        variant="outlined"
        label="Street"
        v-model="location.street"></v-text-field>
      </v-col>
    </v-row>

    <v-row>
      <!-- Map view here -->
      <v-col cols="12">


        <v-row align="center" justify="center" class="ma-4">
        <h3>Pick Location from the map</h3>
        </v-row>

        <v-col cols="12">
        <v-text-field
        
        variant="outlined"
        label="Selected Location"
        v-model="receivedData"></v-text-field>
      </v-col>
 
      <Map @childEvent="handleChildData" ></Map>
    </v-col>
    </v-row>
  </v-card-text >
</v-card>

    <!-- Property location details  end -->

  </template>

  <template v-slot:item.2>
       <!-- Pricing information  start -->

    <v-card   class="ma-4 pa-2 card3" justify="center" align="center" elevation="0"> 
       
      <v-card-text align="center" justify="center"> 

    <v-row align="center" justify="center">
  <v-col cols="12">
<v-text-field
variant="outlined"
label="Price"
v-model="price"
></v-text-field>
  </v-col>

  <v-col cols="12">
    <v-select 
    v-model="propertyAvailability"
    label="availability"
    :items="availabilty"
    variant="outlined"></v-select>
  </v-col>

  <v-col cols="12">
    <v-text-field 
    variant="outlined"
    label="Area in M2"></v-text-field>
    </v-col>

</v-row>
      </v-card-text>
    </v-card>

    <v-divider></v-divider>
    <!-- End pricing information -->

      <!-- Available features  start 
    
     - features {
        - bedrooms 
        - air condition 
        - parking 
        - Balcony 
        - Pet-friendly 
        - gym 
        - Utilities included 
        - Bathrooms 
        - Pool
        - Furnished 
        - Security system 
        - Garden 
        - Laundry facilities }
      -->

      <v-card  class="ma-4 pa-2 card5" elevation="0" align="center" justify="center"> 
 

<v-card-text> 

  <v-row>
 <v-col cols="12">
 <v-text-field
 
 label="Bedrooms"
 v-model="features.bedrooms"
 variant="outlined">
</v-text-field>
</v-col>


<v-col cols="12">
 <v-text-field
 
 placeholder="How many cars in parking"
 label="Parking"
 v-model="features.parking"
 variant="outlined">

 </v-text-field>
</v-col>


<v-col cols="12">
 <v-text-field
 
 placeholder="Number of balconies"
 label="Balcony"
 v-model="features.balcony"
 variant="outlined">

 </v-text-field>
</v-col>

<v-col cols="12">
 <v-text-field
 
 placeholder="Number of Bathrooms"
 label="Bathrooms"
 v-model="features.bathrooms"
 variant="outlined">

 </v-text-field>

</v-col>
    <v-col cols="12">
    <v-select
    :items="flooring"
    label="Flooring" 
    variant="outlined"
    ></v-select>
    </v-col>

    <v-col cols="12">
    <v-select
    :items="floors"
    variant="outlined"
     label="Number of Floor"></v-select>
  </v-col>
</v-row>
</v-card-text>
</v-card>
 

<!-- Available features end -->

<v-divider class="ma-4"></v-divider>

<!-- Additional features start -->

<h1>Features</h1>

<v-card elevation="0">
  <v-card-title class="text-caption"> General Characteristics  </v-card-title>
  <v-card-text>
    <v-row> 
      <v-col cols="6" class="text-caption ma-4 border  rounded" v-model="garden" @click="toggleFeature('garden')" justify="center" align="center">
     <v-icon class="ma-4 w-20" v-if="gardenIconVisible" color="blue">mdi-check-outline</v-icon>
        <h2>
        <v-icon  color="blue">mdi-flower-outline</v-icon>  <br/>
        Garden
      </h2>
   
      </v-col>

      <v-col cols="6" class="text-caption ma-4 border rounded"  v-model="terrace" @click="toggleFeature('terrace')" justify="center" align="center">
        <v-icon class="ma-4 w-20" v-if="terraceIconVisible" color="blue">mdi-check-outline</v-icon>
        <h2>
        <v-icon color="blue">mdi-balcony</v-icon>  <br/>
        Terrace
      </h2>
      </v-col>

      <v-col cols="6" class="text-caption ma-4 border  rounded" v-model="garage" @click="toggleFeature('garage')" justify="center" align="center">
        <v-icon class="ma-4 w-20" v-if="garageIconVisible" color="blue">mdi-check-outline</v-icon>
        <h2>
        <v-icon color="blue" class="large" >mdi-garage</v-icon>  <br/>
        Garage
      </h2>
      </v-col>

      <v-col cols="6" class="text-caption ma-4 border  rounded"  v-model="elevator" @click="toggleFeature('elevator')" justify="center" align="center">
        <v-icon class="ma-4 w-20" v-if="elevatorIconVisible" color="blue">mdi-check-outline</v-icon>
        <h2>
        <v-icon color="blue" class="large" >mdi-elevator</v-icon>  <br/>
        Elevator
      </h2>
      </v-col>

      <v-col cols="6" class="text-caption ma-4 border  rounded" v-model="seaView"  @click="toggleFeature('seaView')" justify="center" align="center">
        <v-icon class="ma-4 w-20" v-if="seaViewIconVisible" color="blue">mdi-check-outline</v-icon>
        <h2>
        <v-icon color="blue" class="large" >mdi-beach</v-icon>  <br/>
        Sea View
      </h2>
      </v-col>

      <v-col cols="6" class="text-caption ma-4 border  rounded" v-model="mountainView" @click="toggleFeature('mountainView')"  justify="center" align="center">
        <v-icon class="ma-4 w-20" v-if="mountainViewIconVisible" color="blue">mdi-check-outline</v-icon>
        <h2>
        <v-icon color="blue" class="large" >mdi-image-filter-hdr</v-icon>  <br/>
        Mountain View
      </h2>
      </v-col>

      <v-col cols="6" class="text-caption ma-4 border  rounded" v-model="pool" @click="toggleFeature('pool')" justify="center" align="center">
        <v-icon class="ma-4 w-20" v-if="poolIconVisible" color="blue">mdi-check-outline</v-icon>
        <h2>
        <v-icon color="blue" class="large" >mdi-pool</v-icon>  <br/>
        Pool
      </h2>
      </v-col>

      <v-col cols="6" class="text-caption ma-4 border  rounded" v-model="exteriorFacade" @click="toggleFeature('exteriorFacade')" justify="center" align="center">
        <v-icon class="ma-4 w-20" v-if="exteriorFacadeIconVisible" color="blue">mdi-check-outline</v-icon>
        <h2>
        <v-icon color="blue" class="large" >mdi-window-open-variant</v-icon>  <br/>
        Exterior facade
      </h2>
      </v-col>

      <v-col cols="6" class="text-caption ma-4 border  rounded" v-model="concierge" @click="toggleFeature('concierge')" justify="center" align="center">
        <v-icon class="ma-4 w-20" v-if="conciergeIconVisible" color="blue">mdi-check-outline</v-icon>
        <h2>
        <v-icon color="blue" class="large" >mdi-room-service-outline</v-icon>  <br/>
        Concierge
      </h2>
      </v-col>
 <!-- gaerden, terrace, garage, elevator, seaView, mountainView, pool, exteriorFacade, concierge-->
    </v-row>
  </v-card-text>
</v-card>
 
<!-- Additional features -->
  </template>

  <template v-slot:item.3>
    <v-card flat elevation="0"></v-card>

     <!-- Preview the selected image end-->

     <v-card class="card" align="center" justify="center" elevation="0">
   
      <p>Photos and additional Information</p>
      <v-card-text>

      

       <p class="mt-4" v-if="savedImages.length > 0"> Uploaded Photos</p>
       <v-row justify="left" align="left"> 
       
        <v-col cols="12" v-for="item in savedImages">
          <img class="preview" height="100" width="100" :src="item">
        </v-col>

        <v-col cols="12">
          <div class="text-center" v-if="loadingImage">
    <v-progress-circular
      indeterminate
      color="grey"
    ></v-progress-circular>
    </div>
        </v-col>
       </v-row>
       
       

        
        <v-btn outlined rounded large class="bg-black text-white mt-1 mb-4"  @click="click1"> 
Upload Photos 
        </v-btn>
        <input type="file" ref="input1"
            style="display: none"
            @change="previewImage" accept="image/*" >
            

        <p class="mb-4"> Upload a maximum of 10 properties </p>
        <v-divider class="mt-4 mb-8"></v-divider>   

</v-card-text>
    </v-card>
    <!-- Photos and additional information section end -->
   
    <v-row >
      <v-col   class="ma-2 pa-2" >
<!--start contact information-->
    <v-card   class="ma-4 pa-2" elevation="0" align="center" justify="center">
     
      <v-card-title>contact Information </v-card-title>
      <p class="text-caption">How do you want people to contact you about this property. </p>
      <v-card-text align="center" justify="center"> 
 
    <v-text-field
    
    variant="outlined"
      v-model="phone"
      label="Phone Number"
    ></v-text-field>
 

 
    <v-text-field
    
    variant="outlined"
      v-model="email"
      label="E-mail"
    ></v-text-field>
 
  </v-card-text>
    </v-card>
</v-col>
    <!-- end contact information-->

   
<v-divider vertical></v-divider>
  <v-col   class="ma-4 pa-2"  >

    <v-card  class="ma-4 pa-2"  elevation="0" >
      <v-card-title>Property Name</v-card-title>
      <p class="text-caption">Name & Description </p>
      <v-card-text>
  
<v-text-field 
  variant="outlined"
    v-model="propertyName"
    label="Property Name"
  ></v-text-field> 

    <v-textarea
    variant="outlined"
    label="Property Description"
    v-model="propertyDescription"> 
</v-textarea>

 
    <v-textarea 
    variant="outlined"
    v-model="propertyAdditionalInformation"
    label="Additional Information" placeholder="Enter additional information or special features "></v-textarea>
   
</v-card-text>
    </v-card>
</v-col>
</v-row>



  </template>

  <template v-slot:item.4 complete>

    <p class="text-h6 ma-4"> Review </p>
<v-row>
   <v-col> ListingType </v-col> <v-col>{{this.selectedType}}</v-col>
  </v-row>
   <v-divider></v-divider>

   <v-row>
   <v-col>  propertyName</v-col> <v-col> {{this.propertyName}} </v-col></v-row>

   <v-divider></v-divider>

   <v-row>
   <v-col> propertyLocation</v-col> <v-col>  {{this.location}} </v-col></v-row>
   <v-divider></v-divider>

   <v-row>
   <v-col>   propertyDescription</v-col> <v-col> {{this.propertyDescription}} </v-col></v-row>
   <v-divider></v-divider>

   <v-row>
   <v-col>   propertyPrice</v-col> <v-col> {{ this.price}} </v-col></v-row>
   <v-divider></v-divider>
   <v-row>
   <v-col>   propertyAvailability</v-col> <v-col>  {{this.propertyAvailability}} </v-col></v-row>
   <v-divider></v-divider>
   <v-row>
   <v-col>   propertyFeatures</v-col> <v-col> {{ this.features }} </v-col></v-row>
   <v-divider></v-divider>

   <v-row>
   <v-col>  propertyCategory </v-col> <v-col>  {{ this.selectedCategory}} </v-col></v-row>
   <v-divider></v-divider>
    
   <v-row>
   <v-col>     Garden </v-col> <v-col>  {{ this.garageIconVisible }}</v-col></v-row>
   <v-divider></v-divider>
   <v-row>
   <v-col>    Terrace</v-col> <v-col>  {{this.terraceIconVisible }}</v-col></v-row>
   <v-divider></v-divider>
   <v-row>
   <v-col>      Garage</v-col> <v-col> {{this.garageIconVisible }}</v-col></v-row>
   <v-divider></v-divider>
   <v-row>
   <v-col>     Elevator </v-col> <v-col>  {{this.elevatorIconVisible}}</v-col></v-row>
   <v-divider></v-divider>
   <v-row>
   <v-col>    SeaView </v-col> <v-col>  {{this.seaViewIconVisible}}</v-col></v-row>
   <v-divider></v-divider>
   <v-row>
   <v-col>     Mountain View </v-col> <v-col>  {{this.mountainView}}</v-col></v-row>
   <v-divider></v-divider>
   <v-row>
   <v-col>      Pool </v-col> <v-col> {{this.poolIconVisible }}</v-col></v-row>
   <v-divider></v-divider>
   <v-row>
   <v-col>     ExteriorFacade </v-col> <v-col>  {{this.exteriorFacadeIconVisible }}</v-col></v-row>
   <v-divider></v-divider>
   <v-row>
   <v-col>     Concierge</v-col> <v-col>  {{this.conciergeIconVisible}}</v-col></v-row>
   <v-divider></v-divider>
   <v-row>
    <v-col> Selected Location </v-col> <v-col> {{ this.receivedData}}</v-col>
   </v-row>

   <v-divider></v-divider>
  
<!-- map component goes here -->
 
  </template>
</v-stepper>
</v-col>
</v-row>
<v-row class="v-flex" align="center" justify="center">

    <v-col cols="" justify="center" align-self="center">
   
    <!-- form values -->
        <!--Name -->
        <!--email contact (optional) -->
        <!--phone for whatsapp -->
        <!--Location-->
        <!--capture location details with api -->
        <!-- price of prop -->
        <!-- property type  -->

  <v-form  >



  

    <!--photos and additional information section start -->
    <!-- replace code here with the tutorial -->
    <!-- preview the selected image start -->



 

    <v-divider class="ma-4"></v-divider>
    <!-- save or publish section start -->
<v-row align="center" justify="center" >
    <v-col cols="6" class="v-flex" justify="center" align="center"> 
      <v-btn large rounded class="bg-blue text-white ma-4" @click="createNewProperty()"> Create Listing</v-btn>

    </v-col>
  </v-row>
    <!-- save or publish section end -->


   

  </v-form>
</v-col>
</v-row>
</template>



<script>
//import stepper 
import { VStepper } from 'vuetify'
import Map from '../components/map.vue'

 import {db} from'../firebaseConfig' 
 import { getStorage, ref, getDownloadURL,uploadBytesResumable } from "firebase/storage";
 import { collection, addDoc } from "firebase/firestore"; 
 import "firebase/storage";


 
 
export default{

  components: {
    VStepper,
    Map
  },
  computed: {
      subtotal () {
        return this.products.reduce((acc, product) => acc + product.quantity * product.price, 0)
      },
      total () {
        return this.subtotal + Number(this.shipping ?? 0)
      },
    },

    data() {
        return{
          receivedData: "",
          step: 1,
          loadingImage: false,
          /* Saved images holds the url for the returnrd images */
          savedImages:[],
          //wizard data start 

      

          selectedCategory: '',
          selectedAvailability:'',
          flooring: ['Wooden','Marble','Tiled','Other'],
          floors: ['1','2','3','4','5','6','7','8','9','10','11',,'12','13','14','15','16','17','18','19','20'],

          category: [
            'Land',
            "Sale", 
            'Rent',
            'Lease'
          ],
          currerentCard: 1,
     card1: true,
     card2: false, 
     card3: false,
     card4: false,
     card5: false,
     card6: false,
          //wizard data end 
          caption : '',
      img1: '',
      imageData: null,
          propertyDescription: '',
          propertyAdditionalInformation:'',
          propertyAvailability: '',
          propertyDescription: '',
          propertyLocation:'',
          propertyName:'',
          listingStatus: [
            'Saved',
            'Published'
          ],
          location: {

          },
          features:{

          },
name:'',
email: '',
type: '',
phone: '',
price:'',

//features 

garden: false, 
terrace: false, 
garage: false, 
elevator: false,
seaView: false,
mountainView: false,
pool: false, 
exteriorFacade : false, 
concierge: false,

//check Icon visibility 
gardenIconVisible: false,
terraceIconVisible: false, 
garageIconVisible: false, 
elevatorIconVisible: false,
seaViewIconVisible: false,
mountainViewIconVisible: false,
poolIconVisible: false, 
exteriorFacadeIconVisible : false, 
conciergeIconVisible: false,

selectedType:'',
type: [
    'condo',
    'appartment',
    'house', 
    'studio',
    'flat'
], 
availabilty: [
  'Available',
  'On Hold',
  'Sold'
],
        }
    },
    methods: {

      //hide and show cards 
      toggleFeature(feature)
      {
        if(eval('this.'+ 'feature === true'))
        {
         
        

          eval('this.'+ 'feature = false');
          eval('this.'+ feature+'IconVisible  = false');

           
           

        }
        else if(eval('this.'+ 'feature !== true')) {
           
     
          eval('this.'+ 'feature = true')
          eval('this.'+ feature+'IconVisible  = true');

        }
 
      },

      handleChildData(data) {
      this.receivedData = data;
    },

      showNextCard(){

      

        if(this.currerentCard != 6)
        {
        eval('this.card'+ parseInt(this.currerentCard)+ ' =' +false) 
        eval('this.card'+ parseInt(this.currerentCard+1)+ ' =' +true)
        this.currerentCard ++;

        }

 
      },

      showPrevCard(){
        

        if(this.currerentCard != 1)
        {
       
        eval('this.card'+ parseInt(this.currerentCard )+ ' =' +false) 
        eval('this.card'+ parseInt(this.currerentCard - 1)+ ' =' +true)
        this.currerentCard -- ;
        }
      },
       async createNewProperty(){

try {
  const docRef = await addDoc(collection(db, "Properties"), {
    ListingType: this.selectedType,
    propertyName: this.propertyName,
    propertyLocation: this.location,
    propertyDescription:this.propertyDescription,
    propertyPrice:this.price,
    propertyAvailability: this.propertyAvailability,
    propertyFeatures: this.features, 
    propertyCategory: this.selectedCategory,
    PropertyGeneralFeatures: {
      "garden" : this.garageIconVisible, 
      "terrace": this.terraceIconVisible, 
      "garage": this.garageIconVisible, 
      "elevator": this.elevatorIconVisible,
      "seaView": this.seaViewIconVisible,
      "mountainView": this.mountainView,
      "pool": this.poolIconVisible, 
      "exteriorFacade" : this.exteriorFacadeIconVisible, 
      "concierge": this.conciergeIconVisible,
    },
    propertyImages : this.savedImages,
    propertyAdditionalInformation: this.propertyAdditionalInformation,
    propertyImageUrl: this.img1
  });
  console.log("Document written with ID: ", docRef.id);
  alert('Listing successfully saved.')
} catch (e) {
  console.error("Error adding document: ", e);
}
        },

createPropertyListing() {

  

    /*

    data form 
    -  listing type 
    - propery name 
    - property description 
    - Property location 
    - price 
    - availability 

    ** set the list of features as a table that can be completed **

    - features {
        - bedrooms 
        - air condition 
        - parking 
        - Balcony 
        - Pet-friendly 
        - gym 
        - Utilities included 
        - Bathrooms 
        - Pool
        - Furnished 
        - Security system 
        - Garden 
        - Laundry facilities }
    - additional information 
    - photos {
        - a collection of labeled photos 

    }
    }





        firebase.collection("Properties")
          .add({ 'email': this.email, 'name': this.name, 'phome': this.phone, 'type':this.type })
          .then(() => {
            console.log("Document successfully written!");
          })
          .catch((error) => {
            console.error("Error writing document: ", error);
          });
           */
        
    },
    create () {
      /*
      const post = {
        photo: this.img1,
        caption: this.caption        
      }

      firebase.ref('PhotoGallery').push(post)
      .then((response) => {
        console.log(response)
      })
      .catch(err => {
        console.log(err)
      })
      */
    },

  click1() {
  //this.$refs.input1.click()   
  this.$refs.input1.click();
},

previewImage(event) {
  this.uploadValue=0;
  this.img1=null;
  this.imageData = event.target.files[0];
  this.onUpload()
},

onUpload(){
  //get storage 

  const storage = getStorage();

  this.img1=null;
  const storageRef = ref(storage,`${this.imageData.name}`);
  const uploadValue = uploadBytesResumable(storageRef, this.imageData);

  // const storageRef=firebase.storage().ref(`${this.imageData.name}`).put(this.imageData);
  
  /*
  uploadValue.on(`state_changed`,snapshot=>{
  this.uploadValue = (snapshot.bytesTransferred/snapshot.totalBytes)*100;
    }, error=>{console.log(error.message)},
  ()=>{this.uploadValue=100;
      getDownloadURL().then((url)=>{
          this.img1 =url;
          console.log(this.img1)
        }); 
      }      
    );
*/

uploadValue.on('state_changed', 
  (snapshot) => {
    // Observe state change events such as progress, pause, and resume
    // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    console.log('Upload is ' + progress + '% done');
    switch (snapshot.state) {
      case 'paused':
        console.log('Upload is paused');
        break;
      case 'running':
      this.loadingImage=true;
        console.log('Upload is running');
        break;
    }
  }, 
  (error) => {
    // Handle unsuccessful uploads
    alert('error running upload '+ error.message)
  }, 
  () => {
    // Handle successful uploads on complete
    // For instance, get the download URL: https://firebasestorage.googleapis.com/...
    getDownloadURL(uploadValue.snapshot.ref).then((downloadURL) => {
      this.savedImages.push(downloadURL);
      this.img1 =downloadURL;
          console.log(this.img1)
      alert('File available at', downloadURL);
      this.loadingImage = false;
    });
  }
);

 }, 
   
},

}
</script>

