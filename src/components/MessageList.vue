<template>
    <div>
      <h2>Message List</h2>
      <div v-for="(message, index) in messages" :key="index">
        <p>{{ message }}</p>
      </div>
    </div>
  </template>
  
  <script>
  import User from '@/user.js';
  
  export default {
    data() {
      return {

      };
    },
    props: {
      user: {
        required: true
      }
    },
    computed: {
      messages() {
        return this.user?.inbox;
      }
    }
  };
  </script>