<template>
  <div
    class="slideshow-container"
    ref="slideshow"
    @mousedown="mouseDown"
    @mouseup="mouseUp"
    @mouseleave="mouseLeave"
  >
    <div
      v-for="(slide, index) in slides"
      :key="index"
      class="mySlides"
      ref="slide"
      @touchstart="touchStart"
      @touchmove="touchMove"
      @touchend="touchEnd"
    >
      <div class="image-container">
        <img :src="slide.src" :alt="slide.alt" class="image-css" />
      </div>
    </div>
    <div class="dot-container">
      <span
        v-for="(slide, index) in slides"
        :key="index"
        class="dot"
        @click="currentSlide(index + 1)"
        :class="{ active: index + 1 === slideIndex }"
      ></span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      slideIndex: 1,
      slides: [
        { src: "/assets/images/banner/Homepage/3b.jpg", alt: "Image1" },
        { src: "/assets/images/banner/Homepage/4b.jpg", alt: "Image2" },
        { src: "/assets/images/banner/Homepage/5b.jpg", alt: "Image3" },
        { src: "/assets/images/banner/Homepage/7b.jpg", alt: "Image4" },
      ],
      slideInterval: null, // Store the interval ID
      touchStartX: 0,
      touchEndX: 0,
      touchThreshold: 50, // Minimum distance to trigger a swipe
      isMouseDown: false,
      mouseDownX: 0,
    };
  },
  mounted() {
    this.showSlides();
    this.startAutoSlide();
  },
  beforeUnmount() {
    clearInterval(this.slideInterval); // Clear the interval when the component is unmounted
  },
  methods: {
    plusSlides(n) {
      this.showSlides((this.slideIndex += n));
    },
    currentSlide(n) {
      this.showSlides((this.slideIndex = n));
    },
    showSlides(n) {
      let i;
      const slides = this.$refs.slide;
      const dots = document.getElementsByClassName("dot");
      if (slides.length === 0 || dots.length === 0) {
        return; // Return if the elements don't exist
      }
      if (n > slides.length) {
        this.slideIndex = 1;
      }
      if (n < 1) {
        this.slideIndex = slides.length;
      }
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
      }
      slides[this.slideIndex - 1].style.display = "block";
      dots[this.slideIndex - 1].className += " active";
    },
    startAutoSlide() {
      this.slideIndex = 1;
      this.slideInterval = setInterval(() => {
        this.plusSlides(1);
      }, 5000);
    },
    touchStart(e) {
      this.touchStartX = e.touches[0].clientX;
    },
    touchMove(e) {
      this.touchEndX = e.touches[0].clientX;
    },
    touchEnd() {
      const distance = this.touchEndX - this.touchStartX;
      if (distance > this.touchThreshold) {
        this.plusSlides(-1); // Swipe to the right
      } else if (distance < -this.touchThreshold) {
        this.plusSlides(1); // Swipe to the left
      }
    },
    mouseDown(e) {
      this.isMouseDown = true;
      this.mouseDownX = e.clientX;
    },
    mouseUp(e) {
      if (this.isMouseDown) {
        const distance = e.clientX - this.mouseDownX;
        if (distance > this.touchThreshold) {
          this.plusSlides(-1); // Swipe to the right
        } else if (distance < -this.touchThreshold) {
          this.plusSlides(1); // Swipe to the left
        }
      }
      this.isMouseDown = false;
    },
    mouseLeave() {
      this.isMouseDown = false;
    },
  },
};
</script>

<style scoped>
.slideshow-container {
  position: relative;
  margin: auto;
  overflow: hidden;
}

.image-container {
  position: relative;
  height: 500px;
  transition: transform 0.6s ease;
}

@media only screen and (max-width: 600px) {
  .image-container {
    position: relative;
    height: 400px;
    transition: transform 0.6s ease;
  }
}
.image-css {
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 1;
}

.mySlides {
  display: none;
  width: 100%;
}

.dot-container {
  text-align: center;
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
}

.dot {
  cursor: pointer;
  height: 12px;
  width: 12px;
  margin: 0 6px;
  background: #c79e2a;
  border: 1px solid #ffffff;
  box-shadow: 0px 0px 2px #000000;
  border-radius: 20px;
  display: inline-block;
  transition: background-color 0.6s ease;
}

.active,
.dot:hover {
  background-color: #717171;
}
</style>
