<template>
  <footer class="footer">
    <div class="footer_inner">
      <div class="block1">
        <span class="text_white20">Тест 2</span>
        <span class="text_white16">Тестовый текст</span>
        <span class="text_white16">Тестовый текст</span>
        <span class="text_white16">Тестовый текст</span>
        <span class="text_white16">Тестовый текст</span>
      </div>
      <div class="block1">
        <span class="text_white20">Тест 3</span>
        <span class="text_white16">Тестовый текст</span>
        <span class="text_white16">Тестовый текст</span>
        <span class="text_white16">Тестовый текст</span>
      </div>
      <div class="block1">
        <span class="text_white20">Тест 4</span>
        <span class="text_white16">Тестовый текст</span>
        <span class="text_white16">Тестовый текст</span>
        <span class="text_white16">Тестовый текст</span>
        <span class="text_white16">Тестовый текст</span>
      </div>
      <div class="block1">
        <span class="text_white20">Контакты</span>
        <span class="text_white16">+7(777)777 77 77</span>
        <span class="text_white16">test@test.kz</span>
      </div>
    </div>
  </footer>
</template>

<script></script>

<style lang="scss" scoped>
.footer {
  background: #316099;
  width: 100%;
  .footer_inner {
    width: 1120px;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    padding: 22px;
    justify-content: center;
    -webkit-box-flex: 0;
    -ms-flex: 0 0 auto;
    flex: 0 0 auto;
    .block1 {
      width: auto;
      margin-right: 22px;
      display: flex;
      flex-direction: column;
      margin-right: 20px;
      .text_white20 {
        font-family: Gilroy;
        font-size: 20px;
        line-height: 30px;
        letter-spacing: 0.05em;
        color: #ffffff;
        margin-bottom: 32px;
      }
      .text_white16 {
        font-family: Gilroy;
        font-size: 16px;
        line-height: 26px;
        letter-spacing: 0.05em;
        color: #ffffff;
        margin-bottom: 16px;
        cursor: pointer;
      }
    }
  }
}
</style>
