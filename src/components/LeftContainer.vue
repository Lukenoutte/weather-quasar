<template>
  <div class="to-centrilize-left">
    <div class="left-container">
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

      <img class="icon-temperature" :src="icons[condition]" />
      <p class="temperature no-margin">{{ temperature }}ºc</p>

      <div class="date-and-time">
        <span>{{ date }},</span>
        <span> {{ time }}</span>
      </div>
      <span style="font-size:19px; font-weight: 500;">{{ description }}</span>
      <div class="q-mt-lg flex items-center justify-center city-container">
        <span> {{ city }} </span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { icons } from "../helpers";
export default {
  name: "LeftContainer",
  data() {
    return {
      icons
    };
  },
  computed: {
    ...mapGetters({
      city: "data/city",
      temperature: "data/temperature",
      date: "data/date",
      time: "data/time",
      condition: "data/condition",
      description: "data/description"
    })
  }
};
</script>

<style lang="scss" >
.to-centrilize-left{
  width: 30%;
  height: 100vh;
  min-height: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.left-container {
  width: 90%;
  display: flex;
  flex-direction: column;
  padding: 1% 3%;
  max-width: 900px;
  .search-input {
    width: 100%;
  }

  .temperature {
    font-size: 70px;
  }

  .icon-temperature {
    height: 180px;
  }
  .city-container {
    height: 100px;
    width: 100%;
    background: $yellow-sun;
    border-radius: 15px;
    font-weight: bold;
    font-size: 17px;
    color: $white;
    box-shadow: rgb(0 0 0 / 25%) 0px 1px 2px;
  }

  .date-and-time span {
    font-size: 21px;
    font-weight: 400;
  }
  .date-and-time span:last-child {
    color: $grey-title;
  }
}

@media only screen and (max-width: 1100px) {
  .to-centrilize-left{
  width: 100%;
  }

  .left-container {
    align-items: center;

    .search-input {
      width: 80%;
    }
    .city-container {
      width: 80%;
    }
  }
}
</style>
