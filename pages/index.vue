<template>
  <div class="center">
    <h1 id="title" class="title">._.</h1>

    <div class="searchbars center">
      <Searchbar v-for="i in searchbars" v-bind:key="i.name" :description="i.description" :searchEngine="defaultSearchEngine" :placeholder="i.placeholder" :isDefault="i.isDefault" :log="i.log" :smartSearch="i.smartSearch" :searchEngines="searchengines" />
    </div>

    <div class="shortcuts center">
      <Shortcut v-for="i in shortcuts" v-bind:key="i.name" :name="i.name" :description="i.description" :url="i.url" :type="i.type" :icon="i.icon" :log="i.log" />
    </div>

  </div>
</template>

<script>
// [TODO] hover component --> description 

export default {
  name: 'IndexPage',
  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      console.log("Geef mij data!");
    }
  },
  data () {
    return {
      // [TODO] get data from file of database --> pak misschien maar gwn file voor dit
      searchbars: [
        {name: 'Smart search', description: 'Useful stuff for me', placeholder: 'Smart Search', isDefault: true, log: true, smartSearch: true},
        {name: 'Stupid search', description: 'Less useful stuff for me', placeholder: 'Stupid Search', isDefault: false, log: true, smartSearch: false},
      ],
      shortcuts: [
        {name: 'Facebook', description: 'Feestboek', url: 'https://facebook.com', type: 'external', icon: 'Facebook', log: true},
        {name: 'Messenger', description: 'Chatding', url: 'https://messenger.com', type: 'external', icon: 'Messenger', log: true},
        {name: 'YouTube', description: 'Filmpjes', url: 'https://youtube.com', type: 'external', icon: 'Youtube', log: true},
        {name: 'Drive', description: 'Cloud files', url: 'https://drive.google.com', type: 'external', icon: 'Drive', log: true},
        {name: 'Mail', description: 'Cloud brieven', url: 'https://mail.google.com', type: 'external', icon: 'Mail', log: true},
        {name: 'Netflix', description: 'Series', url: 'https://netflix.com', type: 'external', icon: 'Netflix', log: true},
        {name: 'Disney+', description: 'Series', url: 'https://disneyplus.com', type: 'external', icon: 'Disney_Plus', log: true},
        {name: 'GitHub', description: 'Dev', url: 'https://github.com', type: 'external', icon: 'Github', log: true}
      ],
      searchengines: [
        {name: 'Google', description: 'Overlord', method: 'GET', queryname: 'q', link:'https://www.google.com/search', icon: 'Google', keywords: ['google']},
        {name: 'Wikipedia', description: 'Knowledge', method: 'GET', queryname: 'search', link: 'https://nl.wikipedia.org/wiki/Special:Search', icon: 'Wikipedia', keywords: ['wikipedia', 'wiki']},
        // [TODO] maps
        // stack overflow
        // [TODO] images
        {name: 'Bol.com', description: 'Packetjes!!!', method: 'GET', queryname: 'searchtext', link: 'https://www.bol.com/nl/nl/s/', icon: 'Bol', keywords: ['bol.com', 'bol']}
      ],
      defaultSearchEngine: 0
    }
  }
}
</script>
