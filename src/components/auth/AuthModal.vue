<template>
  <modal
    name="auth-modal"
    classes="auth-modal"
    height="auto"
    width="500px"
    @before-close="close"
  >
    <form @submit.prevent="formSubmit">
      <h3>{{ isSignInForm ? "Войти" : "Зарегистрироваться" }}</h3>
      <div class="form-group">
        <label for="username">Имя:</label>
        <input
          id="username"
          type="text"
          class="form-control"
          v-model.trim="form.user_name"
          placeholder="Ваша имя"
          :class="isUsername ? 'is-invalid' : ''"
        />
        <p
          v-if="isUsername"
          class="invalid-feedback"
        >
          Обязательное поле
        </p>
      </div>
      <div class="form-group">
        <label for="password">Пароль:</label>
        <input
          id="password"
          type="password"
          class="form-control"
          placeholder="Ваш пароль"
          v-model.trim="form.password"
          :class="isPassword ? 'is-invalid' : ''"
        />
        <p
          v-if="isPassword"
          class="invalid-feedback"
        >
          Обязательное поле
        </p>
      </div>
      <div class="actions">
        <a href="#" @click.prevent="mode = isSignInForm ? 'signUp' : 'signIn'">
          {{ isSignInForm ? "Регистрация" : "Вход" }}
        </a>
        <button
          type="button"
          class="btn btn-outline-dark"
          @click="$emit('close')"
        >
          Отмена
        </button>
        <button type="submit" class="btn btn-dark">
          Подтвердить
        </button>
      </div>
    </form>
  </modal>
</template>

<script>
export default {
  name: "auth-modal",
  data() {
    return {
      mode: "signIn",
      form: {
        user_name: "",
        password: "",
      },
      errors: [],
      isUsername: false,
      isPassword: false,
    };
  },
  computed: {
    isSignInForm() {
      return this.mode === "signIn";
    },
  },
  mounted() {
    this.$modal.show("auth-modal");
  },
  methods: {
    changeUserState() {
      if (this.auth) {
        localStorage.removeItem("auth");
        this.$router.push({ name: "main" });
      } else {
        localStorage.setItem("auth", true);
        this.auth = true;
      }
    },
    close() {
      this.$emit("close");
    },
    formSubmit() {
      if (!this.form.user_name) {
        this.isUsername = true;
      }
      if (!this.form.password) {
        this.isPassword = true;
      }
      if (this.isSignInForm) {
        this.signIn();
      } else {
        this.signUp();
      }
    },
    signIn() {
      // console.log("this.form.user_name = ", this.form.user_name);
      if (this.form.user_name && this.form.password) {
        this.$load(async () => {
          const data = {
            user_name: this.form.user_name,
            password: this.form.password,
          };
          console.log(data);
          localStorage.setItem("user", JSON.stringify(data));
          this.$store.dispatch("user/setUser", data);
          this.$emit("close");
        });
      }
    },
    signUp() {
      if (this.form.user_name && this.form.password) {
        this.$load(async () => {
          const data = {
            user_name: this.form.user_name,
            password: this.form.password,
          };
          localStorage.setItem("user", JSON.stringify(data));
          this.$store.dispatch("user/setUser", data);
          this.$emit("close");
        });
      }
    },
  },
};
</script>

<style lang="scss">
.auth-modal {
  padding: 30px 40px;
  form {
    display: flex;
    flex-direction: column;
    height: 100%;
    h3 {
      margin-bottom: 30px;
    }
    label {
      width: 100%;
      margin-bottom: 20px;
    }
    .actions {
      margin-top: auto;
      display: flex;
      align-items: baseline;
      a {
        color: #eb5804;
      }
      button {
        width: 130px;
        margin-left: 10px;
        &:first-of-type {
          margin-left: auto;
        }
      }
    }
  }
}
</style>
