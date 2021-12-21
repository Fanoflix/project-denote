<template>
  <div class="main-text-container">
    <h5 class="topic">
      {{ model.Topic }}
    </h5>
    <TextBlock :content="model.Content" />
  </div>
</template>

<script>
import TextBlock from "./TextBlock.vue";
export default {
  props: ["model"],
  components: {
    TextBlock,
  },
  data() {
    return {
    };
  },
  methods: {},
};
</script>

<style scoped>
.main-text-container {
  width: 90%;
  color: white;
  margin: 20px 1%;
}

.topic {
  color: rgb(255, 255, 255);
  font-size: 1.4em;
  font-weight: 300;

  height: 50px;
  background: rgb(33, 33, 33);
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 5px;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;

  max-width: 1900px;
  width: 100%;
  min-width: 500px;

  display: flex;
  align-items: center;
  justify-content: center;
}

.block {
  margin-bottom: 6px;
}
</style>
