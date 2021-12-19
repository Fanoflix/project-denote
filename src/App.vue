<template>
  
  <TitleCard/>
  <text-area  class="editor"/>
  <!--  -->
</template>

<script>
import TextArea from "./components/TextEditor/TheTextArea.vue";
import TitleCard from "./components/Cards/TitleCard.vue";

export default {
  name: "App",
  components: {
    TextArea,
    TitleCard
  },
};
</script>

<style >
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap');

*, html {
  margin: 0;
  padding: 0;
  font-family: 'Roboto', sans-serif;
}

#app {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

body {
  display: flex;
  height: 100vh;
  width: 100vw;
  flex-direction: row;
  justify-content: center;
  background: rgb(58, 58, 58);
}

</style>
