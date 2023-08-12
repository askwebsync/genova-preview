<template>
  <div
    v-if="showComponent"
    class="fixed inset-x-0 bottom-0 z-custom bg-white shadow-card-items py-4 flex flex-col justify-center sm:py-8 w-full"
  >
    <div class="container mx-auto px-4">
      <div class="flex gap-6 justify-between items-center">
        <h1 class="text-xs md:text-sm lg:text-base">
          This website uses cookies to ensure you get the best experience on our
          website
        </h1>
        <div class="flex gap-2">
          <button
            class="bg-white px-4 py-2 rounded-lg focus:outline-none text-black text-xs md:text-sm lg:text-base"
            @click="declineConsent"
          >
            Decline
          </button>
          <button
            @click="giveConsent"
            class="bg-yellow-500 px-4 py-2 rounded-lg focus:outline-none text-black text-xs md:text-sm lg:text-base"
          >
            Accept Cookies
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AllowCookies",
  data() {
    return {
      showComponent: true,
    };
  },
  methods: {
    giveConsent() {
      this.closeComponent();
      this.$matomo.trackEvent("UserAction", "CookiesAccepted");
      this.$matomo.rememberConsentGiven(); // Remember consent
    },
    declineConsent() {
      this.closeComponent();
      this.$matomo.forgetConsentGiven(); // Forget consent
    },
    closeComponent() {
      this.showComponent = false;
    },
  },
};
</script>

<style>
.z-custom {
  z-index: 99999;
}
</style>
