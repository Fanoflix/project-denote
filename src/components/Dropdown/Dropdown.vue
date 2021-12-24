<template>
  <div @click="toggle">
    <button>
      {{ label }} &nbsp;<img
        class="carrot"
        src="../../assets/down-carrot.svg"
        alt=""
      />
    </button>
    <DropdownContent
      style="position: relative; z-index: 15;"
      :groupsList="groupsList"
      :currentNote="currentNote"
    />
  </div>
</template>

<script>
import DropdownContent from "./DropdownContent.vue";
export default {
  name: "Dropdown",
  props: [
    "label",
    "currentNote",
    "groupsList"
  ],
  components: {
    DropdownContent,
  },
  provide() {
    return {
      sharedState: this.sharedState,
    };
  },
  data() {
    return {
      sharedState: {
        active: false,
      },
    };
  },
  methods: {
    toggle() {
      this.sharedState.active = !this.sharedState.active;
    },
  },
};
</script>

<style scoped>
/* template {
  position: relative;
} */
button {
  width: 130px;
  height: 30px;
  border: none;
  border-radius: 3px;
  user-select: none;
  cursor: pointer;

  font-weight: 600;
  font-variant: small-caps;

  display: flex;
  justify-content: center;
  align-items: center;
  filter: brightness(0.7);
}

button:hover {
  filter: brightness(1);
}

.carrot {
  height: 15px;
}
</style>
