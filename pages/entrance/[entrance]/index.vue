<script setup lang="ts">
const { params } = useRoute();
const entrance = params.entrance as string;
const E = useData().getEntrance(entrance);

</script>
<template>
  <div>
    <div class="card">
      <div class="card-header">
        Подъезд №{{ entrance }} (Квартир: {{ E.flatCount }})
      </div>
      <div class="card-body">
        <ul>
          <li v-for="F in E.floors" :key="F.title">
            <NuxtLink :to="`./floor/${F.title}`">
              {{ F.title }}: {{ F.flatFirst }} - {{ F.flatLast }}
            </NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
