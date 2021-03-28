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
}

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

@media only screen and (max-width: 1100px) {
  .icon-skeleton {
    height: 130px;
  }
  .temperature-skeleton {
    height: 80px;
  }

  .date-skeleton {
    height: 50px;
  }

  .city-skeleton {
    height: 100px;
    width: 80%;
  }

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
    .temperature-skeleton {
      height: 50px;
    }
    .city-skeleton {
      height: 16px;
    }
    .date-skeleton span {
      font-size: 15px;
    }

    .city-skeleton {
      height: 40px;
    }
  }
}
</style>
