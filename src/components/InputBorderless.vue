<template>
  <q-input
    rounded
    borderless
    bottom-slots
    class="search-input"
    label="Procurar outra cidade..."
  >
    <template v-slot:prepend>
      <q-icon name="search" />
    </template>
    <template v-slot:append>
      <q-icon name="close" @click="text = ''" class="cursor-pointer" />
    </template>
  </q-input>
</template>

<script>
export default {
  name: "InputBorderless"
};
</script>

<style lang="scss" scoped>
.search-input {
  width: 100%;
}
@media only screen and (max-width: 1100px) {
  .search-input {
    width: 80%;
  }
}
</style>
