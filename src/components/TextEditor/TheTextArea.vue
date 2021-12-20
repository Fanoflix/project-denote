<template>
  <div class="main-text-container">
    <h5 class="topic">
      {{ topic }}
    </h5>
    <!-- <template v-for="(child, index) in blocks" :key="index + count">
      <TextBlock @add-new-block="createNewBlock" :index="index" :is="child">
      </TextBlock>
    </template> -->

    <TextBlock />
  </div>
</template>

<script>
import TextBlock from "./TextBlock.vue";
export default {
  components: {
    TextBlock,
  },
  data() {
    return {
      count: 1,
      topic: "Testing",
      blocks: [{ name: "TextBlock" }],
    };
  },
  methods: {
    createNewBlock() {
      this.blocks.push({ name: "TextBlock" });
    },
  },
};
</script>

<style scoped>

.main-text-container {
  width: 80%;
  color: white;
}


.topic {
  color: rgb(255, 255, 255);
  font-size: 1.6em;
  font-weight: 300;

  height: 70px;
  background: rgb(0, 0, 0);
  border-bottom: 1px solid rgb(179, 179, 179);
  border-radius: 5px;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.block {
  margin-bottom: 6px;
}
</style>
