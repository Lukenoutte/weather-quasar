<template>
  <div class="flex row justify-between">
    <div class="highlight">
      <span>Humidade</span>
      <p class="data-p">{{ humidity }}%</p>
      <q-icon class="icon" :name="'img:' + icons['humidity']" />
    </div>
    <div class="highlight">
      <span>Velocidade do vento</span>
      <p class="data-p">{{ windySpeedy }}</p>
      <q-icon class="icon" :name="'img:' + icons['wind']" />
    </div>
    <div class="highlight sun-container">
      <span>Sol</span>
      <p>
        Nascer do sol: <strong>{{ sun.sunrise }}</strong>
      </p>
      <p>
        Pôr do sol: <strong>{{ sun.sunset }}</strong>
      </p>
      <q-icon class="icon" :name="'img:' + icons['sun']" />
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
.highlight {
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

  &:hover {
    box-shadow: 1px 1px $grey-title, 2px 2px $grey-title, 3px 3px $grey-title;
    -webkit-transform: translateX(-3px);
    transform: translateX(-3px);
    transition: all 0.8s ease 0s;
  }

  span {
    font-weight: 500;
    font-size: 15px;
    color: $grey-title;
    margin-bottom: 5px;
  }
  .icon {
    font-size: 70px;
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
  .highlight {
    width: 100%;
    margin-top: 10px;
  }
}
</style>
