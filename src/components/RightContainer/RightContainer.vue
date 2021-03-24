<template>
  <div class="q-pa-xl right-container">
    <p class="q-my-md title">Semana</p>
    <div class="flex justify-between row week">
      <day v-for="(day, index) in weekWeather" :key="index" :day="day" />
    </div>
    <p class="q-my-md title">Hoje</p>
    <highlights />
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "RihgtContainer",
  components: {
    Day: () => import("./Day"),
    Highlights: () => import("./Highlights")
  },
  computed: {
    ...mapGetters({
      weekWeather: "data/weekWeather"
    })
  }
};
</script>

<style lang="scss">
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
