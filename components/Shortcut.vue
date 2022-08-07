<template>
    <button class="shortcut" @click="clicked()">
        {{name}}
    </button>
</template>

<script>
    // [TODO] icons

    export default {
        props: [
            'name',
            'description',
            'type',
            'url',
            'icon',
            'log'
        ],
        methods: {
            clicked(){
                if (this.type == 'external'){
                    // [TODO] log
                    window.location.href = this.url;
                } else {
                    this.$router.push(this.url);
                }
            }
        }
    }
</script>