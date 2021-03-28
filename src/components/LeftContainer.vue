<template>
  <div class="to-centrilize-left">
    <div class="left-container">
      <input-borderless />
      <q-icon class="icon-temperature" :name="'img:' + icons[condition]" />
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
import InputBorderless from "./InputBorderless";
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
  },
  components: {
    InputBorderless
  }
};
</script>

<style lang="scss">
.to-centrilize-left {
  width: 30%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.left-container {
  width: 75%;
  display: flex;
  flex-direction: column;
  max-width: 900px;

  .temperature {
    font-size: 70px;
  }

  .icon-temperature {
    font-size: 180px;
  }

  .city-container {
    height: 100px;
    width: 100%;
    background: $primary;
    border-radius: 15px;
    font-weight: bold;
    font-size: 25px;
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
  .to-centrilize-left {
    width: 100%;
  }

  .left-container {
    align-items: center;
    margin: 100px 0;
    .city-container {
      width: 95%;
    }
  }
}

@media only screen and (max-width: 599px) {
  .left-container {
    .icon-temperature {
      font-size: 130px;
    }

    .temperature {
      font-size: 50px;
    }
    .city-container {
      font-size: 16px;
    }
    .date-and-time span {
      font-size: 15px;
    }
    .city-container {
      height: auto;
      padding: 10px 0;
    }
  }
}
</style>
