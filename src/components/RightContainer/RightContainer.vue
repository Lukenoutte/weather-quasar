<template>
  <div class="to-centrilize-right">
    <div class="right-container">
      <p class="q-my-md title">Semana</p>
      <div class="flex justify-between row week">
        <day v-for="(day, index) in weekWeather" :key="index" :day="day" />
      </div>
      <p class="q-my-md title">Hoje</p>
      <highlights />
    </div>
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
.to-centrilize-right {
  width: 70%;
  height: 100vh;
  min-height: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: $background-grey;
}
.right-container {
  padding: 1% 3%;
  width: 90%;

  .title {
    font-weight: 600;
    font-size: 18px;
  }
}

@media only screen and (max-width: 1100px) {
  .to-centrilize-right{
    width: 100%;
    height: auto;
  }

  .right-container {
    width: 70%;
    height: auto;
    padding-bottom: 100px;

    .week div:not(:first-child) {
      margin-top: 10px;
    }
    .week {
      max-width: auto;
    }
  }
}
</style>
