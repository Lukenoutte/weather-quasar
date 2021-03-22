<template>
  <div class="q-pa-xl right-container">
    <p class="q-my-md title">Semana</p>
    <div class="flex justify-between row week">
      <day />
      <day />
      <day />
      <day />
      <day />
      <day />
      <day />
    </div>
    <p class="q-my-md title">Hoje</p>
    <div class="flex row justify-between" style="max-width: 850px;">
      <high-light />
      <high-light />
      <high-light />
    </div>
  </div>
</template>

<script>
export default {
  name: "RihgtContainer",
  components: {
    Day: () => import("./Day"),
    HighLight: () => import("./HighLight")
  }
};
</script>

<style lang="scss" scoped>
.right-container {
  width: 70%;
  min-height: 100vh;
  background-color: $background-grey;

  .week {
    max-width: 850px;
  }
  .title {
    font-weight: 600;
    font-size: 18px;
  }
}

@media only screen and (max-width: $breakpoint-sm) {
  .right-container {
    width: 100%;
    height: auto;

    .week div:not(:first-child) {
      margin-top: 10px;
    }
  }
}
</style>
