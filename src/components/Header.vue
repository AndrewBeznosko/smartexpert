<template>
  <nav class="navbar navbar-expand-md fixed-top">
    <router-link to="/" class="navbar-brand"
      ><img src="@/assets/img/logo.svg" alt=""
    /></router-link>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarsExampleDefault"
      aria-controls="navbarsExampleDefault"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon">
        <img src="@/assets/img/nav/burger.svg" alt="burger" />
      </span>
    </button>

    <div class="collapse navbar-collapse" id="navbarsExampleDefault">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item dropdown">
          <a
            class="nav-link dropdown-toggle"
            href="#"
            id="dropdown01"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
            >Продукты <img src="@/assets/img/nav/arrow.svg" alt="arrow"
          /></a>
          <div class="dropdown-menu" aria-labelledby="dropdown01">
            <a class="dropdown-item" href="#platforma_dlya_obuchenia"
              >Платформа для онлайн-обучения</a
            >
            <a class="dropdown-item" href="#marketing_instrument"
              >Инструменты маркетинга</a
            >
            <a class="dropdown-item" href="#prodvizhenie_lichnogo_brenda"
              >Продвижение личного бренда</a
            >
            <a class="dropdown-item" href="#globalnyi_poisk"
              >Глобальный поиск экспертов</a
            >
            <a class="dropdown-item" href="#delovaya_socialnaya_set"
              >Деловая социальная сеть</a
            >
          </div>
        </li>
        <li class="nav-item active d-none">
          <a class="nav-link" href="#">Расписание</a>
        </li>
        <li class="nav-item">
          <router-link to="/producing" class="nav-link"
            >Продюсирование</router-link
          >
        </li>
        <li class="nav-item">
          <a class="nav-link" href="https://p.smartexpert.net/author-rating"
            >Наши эксперты</a
          >
        </li>
        <li class="nav-item">
          <router-link to="/product-prices" class="nav-link">Цены</router-link>
        </li>
      </ul>
      <form class="form-inline my-2 my-lg-0">
        <a href="#" class="btn btn-success-1 my-2 my-sm-0 mr-sm-2 d-none"
          >Пробная версия</a
        >
        <a
          href="https://p.smartexpert.net/login"
          class="btn btn-success-2 my-2 my-sm-0"
          >Войти</a
        >
      </form>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Header"
};
</script>
