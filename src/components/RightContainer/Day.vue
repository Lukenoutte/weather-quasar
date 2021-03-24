<template>
  <div class="q-pa-sm  items-center justify-center day">
    <strong>{{ day.weekday }}</strong>
    <img class="q-my-sm my-icon" :src="icons[day.condition]" />
    <span> <strong>Max:</strong> {{ day.max }}°c</span>
    <span><strong>Min:</strong> {{ day.min }}°c</span>
  </div>
</template>

<script>
import { icons } from "../../helpers";
export default {
  name: "Day",
  data() {
    return {
      icons
    };
  },
  props: {
    day: { type: Object, required: true }
  }
};
</script>

<style lang="scss" scoped>
.my-icon {
  height: 50px;
}
.day {
  background-color: $white;
  border-radius: 15px;
  width: 13%;
  height: 190px;
  display: flex;
  flex-direction: column;
}

@media only screen and (max-width: $breakpoint-sm) {
  .day {
    width: 100%;
  }
}
</style>
