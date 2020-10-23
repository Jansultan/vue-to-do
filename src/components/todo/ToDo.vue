<template>
  <section class="section">
    <h1>Планировщик задач</h1>
    <input
      type="text"
      class="search"
      v-model="search"
      placeholder="Поиск: Заголовок, Текст задачи"
    />
    <div class="operation">
      <button @click="openModal">
        Добавить задачу
      </button>
    </div>
    <div class="head_search">
      <button
        :class="isActive == true ? 'active' : ''"
        @click="(isActive = true), (pageNumber = 1)"
      >
        Текущие задачи
      </button>
      <button
        :class="isActive == !true ? 'active' : ''"
        @click="(isActive = false), (pageNumber = 1)"
      >
        Выполненные
      </button>
    </div>
    <div class="tabel_header" style="margin-bottom: 22px;">
      <div class="text_header title">Заголовок</div>
      <div class="text_header dscr">Текст задачи</div>
      <div class="text_header date">Срок выполнения</div>
      <div class="text_header buttons">Действие</div>
    </div>
    <div class="tasks" v-if="isActive">
      <to-do-list
        v-for="(row_todo, index) in paginatedTodo"
        :key="index"
        :row_todo_list="row_todo"
      />
    </div>
    <div class="tasks" v-if="!isActive">
      <to-do-list
        v-for="row_todo in paginatedTodo"
        :key="row_todo.id"
        :row_todo_list="row_todo"
      />
    </div>

    <div class="section__pagination">
      <div class="page" v-if="hasPrev()" @click="prevPage()">
        Пред.
      </div>
      <div class="page" v-if="hasFirst()" @click="pageClick(1)">
        1
      </div>
      <div class="page_around" v-if="hasFirst()">
        ...
      </div>
      <div
        class="page"
        v-for="page in pages"
        :key="page"
        :class="{ page__selected: pageNumber == page }"
        @click="pageClick(page)"
      >
        {{ page }}
      </div>
      <div class="page_around" v-if="hasLast()">
        ...
      </div>
      <div class="page" v-if="hasLast()" @click="pageClick(pagesCount)">
        {{ pagesCount }}
      </div>
      <div class="page" v-if="hasNext()" @click="nextPage()">
        След.
      </div>
    </div>

    <AddToDoModal v-if="isModalOpen" @close="isModalOpen = false" />
  </section>
</template>

<script>
import ToDoList from "./ToDoList";
import AddToDoModal from "./AddToDoModal";
// import to_do_list from "../../mocks/to_do_list";
import { mapGetters, mapActions } from "vuex";

export default {
  components: { ToDoList, AddToDoModal },
  props: {
    pageRanger: {
      type: Number,
      default: 2,
    },
  },
  data() {
    return {
      // to_do_list:[],
      isActive: true,
      isModalOpen: false,
      search: "",
      todoPerPage: 10,
      pageNumber: 1,
    };
  },
  computed: {
    ...mapGetters({
      getAllToDo: "getAllToDo",
    }),
    to_do_list() {
      return this.getAllToDo;
    },
    check_list: function() {
      return [...this.to_do_list].filter((todo) => {
        return todo.check == true;
      });
    },
    uncheck_list: function() {
      return [...this.to_do_list].filter((todo) => {
        return todo.check == false;
      });
    },
    filteredToDo: function() {
      var self = this;
      if (self.isActive) {
        return this.uncheck_list.filter(function(val) {
          return (
            val.title.toLowerCase().indexOf(self.search.toLowerCase()) >= 0 ||
            val.text.toLowerCase().indexOf(self.search.toLowerCase()) >= 0
          );
        });
      } else {
        return this.check_list.filter(function(val) {
          return (
            val.title.toLowerCase().indexOf(self.search.toLowerCase()) >= 0 ||
            val.text.toLowerCase().indexOf(self.search.toLowerCase()) >= 0
          );
        });
      }
    },
    pagesCount() {
      return Math.ceil(this.filteredToDo.length / 10);
    },
    paginatedTodo() {
      let from = (this.pageNumber - 1) * this.todoPerPage;
      let to = from + this.todoPerPage;
      // console.log(this.filteredToDo)
      return this.filteredToDo.slice(from, to);
    },
    rangeStart() {
      var start = this.pageNumber - this.pageRanger;
      return start > 0 ? start : 1;
    },
    rangeEnd() {
      let end = this.pageNumber + this.pageRanger;
      return end < this.pagesCount ? end : this.pagesCount;
    },
    pages() {
      var pages = [];
      for (var i = this.rangeStart; i <= this.rangeEnd; i++) {
        pages.push(i);
      }
      return pages;
    },
  },
  methods: {
    ...mapActions({
      allTodo: "loadToDo",
    }),
    openModal() {
      this.isModalOpen = true;
    },
    pageClick(page) {
      this.pageNumber = page;
    },
    hasPrev() {
      return this.pageNumber > 1;
    },
    hasNext() {
      return this.pageNumber < this.pagesCount;
    },
    prevPage() {
      return (this.pageNumber -= 1);
    },
    nextPage() {
      return (this.pageNumber += 1);
    },
    hasFirst() {
      return this.rangeStart !== 1;
    },
    hasLast() {
      return this.rangeEnd < this.pagesCount;
    },
  },
  async mounted() {
    this.allTodo(1000);
  },
  created() {
    // console.log(this.check_list);
    // console.log(this.uncheck_list);
  },
};
</script>

<style lang="scss" scoped>
.section {
  width: 100%;
  padding: 100px 0;
  display: flex;
  flex-direction: column;
  h1 {
    font-family: Galien;
    font-size: 36px;
    line-height: 42px;
    letter-spacing: 0.04em;
    color: #1f3f68;
    margin-bottom: 42px;
  }

  .operation {
    display: flex;
    justify-content: flex-end;
    margin-bottom: 32px;
    button {
      width: auto;
      height: 72px;
      background: #5a98d0;
      border-radius: 10px;
      border: 1px solid #5a98d0;
      cursor: pointer;
      padding: 0 22px;
      font-family: Gilroy;
      font-size: 16px;
      line-height: 26px;
      text-align: center;
      letter-spacing: 0.04em;
      color: #ffffff;
      margin-right: 22px;
      &:hover {
        filter: drop-shadow(5px 10px 20px rgba(16, 112, 177, 0.2));
      }
    }
  }

  .search {
    width: 100%;
    height: 56px;
    background: #f4f4f4;
    border-radius: 10px;
    background-image: url("../../assets/img/ic_search.svg");
    background-repeat: no-repeat;
    background-position: calc(0% - -25px) calc(100% - 14px);
    padding-left: 72px;
    padding-right: 22px;
    border: 1px solid #f4f4f4;
    margin-bottom: 32px;
    font-family: Gilroy;
    font-size: 16px;
    line-height: 19px;
    color: #1f3f68;
  }

  .head_search {
    width: auto;
    display: flex;
    margin-bottom: 32px;
    button {
      width: auto;
      height: 56px;
      background: #ffffff;
      border-radius: 10px;
      border: 1px solid #5a98d0;
      cursor: pointer;
      padding: 0 22px;
      font-family: Gilroy;
      font-size: 16px;
      line-height: 26px;
      text-align: center;
      letter-spacing: 0.04em;
      color: #5a98d0;
      margin-right: 22px;
      &:hover {
        transition: all 0.5ms;
        background: #5a98d0;
        color: #ffffff;
      }
    }
    button.active {
      transition: all 0.5ms;
      background: #5a98d0;
      color: #ffffff;
      cursor: default;
    }
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
      text-align: center;
    }
  }

  &__pagination {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 30px 0;
    .page_around {
      margin-right: 10px;
      display: flex;
      align-items: center;
    }
    .page {
      padding: 8px;
      border: solid 1px #e7e7e7;
      margin-right: 10px;
      min-width: 40px;
      text-align: center;
      &:hover {
        background: #000000;
        color: #ffffff;
        cursor: pointer;
      }
    }
    .page__selected {
      background: #000000;
      color: #ffffff;
      cursor: default;
    }
  }
}
@media screen and (max-width: 1152px){
  .section{
    padding: 100px 16px 0;
  }
}
@media screen and (max-width: 768px){
 .section .tabel_header .text_header, .section .tabel_body .text_header{
   font-size: 11px;
 }
 .tabel_header .text_inner, .tabel_body .text_inner{
   font-size: 11px;
 }
}
@media screen and (max-width: 425px){
 .section .head_search button{
       font-size: 13px;
 }
}
</style>
