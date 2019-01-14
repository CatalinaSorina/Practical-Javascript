
let todoList = {
    todos: ['item 1',{todoText: "object 1",completed: true},'item 2','item 3', {todoText: "object 2",completed: false}],
    
    displayTodos: function() {
        if (this.todos.length === 0){
            console.log ('Your todo list is empty!');
        }else{
            console.log('My todos:',this.todos);
        }
    },

    displayTodosText: function() {
        let todoObj = [];
        for (let i=0; i<this.todos.length; i++){
            if (typeof this.todos[i] === "object"){
                if (this.todos[i].completed === true) {
                    todoObj.push('(x) '+this.todos[i].todoText);
                }else{
                    todoObj.push('( ) '+this.todos[i].todoText);
                }
            }
        }

        if (todoObj.length === 0){
            console.log('The todo list have no object.');
        }else{
            console.log('My todo list:');
            for (let i in todoObj){
                console.log (todoObj[i]);
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
