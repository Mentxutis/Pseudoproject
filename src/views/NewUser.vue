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
          v-model="username"
          required
          id="name"
        />
        <p></p>
        <label for="">E-mail {{ email }}</label>
        <br />
        <input type="e-mail" placeholder="e-mail" v-model="email" required />
        <p></p>
        <label for="">Password </label>
        <br />
        <input
          type="password"
          placeholder="password"
          v-model="password"
          required
        />
        <br />
        <label for="">Repeat Password </label>
        <br />
        <input
          type="password"
          placeholder="repeat password"
          v-model="password"
          required
        />

        <p></p>
        <button
          class="btn btn-primary"
          type="submit"
          @click="addUser()"
          v-show="password === repeatPassword"
        >
          Save LOGIN
        </button>
        <p></p>
        <br />
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
      idUser: "",
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
      const User = {
        userName: this.userName,
        email: this.email,
        password: this.password,
        idUSer: this.idUser,
      };
      this.userName.push({
        id: this.idUser,
        userName: this.userName,
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
  margin-top: 3%;
}
.form {
  margin-top: 10%;
}
</style>
