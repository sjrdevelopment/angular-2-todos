System.register(['lodash'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var lodash_1;
    var TodoService;
    return {
        setters:[
            function (lodash_1_1) {
                lodash_1 = lodash_1_1;
            }],
        execute: function() {
            TodoService = (function () {
                function TodoService() {
                    this.todos = [
                        {
                            title: "Pick up dry cleaning",
                            completed: true
                        },
                        {
                            title: "Buy groceries",
                            completed: false
                        },
                        {
                            title: "Book train tickets",
                            completed: false
                        }
                    ];
                }
                TodoService.prototype.getTodos = function () {
                    return this.todos;
                };
                TodoService.prototype.addTodo = function (newTodoName) {
                    console.log('add new todo');
                    console.log(newTodoName);
                    this.todos.push({
                        title: newTodoName,
                        completed: false
                    });
                };
                TodoService.prototype.removeTodo = function (todoId) {
                    this.todos.splice(todoId, 1);
                };
                TodoService.prototype.toggleTodoComplete = function (todoId) {
                    this.todos[todoId].completed = !this.todos[todoId].completed;
                    if (!lodash_1.find(this.todos, { completed: false })) {
                        return 'all_complete';
                    }
                };
                return TodoService;
            }());
            exports_1("TodoService", TodoService);
        }
    }
});
//# sourceMappingURL=todo.service.js.map