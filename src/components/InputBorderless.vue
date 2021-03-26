<template>
  <q-input
    rounded
    borderless
    bottom-slots
    class="search-input"
    label="Procurar outra cidade..."
    v-model="searchText"
    v-on:keyup.enter="getDataFromSearch"
  >
    <template v-slot:prepend>
      <q-icon name="search" />
    </template>
    <template v-slot:append>
      <q-icon name="arrow_forward" @click="getDataFromSearch" class="cursor-pointer" />
    </template>
  </q-input>
</template>

<script>
export default {
  name: "InputBorderless",
  data() {
    return { searchText: "" };
  },
  methods: {
    getDataFromSearch: function() {
      let city = this.searchText;
      this.$store.dispatch("data/getData", city );
    }
  }
};
</script>

<style lang="scss" scoped>
.search-input {
  width: 100%;
}
</style>
