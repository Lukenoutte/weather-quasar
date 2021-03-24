<template>
  <div class="flex row justify-between" style="max-width: 850px;">
    <div class="q-pa-lg high-light">
      <span>Humidade</span>
      <p class="data-p">{{ humidity }}%</p>
      <img class="icon" :src="icons['humidity']" />
    </div>
    <div class="q-pa-lg high-light">
      <span>Velocidade do vento</span>
      <p class="data-p">{{ windySpeedy }}</p>
      <img class="icon" :src="icons['wind']" />
    </div>
    <div class="q-pa-lg high-light sun-container">
      <span>Sol</span>
      <p>Nascer do sol: <strong>{{ sun.sunrise }}</strong></p>
      <p>Pôr do sol: <strong>{{ sun.sunset }}</strong></p>
      <img class="icon" :src="icons['sun']" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { icons } from "../../helpers";
export default {
  name: "HighLight",
  computed: {
    ...mapGetters({
      humidity: "data/humidity",
      windySpeedy: "data/windySpeedy",
      sun: "data/sun"
    })
  },
  data() {
    return {
      icons
    };
  }
};
</script>

<style lang="scss" scoped>
.high-light {
  width: 30%;
  background: $white;
  border-radius: 15px;
  height: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;

  span {
    font-weight: 500;
    font-size: 17px;
    color: $grey-title;
    margin-bottom: 10px;
  }
  .icon {
    height: 85px;
  }
  .data-p {
    font-size: 30px;
    font-weight: 600;
  }
}

.sun-container p {
  font-size: 15px;
  font-weight: 600;
  margin-bottom: 3px;
}

.sun-container strong {
    font-size: 20px;
}

@media only screen and (max-width: $breakpoint-sm) {
  .high-light {
    width: 100%;
    margin-top: 10px;
  }
}
</style>
