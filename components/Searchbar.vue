<template>
    <form @submit.prevent="handleSearch()" class="center" :action="action" :method="method">
        <input v-model="form.search" ref="search" @focus="handleFocus()" @blur="handleBlur()" class="searchbar" type="search" :name="queryname" :placeholder="placeholder" autocomplete="off">
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
            'log'
        ],
        mounted() {
            if (this.isDefault) {
                this.focusSearchBar();
            }
        },
        methods: {
            handleSearch() {                
                if (this.method.toLowerCase() == "get") {
                    // [TODO] log
                    window.location.href = `${this.action}?${this.queryname}=${this.form.search}`
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
                this.placeholder = `> ${this.tempPlaceholder}`;
            },

            handleBlur() {
                this.placeholder = this.tempPlaceholder;
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