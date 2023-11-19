<template>
    <div id="app">
      <router-view></router-view>
      <Dashboard :listings="listings" @edit="showEditModal" @delete="showDeleteModal" @view="showViewModal" />
      <EditPropertyModal
        :property="selectedProperty"
        :dialog="editDialog"
        @save="updateProperty"
      />
      <PropertyModal
        :property="selectedProperty"
        :dialog="viewDialog"
      />
      <DeleteConfirmationModal
        :dialog="deleteDialog"
        @confirm="deleteProperty"
      />
    </div>
  </template>
  
  <script>
  import Dashboard from '../src/components/Dashboard.vue';
  import EditPropertyModal from '../src/components/EditPropertyModal.vue';
  import PropertyModal from '../src/components/PropertyModal.vue';
  import DeleteConfirmationModal from '../src/components/DeleteConfirmationModal.vue';
  
  export default {
    data() {
      return {
        listings: [], // Populate with Firebase data
        selectedProperty: null,
        editDialog: false,
        viewDialog: false,
        deleteDialog: false,
      };
    },
    methods: {
      showEditModal(property) {
        this.selectedProperty = property;
        this.editDialog = true;
      },
      showViewModal(property) {
        this.selectedProperty = property;
        this.viewDialog = true;
      },
      showDeleteModal(property) {
        this.selectedProperty = property;
        this.deleteDialog = true;
      },
      updateProperty(updatedProperty) {
        // Update the property in Firebase
        // Then, close the edit dialog
        alert(updatedProperty)
        this.editDialog = false;
      },
      deleteProperty() {
        // Delete the property from Firebase
        // Then, close the delete dialog
        this.deleteDialog = false;
      },
    },
    components: {
      Dashboard,
      EditPropertyModal,
      PropertyModal,
      DeleteConfirmationModal,
    },
  };
  </script>
  