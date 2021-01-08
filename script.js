const form = document.getElementById('form')
const input = document.getElementById('input')
const TodosUL = document.getElementById('todos')

form.addEventListener('submit', (e) => {
  e.preventDefault()
  addTodo()
})
function addTodo(todo) {
  let todoText = input.value
  if (todo) {
    todoText = todo.text
  }
  if (todoText) {
    let todoEl = document.createElement('li')
    if (todo && todo.completed) {
      todoEl.classList.add('completed')
    }
    todoEl.innerText = todoText
    todoEl.addEventListener('click', () => todoEl.classList.toggle('completed'))
    todoEl.addEventListener('contextmenu', (e) => {
      e.preventDefault()
      todoEl.remove()
    })
    TodosUL.appendChild(todoEl)
    input.value = ''
  }
}
