<template>
  <q-input
    rounded
    borderless
    bottom-slots
    class="search-input"
    label="Procurar outra cidade..."
    v-model="searchText"
    v-on:keyup.enter="$emit('keyEnter', searchText)"
  >
    <template v-slot:prepend>
      <q-icon name="search" />
    </template>
    <template v-slot:append>
      <q-icon
        name="arrow_forward"
        v-on:click="$emit('clicked', searchText)"
        class="cursor-pointer"
      />
    </template>
  </q-input>
</template>

<script>
export default {
  name: "InputBorderless",
  data() {
    return { searchText: "" };
  },
};
</script>

<style lang="scss" scoped>
.search-input {
  width: 100%;
}

@media only screen and (max-width: 1100px) {

  .search-input {
    width: 75%;
    position: absolute;
    top: 50px;
  }
}
</style>
