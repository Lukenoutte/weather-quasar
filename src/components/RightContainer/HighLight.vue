<template>
  <div class="q-pa-lg high-light">
      <span>Title</span>
  </div>
</template>

<script>
export default {
  name: "HighLight"
};
</script>

<style lang="scss" scoped>
.high-light {
    width: 30%;
    background: $white;
    border-radius: 15px;
    height: 250px;

    span{
        font-weight: 600;
        font-size: 17px;
        color: $grey-title;
    }
}
</style>
