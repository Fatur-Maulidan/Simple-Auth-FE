<template>
  <v-app>
    <TableUser />
  </v-app>
</template>

<script>
import TableUser from "@/components/Table/TableUser.vue";
export default {
  name: "UserView",
  components: {
    TableUser,
  },
};
</script>
