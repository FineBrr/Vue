<template>
  <div class="home">
    <h1>Home Page</h1>
    <p>Welcome to the Home Page!</p>
    <button @click="logout">Logout</button>
    <button @click="dash">Dashboard</button>
  </div>
</template>

<script>
export default {
  created() {
    if (!localStorage.getItem('authenticated')) {
      this.$router.push('/login');
    }
  },
  methods: {
    logout() {
      localStorage.removeItem('authenticated');
      this.$router.push('/login');
    },
    dash() {
      this.$router.push('/dashboard');
    }
  }
};
</script>
