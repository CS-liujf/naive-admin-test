<template>
  <div>
    <n-button @clik="getMovie">
      点击
    </n-button>
  </div>
</template>

<script setup>
import axios from 'axios';

const getMovie = () => {
  console.log('dianji');
  axios.get('https://api.themoviedb.org/3/movie/550?api_key=a226ea4a2beb1dcd49953b3049076fb4').then((res) => {
    console.log(res);
  });
};
</script>

<style scoped>

</style>
