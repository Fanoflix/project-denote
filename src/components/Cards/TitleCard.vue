<template>
  <div class="title-container">
    <div class="text-container">
      <p class="h1">superior notes</p>
      <p class="h4">simple note taking app</p>
    </div>
  </div>
</template>

<style scoped>
.title-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;

  width: 100%;
  height: 140px;
  background: rgb(26, 26, 26);
  color: white;
}

.text-container {
  width: 95%;
  margin: 0 1.5%;
}

.h1 {
  font-size: 30px;
  font-weight: 400;
  font-variant: small-caps;
}

.h4 {
  margin-top: -10px;
  color: rgb(124, 124, 124);
  font-size: 20px;
  font-weight: 400;
  font-variant: small-caps;
}

button {
  display: flex;
  align-items: center;
  justify-content: center;

  border: none;
  background: black;
  height: 50px;
  width: 120px;
  padding: 30px;
  color: white;
}
</style>
