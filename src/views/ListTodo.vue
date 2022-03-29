<template>
  <div class="addItem">
    <p>ToDos List.</p>

    <div class="row g-3">
      <form id="formulario">
        <input
          type="text"
          id="todo"
          class="todo-input my-3"
          placeholder="Todo Title and Description"
          v-model="newTodo"
        />
      </form>
    </div>
    <p></p>
    <div class="botonesAddLog">
      <button type="submit" class="btn btn-primary" @click="addTodo">
        Add
      </button>
      <router-link to="/">
        <button type="button" class="btn btn-outline-danger">LogOut</button>
      </router-link>
    </div>
    <div id="listaTodos" class="mt-4">
      <div class="alert alert-light" role="alert">
        <div v-for="(todo, index) in todos" :key="todo.id" class="todoItem">
          <div class="todoItemLeft">
            <input type="checkbox" v-model="todo.completed" />
            <div
              v-if="!todo.editing"
              @dblclick="editTodo(todo)"
              class="todoItemLabel"
              :class="{ completed: todo.completed }"
            >
              <b>{{ todo.title }}</b>
            </div>

            <input
              v-else
              class="todoItemEdit"
              type="text"
              v-model="todo.title"
              @keyup.enter="doneEdit(todo)"
            />
          </div>
          <div class="removeItem" @click="removeTodo(index)">
            Delete Item:&times;
          </div>
        </div>
      </div>

      <div class="extraContainer">
        <div>
          <label
            ><input
              type="checkbox"
              :checked="!anyRemaining"
              @change="checkAllTodos"
            />Check All Todos</label
          >
        </div>
        <div>{{ remaining }}Items left</div>
      </div>
    </div>
    <p>Doble Click For Edit</p>
  </div>
</template>

<script>
export default {
  name: "ListTodo",
  data() {
    return {
      newTodo: "",
      idForTodo: "",
      todos: [
        {
          id: "1",
          title: "Do TaskList Works",
          completed: false,
          editing: false,
        },
      ],
    };
  },
  computed: {
    remaining() {
      return this.todos.filter((todo) => !todo.completed).length;
    },
    anyRemaining() {
      return this.remaining != 0;
    },
  },
  methods: {
    addTodo() {
      alert("Adding some Todo...");
      this.todos.push({
        id: this.idForTodo,
        title: this.newTodo,
        completed: false,
        editing: false,
      });

      this.newTodo = "";
      this.idForTodo++;
    },
    editTodo(todo) {
      alert("DobleClick for editing");
      todo.editing = true;
    },
    doneEdit(todo) {
      todo.editing = false;
    },
    removeTodo(index) {
      this.todos.splice(index, 1);
    },
    checkAllTodos() {
      this.todos.forEach((todo) => (todo.completed = event.target.checked));
    },
  },
};
</script>

<style>
.addItem {
  background-color: black;
  height: 900 px;
  padding: 50px;
  color: blanchedalmond;
  margin-top: 10%;
}
.extraContainer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 2%;
}
.todoItem {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.removeItem {
  cursor: pointer;
}
.todoItemLeft {
  display: flex;
  align-items: right;
}
.todoItemLabel {
  margin-left: 15px;
  padding: 10px;
}
.todoItemEdit {
  margin-left: 50px;
  width: 100%;
  padding: 10px;
}
.completed {
  text-decoration: line-through;
  color: black;
}
.botonesAddLog {
  display: flex;
  justify-content: flex-end;
}
</style>