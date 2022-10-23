<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <HeroRecipe />
  <Recipe />
</template>

<script>
import HeroRecipe from "../components/recipepage/HeroRecipe.vue";
import Recipe from "../components/recipepage/Recipe.vue";

export default {
  // eslint-disable-next-line vue/no-unused-components
  components: { HeroRecipe, Recipe },
  data() {
    return {};
  },
};
</script>
