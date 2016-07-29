System.register(['@angular/core', '../../services/todo/todo.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, todo_service_1;
    var TodosComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (todo_service_1_1) {
                todo_service_1 = todo_service_1_1;
            }],
        execute: function() {
            TodosComponent = (function () {
                function TodosComponent(todoService) {
                    this.todoService = todoService;
                    this.title = 'Here are some todos';
                    this.todos = todoService.getTodos();
                }
                TodosComponent.prototype.onItemRemove = function (itemIndexId) {
                    this.todoService.removeTodo(itemIndexId);
                };
                TodosComponent.prototype.onItemSelected = function (event) {
                    console.log('selected');
                    var todoId = event.target.dataset.indexid;
                    var toggleComplete = this.todoService.toggleTodoComplete(todoId);
                    if (toggleComplete === 'all_complete') {
                        alert('all complete');
                    }
                };
                TodosComponent.prototype.onNewTodoSubmit = function (event) {
                    event.preventDefault();
                    event.target.reset();
                    console.log('form submit');
                    this.todoService.addTodo(this.newTodoName);
                };
                TodosComponent.prototype.onNewTodoInputChange = function (event) {
                    console.log('text added');
                    this.newTodoName = event.target.value;
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], TodosComponent.prototype, "thisIsPassed", void 0);
                TodosComponent = __decorate([
                    core_1.Component({
                        selector: 'todos',
                        template: "\n\t\t{{title}}\n\t\t{{thisIsPassed}}\n\t\t<div class=\"list-area\">\n\t\t\t<ul class=\"todo-list\">\n\t\t\t\t<li *ngFor=\"#todo of todos; let i = index\" class=\"todo-item {{todo.completed ? 'checked' : ''}}\">\n\t\t\t\t\t<span>{{ todo.title }}</span>\n\t\t\t\t\t<input [attr.data-indexId]=\"i\" type=\"checkbox\" checked=\"{{todo.completed ? 'checked' : ''}}\" (change)=\"onItemSelected($event)\"/>\n\t\t\t\t\t<button class=\"close-button\" type=\"button\" (click)=\"onItemRemove(i)\">x</button>\n\t\t\t\t</li>\n\t\t\t</ul>\n\t\t\t<form (submit)=\"onNewTodoSubmit($event)\">\n\t\t\t\t<input type=\"text\" (change)=\"onNewTodoInputChange($event)\" placeholder=\"I need to...\" class=\"new-item-input\" />\n\t\t\t</form>\n\t\t</div>\n\t",
                        providers: [todo_service_1.TodoService]
                    }), 
                    __metadata('design:paramtypes', [todo_service_1.TodoService])
                ], TodosComponent);
                return TodosComponent;
            }());
            exports_1("TodosComponent", TodosComponent);
        }
    }
});
//# sourceMappingURL=todos.component.js.map