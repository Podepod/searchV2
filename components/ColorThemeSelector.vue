<template>
  <div class="colorThemeSelector">
    <div 
      v-if="this.selectorToggle"
      class="colorThemeSelectorOptions"
    >
      <button v-for="t in themes"
          :class="t.active ? 'active' : ''"
          @click="setColorMode(t.name)"
        >
          {{ t.displayName }}
      </button>
    </div>
    <button 
      class="colorThemeSelectorToggle"
      @click="toggleColorThemeSelector()"
    >
      Theme
    </button>
  </div>
</template>
    
  <script>
  import colorThemes from "~/assets/configfiles/colorThemes.json";

  export default {
    mounted() {
      //this.changeActive();    
    },
    methods: {
      toggleColorThemeSelector() {
        this.selectorToggle = !this.selectorToggle;
        
        if (this.selectorToggle) {
          this.timeout = setTimeout(this.closeColorThemeSelector, 3000);
        } else {
          clearTimeout(this.timeout);
        }
      },
      closeColorThemeSelector() {
        this.selectorToggle = false;
        clearTimeout(this.timeout);
        this.timeout = null;
      },
      setColorMode(theme) {
        this.$colorMode.preference = theme;
        this.changeActive();
        this.closeColorThemeSelector();
      },
      changeActive() {
        for (var t in colorThemes) {
          colorThemes[t].active = (colorThemes[t].name === this.$colorMode.preference ? true : false)
        }

        console.log(colorThemes)
      }
    },

    data () {
      return {
        themes: colorThemes,
        selectorToggle: false,
        timeout: null,
      }
    }
  }
  </script>