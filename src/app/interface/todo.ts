export interface Todo {
        taskName: string,
        taskDescription: string,
        dueDate: Date
}

// export class TodoNew {
//     itemId: number;
//     taskName: string;
//     taskDescription: string;
//     dueDate: Date;
//     createdOn: Date;
//     isCompleted: Boolean;
//     tags: string;
//     completedOn: Date
//   constructor(){
//     this.itemId = 0;
//     this.taskName = '';
//     this.taskDescription = '';
//     this.dueDate = Date.now();
//     this.createdOn =  Date.now();
//     this.isCompleted = false;
//     this.tags = '';
//     this.completedOn = Date.now()
//   }
// }