<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div><HeroContact /> <Contact /></div>
</template>

<script>
import Contact from "../components/contactpage/Contact.vue";
import HeroContact from "../components/contactpage/HeroContact.vue";

export default {
  name: "ContactPage",
  components: { Contact, HeroContact },
};
</script>
