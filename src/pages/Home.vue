<template>
  <q-page>
    <div class="main-container" v-if="recivedData">
      <left-container />
      <right-container />
    </div>

    <home-skeleton v-else />
  </q-page>
</template>

<script>
import { mapGetters } from "vuex";
import HomeSkeleton from "../components/Skeleton/HomeSkeleton";
import LeftContainer from "../components/LeftContainer";
import RightContainer from "../components/RightContainer/RightContainer";
export default {
  name: "Home",
  components: {
    HomeSkeleton,
    LeftContainer,
    RightContainer
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

@media only screen and (max-width: $breakpoint-sm) {
  .main-container {
    display: flex;
    flex-direction: column;
  }
}
</style>
