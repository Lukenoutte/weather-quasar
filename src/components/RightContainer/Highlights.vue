<template>
  <div class="flex row justify-between">
    <div class="high-light">
      <span>Humidade</span>
      <p class="data-p">{{ humidity }}%</p>
      <img class="icon" :src="icons['humidity']" />
    </div>
    <div class="high-light">
      <span>Velocidade do vento</span>
      <p class="data-p">{{ windySpeedy }}</p>
      <img class="icon" :src="icons['wind']" />
    </div>
    <div class="high-light sun-container">
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
  width: 32%;
  background: $white;
  border-radius: 15px;
  height: 260px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2% 10px;
  box-shadow: rgb(0 0 0 / 25%) 0px 1px 2px;

  span {
    font-weight: 500;
    font-size: 15px;
    color: $grey-title;
    margin-bottom: 5px;
  }
  .icon {
    height: 70px;
  }
  .data-p {
    font-size: 30px;
    font-weight: 600;
  }
}

.sun-container p {
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 10px;
}

.sun-container strong {
    font-size: 15px;
}

@media only screen and (max-width: 1100px) {
  .high-light {
    width: 100%;
    margin-top: 10px;
  }
}
</style>
