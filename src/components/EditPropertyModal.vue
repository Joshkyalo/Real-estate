<template>
    <v-dialog v-model="dialog" max-width="500">
      <v-card>
        <v-card-title>Edit Property</v-card-title>
        <v-card-text>
          <!-- Edit property fields -->
          <!-- Use v-model to bind input fields to data properties -->
        </v-card-text>
        <v-card-actions>
          <v-btn @click="saveProperty" color="primary">Save</v-btn>
          <v-btn @click="closeModal" color="error">Cancel</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </template>
  
  <script>
  export default {
    props: {
      property: Object,
     
    },
    data() {
      return {
        // Data properties for editing
        dialog: false,
      };
    },
    methods: {
      saveProperty() {
        // Save the updated property
        this.$emit('save', this.property);
        this.closeModal();
      },
      closeModal() {
        // Close the edit modal
        this.$emit('close');
      },
    },
  };
  </script>
  