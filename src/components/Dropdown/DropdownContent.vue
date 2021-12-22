<template>
  <transition name="fade">
    <div v-if="active">
      <div class="items-container">
        <div class="selectItem" v-for="group in groupsList" :key="group">
          <p class="name">{{ group }}</p>
        </div>
        <div class="selectItem add-group">
          <p class="name">Create new group +</p>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "DropdownContent",
  inject: ["sharedState"],
  props: ["groupsList"],
  mounted() {},
  data() {
    return {};
  },
  computed: {
    active() {
      return this.sharedState.active;
    },
  },
  watch: {
    active() {},
  },
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.items-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  position: absolute;
  right: 0;
  top: 10px;

  height: auto;
  min-width: 150px;
  width: fit-content;
  max-width: 220px;
  z-index: 10;
  border-radius: 6px;

  background: rgb(21, 21, 21);
  padding: 2px 2px;
}

.items-container .selectItem {
  user-select: none;
  height: 40px;
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  cursor: pointer;

  font-size: 0.85em;
  border-radius: 3px;
}

.items-container .selectItem .name {
  width: inherit;
  padding: 0px 10px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.items-container .add-group {
  margin-top: 10px;
  font-size: 0.8em;
  text-align: center;
  background: rgb(32, 32, 32);
}

.items-container .selectItem:hover {
  background: rgb(39, 39, 39);
}

.items-container .selectItem:active {
  background: rgb(210, 210, 210);
  color: black;
}
</style>
