<template>
  <transition name="dialog-fade" class="dialogbox">
    <div v-if="active">
      <div class="header">
        <p>
          Create Group
        </p>

        <button class="close btn" @click="closeDialog">
          <img src="../../assets/cross.svg" alt="Close" />
        </button>
      </div>

      <div class="input">
        <label for="group-name">
          <p>Group name</p>
        </label>
        <input name="group-name" placeholder="Enter group name" type="text" />
      </div>

      <div class="footer">
        <button class="save btn" @click="saveGroup">
          <img src="../../assets/check.svg" alt="Confirm" />
        </button>
      </div>
    </div>
  </transition>
</template>

<script>
import axios from "axios";
export default {
  props: ["title"],
  emits: ["groupCreated"],
  inject: ["dialogState"],
  data() {
    return {
      newGroupName: "",
    };
  },
  methods: {
    saveGroup() {
      // call save API
      axios
        .post(
          "http://localhost:8080/api/Groups",
          {
            name: this.newGroupName,
          },
          {
            headers: {
              contentType: "application/json",
            },
          }
        )
        .then((response) => {
          console.log("GROUP CREATED");
          console.log(response);
          this.dialogState.showDialog = false;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    closeDialog() {
      this.dialogState.showDialog = false;
    },
  },
  computed: {
    active() {
      return this.dialogState.showDialog;
    },
  },
  watch: {
    showDialog(newVal) {
      console.log(newVal);
    },
  },
};
</script>

<style scoped>
.dialogbox {
  font-family: "Roboto", sans-serif;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  overflow: hidden;

  width: 30%;
  min-width: 300px;
  height: 180px;
  will-change: height;

  color: rgb(0, 0, 0);

  background: rgb(24, 24, 24);
  border: 1px solid rgba(0, 0, 0, 0.3);

  opacity: 1;
  border-radius: 7px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  fill: white;

  font-size: 1em;
  font-weight: 400;

  height: 45px;
  width: 100%;
  padding: 0px 20px;

  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  background: rgb(39, 39, 39);
  border-top-right-radius: 6px;
  border-top-left-radius: 6px;
  color: white;
}

.header .close {
  background: transparent;

  border-radius: 5px;
  border: none;
  height: 30px;
  width: 40px;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;
}

.header .close:hover {
  background: rgba(0, 0, 0, 0.3);
}

.header .close img {
  height: 18px;
}

.header .image {
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  height: 30px;
  width: 80px;
  background: transparent;
  cursor: pointer;
  background: rgba(0, 0, 0, 0.1);
}

.input {
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;

  min-width: 100px;
  width: 70%;
  gap: 5px;
  font-size: 0.9em;
}

.input label p {
  text-align: center;
  align-self: center;
  justify-self: center;
  font-size: 1.3em;
  font-weight: 500;
  font-variant-caps: all-small-caps;
  color: rgb(172, 172, 172);
}

input::placeholder {
  font-style: italic;
  color: gray;
}

.input input {
  border: none;
  color: white;
  border-radius: 5px;
  background-color: rgb(58, 58, 58);
  width: 100%;
  height: 30px;
  padding: 10px;
}

.input input:focus {
  outline: 1px solid rgba(0, 0, 0, 0.37);
}

.footer {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  fill: white;
  font-variant: small-caps;
  font-size: 1.2em;
  font-weight: 500;
  min-width: 100px;
  width: 70%;
  height: 50px;
  gap: 10px;
}

.footer .btn {
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 5px;
  height: 30px;
  width: 100%;
  background: rgba(0, 0, 0, 0.1);
  cursor: pointer;
}

.footer .save {
  background: rgb(11, 93, 201);
  transition: all 0.1s ease-in-out;
  filter: grayscale(1);
}

.footer .save:hover {
  transition: all 0.1s ease-in-out;
  filter: grayscale(0);
}

.footer .confirm-btn:hover {
  background: rgba(0, 0, 0, 0.2);
}

.footer img {
  height: 18px;
  align-self: center;
  cursor: pointer;
}

.dialog-fade-enter-from,
.dialog-fade-leave-to {
  /* transform: translate(-20px, -300px); */
  opacity: 0;
  height: 0px;
}

.dialog-fade-leave-active,
.dialog-fade-enter-active {
  transition: all 0.2s ease-in-out;
}
</style>
