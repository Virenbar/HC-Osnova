<script setup lang="ts">
useFocusReset();
const theme = computed(() => useColorMode().preference);
const setTheme = (theme: string) => useColorMode().preference = theme;
</script>
<template>
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
</template>
