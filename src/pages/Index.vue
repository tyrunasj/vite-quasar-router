<template>
  <q-page class="bg-color-red">
    Test
    <q-btn color="primary" icon="check" label="OK" @click="onClick" />
  </q-page>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const onClick = () => {
  router.push({ name: 'Home' });
};
</script>
