<template>
  <v-app>
    <FormRegister />
  </v-app>
</template>

<script>
import FormRegister from "@/components/Form/FormRegister.vue";
export default {
  name: "RegisterApp",
  components: {
    FormRegister,
  },
  data: () => ({
    //
  }),
};
</script>
