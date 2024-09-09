<template>
  <v-app>
    <FormEdit :id="id" />
  </v-app>
</template>
<script>
import FormEdit from "@/components/Form/FormEdit.vue";

export default {
  name: "EditView",
  components: {
    FormEdit,
  },
  data: () => ({
    id: this.$route.params.id,
  }),
};
</script>
