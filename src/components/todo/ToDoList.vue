<template>
  <div class="tabel_body">
    <div class="text_inner title">{{ row_todo_list.title }}</div>
    <div class="text_inner dscr">{{ row_todo_list.text }}</div>
    <div class="text_inner date">{{ row_todo_list.date }}</div>
    <div class="buttons">
      <button v-if="!row_todo_list.check" @click="openModal(row_todo_list)">
        <i class="material-icons">edit</i>
      </button>
      <button><i class="material-icons" @click.prevent="deleteToDoId(row_todo_list.id)">delete</i></button>
      <button
        v-if="!row_todo_list.check"
        @click.prevent="updateCheck(row_todo_list)"
      >
        <i class="material-icons">done</i>
      </button>
    </div>

    <AddToDoModal
      v-if="isModalOpen"
      :getOneTodo="one_todo"
      @close="isModalOpen = false"
    />
  </div>
</template>

<script>
import AddToDoModal from "./AddToDoModal";
import { mapActions } from "vuex";

export default {
  components: { AddToDoModal },
  props: {
    row_todo_list: {
      type: Object,
      default: () => {
        return {};
      },
    },
  },
  data() {
    return {
      isModalOpen: false,
      one_todo: [],
    };
  },
  methods: {
    ...mapActions(["updateCheckToDo", "deleteToDo"]),
    openModal(arr) {
      this.one_todo = arr;
      this.isModalOpen = true;
    },
    updateCheck(todo) {
      this.$load(async () => {
        this.updateCheckToDo({
          id: todo.id,
          title: todo.title,
          text: todo.text,
          date: todo.date,
          check: true,
        });
      });
    },
    deleteToDoId(id) {
      this.$load(async () => {
        this.deleteToDo(id);
      });
    },
  },
  created() {
    // console.log(this.row_todo_list);
  },
};
</script>

<style lang="scss" scoped>
.tabel_body {
  padding: 16px 0;
  border-top: 1px solid #356ead;
}
.tabel_header,
.tabel_body {
  width: auto;
  display: flex;
  .text_header {
    margin-right: 22px;
    white-space: pre-wrap;
    font-family: Gilroy;
    font-size: 16px;
    font-weight: bold;
    line-height: 24px;
    letter-spacing: 0.04em;
    color: #1f3f68;
  }
  .text_inner {
    margin-right: 22px;
    white-space: pre-wrap;
    font-family: Gilroy;
    font-size: 16px;
    line-height: 26px;
    letter-spacing: 0.04em;
    color: #000000;
  }
  .title {
    width: 20%;
  }

  .dscr {
    width: 35%;
  }

  .date {
    width: 14%;
  }
  .buttons {
    -webkit-box-flex: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 16px;
    button {
      min-width: 42px;
      height: 42px;
      background: #5a98d0;
      color: #ffffff;
      border-radius: 10px;
      border: 1px solid #5a98d0;
      margin-right: 12px;
      display: flex;
      justify-content: center;
      align-items: center;
      &:hover {
        box-shadow: 0px 0px 20px rgba(0, 123, 255, 0.5);
      }
    }
  }
}
</style>
