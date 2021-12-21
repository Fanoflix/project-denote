<template>
  <div class="sideitem-container">
    <div class="title">{{ title }}</div>
  </div>
</template>

<script>
export default {
  props: ["title", "info"],
  data() {
    return {};
  },
  methdos: {},
};
</script>

<style scoped>
.sideitem-container {
  user-select: none;
  width: 100%;
  height: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin-bottom: 6px;
  background: rgb(20, 20, 20);

  cursor: pointer;
}

.title {
  max-width: 85%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.sideitem-container:hover {
  background: rgb(39, 39, 39);
}

.sideitem-container:active {
  background: rgb(75, 75, 75);
}
</style>
