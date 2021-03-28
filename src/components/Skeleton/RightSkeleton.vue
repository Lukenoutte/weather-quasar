<template>
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
</template>

<script>
export default {
  name: "RightSkeleton"
};
</script>

<style lang="scss" scoped>
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
  width: 90%;

  .title {
    font-weight: 600;
    font-size: 18px;
  }
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

@media only screen and (max-width: 1100px) {
  .day-skeleton {
    width: 100%;
  }
  .highlight-skeleton {
    width: 100%;
  }
  .to-centrilize-right {
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
