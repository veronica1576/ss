<template>
<div>
<h1>Login</h1>
<the-login></the-login>
</div>
</template>


<script>
import TheLogin from '@/components/TheLogin.vue';

export  default{
    name:'LoginView',
    components:{
        TheLogin,
    },
}
</script>