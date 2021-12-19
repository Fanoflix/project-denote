<template>
  <div class="container">
    <quill-editor
      class="editor"
      v-model:value="options.content"
      toolbar="full"
      theme="bubble"
      :options="options"
    />
  </div>
</template>

<script>
import { QuillEditor } from "@vueup/vue-quill";
// import "@vueup/vue-quill/dist/vue-quill.snow.css";
import "@vueup/vue-quill/dist/vue-quill.bubble.css";

export default {
  props: [],
  emits: [],
  components: {
    QuillEditor,
  },
  data() {
    return {
      options: {
        theme: "bubble",
        debug: "info",
        content: "",
        modules: {
          toolbar: ["bold", "italic", "underline"],
        },
        placeholder: "Start taking notes...",
        // readOnly: true,
        toolbar: "full",
      },
    };
  },
};
</script>

<style scoped>
.container {
  padding: 0 10px;
  width: 70%;
  max-width: 1500px;
  min-width: 500px;

  margin-top: 20px;

  border: 1px solid black;
}

.editor {
  background: rgb(170, 170, 170);
}
</style>
