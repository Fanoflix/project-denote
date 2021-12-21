<template>
  <div class="block-container block">
    <quill-editor
      class="editor"
      v-model:content="options.content"
      theme="bubble"
      toolbar="full"
      contentType="html"
      :options="options"
    />
  </div>
</template>

<script>
import { QuillEditor } from "@vueup/vue-quill";
import "@vueup/vue-quill/dist/vue-quill.bubble.css";

export default {
  props: ["content"],
  emits: [],
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
  methods: {},
};
</script>

<style>
.block-container {
  position: relative;

  max-width: 1900px;
  width: 100%;
  min-width: 500px;
  color: white;
  text-align: left;
}

.ql-tooltip .ql-toolbar {
  background: rgb(38, 38, 38);
  border-radius: 5px;
  box-shadow: 0px 0px 5px -2px rgb(150, 150, 150);
}

.ql-bubble .ql-editor pre.ql-syntax {
  background: rgb(30, 30, 30);
  border-radius: 5px;
  min-width: 60%;
  width: fit-content;
  border-bottom-left-radius: 0px;
  border-top-left-radius: 0px;
  border-left: 1px solid white;
}

.ql-container {
  border-radius: 5px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  min-height: 400px;
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
</style>
