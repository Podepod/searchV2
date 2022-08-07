<template>
  <div class="center">
    <h1 id="title" class="title">._.</h1>

    <div class="searchbars center">
      <Searchbar v-for="i in searchbars" v-bind:key="i.name" :description="i.description" :action="i.action" :method="i.method" :queryname="i.queryname" :placeholder="i.placeholder" :isDefault="i.isDefault" :log="i.log" />
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
        {name: 'Google', description: 'Overlord', action: 'https://www.google.com/search', method: 'GET', queryname: 'q', placeholder: 'Search', isDefault: true, log: true},
        {name: 'Stack Overflow', description: 'Code problems', action: 'https://www.stackoverflow.com/search', method: 'GET', queryname: 'q', placeholder: 'Search 🥞', isDefault: false, log: true}
      ],
      shortcuts: [
        {name: 'Facebook', description: 'Feestboek', url: 'https://facebook.com', type: 'external', icon: 'facebookIco', log: true},
        {name: 'Messenger', description: 'Chatding', url: 'https://messenger.com', type: 'external', icon: 'messengerIco', log: true},
        {name: 'YouTube', description: 'Filmpjes', url: 'https://youtube.com', type: 'external', icon: 'youtubeIco', log: true},
        {name: 'Drive', description: 'Cloud files', url: 'https://drive.google.com', type: 'external', icon: 'driveIco', log: true},
        {name: 'Mail', description: 'Cloud brieven', url: 'https://mail.google.com', type: 'external', icon: 'mailIco', log: true},
        {name: 'Netflix', description: 'Series', url: 'https://netflix.com', type: 'external', icon: 'netflixIco', log: true},
        {name: 'Disney Plus', description: 'Series', url: 'https://disneyplus.com', type: 'external', icon: 'disneyplusIco', log: true},
        {name: 'GitHub', description: 'Dev', url: 'https://github.com', type: 'external', icon: 'githubIco', log: true}
      ]
    }
  }
}
</script>
