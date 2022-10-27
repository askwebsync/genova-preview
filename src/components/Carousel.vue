<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="carousel">
    <slot :currentSlide="currentSlide" />

    <!-- Navigation -->
    <div v-if="navEnabled" class="navigate">
      <div class="toggle-page float-left">
        <i @click="prevSlide" class="fas fa-chevron-left"></i>
      </div>
      <div class="toggle-page float-right right">
        <i @click="nextSlide" class="fas fa-chevron-right"></i>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
export default {
  props: ["startAutoPlay", "timeout", "navigation"],
  setup(props) {
    const currentSlide = ref(1);
    const getSlideCount = ref(null);
    const autoPlayEnabled = ref(
      props.startAutoPlay === undefined ? true : props.startAutoPlay
    );
    const timeoutDuration = ref(
      props.timeout === undefined ? 6000 : props.timeout
    );
    const navEnabled = ref(
      props.navigation === undefined ? true : props.navigation
    );

    // next slide
    const nextSlide = () => {
      if (currentSlide.value === getSlideCount.value) {
        currentSlide.value = 1;
        return;
      }
      currentSlide.value += 1;
    };

    // prev slide
    const prevSlide = () => {
      if (currentSlide.value === 1) {
        currentSlide.value = 1;
        return;
      }
      currentSlide.value -= 1;
    };

    const goToSlide = (index) => {
      currentSlide.value = index + 1;
    };

    // autoplay
    const autoPlay = () => {
      setInterval(() => {
        nextSlide();
      }, timeoutDuration.value);
    };

    if (autoPlayEnabled.value) {
      autoPlay();
    }

    onMounted(() => {
      getSlideCount.value = document.querySelectorAll(".slide").length;
    });

    return {
      currentSlide,
      nextSlide,
      prevSlide,
      getSlideCount,
      goToSlide,
      navEnabled,
    };
  },
};
</script>

<style scoped>
.navigate {
  padding: 0px;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.right {
  justify-content: flex-end;
  place-content: flex-end;
}
.navigate .toggle-page {
  display: flex;
  flex: 1;
}
.navigate i {
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  width: 25px;
  height: 30px;
  background-color: goldenrod;
  color: #fff;
}
/* .pagination {
  position: absolute;
  bottom: 24px;
  width: 100%;
  display: flex;
  gap: 14px;
  justify-content: center;
  align-items: center;
}
.pagination span {
  cursor: pointer;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #fff;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
}
.pagination .active {
  background-color: #6347c7;
} */
</style>
