<template>
  <div
    class="fullscreen bg-blue text-white text-center q-pa-md flex flex-center"
  >
    <div>
      <div style="font-size: 15vh">404 <q-icon name="sick" /></div>

      <div class="text-h3" style="opacity:.4">
        Oops. Algo deu errado...
      </div>
      <div class="contact">
        Entre em contrato com
        <a href="https://github.com/Lukenoutte">Lukenoutte</a> caso precise de ajuda.
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Error404"
};
</script>

<style lang="scss" scoped>
.contact {
  margin-top: 50px;
  font-size: 15px;
  a {
    text-decoration: none;
    color: $white;
    font-weight: 600;
  }
}
</style>
