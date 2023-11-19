<template>


<!-- tabs start -->


  <v-card>
    <v-tabs
      v-model="tab"
      color="deep-purple-accent-4"
      align-tabs="center"
    >
     
      <v-tab :value="2">My Listings</v-tab>
      <v-tab :value="1">Create Listing </v-tab>
      <v-tab :value="3">My Profile</v-tab>
    </v-tabs>
    <v-window v-model="tab">
      <v-window-item
        :key="1"
        :value="1"
      >
        <v-container fluid>
            <v-row>
    
    <v-col cols="2">

    </v-col>

    <v-col cols="8" class="pa-4 ma-2">

   
    <v-data-table
      :headers="headers"
      :items="desserts"
      :sort-by="[{ key: 'calories', order: 'asc' }]"
      class="elevation-1"
    >
      <template v-slot:top>
        <v-toolbar
          flat
        >
          <v-toolbar-title>My Properties</v-toolbar-title>
          <v-divider
            class="mx-4"
            inset
            vertical
          ></v-divider>
          <v-spacer></v-spacer>
          <v-dialog
            v-model="dialog"
            max-width="500px"
          >
            <template v-slot:activator="{ props }">
              <v-btn
                color="primary"
                dark
                class="mb-2"
                v-bind="props"
              >
                New Property Listing 
              </v-btn>
            </template>
            <v-card>
              <v-card-title>
                <span class="text-h5">{{ formTitle }}</span>
              </v-card-title>
  
              <v-card-text>
                <v-container>
                  <v-row> 
                    <v-col
                      cols="12"
                      sm="6"
                      md="4"
                    >
                      <v-text-field
                        v-model="editedItem.name"
                        label="Category"
                      ></v-text-field>
                    </v-col>
                    <v-col
                      cols="12"
                      sm="6"
                      md="4"
                    >
                      <v-text-field
                        v-model="editedItem.calories"
                        label="Name"
                      ></v-text-field>
                    </v-col>
                    <v-col
                      cols="12"
                      sm="6"
                      md="4"
                    >
                      <v-text-field
                        v-model="editedItem.fat"
                        label="Category"
                      ></v-text-field>
                    </v-col>
                    <v-col
                      cols="12"
                      sm="6"
                      md="4"
                    >
                      <v-text-field
                        v-model="editedItem.carbs"
                        label="Type"
                      ></v-text-field>
                    </v-col>
                    <v-col
                      cols="12"
                      sm="6"
                      md="4"
                    >
                      <v-text-field
                        v-model="editedItem.protein"
                        label="Price"
                      ></v-text-field>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card-text>
  
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                  color="blue-darken-1"
                  variant="text"
                  @click="close"
                >
                  Cancel
                </v-btn>
                <v-btn
                  color="blue-darken-1"
                  variant="text"
                  @click="save"
                >
                  Save
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
          <v-dialog v-model="dialogDelete" max-width="500px">
            <v-card>
              <v-card-title class="text-h5">Are you sure you want to delete this item?</v-card-title>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue-darken-1" variant="text" @click="closeDelete">Cancel</v-btn>
                <v-btn color="blue-darken-1" variant="text" @click="deleteItemConfirm">OK</v-btn>
                <v-spacer></v-spacer>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-toolbar>
      </template>
      <template v-slot:item.actions="{ item }">
        <v-icon
          size="small"
          class="me-2"
          @click="editItem(item.raw)"
        >
          mdi-pencil
        </v-icon>
        <v-icon
          size="small"
          @click="deleteItem(item.raw)"
        >
          mdi-delete
        </v-icon>
      </template>
      <template v-slot:no-data>
        <v-btn
          color="primary"
          @click="initialize"
        >
          Reset
        </v-btn>
      </template>
    </v-data-table>

</v-col>
</v-row>
        </v-container>
      </v-window-item>
    </v-window>

    <!-- tab 2 start -->

    <v-window v-model="tab">
      <v-window-item
        :key="2"
        :value="2"
      >
        <v-container fluid>
            <v-row>
                <v-col cols="12">

<!-- post property dashboard start -->
 
    <Post ></Post>
 
</v-col>
   

 


<!-- post preoperty dashboard end -->

                </v-row>
                </v-container>

                </v-window-item>
                </v-window>

    <!-- tab 2 end -->


    <!-- tab 3 start -->

    <!-- tab 3 end -->
  </v-card>
 >
 


<!-- tabs end -->


  </template>
  <script>

import {
  VDataTable,
  VDataTableServer,
  VDataTableVirtual,
} from "vuetify";

//import firebase 

/**
 * create a  firebase method to fetch records from users 
 * populate table with fetched table 
 * enable edit for the record 
 * enable delete for the table 
 * 
 * move the other components to this scuffold 
 * deploy changes to firebase site
 * 
 */


 import { doc,collection, getDoc,getDocs , deleteDoc} from "firebase/firestore";
import Post from '../components/postProperty.vue'
 import {db} from '../firebaseConfig'

const docRef = doc(db, "cities", "SF");
const docSnap = await getDoc(docRef);

if (docSnap.exists()) {
  console.log("Document data:", docSnap.data());
} else {
  // docSnap.data() will be undefined in this case
  console.log("No such document!");
}



    export default {
        components: {
    VDataTable,
    Post,
    VDataTableServer,
    VDataTableVirtual,
  },

      data: () => ({
        tab: null,
        dialog: false,
        dialogDelete: false,
        headers: [
         
          { title: 'Name', key: 'propertyName' },
          { title: 'Availability', key: 'propertyAvailability' },
          { title: 'Category', key: 'propertyCategory' },
          { title: 'Price', key: 'propertyPrice' },
          { title: 'Actions', key: 'actions', sortable: false },
        ],
        desserts: [],
        editedIndex: -1,
        editedItem: {
          name: '',
          calories: 0,
          fat: 0,
          carbs: 0,
          protein: 0,
        },
        defaultItem: {
          name: '',
          calories: 0,
          fat: 0,
          carbs: 0,
          protein: 0,
        },
      }),
  
      computed: {
        formTitle () {
          return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
        },
       
        
      },
  
      watch: {
        dialog (val) {
          val || this.close()
        },
        dialogDelete (val) {
          val || this.closeDelete()
        },
      },
  
      created () {
        this.propertyRecords()
      },
  
      methods: {

        async propertyRecords () { 

   
const querySnapshot = await getDocs(collection(db, "Properties"));
querySnapshot.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
  console.log(doc.id, " => ", doc.data());
  this.desserts.push(doc.data());
});

 
        }, 


        initialize () {
          this.desserts = [
            {
              name: 'Frozen Yogurt',
              calories: 159,
              fat: 6.0,
              carbs: 24,
              protein: 4.0,
            },
            {
              name: 'Ice cream sandwich',
              calories: 237,
              fat: 9.0,
              carbs: 37,
              protein: 4.3,
            },
            {
              name: 'Eclair',
              calories: 262,
              fat: 16.0,
              carbs: 23,
              protein: 6.0,
            },
            {
              name: 'Cupcake',
              calories: 305,
              fat: 3.7,
              carbs: 67,
              protein: 4.3,
            },
            {
              name: 'Gingerbread',
              calories: 356,
              fat: 16.0,
              carbs: 49,
              protein: 3.9,
            },
            {
              name: 'Jelly bean',
              calories: 375,
              fat: 0.0,
              carbs: 94,
              protein: 0.0,
            },
            {
              name: 'Lollipop',
              calories: 392,
              fat: 0.2,
              carbs: 98,
              protein: 0,
            },
            {
              name: 'Honeycomb',
              calories: 408,
              fat: 3.2,
              carbs: 87,
              protein: 6.5,
            },
            {
              name: 'Donut',
              calories: 452,
              fat: 25.0,
              carbs: 51,
              protein: 4.9,
            },
            {
              name: 'KitKat',
              calories: 518,
              fat: 26.0,
              carbs: 65,
              protein: 7,
            },
          ]
        },
  
        editItem (item) {
          this.editedIndex = this.desserts.indexOf(item)
          this.editedItem = Object.assign({}, item)
          this.dialog = true
        },
  
  deleteItem (item) {
         this.editedIndex = this.desserts.indexOf(item)
         this.editedItem = Object.assign({}, item)
         this.dialogDelete = true
//error on the delition front 

         // change the firestore configuration here to respond to firebase CRUD operations 
         // add delete configuration for firebase firestore 
          
         //alert( 'property Id clicked'+ this.editedIndex)
        //  await deleteDoc(doc(db, "Properties", propertyId));


        },
  
        deleteItemConfirm () {
          this.desserts.splice(this.editedIndex, 1)

         //alert( 'property Id clicked'+ this.editedIndex);
          this.closeDelete()
        },
  
        close () {
          this.dialog = false
          this.$nextTick(() => {
            this.editedItem = Object.assign({}, this.defaultItem)
            this.editedIndex = -1
          })
        },
  
        closeDelete () {
          this.dialogDelete = false
          this.$nextTick(() => {
            this.editedItem = Object.assign({}, this.defaultItem)
            this.editedIndex = -1
          })
        },
  
        save () {
          if (this.editedIndex > -1) {
            Object.assign(this.desserts[this.editedIndex], this.editedItem)
          } else {
            this.desserts.push(this.editedItem)
          }
          this.close()
        },
      },
    }
  </script>