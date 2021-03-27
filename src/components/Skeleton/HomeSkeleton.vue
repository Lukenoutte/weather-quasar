<template>
  <div class="main-container">
    <div class="to-centrilize-left">
      <div class="flex left-container">
        <input-borderless />
        <div
          class="content-skeleton icon-skeleton"
          style="  height: 180px;  width: 200px;"
        />
        <div
          class="q-mt-md content-skeleton temperature-skeleton"
          style="  height: 60px; width: 130px;"
        />
        <div
          class="q-mt-md content-skeleton date-skeleton"
          style="  height: 70px;  width: 60%;"
        />
        <div class="content-skeleton city-skeleton"></div>
      </div>
    </div>

    <div class="to-centrilize-right">
      <div class="right-container">
        <p class="q-my-md title">Semana</p>
        <div class="flex justify-between row week">
          <div
            v-for="index in 7"
            :key="index"
            class="q-pa-md flex justify-center day-skeleton"
          >
            <div class="content-skeleton title-day" />
            <div class="content-skeleton day-content" />
          </div>
        </div>
        <p class="q-my-md title">Hoje</p>
        <div class="flex justify-between row week">
          <div
            v-for="index in 3"
            :key="index"
            class="flex justify-center highlight-skeleton"
          >
            <div class="content-skeleton highlight-title" />
            <div class="content-skeleton highlight-content" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import InputBorderless from "../InputBorderless";
export default {
  name: "HomeSkeleton",
  components: {
    InputBorderless
  }
};
</script>

<style lang="scss" scoped>
.content-skeleton {
  animation: pulse-bg 1s infinite;
  border-radius: 20px;
}

.city-skeleton {
  height: 100px;
  width: 100%;
  margin-top: 20px;
  box-shadow: rgb(0 0 0 / 25%) 0px 1px 2px;
}

.day-skeleton {
  background-color: $white;
  border-radius: 20px;
  width: 13%;
  height: 165px;
  box-shadow: rgb(0 0 0 / 25%) 0px 1px 2px;

  .title-day {
    height: 20px;
    width: 70%;
    margin-top: 15px;
  }

  .day-content {
    width: 80%;
    height: 60%;
    margin-top: 5px;
  }
}

.highlight-skeleton {
  width: 32%;
  background: $white;
  border-radius: 15px;
  height: 260px;
  padding: 30px 10px;
  box-shadow: rgb(0 0 0 / 25%) 0px 1px 2px;

  .highlight-title {
    height: 20px;
    width: 90%;
  }

  .highlight-content {
    width: 90%;
    height: 90%;
    margin-top: 10px;
  }
}

@keyframes pulse-bg {
  0% {
    background: $grey-title;
  }
  50% {
    background: #dbdbdb;
  }
  100% {
    background: $grey-title;
  }
}

@media only screen and (max-width: $breakpoint-sm) {
  .day-skeleton {
    width: 100%;
  }
  .highlight-skeleton {
    width: 100%;
  }
}
</style>
