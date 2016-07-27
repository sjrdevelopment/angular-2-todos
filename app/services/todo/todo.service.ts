export class TodoService {
	getTodos() {
		return [
			{
				title: "Item 1",
				completed: true			},
			{
				title: "Item 2",
				completed: false
			},
			{
				title: "Item 3",
				completed: false
			}
		]

	}
}