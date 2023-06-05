<template>
  <div class="colorThemePicker">
    <button :class="this.$colorMode.preference === 'system' ? 'active': ''" @click="setColorMode('system')">
      <img src="/images/color_themes_svg/system.svg" alt="" />
    </button>
    <button :class="this.$colorMode.preference === 'dark' ? 'active': ''" @click="setColorMode('dark')">
      <img src="/images/color_themes_svg/moon.svg" alt="" />
    </button>
    <button :class="this.$colorMode.preference === 'light' ? 'active': ''" @click="setColorMode('light')">
      <img src="/images/color_themes_svg/sun.svg" alt="" />
    </button>
    <button :class="this.$colorMode.preference === 'night-blue' ? 'active': ''" @click="setColorMode('night-blue')">
      <img src="/images/color_themes_svg/blue-night.svg" alt="" />
    </button>
    <button :class="this.$colorMode.preference === 'light-high-contrast' ? 'active': ''" @click="setColorMode('light-high-contrast')">
      <img src="/images/color_themes_svg/blue-night.svg" alt="" />
    </button>
    <button :class="this.$colorMode.preference === 'dark-high-contrast' ? 'active': ''" @click="setColorMode('dark-high-contrast')">
      <font-awesome-icon :icon="['fas', 'home']" />
    </button>
  </div>
</template>
  
<script>
export default {
  methods: {
    setColorMode(theme) {
      this.$colorMode.preference = theme;
    }
  },
}
</script>
  