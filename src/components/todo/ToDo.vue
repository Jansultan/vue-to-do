<template>
  <section class="section">
    <h1>Планировщик задач</h1>
    <input type="text" class="search" placeholder="Поиск" />
    <div class="head_search">
      <button class="active">Текущие задачи</button>
      <button>Выполненные</button>
    </div>
    <div class="tabel_header" style="margin-bottom: 22px;">
      <div class="text_header title">Заголовок</div>
      <div class="text_header dscr">Текст задачи</div>
      <div class="text_header date">Срок выполнения</div>
      <div class="buttons"></div>
    </div>
    <div class="tabel_body" v-if="isActive">
      <div class="text_inner title">Заголовок</div>
      <div class="text_inner dscr">Текст задачи</div>
      <div class="text_inner date">Срок выполнения</div>
      <div class="buttons"></div>
    </div>
    <div class="tabel_body" v-if="!isActive">
      <div class="text_inner title">Заголовок 2</div>
      <div class="text_inner dscr">Текст задачи 2</div>
      <div class="text_inner date">Срок выполнения 2</div>
      <div class="buttons"></div>
    </div>
  </section>
</template>

<script>
export default {
    data(){
        return{
            isActive:true
        }
    }
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
    }
  }

  .tabel_header,
  .tabel_body {
    width: auto;
    display: flex;
    .text_header {
      margin-right: 16px;
      white-space: pre-wrap;
      font-family: Gilroy;
      font-size: 16px;
      font-weight: bold;
      line-height: 24px;
      letter-spacing: 0.04em;
      color: #1f3f68;
    }
    .text_inner {
      margin-right: 16px;
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
    }
  }
}
</style>
