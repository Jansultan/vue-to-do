<template>
  <header id="head">
    <nav>
      <div id="logo">
        <router-link :to="{ name: 'main' }" class="logo">
          Главный
        </router-link>
      </div>
      <label for="drop" class="menuBtn">
        <span class="lines toggle"></span>
      </label>
      <input type="checkbox" id="drop" />
      <ul class="menu">
        <li><a href="#">Пункт 1</a></li>
        <li>
          <!-- First Tier Drop Down -->
          <label for="drop-1" class="toggle">Пункт 2 +</label>
          <a href="#">Пункт 2</a>
          <input type="checkbox" id="drop-1" />
          <ul>
            <li><a href="#">Пункт 2 1</a></li>
            <li><a href="#">Пункт 2 2</a></li>
            <li><a href="#">Пункт 2 3</a></li>
          </ul>
        </li>
        <li>
          <!-- First Tier Drop Down -->
          <label for="drop-2" class="toggle">Пункт 3 +</label>
          <a href="#">Пункт 3</a>
          <input type="checkbox" id="drop-2" />
          <ul>
            <li><a href="#">Пункт 3 1</a></li>
            <li><a href="#">Пункт 3 2</a></li>
            <li><a href="#">Пункт 3 3</a></li>
          </ul>
        </li>
        <li><a href="#">Пункт 4</a></li>
        <li>
          <router-link :to="{ name: 'todo' }" v-if="getUser">Список задачи</router-link
          >
        </li>
      </ul>
      <button
        type="button"
        class="btn btn-outline-light btn-lg"
        @click="onAuthBtnClick"
      >
        {{ getUser ? "Выйти" : "Войти" }}
      </button>
    </nav>
    <auth-modal
      v-if="isAuthModalOpen"
      @close="isAuthModalOpen = false"
    ></auth-modal>
  </header>
</template>

<script>
import AuthModal from "../auth/AuthModal";
import { mapGetters, mapActions } from "vuex";

export default {
  data() {
    return {
      auth: false,
      isAuthorized: false,
      isAuthModalOpen: false,
    };
  },
  components: {
    AuthModal,
  },
  computed: {
    ...mapGetters({
      getUser: "user/getUser",
    }),
  },
  created() {
    this.setUser(JSON.parse(localStorage.getItem("user")));
  },
  methods: {
    ...mapActions({
      setUser: "user/setUser",
      deleteUser: "user/deleteUser",
    }),
    onAuthBtnClick() {
      if (this.getUser) {
        this.$api.auth.logout();
        localStorage.removeItem("user");
        this.deleteUser();
        this.$router.push({ name: "main" });
      } else {
        this.isAuthModalOpen = true;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/style/header.scss";
</style>
