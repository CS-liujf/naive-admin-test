<template>
    <input type="text" v-model="name"/>
    <input type="text" v-model="password"/>
    <button type="button" @click="submit(2)">提交</button>
</template>

<script setup lang="ts">
    import { useUserStore } from '@/store/auth/user';
    import { ref } from 'vue';
    import {router} from '@/router';

    const name = ref('li')
    const password = ref('123')
    const userStore = useUserStore()
    const submit = function(value:number){
        userStore.loginHandler(name.value+password.value, ['admin'])
        router.push('/test1')
    }
</script>