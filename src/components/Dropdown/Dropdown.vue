<template>
  <div @click="toggle">
    <button>
      {{ label }} &nbsp;<img
        class="carrot"
        src="../../assets/down-carrot.svg"
        alt=""
        style="{{sharedState.active ? 'transform: rotate(180deg);' : ''}}"
      />
    </button>
    <DropdownContent style="position: relative" :groupsList="groupsList" />
  </div>
</template>

<script>
import DropdownContent from "./DropdownContent.vue";
export default {
  name: "Dropdown",
  props: [
    "label",
    // "groupsList"
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
      groupsList: ["Test1", "Test2", "Test3"],
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
button {
  width: 130px;
  height: 30px;
  border: none;
  border-radius: 3px;
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
