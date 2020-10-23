<template>
  <div class="layout">
    <app-header />
    <div class="main">
      <router-view></router-view>
    </div>
    <app-footer />
  </div>
</template>

<script>
import AppHeader from "./Header";
import AppFooter from "./Footer";

export default {
  components: { AppHeader, AppFooter },
};
</script>

<style lang="scss" scoped>
.layout {
  display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    min-height: 100vh;
}

.main {
  -webkit-box-flex: 1;
    -ms-flex: 1 0 auto;
    flex: 1 0 auto;
    margin-left: auto;
    margin-right: auto;
    width: 1120px;
}
</style>
