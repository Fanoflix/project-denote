<template>
  <TitleCard />
  <!-- <div class="main-container"> -->
  <TheTextArea />
  <!-- </div> -->
</template>

<script>
import TitleCard from "./components/Cards/TitleCard.vue";
import TheTextArea from "./components/TextEditor/TheTextArea.vue";

export default {
  name: "App",
  components: {
    TitleCard,
    TheTextArea,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Source+Code+Pro:wght@300&display=swap");
* {
  margin: 0;
  padding: 0;
}
#app {
  font-family: "Roboto", sans-serif;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
  padding: 0;
}

body {
  display: flex;
  height: 100vh;
  flex-direction: row;
  justify-content: center;
  background: rgb(73, 73, 73);
}
</style>
