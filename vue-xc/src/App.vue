<template>
  <app-bar></app-bar>
</template>

<script>
import AppBar from "./components/AppBar.vue";

export default {
  name: "App",
  components: {
    AppBar
  },
};
</script>

<style>
#app {
  font-family: Helvetica, Arial, sans-serif;
  color: #000;
}
body {
  min-width: 1000px;
  margin: 0;
}
li {
  list-style-type: none;
}
a,
p,
span,
h1,
li {
  user-select: none;
}
</style>
