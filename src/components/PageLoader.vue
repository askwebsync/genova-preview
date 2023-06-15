<template>
  <section>
    <div class="containerr">
      <div class="large-indicator">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
.containerr {
  --action-primary-color: rgba(0, 159, 227, 1);
  --alert-watched-color: rgba(255, 255, 0, 1);
  --warning-new-color: rgba(255, 0, 175, 1);
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
}

.large-indicator {
  display: flex;
}

.large-indicator div {
  height: 1em;
  margin-right: 1em;
  width: 1em;
}

.large-indicator div {
  animation-duration: 0.9s, 2.7s;
  animation-name: blink, rainbow;
  animation-iteration-count: infinite;
}

.large-indicator div:nth-child(2) {
  animation-delay: 0.3s;
}

.large-indicator div:nth-child(3) {
  animation-delay: 0.6s;
}

@keyframes blink {
  0% {
    opacity: 0;
  }

  33% {
    opacity: 1;
  }

  66% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
}

@keyframes rainbow {
  0% {
    background-color: var(--action-primary-color);
  }

  33% {
    background-color: var(--action-primary-color);
  }

  33.5% {
    background-color: var(--warning-new-color);
  }

  66.5% {
    background-color: var(--warning-new-color);
  }

  67% {
    background-color: var(--alert-watched-color);
  }

  100% {
    background-color: var(--alert-watched-color);
  }
}
</style>
