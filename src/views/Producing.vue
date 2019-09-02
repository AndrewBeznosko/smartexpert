<template>
  <div class="producing_page">
    <!-- sec_banner -->
    <section class="sec sec_banner small">
      <div class="container">
        <div class="row">
          <div class="col-md-7">
            <h1>Продюссирование</h1>
            <p>
              Продюссируем звёзд, блогеров и лидеров мнений. <br />
              Упаковывем курсы полнотсью под ключ!
            </p>
          </div>
          <div class="col-md-5 img_wrapp">
            <img src="../assets/img/banners/producing.svg" />
          </div>
        </div>
      </div>
    </section>
    <!-- /sec_banner -->
    <!-- sec_5 -->
    <section class="sec sec_5">
      <div class="container">
        <img
          alt=""
          class="abs_pic star_green"
          src="../assets/img/abs_pic/star_green.svg"
        />
        <img
          alt=""
          class="abs_pic star_orange"
          src="../assets/img/abs_pic/star_orange.svg"
        />
        <img
          alt=""
          class="abs_pic star_blue"
          src="../assets/img/abs_pic/star_blue.svg"
        />
        <img
          alt=""
          class="abs_pic circle_orange"
          src="../assets/img/abs_pic/circle_orange.svg"
        />
        <img
          alt=""
          class="abs_pic dubl_line"
          src="../assets/img/abs_pic/dubl_line.svg"
        />
        <img
          alt=""
          class="abs_pic stone_red"
          src="../assets/img/abs_pic/stone_red.svg"
        />
        <div id="produsirovanie" class="row">
          <div class="col-12">
            <div class="sec_title">
              <img
                src="../assets/img/sec_4/title_label.svg"
                alt="title_label"
              />
              <h2>Продюсируем звёзд, блогеров и лидеров мнений - под ключ!</h2>
              <p>Делаем все сами под ключ!</p>
            </div>
          </div>
        </div>
        <div
          class="row align-items-center justify-content-between flex-column-reverse flex-md-row"
        >
          <div class="col-md-5">
            <div class="media">
              <div class="icon icon_1">
                <img src="../assets/img/sec_5/icon_1.svg" alt="icon_1" />
              </div>
              <p>
                Создадим и упакуем <br />
                образовательный <br />
                продукт
              </p>
            </div>
            <div class="media">
              <div class="icon icon_2">
                <img src="../assets/img/sec_5/icon_2.svg" alt="icon_2" />
              </div>
              <p>
                Настроим весь маркетинг <br />
                и продвинем продукт на <br />
                Вашу аудиторию
              </p>
            </div>
            <div class="media">
              <div class="icon icon_3">
                <img src="../assets/img/sec_5/icon_3.svg" alt="icon_3" />
              </div>
              <p>
                Организуем продажи <br />
                и обеспечим Вас <br />
                прибылью
              </p>
            </div>
          </div>
          <div class="col-md-7">
            <div class="embed-responsive embed-responsive-16by9">
              <iframe
                class="embed-responsive-item"
                src="https://www.youtube.com/embed/vMW2jl241QY"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- / sec_5 -->
    <!-- sec_6 -->
    <section class="sec sec_6">
      <div class="container">
        <img
          alt=""
          class="abs_pic circle"
          src="../assets/img/abs_pic/circle.svg"
        />
        <img
          alt=""
          class="abs_pic dubl_stone"
          src="../assets/img/abs_pic/dubl_stone.svg"
        />
        <img
          alt=""
          class="abs_pic dubl_stone_2"
          src="../assets/img/abs_pic/dubl_stone.svg"
        />
        <h2 class="second_title text-center">Наши звезды</h2>
        <div class="row">
          <div class="col-md-4">
            <div class="card_profile">
              <div
                class="icon"
                :style="{
                  'background-image':
                    'url(' + require('../assets/img/sec_6/port_1.jpg') + ')'
                }"
              ></div>
              <h3>Константин Лашкевич</h3>
              <p>
                Эксперт по управлению. Автор методологии “Позитивный менеджмент“
              </p>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card_profile">
              <div
                class="icon"
                :style="{
                  'background-image':
                    'url(' + require('../assets/img/sec_6/port_2.jpg') + ')'
                }"
              ></div>
              <h3>Ицхак Пинтосевич</h3>
              <p>Эксперт №1 в СНГ по мотивации и раскрытию потенциала</p>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card_profile">
              <div
                class="icon"
                :style="{
                  'background-image':
                    'url(' + require('../assets/img/sec_6/port_3.jpg') + ')'
                }"
              ></div>
              <h3>Айше Борсеитова</h3>
              <p>
                Школа английского языка WOW-EFFECT. Автор уникальной методики
                обучения.
              </p>
            </div>
          </div>
          <div class="col-12 text-center">
            <a href="#" class="btn btn-success">Получить предложение</a>
          </div>
        </div>
      </div>
    </section>
    <!-- / sec_6 -->
    <!-- sec_latest_events -->
    <section class="sec sec_latest_events">
      <div class="container">
        <div class="sec_title">
          <img
            src="@/assets/img/sec_latest_events/title_label.svg"
            alt="title_label"
          />
          <h2>Последние события</h2>
        </div>
        <div class="row justify-content-between">
          <div class="col-md-6 card_wrapp">
            <div class="card">
              <div class="embed-responsive embed-responsive-16by9">
                <iframe
                  src="https://www.youtube.com/embed/ZdODCz6y0kE"
                  frameborder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
              <p>Рассказиваю откуда берется силы для достижения целей</p>
            </div>
          </div>
          <div class="col-md-6 card_wrapp">
            <div class="card">
              <div class="embed-responsive embed-responsive-16by9">
                <iframe
                  src="https://www.youtube.com/embed/ZdODCz6y0kE"
                  frameborder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
              <p>
                Все бизнесы рано или поздно достигают потолка роста, как его
                пробить?
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- / sec_latest_events -->
  </div>
</template>

<script>
export default {
  name: "producing"
};
</script>
