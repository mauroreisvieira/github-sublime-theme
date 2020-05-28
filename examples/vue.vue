<template>
    <div id="app">
        <Users />
    </div>
</template>

<script>
import Users from './components/Users.vue';

export default {
    name: 'app',
    components: {
        Users,
    },
    data() {
        return {
            title: 'Hello World',
            employee: {
                name: '',
                email: '',
            },
        };
    },
    methods: {
        handleSubmit() {
            console.log('testing handleSubmit');
        },
    },
};
</script>

<style>
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
