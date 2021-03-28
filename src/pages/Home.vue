<template>
  <q-page>
    <div class="main-container" v-if="recivedData">
      <left-container />
      <right-container />
    </div>

    <home-skeleton v-else />
    <footer />
  </q-page>
</template>

<script>
import { mapGetters } from "vuex";
import HomeSkeleton from "../components/Skeleton/HomeSkeleton";

export default {
  name: "Home",
  components: {
    HomeSkeleton,
    LeftContainer: () => import("../components/LeftContainer"),
    RightContainer: () => import("../components/RightContainer/RightContainer")
  },
  computed: {
    ...mapGetters({
      recivedData: "data/recivedData"
    })
  }
};
</script>

<style lang="scss">
.main-container {
  display: flex;
  flex-direction: row;
}

@media only screen and (max-width: 1100px) {
  .main-container {
    display: flex;
    flex-direction: column;
  }
}
</style>
