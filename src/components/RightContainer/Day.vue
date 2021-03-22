<template>
  <div class="q-pa-sm  items-center justify-center day">
    <strong>Seg</strong>
    <q-icon class="q-my-sm icon-temperature" name="light_mode" />
    <p>20°c</p>
  </div>
</template>

<style lang="scss" scoped>
.day {
  background-color: $white;
  border-radius: 15px;
  width: 13%;
  height: 150px;
  display: flex;
  flex-direction: column;
}

.icon-temperature{
    font-size: 40px;
}

@media only screen and (max-width: $breakpoint-sm) {
  .day {
    width: 100%;
  }
}
</style>
