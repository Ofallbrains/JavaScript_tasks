// create task manager where the user can add, remove and mark task as completed
// a. Add task to task list
// b. Remove task from task list
// c. Sort task alphabetically
// d. Display the number of incomplete task

const tasks = []
function addItems(a) {
    return tasks.push({ nameOfTask: a, completed: false })
    
}
function complete(index) {
     tasks[index].completed = true
}
// you have to create id
function remove(index) {
    return tasks.splice(index,1)
}

function sort() {
    return tasks.sort()
}
function IncompleteTask() {
    const result = task.filter((items) => items.completed === false)
    

}
addItems("Designing")
addItems("math")
addItems("eng")

complete(1)
console.log(tasks)
// console.log(remove(0))
// console.log(tasks)
// console.log(sort())







