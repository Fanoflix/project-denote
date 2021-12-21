<template>
  <TitleCard />

  <div class="main-area">
    <SideCard @show-note="resetModelAndCreateNew" />
    <div class="empty" v-if="model.Topic == underfined">
      Add a new note or select one from the left to view!
    </div>
    <TheTextArea v-else :model="model" />
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
  methods: {
    resetModelAndCreateNew(data) {
      console.log(data);
      if (data === "") {
        this.model = {};
        this.model.Topic = "*new note";
        this.model.Content = "";
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

.empty {
  height: auto;
  margin: 10% auto;
  color: rgb(210, 210, 210);
  font-weight: 300;
  font-size: 1.5em;
}

body {
  height: 100vh;
  width: 100vw;
  background: rgb(73, 73, 73);
}
</style>
