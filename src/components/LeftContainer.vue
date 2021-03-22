<template>
  <div class="q-pa-xl left-container">
    <q-input
      rounded
      borderless
      bottom-slots
      class="search-input"
      label="Search for places..."
    >
      <template v-slot:prepend>
        <q-icon name="search" />
      </template>
      <template v-slot:append>
        <q-icon name="close" @click="text = ''" class="cursor-pointer" />
      </template>
    </q-input>

    <q-icon class="icon-temperature" name="light_mode" />
    <p class="temperature no-margin">21ºc</p>
    <p style="font-size: 19px;">Monday, 16:00</p>
    <div class="q-mt-lg flex items-center justify-center city-container">
      <span>New York, NY, USA </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "LeftContainer"
};
</script>

<style lang="scss" scoped>
.left-container {
  width: 30%;
  height: 100vh;
  display: flex;
  flex-direction: column;

  .search-input {
    width: 100%;
  }

  .temperature {
    font-size: 70px;
  }

  .icon-temperature {
    color: $yellow-sun;
    font-size: 150px;
  }
  .city-container {
    height: 100px;
    width: 100%;
    background: $yellow-sun;
    border-radius: 15px;
    font-weight: bold;
    color: $white;
  }
}

@media only screen and (max-width: $breakpoint-sm) {
  .left-container {
    width: 100%;
    height: auto;
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
