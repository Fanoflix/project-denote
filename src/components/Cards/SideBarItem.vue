<template>
  <div class="sideitem-container">
    <div class="title">{{ title }}</div>
  </div>
</template>

<script>
export default {
  props: ["title"]
};
</script>

<style scoped>
.sideitem-container {
  user-select: none;
  width: 97%;
  height: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding-left:15px;

  margin-bottom: 3px;
  background: rgb(32, 32, 32);
  border-radius: 3px;

  cursor: pointer;
}

.title {
  max-width: 85%;
  font-size: 0.8em;
  
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
