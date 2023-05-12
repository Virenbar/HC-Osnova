<script setup lang="ts">
const theme = computed(() => useColorMode().preference);
const setTheme = (theme: string) => useColorMode().preference = theme;
</script>
<template>
  <header class="navbar navbar-expand-lg px-3 sticky-top bg-body-secondary">
    <nav class="container">
      <NuxtLink class="navbar-brand mx-auto" to="/">
        ЖК Основа
      </NuxtLink>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
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
        </ul>
      </div>

      <div class="dropdown">
        <button id="dropdownMenuButtonLight" class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
          Тема
        </button>
        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButtonLight">
          <li>
            <button class="dropdown-item" :class="{ active: theme == 'system' }" @click="setTheme('system')">
              Авто
            </button>
          </li>
          <li>
            <hr class="dropdown-divider">
          </li>
          <li>
            <button class="dropdown-item" :class="{ active: theme == 'light' }" @click="setTheme('light')">
              Светлая
            </button>
          </li>
          <li>
            <button class="dropdown-item" :class="{ active: theme == 'dark' }" @click="setTheme('dark')">
              Темная
            </button>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>
