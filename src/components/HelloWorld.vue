<template>
  <div class="hello">
    <h3>Añade Nueva tarea...</h3>
    <ListTodo />
    <router-link to="/ListTodo">
      <button type="submit" class="btn btn-primary">ToDos Pendientes</button>
    </router-link>
    <p></p>
    <h3>o,bien...</h3>
    <div class="botones">
      <router-link to="/">
        <button type="submit" class="btn btn-danger">LogOut</button>
      </router-link>
    </div>
  </div>
</template>

<script>
import ListTodo from "@/views/ListTodo.vue";
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
  background-color: black;
  color: blanchedalmond;
  padding: 10%;
}
.form {
  padding: 0%;
}
.botones {
  margin-top: 10%;
}
</style>
