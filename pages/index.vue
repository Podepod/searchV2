<template>
  <div class="center">
    <h1 id="title" class="title">{{face}}</h1>

    <div class="searchbars center">
      <Searchbar v-for="i in searchbars" v-bind:key="i.name" :description="i.description" :searchEngine="defaultSearchEngine" :placeholder="i.placeholder" :isDefault="i.isDefault" :log="i.log" :smartSearch="i.smartSearch" :searchEngines="searchengines" :shortcuts="shortcuts" />
    </div>

    <div class="shortcuts center">
      <Shortcut v-for="i in shortcuts" v-bind:key="i.name" v-if="!i.hidden" :name="i.name" :description="i.description" :url="i.url" :type="i.type" :icon="i.icon" :log="i.log" />
    </div>

    <div class="misc-buttons">
      <ColorThemeSelector />    

      <p class="version">V2.08</p>
    </div>
  </div>
</template>

<script>
import searchbarData from "~/assets/configfiles/searchbars.json";
import shortcutData from "~/assets/configfiles/shortcuts.json";
import searchengineData from "~/assets/configfiles/searchengines.json";
import facesData from "~/assets/configfiles/faces.json";
// [TODO] hover component --> description 

export default {
  name: 'IndexPage',

  methods: {
    isToday(date) {
      const today = new Date();
      const dateobj = new Date(today.getFullYear() + "-" + date);
      return (today.toDateString() === dateobj.toDateString() ? true : false)
    },

    getFace() {
      for (let i = 0; i < facesData.length; i++) {
        if (this.isToday(facesData[i].date)) {
          return facesData[i].face;
        }
      }

      return "._.";
    }
  },

  data () {
    return {
      // [TODO] get data from file of database --> pak misschien maar gwn file voor dit
      searchbars: searchbarData,
      shortcuts: shortcutData,
      searchengines: searchengineData,
      defaultSearchEngine: 0,
      face: this.getFace()
    }
  }
}
</script>
