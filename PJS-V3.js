
let todoList = {
    todos: ['item 1',{todoText: "object 1",completed: true},'item 2','item 3', {todoText: "object 2",completed: false}],
    
    displayTodos: function() {
        console.log('My todos:',this.todos);
    },

    displayTodosText: function() {
        console.log('My todo text:');
        for (let i=0; i<this.todos.length; i++){
            if (typeof this.todos[i] === "object"){
                console.log(this.todos[i].todoText);
            }
        }
    },

    addTodo: function(todo) {
        this.todos.push(todo);
        this.displayTodos();
    },

    addTodoObj: function(todoText){
        this.todos.push({
            todoText: todoText,
            completed: false
        });
        this.displayTodos();
    },

    changeTodo: function(position, newValue){
        this.todos[position] = newValue;
        this.displayTodos();
    },

    changeTodoObj: function(position, todoText){
        this.todos[position].todoText = todoText;
        this.displayTodos();
    },

    toggleCompleted: function(position){
        let todo = this.todos[position];
        todo.completed = !todo.completed;
        this.displayTodos();
    },

    deleteTodo: function(position){
        this.todos.splice(position, 1);
        this.displayTodos();
    }
};
