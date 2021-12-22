<template>
  <div class="block-container block">
    <quill-editor
      ref="qe"
      class="editor"
      v-model:content="options.content"
      theme="bubble"
      toolbar="full"
      contentType="html"
      :options="options"
    />
  </div>

  <div class="buttons">
    <button class="save" @click="sendNote">save</button>
  </div>
</template>

<script>
import { QuillEditor } from "@vueup/vue-quill";
import "@vueup/vue-quill/dist/vue-quill.bubble.css";

export default {
  props: ["topic", "content"],
  emits: ["sendNote"],
  components: {
    QuillEditor,
  },
  data() {
    return {
      options: {
        content: this.content,
        theme: "bubble",
        // debug: "info",
        toolbar: "full",
        modules: {
          toolbar: ["bold", "italic", "underline"],
        },
        // placeholder: "Start taking notes...",
      },
    };
  },
  computed: {
    editor() {
      return this.$refs.qe;
    },
  },
  watch: {
    content(newVal) {
      this.setNewContent(newVal);
    },
  },
  methods: {
    setNewContent() {
      this.editor.setContents(this.content);
    },
    sendNote() {
      this.$emit("sendNote", this.options.content);
    },
  },
};
</script>

<style scoped>
.block-container {
  position: relative;

  max-width: 1900px;
  width: 100%;
  min-width: 200px;
  color: white;
  text-align: left;
}

.ql-tooltip .ql-toolbar {
  background: rgb(38, 38, 38);
  border-radius: 5px;
  box-shadow: 0px 0px 5px -2px rgb(150, 150, 150);
}


.ql-container {
  border-radius: 5px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  min-height: 60px;
  height: fit-content;
}
.editor {
  padding: 0;
  background: rgb(50, 50, 50);
}

.add-button {
  position: absolute;

  display: flex;
  align-items: center;
  justify-content: center;

  top: 2px;
  left: -35px;

  height: 30px;
  width: 30px;

  background: rgb(50, 50, 50);

  color: white;
  font-variant: small-caps;
  font-size: 0.9em;

  border-radius: 3px;
  cursor: pointer;
}

.add-button:hover {
  background: rgb(255, 255, 255);
  color: black;
  font-weight: 900;
}

.buttons {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-top: 10px;
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

  background: rgb(30, 115, 226);
  color: white;
  font-variant: small-caps;
  font-size: 0.8em;
  font-weight: 600;
  filter: grayscale(0.6);
}

.buttons button:hover {
  filter: grayscale(0);
}
</style>
