<template>
  <div class="sidebar-container">
    <div class="new-note" @click="showNote('')">new note +</div>

    <SideBarItem
      title="Projects of the century century 200000 centcenturycenturycenturyurycenturycenturycenturycenturycentury"
      info="0"
    />
    <SideBarItem
      v-for="note in notesList"
      :key="note.id"
      :title="note.Topic"
      @click="showNote(note)"
    />
  </div>
</template>

<script>
import SideBarItem from "./SideBarItem.vue";
import axios from "axios";
export default {
  components: {
    SideBarItem,
  },
  data() {
    return {
      notesList: [],
    };
  },
  mounted() {
    this.getNotesList();
  },
  methods: {
    showNote(note) {
      if (note === "") {
        this.$emit("showNote", "");
      } else {
        this.$emit("showNote", note);
      }
    },
    getNotesList() {
      axios
        .get("http://localhost:8080/api/Notes")
        .then((res) => {
          console.log("Notes List: -->");
          console.log(res.data);
          this.notesList = res.data;
        })
        .catch((err) => {
          console.error(err);
        });
    },
  },
};
</script>

<style scoped>
.sidebar-container {
  left: 0;
  width: 20%;
  height: 100%;
  min-width: 150px;
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
