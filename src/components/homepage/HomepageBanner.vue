<template>
  <div class="slideshow-container" ref="slideshow">
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
        <img
          :src="slide.src"
          :alt="slide.alt"
          class="image-css"
          :loading="index === 0 ? 'eager' : 'lazy'"
        />
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
    <div class="controls">
      <!-- Previous Button -->
      <button class="control control-previous" @click="plusSlides(-1)">
        <span class="sr-only">Previous Slide</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
        </svg>
      </button>
      <!-- Next Button -->
      <button class="control control-next" @click="plusSlides(1)">
        <span class="sr-only">Next Slide</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M8.59 16.59L10 18l6-6-6-6-1.41 1.41L13.17 12z" />
        </svg>
      </button>
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
    this.preloadImage(this.slides[0].src); // Preload the first image
  },
  beforeUnmount() {
    clearInterval(this.slideInterval); // Clear the interval when the component is unmounted
  },
  methods: {
    preloadImage(src) {
      const link = document.createElement("link");
      link.rel = "preload";
      link.as = "image";
      link.href = src;
      document.head.appendChild(link);
    },
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

.controls {
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  transform: translateY(-50%);
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 2;
}

.control {
  width: 40px;
  height: 40px;
  background-color: rgba(43, 43, 40, 0.8);
  border: none;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color 0.3s ease;
  padding: 5px;
  margin: 0 25px;
}

.control svg {
  width: 28px;
  height: 28px;
  fill: #ffffff;
}

.control:hover {
  background-color: #b28620;
}
</style>
