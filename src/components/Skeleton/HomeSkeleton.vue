<template>
  <div class="main-container">
    <left-skeleton />
    <right-skeleton />
  </div>
</template>

<script>
import LeftSkeleton from "./LeftSkeleton";
import RightSkeleton from "./RightSkeleton";

export default {
  name: "HomeSkeleton",
  components: {
    LeftSkeleton,
    RightSkeleton
  }
};
</script>

<style lang="scss">
.content-skeleton {
  animation: pulse-bg 1s infinite;
  border-radius: 20px;
}

@keyframes pulse-bg {
  0% {
    background: $grey-title;
  }
  50% {
    background: #dbdbdb;
  }
  100% {
    background: $grey-title;
  }
}
</style>
