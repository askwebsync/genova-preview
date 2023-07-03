<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <HeroAbout />
  <About />
</template>

<script>
import About from "../components/aboutus/About.vue";
import HeroAbout from "../components/aboutus/HeroAbout.vue";

export default {
  name: "AboutPage",
  components: { About, HeroAbout },
};
</script>
