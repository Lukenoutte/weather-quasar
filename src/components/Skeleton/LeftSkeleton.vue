<template>
  <div class="to-centrilize-left">
    <div class="flex left-container">
      <input-borderless />
      <div class="content-skeleton icon-skeleton" />
      <div class="q-mt-md content-skeleton temperature-skeleton" />
      <div class="q-mt-md content-skeleton date-skeleton" />
      <div class="content-skeleton city-skeleton"></div>
    </div>
  </div>
</template>

<script>
import InputBorderless from "../InputBorderless";
export default {
  name: "LeftSkeleton",
  components: {
    InputBorderless
  }
};
</script>

<style lang="scss" scoped>

.icon-skeleton {
  height: 180px;
  width: 200px;
}

.temperature-skeleton {
  height: 70px;
  width: 130px;
}

.date-skeleton {
  height: 70px;
  width: 60%;
}

.city-skeleton {
  height: 100px;
  width: 100%;
  margin-top: 20px;
  box-shadow: rgb(0 0 0 / 25%) 0px 1px 2px;
}

@media only screen and (max-width: 599px) {
  .icon-skeleton {
    height: 130px;
  }
  .temperature-skeleton {
    height: 50px;
  }

  .date-skeleton {
    height: 50px;
  }

  .city-skeleton {
    height: 50px;
  }
}
</style>
