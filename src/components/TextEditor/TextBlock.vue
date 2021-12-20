<template>
  <div class="block-container block">
    <div class="add-button" @click="addNewBlock()">+</div>
    <quill-editor
      class="editor"
      v-model:content="options.content"
      theme="bubble"
      toolbar="full"
      contentType="html"
      :options="options"
      @click="debug()"
    />
  </div>
</template>

<script>
import { QuillEditor } from "@vueup/vue-quill";
import "@vueup/vue-quill/dist/vue-quill.bubble.css";
import Hljs from "highlightjs";
import "highlight.js/styles/googlecode.css";

export default {
  props: [],
  emits: [],
  components: {
    QuillEditor,
  },
  data() {
    return {
      options: {
        content: "",
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
  mounted() {
    Hljs.initHighlightingOnLoad();
  },
  methods: {
    debug() {
      console.log(this.options.content);
    },
    addNewBlock() {
      console.log(this.options.content);
      this.$emit("addNewBlock", {
        index: this.index,
        content: this.options.content,
      });
    },
  },
};
</script>

<style>
.block-container {
  position: relative;

  max-width: 1500px;
  min-width: 500px;
  color: white;
  text-align: left;
}

.ql-tooltip .ql-toolbar {
  background: rgb(92, 92, 92);
}

.ql-container {
  border-radius: 5px;
  min-height: 400px;
  height: fit-content;
}

.editor {
  padding: 0;
  background: rgb(50, 50, 50);
  /* height: fit-content; */
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
</style>
