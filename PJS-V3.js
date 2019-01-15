
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

        // for (let i=0; i<this.todos.length; i++){
        //     if (typeof this.todos[i] === "object"){
        //         if (this.todos[i].completed === true) {
        //             todoObj.push('(x) '+this.todos[i].todoText);
        //         }else{
        //             todoObj.push('( ) '+this.todos[i].todoText);
        //         }
        //     }
        // }

        this.todos.forEach(function(todo){
            if (typeof todo === "object"){
                todoObj.push('(x) '+todo.todoText);
            }else{
                todoObj.push('( ) '+todo.todoText);
            }
        });

        if (todoObj.length === 0){
            console.log('The todo list have no object.');
        }else{
            console.log('My todo list:');
            // for (let i in todoObj){
            //     console.log (todoObj[i]);
            // }

            todoObj.forEach(function(todo){
                console.log(todo);
            });
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

        // for(let i=0; i<arr.length;i++){
        //     arr[i].completed = trueFalse;
        // }

        arr.forEach(function(todo){
            todo.completed = trueFalse;
        });
    },

    toggleAll: function(){
        //debugger;
        let todoObj = [];

        // for (let i in this.todos){
        //     if(typeof this.todos[i] === "object"){
        //         todoObj.push(this.todos[i]);
        //     }
        // }

        this.todos.forEach(function(todo){
            if(typeof todo === "object"){
                todoObj.push(todo);
            }
        });

        let totalTodoObj = todoObj.length;
        let allTrue = 0;
        let allFalse=0;

        // for(let i in todoObj) {
        //     if (todoObj[i].completed === true){
        //         allTrue++;
        //     }else{
        //         allFalse++;
        //     }
        // }

        todoObj.forEach(function(todo){
            if (todo.completed === true){
                allTrue++;
            }else{
                allFalse++;
            }
        });

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
        view.displayTodos();
        text.value = "";
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
        var todosOl = document.querySelector("ol");
        todosOl.innerHTML = "";
        // for (let i=0; i<todoList.todos.length; i++){
        //     let todoLi = document.createElement("li");
        //     //todoLi.id = i;
        //     let tudoList = todoList.todos[i];
        //     let deleteButton = createButton ("delete");
        //     let changeButton;

        //     if(tudoList.completed === false){
        //         todoLi.textContent = "( ) "+todoList.todos[i].todoText+" ";
        //         changeButton = createButton ("check");
        //     }else{
        //         todoLi.textContent = "(x) "+todoList.todos[i].todoText+" ";
        //         changeButton = createButton ("uncheck");
        //     }

        //     deleteButton.addEventListener("click",function(){
        //         todoList.deleteTodo(i+1);
        //         view.displayTodos();
        //     });

        //     changeButton.addEventListener("click",function(){
        //         todoList.toggleCompleted(i+1);
        //         view.displayTodos();
        //     });

        //     todoLi.appendChild(deleteButton);
        //     todoLi.appendChild(changeButton);

        //     todosOl.appendChild(todoLi);
        // }

        todoList.todos.forEach(function(todo,position){
            let todoLi = document.createElement("li");
            //todoLi.id = position;
            let deleteButton = createButton ("delete");
            let changeButton;

            if(todo.completed === false){
                todoLi.textContent = "( ) "+todo.todoText+" ";
                changeButton = createButton ("check");
            }else{
                todoLi.textContent = "(x) "+todo.todoText+" ";
                changeButton = createButton ("uncheck");
            }

            deleteButton.addEventListener("click",function(){
                todoList.deleteTodo(position+1);
                view.displayTodos();
            });

            changeButton.addEventListener("click",function(){
                todoList.toggleCompleted(position+1);
                view.displayTodos();
            });

            todoLi.appendChild(deleteButton);
            todoLi.appendChild(changeButton);

            todosOl.appendChild(todoLi);
        },this);
    }
};

function runDebugger(functionName){
    debugger;
    functionName();
};

function clock(functionName, waitSeconds){
    const miliseconds=waitSeconds*1000;
    setTimeout(functionName,miliseconds);
};

function createButton(text){
    let button = document.createElement("button");
    button.textContent = text;
    return button;
};

// bind = return the copy of the function and change the this with the parameter chosen
// if a function is defined with bind, it wont bind again anymore

// ex: function name(x,y){
//     console.log(this);
// } 
// name.bind('my name') => prints 'my name'
// name() => prints window

// apply or call is like bind but runs immediatly
// name.apply('my name',[x,y]) or name.call('my name',x,y)

// Callback functions

function sound(numSteps){
    let s="";
    for(let i=0; i<numSteps; i++){
        s+="tap ";
    }
    return s;
}

function walk(steps,cb){
    console.log(cb(steps));
}

// callback function = sound