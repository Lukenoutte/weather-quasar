<template>
  <div class="q-pa-xl left-container">
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

<style lang="scss">
.left-container {
  width: 30%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;

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
  }

  .date-and-time span {
    font-size: 21px;
    font-weight: 400;
  }
  .date-and-time span:last-child {
    color: $grey-title;
  }
}

@media only screen and (max-width: $breakpoint-sm) {
  .left-container {
    width: 100%;
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
