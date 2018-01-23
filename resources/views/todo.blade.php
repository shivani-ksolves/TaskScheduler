<style>

    .todos input.textfield {
        width: 480px;
        height: 36px;
        margin-right: 20px;
        font-size: 1.4em;
        vertical-align: top;
    }

    .todos input.checkbox {
        width: 20px;
        height: 20px;
    }

    .todos .checked {
        text-decoration: line-through;
    }

    .todos button {
        height: 36px;
        font-size: 1.1em;
        vertical-align: top;
        border: solid 1px #999;
        border-radius: 2px;
        cursor: pointer;
    }

    .todos .delete-icon {
        diplay: inline-block;
        cursor: pointer;
    }
    .todos  {
        margin-top: 50px;
    }

</style>

<div class="container todos">    
    Task Scheduler
    <div class="todos">

        <button class="btn" *ngIf="!addTasks" (click)="addTasks ? addTasks = false : addTasks = true;">Add Task</button>
        <button class="btn" *ngIf="addTasks" (click)="addTasks ? addTasks = false : addTasks = true;">Hide Add button</button>
        <br><br>
        <div *ngIf="addTasks">
            <form (submit)="addTodo($event)">
                <input [(ngModel)]="newTodo" (keyup.enter)="newTodo=''" class="textfield" name="newTodo">
                <button  type="submit" [disabled]="newTodo===''">Add Todo</button>
            </form>
        </div>
        
        <ul>
            <li *ngFor="let todo of todos ; let i=index">
                <input type="checkbox" *ngIf = 'todo.completed == 0' class="checkbox" (change)="completed(todo.id,1)" [(ngModel)]="todo.completed" />
                <span [ngClass]="{'checked': todo.completed}">{{ todo.newTodo }}</span>
                <span *ngIf = 'todo.completed == 0' (click)="deleteTodo(todo.id)" class="delete-icon">  [delete]</span>
                <span *ngIf = 'todo.completed == 1' >  [completed]</span>
            </li>
        </ul>

        <!-- <div class="mtop20">
            <button (click)="deleteSelectedTodos()">Delete Selected</button>
        </div> -->

    </div>
</div>