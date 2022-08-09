<template>
    <form @submit.prevent="handleSearch()" class="center" :action="action" :method="method">
        <input v-model="form.search" ref="search" @focus="handleFocus()" @blur="handleBlur()" class="searchbar" type="search" :name="queryname" :placeholder="tempPlaceholder" autocomplete="off">
    </form>
</template>

<script>
    export default {
        props: [
            'name',
            'description',
            'action',
            'method',
            'queryname',
            'placeholder',
            'isDefault',
            'log',
            'smartSearch',
        ],
        mounted() {
            if (this.isDefault) {
                this.focusSearchBar();
            }
        },
        methods: {
            handleSearch() { 
                // [TODO] als search query == link of shortcut naam --> ga naar link of shortcut url in plaats van search query uit te voeren
                if (this.smartSearch && /^(https?:\/\/)?([-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6})$/gm.test(this.form.search)){
                    window.location.href = /^https.:\/\//gm.test(this.form.search) ? this.form.search : `http://${this.form.search}`;                 
                } else if (this.method.toLowerCase() == "get") {
                    // [TODO] log
                    window.location.href = `${this.action}?${this.queryname}=${this.form.search}`;
                } else {
                    // [TODO] zoek dees nog uit
                    console.log("post");
                }



                // window.location.href = 
                this.form.search = ""
            },

            focusSearchBar() {
                this.$refs.search.focus();
            },

            handleFocus() {
                this.tempPlaceholder = `> ${this.placeholder}`;
            },

            handleBlur() {
                this.tempPlaceholder = this.placeholder;
            }
        },
        data() {
            return {
                form: {
                    search: ""
                },
                tempPlaceholder: this.placeholder
            }
        }
    }
</script>