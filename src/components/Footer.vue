<template>
  <div class="footer_sections">
    <!-- sec_11 -->
    <section class="sec sec_11">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-md-4">
            <img src="../assets/img/sec_11/books.svg" alt="books" />
          </div>
          <div class="col-md-8">
            <h2>
              Попробуйте Smart Expert в течение <br />
              14 дней абсолютно бесплатно
            </h2>
            <p>
              И Вы ощутите чувство удовлетворения <br />
              от сервиса, который искали.
            </p>
            <a href="" class="btn btn-success">Использовать Бесплатно</a>
          </div>
        </div>
      </div>
    </section>
    <!-- / sec_11 -->
    <!-- sec_12 -->
    <section class="sec sec_12">
      <div class="container">
        <div class="row justify-content-between">
          <div class="col-md-3">
            <h4>Компания</h4>
            <ul>
              <li><a href="#tarifs">Цены</a></li>
              <li><a href="#">О нас</a></li>
              <li><a href="#">База знаний</a></li>
              <li><a href="#" class="d-none">Пробная версия</a></li>
            </ul>
          </div>
          <div class="col-md-3">
            <h4>Продукты</h4>
            <ul>
              <li>
                <a href="#platforma_dlya_obuchenia"
                  >Платформа для онлайн-обучения</a
                >
              </li>
              <li>
                <a href="#marketing_instrument">Инструменты маркетинга</a>
              </li>
              <li>
                <a href="#prodvizhenie_lichnogo_brenda"
                  >Продвижение личного бренда</a
                >
              </li>
              <li><a href="#globalnyi_poisk">Глобальный поиск экспертов</a></li>
              <li>
                <a href="#delovaya_socialnaya_set">Деловая социальная сеть</a>
              </li>
            </ul>
          </div>
          <div class="col-md-3">
            <h4>Контактная информация</h4>

            <table class="table table-borderless">
              <tr>
                <td>Телефон</td>
                <td><a href="tel:380968827050">+380 96 882 70 50</a></td>
              </tr>
              <tr>
                <td>Мейл</td>
                <td>
                  <a href="mailto:office@smartexpert.net"
                    >office@smartexpert.net</a
                  >
                </td>
              </tr>
            </table>
          </div>
          <div class="col-md-3 d-none">
            <div class="form-group">
              <select class="form-control" id="lang">
                <option selected>Russian</option>
                <option>Ukraine</option>
                <option>Engish</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- / sec_12 -->
    <!-- footer -->
    <footer class="sec">
      <div class="container">
        <nav>
          <span>SmartExpert Copyright 2019</span>
          <a href="">Договор публичной офферты</a>
          <a href="">Политика конфедициальности</a>
        </nav>
      </div>
    </footer>
    <!-- / footer -->
  </div>
</template>

<script>
export default {
  name: "Footer"
};
</script>
