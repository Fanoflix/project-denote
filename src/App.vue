<template>
  <TitleCard />

  <div class="main-area">
    <SideCard @show-note="resetModelAndCreateNew" />
    <TheTextArea :model="model" />
  </div>
</template>

<script>
import TitleCard from "./components/Cards/TitleCard.vue";
import TheTextArea from "./components/TextEditor/TheTextArea.vue";
import SideCard from "./components/Cards/SideCard.vue";

export default {
  name: "App",
  components: {
    TitleCard,
    TheTextArea,
    SideCard,
  },
  data() {
    return {
      model: {},
    };
  },
  beforeMount() {
    this.model.Content = "";
  },
  methods: {
    resetModelAndCreateNew(data) {
      console.log(data);
      if (data === "") {
        this.model = {};
        this.model.Topic = "*new note";
      } else {
        this.model.Topic = data.Topic;
        this.model.Content = data.Content;
      }
    },
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
}

.main-area {
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
}

body {
  height: 100vh;
  width: 100vw;
  background: rgb(73, 73, 73);
}
</style>
