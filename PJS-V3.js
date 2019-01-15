
let todoList = {
    todos: [],
    
    displayTodos: function() {
        //debugger;
        if (this.todos.length === 0){
            console.log ('Your todo list is empty!');
        }else{
            console.log('My todos:',this.todos);
        }
    },

    displayTodosText: function() {
        //debugger;
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

    addTodo: function(todoText) {
        //debugger;
        this.todos.push(todoText);
        this.displayTodos();
    },

    addTodoObj: function(todoText){
        //debugger;
        this.todos.push({
            todoText: todoText,
            completed: false
        });
        this.displayTodos();
    },

    changeTodo: function(position, newValue){
        //debugger;
        this.todos[position-1] = newValue;
        this.displayTodos();
    },

    changeTodoObj: function(position, todoText){
        //debugger;
        this.todos[position-1].todoText = todoText;
        this.displayTodos();
    },

    toggleCompleted: function(position){
        //debugger;
        let todo = this.todos[position-1];
        todo.completed = !todo.completed;
        this.displayTodos();
    },

    toggleComplete: function(arr,trueFalse){
        //debugger;
        for(let i=0; i<arr.length;i++){
            arr[i].completed = trueFalse;
        }
    },

    toggleAll: function(){
        //debugger;
        let todoObj = [];
        for (let i in this.todos){
            if(typeof this.todos[i] === "object"){
                todoObj.push(this.todos[i]);
            }
        }

        let totalTodoObj = todoObj.length;
        let allTrue = 0;
        let allFalse=0;

        for(let i in todoObj) {
            if (todoObj[i].completed === true){
                allTrue++;
            }else{
                allFalse++;
            }
        }

        if(totalTodoObj === allTrue){
            this.toggleComplete(todoObj,false);
        }else if(totalTodoObj === allFalse){
            this.toggleComplete(todoObj,true);
        }

        this.displayTodosText();
    },

    deleteTodo: function(position){
        //debugger;
        this.todos.splice(position-1, 1);
        this.displayTodos();
    }
};

// let dispalyButton = document.getElementById("displayTodoButton");
// console.log(dispalyButton);

// dispalyButton.addEventListener("click", function(){
     //debugger;
//     todoList.displayTodosText();
// });

// let toggleButton = document.getElementById("toggleAllButton");

// toggleButton.addEventListener("click",function(){
     //debugger;
//     todoList.toggleAll();
// });

const handlers = {
    displayTodos: function(){
        todoList.displayTodosText();
    },

    toggleAll: function(){
        todoList.toggleAll();
        view.displayTodos();
    },

    addTodo: function(){
        let text = document.getElementById("addTodoTextInput");
        todoList.addTodoObj(text.value);
        text.value = "";
        view.displayTodos();
    },

    changeTodo: function(){
        let todoPosition = document.getElementById("todoPosition");
        let todoText = document.getElementById("todoText");
        todoList.changeTodoObj(todoPosition.valueAsNumber,todoText.value);
        todoPosition.value = "";
        todoText.value = "";
        view.displayTodos();
    },

    deleteTodo: function(){
        let deleteTodoPositionInput = document.getElementById("deleteTodoPosition");
        todoList.deleteTodo(deleteTodoPositionInput.valueAsNumber);
        deleteTodoPositionInput.value = "";
        view.displayTodos();
    },

    toggleCompleted: function(){
        let toggleCompletedPositionInput = document.getElementById("toggleCompletedPositionInput");
        todoList.toggleCompleted(toggleCompletedPositionInput.valueAsNumber);
        toggleCompletedPositionInput.value = "";
        view.displayTodos();
    }
};

let view = {
    displayTodos: function(){
        var todosUl = document.querySelector("ol");
        todosUl.innerHTML = "";
        for (let i=0; i<todoList.todos.length; i++){
            let todoLi = document.createElement("li");
            let tudoList = todoList.todos[i];

            if(tudoList.completed === false){
                todoLi.textContent = "( ) "+todoList.todos[i].todoText;
            }else{
                todoLi.textContent = "(x) "+todoList.todos[i].todoText;
            }

            todosUl.appendChild(todoLi);
        }
    }
};