<template>
  <div class="text-center">
    <div class="glitch-wrapper">
      <h1 class="glitch" data="404">
        404
      </h1>
    </div>
    <p><strong>Страница не найдена :(</strong></p>
    <p>Запрошенная страница не найдена.</p>
  </div>
</template>
<style scoped lang="scss">
/*
Glitch effect by Fabio
https://freefrontend.com/css-text-glitch-effects/
https://codepen.io/fabiowallner/pen/ozZoYo
*/

.glitch-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
}

.glitch {
  position: relative;
}

h1.glitch {
  font-weight: 800;
  font-size: 6em;
  letter-spacing: -1px;
}

.glitch::before,
.glitch::after {
  content: attr(data);
  position: absolute;
  background: var(--bs-body-bg);
  overflow: hidden;
  top: 0;
}

.glitch::before {
  left: 3px;
  text-shadow: -2px 0 red;
  animation: glitch-animation-1 2s linear infinite alternate-reverse;
}

.glitch::after {
  left: -3px;
  text-shadow: -2px 0 blue;
  animation: glitch-animation-2 2s linear infinite alternate-reverse;
}

@keyframes glitch-animation-1 {
  $steps: 20;

  @for $i from 0 through $steps {
    #{percentage($i*(calc(1/$steps)))} {
      clip: rect(random(150)+px, auto, random(150)+px, 0px);
    }
  }
}

@keyframes glitch-animation-2 {
  $steps: 20;

  @for $i from 0 through $steps {
    #{percentage($i*(calc(1/$steps)))} {
      clip: rect(random(150)+px, auto, random(150)+px, 0px);
    }
  }
}
</style>
