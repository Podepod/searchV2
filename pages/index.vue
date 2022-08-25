<template>
  <div class="center">
    <h1 id="title" class="title">._.</h1>

    <div class="searchbars center">
      <Searchbar v-for="i in searchbars" v-bind:key="i.name" :description="i.description" :searchEngine="defaultSearchEngine" :placeholder="i.placeholder" :isDefault="i.isDefault" :log="i.log" :smartSearch="i.smartSearch" :searchEngines="searchengines" :shortcuts="shortcuts" />
    </div>

    <div class="shortcuts center">
      <Shortcut v-for="i in shortcuts" v-bind:key="i.name" v-if="!i.hidden" :name="i.name" :description="i.description" :url="i.url" :type="i.type" :icon="i.icon" :log="i.log" />
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
        {name: 'Facebook', description: 'Feestboek', url: 'https://facebook.com', type: 'external', icon: 'Facebook', log: true, hidden: false, keywords: ['facebook', 'face', 'feestboek', 'fb']},
        {name: 'Messenger', description: 'Chatding', url: 'https://messenger.com', type: 'external', icon: 'Messenger', log: true, hidden: false, keywords: ['messenger']},
        {name: 'YouTube', description: 'Filmpjes', url: 'https://youtube.com', type: 'external', icon: 'Youtube', log: true, hidden: false, keywords: ['youtube', 'yt']},
        {name: 'Drive', description: 'Cloud files', url: 'https://drive.google.com', type: 'external', icon: 'Drive', log: true, hidden: false, keywords: ['drive', 'google drive']},
        {name: 'Mail', description: 'Cloud brieven', url: 'https://mail.google.com', type: 'external', icon: 'Mail', log: true, hidden: false, keywords: ['mail', 'gmail']},
        {name: 'Netflix', description: 'Series', url: 'https://netflix.com', type: 'external', icon: 'Netflix', log: true, hidden: false, keywords: ['netflix']},
        {name: 'Disney+', description: 'Series', url: 'https://disneyplus.com', type: 'external', icon: 'Disney_Plus', log: true, hidden: false, keywords: ['disneyplus', 'disney plus', 'disney+', 'disney +', 'disney']},
        {name: 'GitHub', description: 'Dev', url: 'https://github.com', type: 'external', icon: 'Github', log: true, hidden: true, hidden: false, keywords: ['github', 'git']},
        {name: 'Outlook', description: 'Cloud brieven 2', url: 'https://outlook.live.com/mail/0/', type: 'external', icon: 'Mail', log: true, hidden: true, keywords: ['outlook', 'live']}
      ],
      searchengines: [
        {name: 'Google', description: 'Overlord', method: 'GET', link: 'https://www.google.com/search?q={searchquery}', icon: 'Google', log: true, keywords: ['google']},
        {name: 'Wikipedia', description: 'Knowledge', method: 'GET', link: 'https://nl.wikipedia.org/wiki/Special:Search?search={searchquery}', icon: 'Wikipedia', log: true, keywords: ['wikipedia', 'wiki']},
        {name: 'Maps', description: 'Directions', method: 'GET', link: 'https://www.google.be/maps/?q={searchquery}', icon: 'Maps', log: true, keywords: ['maps']},
        {name: 'Stack Overflow', description: 'Coding library', method: 'GET', link: 'https://stackoverflow.com/search?q={searchquery}', icon: 'Stack_Overflow', log: true, keywords: ['stack overflow', 'so']},
        {name: 'Images', description: 'Images', method: 'GET', link: 'https://www.google.com/search?q={searchquery}&tbm=isch', icon: 'Images', log: true, keywords: ['images', 'img']},
        {name: 'Bol.com', description: 'Packetjes!!!', method: 'GET', link: 'https://www.bol.com/nl/nl/s/?searchtext={searchquery}', icon: 'Bol', log: true, keywords: ['bol.com', 'bol']}
      ],
      defaultSearchEngine: 0
    }
  }
}
</script>
