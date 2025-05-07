const todoInput = document.getElementById("input-text")
const addBtn = document.getElementById("add-btn")
const todoList = document.getElementById("todo-list")




addBtn.addEventListener("click", (e) => {
    e.preventDefault()

    let taskText = todoInput.value.trim()
    if (taskText == "") {
        window.alert("Input must must not be empty!!")
    }

    const li = document.createElement("li")
    const span = document.createElement("span")
    span.innerText = taskText;

    const actions = document.createElement("div")
    actions.className = "actions"

    const completedBtn = document.createElement("button")
    completedBtn.textContent = "Completed"

    completedBtn.addEventListener("click", () => {
        span.classList.toggle("completed")
    })


    const removeBtn = document.createElement("button")
    removeBtn.textContent = "remove"
    removeBtn.style.backgroundColor = "red"
    removeBtn.style.color = 'white'

    removeBtn.addEventListener("click", () => {
        todoList.removeChild(li)
    })
    actions.appendChild(completedBtn)
    actions.appendChild(removeBtn)

    li.appendChild(span)
    li.appendChild(actions)

    todoList.appendChild(li)

    todoInput.value = ""


})