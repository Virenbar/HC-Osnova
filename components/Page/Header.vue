<template>
  <header class="navbar navbar-expand-lg px-3 sticky-top bg-body-secondary">
    <nav class="container">
      <NuxtLink class="navbar-brand mx-auto" to="/">
        ЖК Основа
      </NuxtLink>
      <button
        class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar" aria-controls="navbar" aria-expanded="false"
        aria-label="Toggle navigation">
        <span class="navbar-toggler-icon" />
      </button>

      <div id="navbar" class="collapse navbar-collapse">
        <ul class="navbar-nav me-auto">
          <li class="nav-item">
            <NuxtLink class="nav-link" :to="`/entrance/`">
              Подъезды
            </NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink class="nav-link" to="/parking/">
              Паркинг
            </NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink class="nav-link" to="/document/">
              Документы
            </NuxtLink>
          </li>
        </ul>
        <PageTheme />
      </div>
    </nav>
  </header>
</template>
