<template>
  <div id="app" v-if="fronteggLoaded">
    <div v-if="this.authState.user">
      <span>Logged in as: {{this.authState.user.name}}</span>
    </div>
    <div>
      <button v-if="this.authState.user" v-on:click="showAccessToken">What is my access token?</button>
      <button v-if="this.authState.user" v-on:click="showTenants">Show my tenants</button>
      <button v-if="!this.authState.user" v-on:click="loginWithRedirect">Not logged in. Click to Login</button>
    </div>
  </div>
</template>

<script>
import { mapLoginActions } from "@frontegg/vue";
export default {
  name: "App",
  methods: {
    loginWithRedirect: mapLoginActions('loginWithRedirect'),
    showAccessToken() {
      alert(this.authState.user.accessToken);
    },
    showTenants() {
      alert(JSON.stringify(this.tenantsState.tenants));
    },
  },
  data() {
    return {
      ...this.mapAuthState(),
      ...this.mapTenantsState()
    }
  }
};
</script>
