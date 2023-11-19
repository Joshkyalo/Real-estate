<template>
    <v-dialog v-model="dialog" max-width="400">
      <v-card>
        <v-card-title>Confirm Deletion</v-card-title>
        <v-card-text>
          Are you sure you want to delete this property?
        </v-card-text>
        <v-card-actions>
          <v-btn @click="confirmDelete" color="error">Delete</v-btn>
          <v-btn @click="closeModal" color="primary">Cancel</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </template>
  
  <script>
  export default {
    props: {
      
    },
    data() {
      return {
        // Data properties for editing
        dialog: false,
      };
    },
    methods: {
      confirmDelete() {
        this.$emit('confirm');
        this.closeModal();
      },
      closeModal() {
        this.$emit('close');
      },
    },
  };
  </script>
  