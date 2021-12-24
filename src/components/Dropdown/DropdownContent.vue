<template>
  <div>
    <transition name="fade">
      <div v-if="active">
        <div class="items-container">
          <div
            class="selectItem"
            v-for="group in groupsList"
            @click="addToGroup(group.id, currentNote)"
            :key="group.id"
          >
            <p class="name">{{ group.name }}</p>
          </div>
          <div class="selectItem add-group" @click="toggleDialog">
            <p class="name">Create new group +</p>
          </div>
        </div>
      </div>
    </transition>

    <teleport to="body">
      <CreateGroup />
    </teleport>
  </div>
</template>

<script>
import CreateGroup from "../Cards/CreateGroup.vue";
import axios from "axios";
export default {
  name: "DropdownContent",
  inject: ["sharedState"],
  props: ["groupsList", "currentNote"],
  components: {
    CreateGroup,
  },
  provide() {
    return {
      dialogState: this.dialogState,
    };
  },
  data() {
    return {
      dialogState: {
        showDialog: false,
      },
    };
  },
  methods: {
    addToGroup(groupId, currentNote) {
      console.log(groupId, currentNote);
      axios
        .put(
          `http://localhost:8080/api/Groups/${groupId}`,
          {
            noteId: currentNote.id,
          },
          {
            headers: {
              contentType: "application/json",
            },
          }
        )
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    toggleDialog() {
      this.dialogState.showDialog = true;
      console.log(this.dialogState.showDialog);
    },
  },
  computed: {
    active() {
      return this.sharedState.active;
    },
  },
};
</script>

<style scoped>
.items-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  position: absolute;
  right: 0;
  top: 12px;

  height: auto;
  max-height: 500px;
  min-width: 150px;
  width: fit-content;

  max-width: 220px;
  z-index: 15;
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

.fade-enter-from,
.fade-leave-to {
  transition: all 0.15s ease-in-out;
  height: 0px;
  transform: translate(20px, -10px);
  opacity: 0;
}

.fade-leave-active,
.fade-enter-active {
  transition: all 0.15s ease-in-out;
}
</style>
