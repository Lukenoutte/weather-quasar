<template>
  <div class="main-container">
    <div class="to-centrilize-left">
      <div class="flex left-container">
        <q-input
          rounded
          borderless
          bottom-slots
          class="search-input"
          label="Procurar outra cidade..."
        >
          <template v-slot:prepend>
            <q-icon name="search" />
          </template>
          <template v-slot:append>
            <q-icon name="close" @click="text = ''" class="cursor-pointer" />
          </template>
        </q-input>

        <div class=" flex self-center icon-skeleton" />
        <div class="temperature-skeleton" />
        <div class="date-skeleton" />
        <div class="city-skeleton"></div>
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
            <div class="title-day" />
            <div class="day-content" />
          </div>
        </div>
        <p class="q-my-md title">Hoje</p>
        <div class="flex justify-between row week">
          <div v-for="index in 3" :key="index" class="highlight-skeleton">
            <div class="highlight-title" />
            <div class="highlight-content" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  setup() {}
};
</script>

<style lang="scss" scoped>
.icon-skeleton {
  height: 180px;
  width: 200px;
  animation: pulse-bg 1s infinite;
  border-radius: 20px;
}

.temperature-skeleton {
  height: 60px;
  width: 130px;
  animation: pulse-bg 1s infinite;
  margin-top: 20px;
  border-radius: 20px;
}
.date-skeleton {
  height: 70px;
  width: 60%;
  animation: pulse-bg 1s infinite;
  margin-top: 20px;
  border-radius: 20px;
}

.city-skeleton {
  height: 100px;
  width: 100%;
  animation: pulse-bg 1s infinite;
  margin-top: 20px;
  border-radius: 20px;
  box-shadow: rgb(0 0 0 / 25%) 0px 1px 2px;
}
.day-skeleton {
  background-color: $white;
  border-radius: 15px;
  width: 13%;
  height: 190px;
  box-shadow: rgb(0 0 0 / 25%) 0px 1px 2px;

  .title-day {
    height: 20px;
    width: 70%;
    animation: pulse-bg 1s infinite;
    border-radius: 15px;
    margin-top: 15px;
  }
  .day-content {
    width: 80%;
    height: 60%;
    margin-top: 5px;
    animation: pulse-bg 1s infinite;
    border-radius: 15px;
  }
}

.highlight-skeleton {
  width: 32%;
  background: $white;
  border-radius: 15px;
  height: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 10px;
  box-shadow: rgb(0 0 0 / 25%) 0px 1px 2px;

  .highlight-title {
    height: 20px;
    animation: pulse-bg 1s infinite;
    width: 90%;
    border-radius: 15px;
  }
  .highlight-content {
    width: 90%;
    height: 90%;
    margin-top: 10px;
    animation: pulse-bg 1s infinite;
    border-radius: 15px;
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
