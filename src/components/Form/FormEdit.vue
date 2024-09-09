<template>
  <v-app>
    <v-container fluid fill-height>
      <v-row no-gutters class="d-flex justify-center align-center">
        <v-col md="6" lg="4">
          <v-card class="px-3 py-4">
            <v-card-title>
              <h2>Edit Data</h2>
            </v-card-title>
            <v-card-text>
              <v-form @submit.prevent="submit">
                <v-text-field
                  v-model="email"
                  label="Email"
                  type="email"
                  required
                ></v-text-field>
                <v-text-field
                  v-model="password"
                  label="Password"
                  type="password"
                  required
                ></v-text-field>
                <v-btn type="submit" color="primary">Update</v-btn>
              </v-form>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
import axios from "axios";
export default {
  name: "FormEdit",
  data: () => ({
    email: "",
    password: "",
    id: "",
  }),
  created() {
    this.id = this.$route.params.id;
  },
  mounted() {
    this.onFetch();
  },
  methods: {
    onFetch() {
      const url = `http://localhost:3000/api/users/${this.id}`;
      const token = localStorage.getItem("token");
      axios
        .get(url, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          this.email = response.data.data.email;
          this.password = response.data.data.password;
        })
        .catch((error) => {
          console.error(error);
        });
    },
    submit() {
      const url = `http://localhost:3000/api/users/${this.id}`;
      const token = localStorage.getItem("token");
      const payload = {
        email: this.email,
        password: this.password,
      };

      axios
        .put(url, payload, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          console.log(response);
          this.$router.push({ name: "user" });
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
};
</script>
