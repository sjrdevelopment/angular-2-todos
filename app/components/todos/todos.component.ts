import {Component, Input} from '@angular/core'
import {TodoService} from '../../services/todo/todo.service'

@Component ({
	selector: 'todos',
	template: `
		<h2>Todos</h2>
		{{title}}
		{{thisIsPassed}}
		<ul>
			<li *ngFor="#todo of todos; let i = index" class="{{todo.completed ? 'checked' : ''}}">
				<span>{{ todo.title }}</span>
				<input [attr.data-indexId]="i" type="checkbox" checked="{{todo.completed ? 'checked' : ''}}" (change)="onItemSelected($event)"/>
				<button class="close-button" type="button" (click)="onItemRemove(i)">x</button>
			</li>
		</ul>
		<form (submit)="onNewTodoSubmit($event)">
			<input type="text" (change)="onNewTodoInputChange($event)" placeholder="I need to..." />
		</form>
	`,
	providers: [TodoService]
})

export class TodosComponent {

	@Input() thisIsPassed: string;

	title ='Here are some todos'
	todos
	newTodoName

	onItemRemove(itemIndexId) {
		this.todoService.removeTodo(itemIndexId)
	}

	onItemSelected(event) {
		console.log('selected')
		let todoId = event.target.dataset.indexid

		const toggleComplete = this.todoService.toggleTodoComplete(todoId)

		if (toggleComplete === 'all_complete') {
			alert('all complete')
		}

	}

	onNewTodoSubmit(event) {
		event.preventDefault()

		event.target.reset();
		console.log('form submit')
		this.todoService.addTodo(this.newTodoName)
	}

	onNewTodoInputChange(event) {

		console.log('text added')

		this.newTodoName = event.target.value
	}

	constructor(private todoService: TodoService) {
		this.todos = todoService.getTodos()
	}
}