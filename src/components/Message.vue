<template>
    <div>
      <p>{{ message.sender }}: {{ message.text }}</p>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      message
    }
  };
  </script>