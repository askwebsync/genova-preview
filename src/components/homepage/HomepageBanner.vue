<template>
  <div class="slideshow-container">
    <div v-for="(slide, index) in slides" :key="index" class="mySlides fade">
      <img :src="slide.src" :alt="slide.alt" class="image-css" />
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
    <a class="prev" @click="plusSlides(-1)">&#10094;</a>
    <a class="next" @click="plusSlides(1)">&#10095;</a>
  </div>
</template>

<script>
export default {
  data() {
    return {
      slideIndex: 1,
      slides: [
        { src: "/assets/images/banner/home1.png", alt: "Image1" },
        { src: "/assets/images/banner/home_2.png", alt: "Image2" },
        { src: "/assets/images/banner/home_3.png", alt: "Image3" },
        { src: "/assets/images/banner/home4.png", alt: "Image4" },
      ],
    };
  },
  mounted() {
    this.showSlides();
    this.startAutoSlide();
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
      const slides = document.getElementsByClassName("mySlides");
      const dots = document.getElementsByClassName("dot");
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
      setInterval(() => {
        this.plusSlides(1);
      }, 4000); // Adjust the interval time (in milliseconds) as needed
    },
  },
};
</script>
<style>
.slideshow-container {
  position: relative;
  margin: auto;
  max-height: 400px;
}

.image-css {
  width: 100%;
  height: 400px;
  object-fit: cover;
}

.mySlides {
  display: none;
  width: 100%;
}

.prev,
.next {
  cursor: pointer;
  position: absolute;
  top: 50%;
  width: auto;
  margin-top: -22px;
  padding: 16px;
  color: white;
  font-weight: bold;
  font-size: 18px;
  transition: 0.6s ease;
  border-radius: 0 3px 3px 0;
  user-select: none;
}

.next {
  right: 0;
  border-radius: 3px 0 0 3px;
}

.prev:hover,
.next:hover {
  background-color: rgba(0, 0, 0, 0.8);
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
  height: 10px;
  width: 10px;
  margin: 0 2px;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
  transition: background-color 0.6s ease;
}

.active,
.dot:hover {
  background-color: #717171;
}

.fade {
  animation-name: fade;
  animation-duration: 1.5s;
}

@keyframes fade {
  from {
    opacity: 0.4;
  }

  to {
    opacity: 1;
  }
}
</style>
