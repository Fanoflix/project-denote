<template>
  <TitleCard />

  <div class="main-area">
    <SideCard @show-note="resetModelAndCreateNew" :groupsList="groupsList" />

    <transition name="textarea-fade">
      <TheTextArea
        v-if="renderNote"
        :model="model"
        :groupsList="groupsList"
        @delete-note="deleteNote"
        @save-note="saveNote"
      />
    </transition>

    <div class="empty" v-if="!renderNote">
      add a new note or select one from the left
    </div>
  </div>
</template>

<script>
import TitleCard from "./components/Cards/TitleCard.vue";
import TheTextArea from "./components/TextEditor/TheTextArea.vue";
import SideCard from "./components/Cards/SideCard.vue";
import axios from "axios";

export default {
  name: "App",
  components: {
    TitleCard,
    TheTextArea,
    SideCard,
  },
  mounted() {
    this.getGroupsList();
  },
  data() {
    return {
      // groupsList: [],
      groupsList: [
        {
          id: 1,
          name: "group ",
          notes: [
            {
              id: 1,
              topic: "note 1",
              content: "note EZZZZZZZZZZ content",
            },
            {
              id: 2,
              topic: "note 2",
              content: "note testing 2222 content",
            },
          ],
        },
        {
          id: 2,
          name: "group 2",
          notes: [
            {
              id: 1,
              topic: "note a",
              content: "note 1 asd ds dsda  content",
            },
            {
              id: 2,
              topic: "note b",
              content: "note 2 cvc bv add content",
            },
          ],
        },
        {
          id: 3,
          name: "group 3",
        },
      ],
      model: {},
      renderNote: false,
    };
  },
  methods: {
    resetModelAndCreateNew(data) {
      if (data === "") {
        this.model = {};
        this.model.id = -1;
        this.model.topic = "";
        this.model.content = `\n\n\n\n`;
      } else {
        console.log(data);
        this.model.topic = data.topic;
        this.model.content = data.content;
        this.model.id = data.id;
      }
      this.renderNote = true;
    },
    getGroupsList() {
      axios
        .get("http://localhost:8080/api/Groups")
        .then((res) => {
          console.log(res.data);
          this.groupsList = res.data;
        })
        .catch((err) => {
          console.error(err);
        });
    },
    deleteNote(id) {
      axios
        .delete(`http://localhost:8080/api/Notes/${id}`)
        .then((res) => {
          console.log(res);
          this.getGroupsList();
        })
        .catch((err) => {
          console.log(err);
        });
      this.renderNote = false;
      this.model = {};
    },
    saveNote(model) {
      if (model.id == -1) {
        console.log(model);
        // call post
        axios
          .post(
            "http://localhost:8080/api/Notes",
            {
              // currentData
              id: -1,
              topic: "Testing",
              author: "User",
              content: model.content,
            },
            {
              headers: {
                contentType: "application/json",
              },
            }
          )
          .then((res) => {
            console.log(res.data);
            this.getNotesList();
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        // call put
        console.log(model);
        axios
          .put(
            `http://localhost:8080/api/Notes/${model.id}`,
            {
              // currentData
              id: model.id,
              topic: model.topic,
              author: "User",
              content: model.content,
            },
            {
              headers: {
                contentType: "application/json",
              },
            }
          )
          .then((res) => {
            console.log(res.data);
            this.getNotesList();
          })
          .catch((err) => {
            console.log(err);
          });
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
  box-sizing: border-box;
}

* ::-webkit-scrollbar {
  width: 8px;
}

/* Track */
* ::-webkit-scrollbar-track {
  background: #383838;
}

/* Handle */
* ::-webkit-scrollbar-thumb {
  background: #ffffff;
}

/* Handle on hover */
* ::-webkit-scrollbar-thumb:hover {
  background: rgb(143, 0, 0);
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
  font-variant: small-caps;
  margin: 10% auto;
  color: rgb(160, 160, 160);
  font-weight: 500;
  font-size: 1.5em;
  user-select: none;
}

body {
  min-height: 100vh;
  height: 100vh;
  max-height: auto;
  width: 100vw;
  overflow-x: hidden;
  background: rgb(73, 73, 73);
}
/* Code Box styling */

.ql-bubble .ql-editor pre.ql-syntax {
  background: rgb(30, 30, 30);
  border-radius: 5px;
  min-width: 60%;
  width: fit-content;
  border-bottom-left-radius: 0px;
  border-top-left-radius: 0px;
  border-left: 1px solid white;
}

.textarea-fade-enter-from {
  transition: all 0.1s ease-in;
  transform: translateY(100px);
  opacity: 0;
}

.textarea-fade-leave-to,
.textarea-fade-leave-active {
  transition: all 0s;
}

.textarea-fade-enter-active {
  transition: all 0.2s ease-in-out;
}
</style>
