<template>
    <form @submit.prevent="handleSearch()" class="center" :action="action" :method="method">
        <input v-model="form.search" ref="search" @focus="handleFocus()" @blur="handleBlur()" @input="handleInput()" class="searchbar" type="search" :name="this.searchEngines[this.searchEngine].queryname" :placeholder="tempPlaceholder" autocomplete="off">
    </form>
</template>

<script>
    export default {
        props: [
            'name',
            'description',
            'searchEngine',
            'placeholder',
            'isDefault',
            'log',
            'smartSearch',
            'searchEngines',
        ],
        mounted() {
            if (this.isDefault) {
                this.focusSearchBar();
            }
        },
        methods: {
            handleSearch() { 
                // [TODO] als search query == link of shortcut naam --> ga naar link of shortcut url in plaats van search query uit te voeren
                if (this.smartSearch){
                    this.handleSmartSearch();               
                } else if (this.searchEngines[this.searchEngine].method.toLowerCase() == "get") {
                    // [TODO] log
                    window.location.href = `${this.searchEngines[this.searchEngine].link}?${this.searchEngines[this.searchEngine].queryname}=${this.form.search}`;
                } else {
                    // [TODO] zoek dees nog uit
                    console.log("post");
                }



                // window.location.href = 
                this.form.search = ""
            },

            handleSmartSearch() {
                if (/^(https?:\/\/)?([-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6})$/gm.test(this.form.search)) {
                    window.location.href = /^https.:\/\//gm.test(this.form.search) ? this.form.search : `http://${this.form.search}`;
                } else if (this.searchEngines[this.searchEngine].method.toLowerCase() == "get") {
                    // [TODO] log
                    window.location.href = `${this.searchEngines[this.searchEngine].link}?${this.searchEngines[this.searchEngine].queryname}=${this.form.search}`;
                } else {
                    // [TODO] zoek dees nog uit
                    console.log("post");
                }
                return;
            },

            focusSearchBar() {
                this.$refs.search.focus();
            },

            handleFocus() {
                this.tempPlaceholder = `> ${this.placeholder}`;
            },

            handleBlur() {
                this.tempPlaceholder = this.placeholder;
            },

            handleInput() {
                for (var i = 0; i < this.searchEngines.length; i++) {
                    for (var j = 0; j < this.searchEngines[i].keywords.length; j++) {
                        const re = new RegExp(`^@(${this.searchEngines[i].keywords[j]})`, 'gmi');

                        if (re.test(this.form.search)){
                            console.log(this.searchEngines[i].name);
                        }
                    }
                }
            }
        },
        data() {
            return {
                usingDefaultEngine: true,
                form: {
                    search: ""
                },
                tempPlaceholder: this.placeholder
            }
        }
    }
</script>