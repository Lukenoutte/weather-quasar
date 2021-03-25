<template>
  <div class="q-pa-sm flex column items-center justify-center day">
    <strong>{{ day.weekday }}</strong>
    <img class="q-my-sm day-icon" :src="icons[day.condition]" />
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
.day-icon {
  height: 50px;
}
.day {
  background-color: $white;
  border-radius: 15px;
  width: 13%;
  height: 165px;
  box-shadow: rgb(0 0 0 / 25%) 0px 1px 2px;
}

@media only screen and (max-width:  1100px) {
  .day {
    width: 100%;
  }
}
</style>
