import {Component, Input} from '@angular/core'
import {TodoService} from '../../services/todo/todo.service'

@Component ({
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
	providers: [TodoService]
})

export class TodosComponent {

	@Input() thisIsPassed: string;

	title ='Here are some todos'
	todos

	onInputChange(event) {
		console.log('selected')
		console.log(event)
	}

	constructor(todoService: TodoService) {
		this.todos = todoService.getTodos()
	}
}