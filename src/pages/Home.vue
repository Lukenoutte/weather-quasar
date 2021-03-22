<template>
  <q-page>
    <div class="main-container">
      <left-container/>
      <div class="q-pa-xl right-container ">two thirds</div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: "Home",
  components: {
    LeftContainer: () => import("../components/LeftContainerHome"),
  }
};
</script>

<style lang="scss" scoped>
.main-container {
  display: flex;
  flex-direction: row;
}

.right-container {
  width: 70%;
  height: 100vh;
  background-color: $background-grey;
}

@media (max-width: $breakpoint-sm) {
  .main-container {
    display: flex;
    flex-direction: column;
  }

  .right-container {
    width: 100%;
  }
}
</style>
