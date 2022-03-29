<template>
  <div class="newUser">
    <h3>Welcome to the Jungle, Inscríbete!</h3>

    <div class="form">
      <form @submit="newUser">
        <label for="">User Name {{ UserName }}</label>
        <br />
        <input
          type="text"
          placeholder="user name"
          v-model="name"
          required
          id="name"
        />
        <p></p>
        <label for="">E-mail {{ email }}</label>
        <br />
        <input type="e-mail" placeholder="e-mail" v-model="email" required />
        <p></p>
        <label for="">Password {{ password }}</label>
        <br />
        <input
          type="password"
          placeholder="password"
          v-model="password"
          required
        />

        <p></p>
        <button class="btn btn-primary" type="submit">Save LOGIN</button>
        <p></p>
        <router-link to="/">Home</router-link>

        <p></p>
      </form>
    </div>
  </div>
</template>


<script>
export default {
  name: " NewUser",

  data() {
    return {
      newUser: "",
      idForUser: "",
      User: [
        {
          idUser: "1",
          userName: "",
          email: "",
          password: "",
        },
      ],
    };
  },

  methods: {
    addUser() {
      this.user.push({
        id: this.idUser,
        user: this.userName,
        email: this.email,
        password: this.password,
      });
      this.newUser = "";
      this.idUser++;
    },
  },
};
</script>



<style>
.newUser {
  background-color: black;
  color: azure;
  padding: 5%;
}
.form {
  margin-top: 10%;
}
</style>
