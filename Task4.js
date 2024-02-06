// create task manager where the user can add, remove and mark task as completed
// a. Add task to task list
// b. Remove task from task list
// c. Sort task alphabetically
// d. Display the number of incomplete task

const tasks = []
function addItems(a) {
    return tasks.push(a)
    
}
function remove(a) {
    return tasks.splice(a,2)
}
addItems("Designing")
addItems("math")
addItems("eng")

remove("Desighning")

console.log(tasks)







