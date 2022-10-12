<template>
  <nav class="navbar navbar-expand-lg">
    <div class="container-fluid">
      <a class="navbar-brand d-none" href="#">Navbar</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div
        class="d-md-collapse d-flex navbar-collapse"
        id="navbarSupportedContent"
      >
        <ul class="navbar-nav me-auto m-auto mb-2 mb-lg-0 gap-5">
          <li class="nav-item">
            <a
              class="nav-link px-4 btn btn-primary"
              aria-current="page"
              href="#"
              >Competitions</a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Teams</a>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Others
            </a>
            <ul class="dropdown-menu gap-5">
              <li class=""><a class="dropdown-item" href="#">Action</a></li>
              <li class="">
                <a class="dropdown-item" href="#">Another action</a>
              </li>
              <li class=""><hr class="dropdown-divider" /></li>
              <li class="">
                <a class="dropdown-item" href="#">Something else here</a>
              </li>
            </ul>
          </li>
        </ul>
        <!-- <form class="d-flex" role="search">
          <input
            class="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form> -->
      </div>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style scoped>
@media (min-width: 768px) {
  .gap-5 {
    gap: 3rem;
  }
}
</style>
