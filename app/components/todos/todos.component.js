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
            let TodosComponent = class TodosComponent {
                constructor(todoService) {
                    this.title = 'Here are some todos';
                    this.todos = todoService.getTodos();
                }
                onInputChange(event) {
                    console.log('selected');
                    console.log(event);
                }
            };
            __decorate([
                core_1.Input(), 
                __metadata('design:type', String)
            ], TodosComponent.prototype, "thisIsPassed", void 0);
            TodosComponent = __decorate([
                core_1.Component({
                    selector: 'todos',
                    template: `
		<h2>Todos</h2>
		{{title}}
		{{thisIsPassed}}
		<ul>
			<li *ngFor="#todo of todos">
				<span>{{ todo.title }}</span>
				<input type="checkbox" checked="{{todo.completed ? 'checked' : ''}}" (change)="onInputChange($event)"/>
			</li>
		</ul>

	`,
                    providers: [todo_service_1.TodoService]
                }), 
                __metadata('design:paramtypes', [todo_service_1.TodoService])
            ], TodosComponent);
            exports_1("TodosComponent", TodosComponent);
        }
    }
});
//# sourceMappingURL=todos.component.js.map