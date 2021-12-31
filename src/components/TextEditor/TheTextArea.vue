<template>
  <div class="main-text-container">
    <div class="top-container">
      <input
        class="topic"
        :value="model.topic"
        @input="updateTopic"
        placeholder="Enter note title"
      />
      <div class="buttons">
        <Dropdown
          class="dropdown"
          label="add to group"
          :groupsList="groupsList"
          :currentNote="model"
        />
        <!-- ADD THIS ==>  :data="groupsList" -->
        <button class="delete" @click="deleteNote">delete</button>
      </div>
    </div>
    <TextBlock
      :topic="noteTopic"
      :content="model.content"
      @sendNote="sendNoteContent"
    />
  </div>
</template>

<script>
import TextBlock from "./TextBlock.vue";
import Dropdown from "../Dropdown/Dropdown.vue";

export default {
  props: ["model", "groupsList"],
  emits: ["deleteNote", "saveNote", "input"],
  components: {
    TextBlock,
    Dropdown,
  },
  data() {
    return {
      topicPlaceholder: "Enter note title",
      noteTopic: "",
    };
  },
  mounted() {
    if (this.model.topic) {
      this.noteTopic = this.model.topic;
    } else {
      this.noteTopic = "";
    }
  },
  methods: {
    deleteNote() {
      this.$emit("deleteNote", this.model.id);
    },
    sendNoteContent(content) {
      this.$emit("saveNote", {
        id: this.model.id,
        topic: this.newTopic,
        content: content,
      });
    },
    updateTopic(event) {
      this.newTopic = event.target.value;
    },
  },
  computed: {
    propNoteTopic() {
      return this.model.topic;
    },
  },
};
</script>

<style scoped>
.main-text-container {
  width: 90%;
  color: white;
  margin: 20px 20px;
}
.top-container {
  width: 100%;
  background: rgb(33, 33, 33);
  border-radius: 5px;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  height: 50px;

  display: flex;
  justify-content: space-between;
}

.topic {
  background: transparent;
  border: none;
  color: rgb(255, 255, 255);
  font-size: 1.1em;
  font-weight: 300;

  width: 30%;
  min-width: 120px;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  display: flex;
  align-items: center;
  padding: 0 15px;
  margin: 3px 3px;
  border-radius: 4px;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
}

.topic:focus {
  outline: none;
  background: rgb(44, 44, 44);
}

.topic::placeholder {
  color: gray;
  font-style: italic;
}

.buttons {
  display: flex;
  align-items: center;

  gap: 10px;
  padding: 0 10px;
}
.buttons button {
  width: 70px;
  height: 30px;
  border: none;
  border-radius: 3px;
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;
  filter: grayscale(0.6);
  color: rgb(214, 214, 214);
}
.buttons button:hover {
  color: white;
  filter: grayscale(0);
}
.delete {
  background: red;
  color: white;
  font-size: 0.8em;
  font-weight: 600;
  font-variant: small-caps;
}

.block {
  margin-bottom: 6px;
}
</style>
