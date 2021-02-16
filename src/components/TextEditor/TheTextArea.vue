<template>
  <div>Text Area</div>
  <quill-editor
    v-model:value="state.content"
    :options="state.editorOption"
    :disabled="state.disabled"
    @blur="onEditorBlur($event)"
    @focus="onEditorFocus($event)"
    @ready="onEditorReady($event)"
    @change="onEditorChange($event)"
  />
</template>

<script>
import { quillEditor, Quill } from "vue3-quill";
import customQuillModule from "./customQuillModule";
Quill.register("modules/customQuillModule", customQuillModule);

export default {
  props: [],
  emits: [],
  components: {
    quillEditor,
  },
  // hooks ...
  data() {
    return {
      state: {
        content: "<p>2333</p>",
        _content: "",
        editorOption: {
          placeholder: "core",
          modules: {},
        },
        disabled: false,
      },
    };
  },
};
</script>

<style scoped></style>
