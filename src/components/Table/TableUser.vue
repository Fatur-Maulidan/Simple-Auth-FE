<template>
  <v-container>
    <v-simple-table>
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-center">id</th>
            <th class="text-center">email</th>
            <th class="text-center">role</th>
            <th class="text-center">Edit/Delete</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in data" :key="index">
            <td class="text-center">{{ index + 1 }}</td>
            <td class="text-center">{{ item.email }}</td>
            <td class="text-center">{{ item.role.role_name }}</td>
            <td class="d-flex justify-center">
              <v-btn color="primary" @click="edit(item.user_id)">Edit</v-btn>
              <v-btn class="ml-2" color="error" @click="destroy(item.user_id)"
                >Delete</v-btn
              >
            </td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </v-container>
</template>
<script>
import axios from "axios";

export default {
  data() {
    return {
      data: [],
    };
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    edit(id) {
      this.$router.push({ name: "edit", params: { id } });
    },
    destroy(id) {
      const url = `http://localhost:3000/api/users/${id}`;
      const token = localStorage.getItem("token");
      axios
        .delete(url, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          console.log(response.data);
          this.fetchData();
        })
        .catch((error) => {
          console.error(error);
        });
    },
    async fetchData() {
      const url = "http://localhost:3000/api/users";
      const token = localStorage.getItem("token");
      await axios
        .get(url, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          console.log(response.data.data);
          this.data = response.data;
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
};
</script>
