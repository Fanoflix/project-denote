<template>
  <div class="sidebar-container">
    <div class="new-note" @click="showNote('')">new note +</div>

    <SideBarItem
      v-for="note in notesList"
      :key="note.id"
      :title="note.topic"
      @click="showNote(note)"
    />
  </div>
</template>

<script>
import SideBarItem from "./SideBarItem.vue";
export default {
  props: ["notesList"],
  components: {
    SideBarItem,
  },
  data() {
    return {};
  },
  mounted() {},
  methods: {
    showNote(note) {
      if (note === "") {
        this.$emit("showNote", "");
      } else {
        this.$emit("showNote", note);
      }
    },
  },
};
</script>

<style scoped>
.sidebar-container {
  width: 18%;
  height: auto;
  min-width: 165px;
  max-width: 225px;

  background: rgb(0, 0, 0);
  color: white;

  display: flex;
  flex-direction: column;
  align-items: center;
}

.new-note {
  user-select: none;
  width: 90%;
  height: 50px;
  border-radius: 25px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  font-variant: small-caps;
  font-weight: 600;
  margin: 15px;
  cursor: pointer;
  background: rgb(30, 30, 30);
}

.new-note:hover {
  background: rgb(39, 39, 39);
}

.new-note:active {
  background: rgb(60, 60, 60);
}

.menu {
  display: flex;
  align-items: center;
  justify-content: center;

  height: 40px;
  width: 100%;

  font-size: 1.3em;
  font-weight: 600;
  font-variant: small-caps;

  border-top: 1px solid rgba(255, 255, 255, 0.2);
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  background: rgb(39, 39, 39);
}
</style>
