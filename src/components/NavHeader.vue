<template>
<div>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Joyful Music</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <router-link to="/" class="nav-link">
          HOME
          <span class="sr-only">(current)</span>
        </router-link>
      </li>
      <li class="nav-item">
        <router-link to="/about" class="nav-link">
          ABOUT
        </router-link>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">CATEGORY </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">Guitar</a>
          <a class="dropdown-item" href="#">Bass</a>
          <a class="dropdown-item" href="#">Drum</a>
          <a class="dropdown-item" href="#">Vocal</a>
          <a class="dropdown-item" href="#">Piano</a>
          <a class="dropdown-item" href="#">Dance</a>
          <a class="dropdown-item" href="#">DJ</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Others</a>
        </div>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="#">Q&A</a>
      </li>
    </ul>
    <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
    <span style="font-size:2em; margin-left:10px">
      <i class="fas fa-video"></i>
    </span>
    <span style="font-size:2em; margin-left: 10px">
      <i class="fas fa-user-circle"></i>
    </span>
  </div>
</nav>
</div>
</template>

<script>

export default {
  name: 'NavHeader'
}

</script>

<style scoped>
</style>
