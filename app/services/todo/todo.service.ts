import {find} from 'lodash'

export class TodoService {
	todos = [
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

	getTodos() {
		return this.todos
	}

	addTodo(newTodoName) {
		console.log('add new todo')
		console.log(newTodoName)

		this.todos.push({
			title: newTodoName,
			completed: false
		})
	}

	removeTodo(todoId) {
		this.todos.splice(todoId, 1)
	}

	toggleTodoComplete(todoId) {
		this.todos[todoId].completed = !this.todos[todoId].completed

		if (!find(this.todos, {completed: false})) {
			return 'all_complete'
		}
	}
}