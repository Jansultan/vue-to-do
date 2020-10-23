<template>
  <modal
    name="add-modal"
    classes="add-modal"
    height="auto"
    width="500px"
    @before-close="close"
  >
    <form @submit.prevent="formSubmit">
      <h3>Добавление новых задач</h3>
      <div class="form-group">
        <label for="title">Заголовок:</label>
        <input
          id="title"
          type="text"
          class="form-control"
          v-model.trim="form.title"
          placeholder="Пример: Найдите ошибки в следующем коде"
          :class="isTitle ? 'is-invalid' : ''"
        />
        <p v-if="isTitle" class="invalid-feedback">
          Обязательное поле
        </p>
      </div>
      <div class="form-group">
        <label for="text">Текст задачи:</label>
        <textarea
          placeholder="Пример: Продолжаем задачки по С/С++. Что означает ключевое слово volatile и в каких ситуация оно может быть применено?"
          id="text"
          type="text"
          class="form-control"
          v-model.trim="form.text"
          :class="isText ? 'is-invalid' : ''"
          rows="3"
          style="resize: none"
        ></textarea>
        <p v-if="isText" class="invalid-feedback">
          Обязательное поле
        </p>
      </div>
      <div>
        <label for="date">Срок задачи:{{ form.date }}</label>
        <datepicker
          v-model="form.date"
          id="date"
          placeholder="23.10.2020"
          :required="true"
          format="dd-MM-yyyy"
          :language="languages.ru"
          :disabledDates="disabledFn"
        >
        </datepicker>
        <p v-if="isDate" class="invalid-feedback">
          Обязательное поле
        </p>
      </div>
      <div class="actions">
        <button
          type="button"
          class="btn btn-outline-dark"
          @click="$emit('close')"
        >
          Отмена
        </button>
        <button
          type="submit"
          class="btn btn-dark"
          @click.prevent="updateTask"
          v-if="form.title && form.text"
        >
          Редактировать
        </button>
        <button
          type="submit"
          class="btn btn-dark"
          @click.prevent="addTask"
          v-else
        >
          Добавить задачу
        </button>
      </div>
    </form>
  </modal>
</template>

<script>
import Datepicker from "vuejs-datepicker";
import * as lang from "vuejs-datepicker/src/locale";

import { mapGetters, mapMutations, mapActions } from "vuex";

export default {
  name: "add-modal",
  components: { Datepicker },
  props: {
    getOneTodo: {
      type: Object,
    },
  },
  data() {
    return {
      form: {
        title: "",
        text: "",
        date: "",
      },
      errors: [],
      isTitle: false,
      isText: false,
      isDate: false,
      languages: lang,
      disabledFn: {
        customPredictor(date) {
          if (date.getDate() < new Date().getDate()) {
            return true;
          }
        },
      },
    };
  },
  mounted() {
    this.$modal.show("add-modal");
    if (this.getOneTodo) {
      this.form.title = this.getOneTodo.title;
      this.form.text = this.getOneTodo.text;
      this.form.date = this.getOneTodo.date;
    }
  },
  computed: {
    ...mapGetters({
      getAllToDo: "getAllToDo",
    }),
    to_do_list() {
      return this.getAllToDo;
    },
  },
  methods: {
    ...mapMutations(["ADD_TO_DO"]),
    ...mapActions(['updateToDo']),
    close() {
      this.$emit("close");
    },
    formSubmit() {
      if (!this.form.title) {
        this.isTitle = true;
      } else {
        this.isTitle = false;
      }
      if (!this.form.text) {
        this.isText = true;
      } else {
        this.isText = false;
      }
      if (!this.form.date) {
        this.isDate = true;
      } else {
        this.isDate = false;
      }
    },
    addTask() {
      if (this.form.title && this.form.text && this.form.date) {
        this.$load(async () => {
          this.ADD_TO_DO({
            id: new Date().getTime(),
            title: this.form.title,
            text: this.form.text,
            date: this.form.date.toString(),
            check: false,
          });

          //   console.log(this.to_do_list);
          this.$emit("close");
        });
      }
    },
    updateTask() {
      if (this.form.title && this.form.text && this.form.date) {
        this.$load(async () => {
          this.updateToDo({
            id: this.getOneTodo.id,
            title: this.form.title,
            text: this.form.text,
            date: this.form.date.toString(),
            check: false,
          });

          this.$emit("close");
        });
      }
    },
   
  },
};
</script>

<style lang="scss">
.add-modal {
  padding: 30px 40px;
  overflow-y: scroll;
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
      font-family: Gilroy;
      font-size: 16px;
      line-height: 30px;
      letter-spacing: 0.04em;
      color: #1f3f68;
    }
    input {
      width: 100%;
      height: 60px;
      padding: 21px;
      border: 1px solid #356ead;
      box-sizing: border-box;
      border-radius: 10px;
      font-family: Gilroy;
      font-size: 16px;
      line-height: 30px;
      letter-spacing: 0.04em;
      color: #1f3f68;
    }
    textarea {
      height: 144px;
      padding: 21px;
      border: 1px solid #356ead;
      box-sizing: border-box;
      border-radius: 10px;
      font-family: Gilroy;
      font-size: 16px;
      line-height: 30px;
      letter-spacing: 0.04em;
      color: #1f3f68;
    }
    .actions {
      margin-top: 32px;
      display: flex;
      align-items: baseline;
      a {
        color: #eb5804;
      }
      button {
        margin-left: 10px;
        height: 60px;
        filter: drop-shadow(5px 10px 20px rgba(16, 112, 177, 0.2));
        box-shadow: 5px 20px 50px rgba(16, 112, 177, 0.2);
        border-radius: 10px;
        &:first-of-type {
          margin-right: auto;
        }
      }
    }
  }
}
</style>
