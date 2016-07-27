import {Component} from '@angular/core';
import {TodosComponent} from '../todos/todos.component';

@Component({
    selector: 'my-app',
    template: `
    	<h1>Hello Angular Todos</h1>
    	<todos [thisIsPassed]="passedVar"></todos>
    `,
    directives: [TodosComponent]
})
export class AppComponent {
	 passedVar: string = 'Hi from parent';
}