<template>
  <div id="app" v-if="fronteggLoaded">
    <div v-if="authState.user">
      <span>Logged in as: {{ authState.user.name }}</span>
    </div>
    <div>
      <button v-if="authState.user" v-on:click="logout">Logout</button>
      <button v-if="authState.user" v-on:click="showAccessToken">
        What is my access token?
      </button>
      <button v-if="!authState.user" v-on:click="goToLogin">Login</button>
    </div>
  </div>
</template>

<script>
import { useFrontegg, ContextHolder } from "@frontegg/vue";

export default {
  setup() {
    const {
      fronteggLoaded,
      authState,
      loginWithRedirect,
      useFronteggAuthGuard,
    } = useFrontegg();

    useFronteggAuthGuard(); // auto redirects the user to the login page / application

    const goToLogin = () => {
      loginWithRedirect();
    };

    const logout = () => {
      const baseUrl = ContextHolder.getContext().baseUrl;
      window.location.href = `${baseUrl}/oauth/logout?post_logout_redirect_uri=${window.location}`;
    };

    const showAccessToken = () => {
      alert(authState.user.accessToken);
    };

    return {
      fronteggLoaded,
      authState,
      goToLogin,
      logout,
      showAccessToken,
    };
  },
};
</script>
