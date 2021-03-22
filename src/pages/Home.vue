<template>
  <q-page>
    <div class="main-container">
      <left-container />
      <right-container />
    </div>
  </q-page>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "Home",
  components: {
    LeftContainer: () => import("../components/LeftContainer"),
    RightContainer: () => import("../components/RightContainer/RightContainer")
  },
  methods: {
    ...mapActions(["getData"])
  },
  mounted() {
    this.$store.dispatch("data/getData");
  }
};
</script>

<style lang="scss" scoped>
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
