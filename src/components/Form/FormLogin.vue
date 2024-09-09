<template>
  <v-app>
    <v-container fluid fill-height>
      <v-row no-gutters class="d-flex justify-center align-center">
        <v-col md="6" lg="4">
          <v-card class="px-3 py-4">
            <v-card-title>
              <h2>Login</h2>
            </v-card-title>
            <v-card-text>
              <v-form @submit.prevent="login">
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
                <v-btn type="submit" color="primary">Login</v-btn>
              </v-form>
              <v-hover v-slot="{ hover }">
                <div
                  class="mt-2"
                  :class="hover ? 'text-blue-darken' : 'text-black'"
                  @click="$router.push({ name: 'register' })"
                >
                  Belum Punya Akun?
                </div>
              </v-hover>
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
  name: "FormLogin",
  data: () => ({
    email: "",
    password: "",
  }),
  methods: {
    login() {
      const url = "http://localhost:3000/api/users/login";
      const payload = {
        email: this.email,
        password: this.password,
      };

      axios
        .post(url, payload)
        .then((response) => {
          console.log(response.data);
          localStorage.setItem("token", response.data.data.accessToken);
          this.$router.push({ name: "user" });
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
};
</script>

<style>
.text-black {
  color: black;
}
.text-blue-darken {
  color: #1976d2;
}
</style>
