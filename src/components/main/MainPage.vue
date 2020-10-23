<template>
  <div class="main-page">
    <div class="main_info">
      <div class="info">
        <h1>Цели и задачи создания сайта</h1>
        <h4>
          При создании сайта в первую очередь нужно определиться с целью его
          создания и с задачами, которые сайт должен выполнять. В будущем цели и
          задачи создания сайта помогут определить эффективность разработанного
          проекта
        </h4>
      </div>
      <div class="bg"></div>
    </div>
    <div class="section_2">

      <div class="rect">
        <img src="../../assets/img/1.svg" alt="" />
        <span class="text_blue20"
          >К более конкретным целям разработки можно отнести</span
        >
        <span class="text_blue16"
          >Продажи при помощи сайта; Налаживание обратной связи с клиентами;
          Автоматизация бизнес-процессов компании; Повышение лояльности
          аудитории, узнаваемости компании и другое.
        </span>
      </div>

      <div class="rect">
        <img src="../../assets/img/2.svg" alt="" />
        <span class="text_blue20"
          >К более конкретным целям разработки можно отнести</span
        >
        <span class="text_blue16"
          >Продажи при помощи сайта; Налаживание обратной связи с клиентами;
          Автоматизация бизнес-процессов компании; Повышение лояльности
          аудитории, узнаваемости компании и другое.
        </span>
      </div>

      <div class="rect">
        <img src="../../assets/img/3.svg" alt="" />
        <span class="text_blue20"
          >К более конкретным целям разработки можно отнести</span
        >
        <span class="text_blue16"
          >Продажи при помощи сайта; Налаживание обратной связи с клиентами;
          Автоматизация бизнес-процессов компании; Повышение лояльности
          аудитории, узнаваемости компании и другое.
        </span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.main-page {
  width: 1120px;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  margin: 0 auto;
  padding: 82px 0;

  .main_info {
    width: 100%;
    height: 768px;
    background: linear-gradient(
      0deg,
      #edf5fd 8.84%,
      rgba(152, 195, 232, 0) 31.12%
    );
    position: relative;

    .bg {
      width: 687px;
      height: 580px;
      background-image: url("../../assets/img/bg.svg");
      background-repeat: no-repeat;
      background-size: 100%;
      background-position: center;
      position: absolute;
      right: 0;
      bottom: 60px;
    }

    .info {
      width: 520px;
      display: flex;
      flex-direction: column;
      margin-top: 60px;
      h1 {
        font-family: Galien;
        font-size: 64px;
        line-height: 74px;
        letter-spacing: 0.04em;
        color: #1f3f68;
        margin-bottom: 32px;
      }
      h4 {
        font-family: Gilroy;
        font-size: 16px;
        line-height: 26px;
        letter-spacing: 0.05em;
        color: #1f3f68;
        opacity: 0.6;
      }
    }
  }

  .section_2 {
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin: 120px 0;

    .rect {
      width: 335px;
      background: #ffffff;
      box-shadow: 5px 20px 50px rgba(16, 112, 177, 0.2);
      border-radius: 10px;
      padding: 38px;
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-bottom: 22px;
      img {
        max-width: 192px;
        max-height: 132px;
        margin-bottom: 50px;
      }

      .text_blue20 {
        font-family: Gilroy;
        font-size: 20px;
        line-height: 30px;
        letter-spacing: 0.05em;
        color: #1f3f68;
        margin-bottom: 16px;
      }
      .text_blue16 {
        font-family: Gilroy;
        font-size: 16px;
        line-height: 26px;
        letter-spacing: 0.05em;
        color: #1f3f68;
        opacity: 0.6;
      }
    }
  }
}
</style>
