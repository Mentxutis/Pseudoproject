<template>
  <div class="home">
    <router-link to="/NewUser">New User</router-link>
    <p></p>
    <h2>HOME...Welcome to Your Todo List.</h2>
    <p></p>
    <form action="submit">
      <label for="text">User</label>
      <br />
      <input type="text" placeholder="User" required />
      <p></p>
      <label for="password">Password</label>
      <br />
      <input type="password" placeholder="Pasword" required />
      <p></p>
      <router-link to="/hello">
        <button class="btn btn-primary">Login</button>
      </router-link>
      <p></p>
    </form>
    <p></p>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "HomeView",
  components: {
    HelloWorld,
  },
};
</script>





<style>
.home {
  background-color: black;
  color: blanchedalmond;
  padding: 10%;
  margin-top: 2%;
}
</style>
