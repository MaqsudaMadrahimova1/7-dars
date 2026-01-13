const elBox = document.querySelector(".box")
fetch("https://jsonplaceholder.typicode.com/posts")
.then((res) => res.json())
.then((data) => renderPosts(data))
.catch(error => console.log(error))
function renderPosts(data){
    for (const element of data) {
      let html = `
          <li>
        <h1> ${element.title}</h1>
        <p> ${element.body}</p>
    </li>`
    elBox.insertAdjacentHTML("beforeend", html)
    }
}

const elBox1 = document.querySelector(".box1")

fetch("https://jsonplaceholder.typicode.com/comments")
  .then(res => res.json())
  .then(data => renderCommets(data))
  .catch(error => console.log(error))

function renderCommets(data) {
  for (const element of data) {
    let html = `
      <li>
        <h1>${element.name}</h1>
        <p>${element.body}</p>
      </li>
    `
    elBox1.insertAdjacentHTML("beforeend", html)
  }
}

const elBox2 = document.querySelector(".box2")

fetch("https://jsonplaceholder.typicode.com/albums")
  .then(res => res.json())
  .then(data => renderAlbums(data))
  .catch(error => console.log(error))

function renderAlbums(data) {
  for (const element of data) {
    let html = `
      <li class="album">
        <h2>${element.title}</h2>
        <p>Album ID: ${element.id}</p>
        <p>User ID: ${element.userId}</p>
      </li>
    `
    elBox2.insertAdjacentHTML("beforeend", html)
  }
}
const elBox3 = document.querySelector(".box3")

fetch("https://jsonplaceholder.typicode.com/photos")
  .then(res => res.json())
  .then(data => renderPhotos(data))
  .catch(error => console.log(error))

function renderPhotos(data) {
  for (const element of data) {
    let html = `
      <li class="photo-card">
        <img src="${element.thumbnailUrl}" alt="${element.title}">
        <h4>${element.title}</h4>
      </li>
    `
    elBox3.insertAdjacentHTML("beforeend", html)
  }
}

const elBox4 = document.querySelector(".box4")

fetch("https://jsonplaceholder.typicode.com/todos")
  .then(res => res.json())
  .then(data => renderTodos(data))
  .catch(error => console.log(error))

function renderTodos(data) {
  for (const element of data) {
    let html = `
      <li class="todo">
        <h4>${element.title}</h4>
        <p>Status: 
          <span class="${element.completed ? 'done' : 'pending'}">
          </span>
        </p>
      </li>
    `
    elBox4.insertAdjacentHTML("beforeend", html)
  }
}
const elBox5 = document.querySelector(".box5")

fetch("https://jsonplaceholder.typicode.com/users")
  .then(res => res.json())
  .then(data => renderUsers(data))
  .catch(error => console.log(error))

function renderUsers(data) {
  for (const user of data) {
    let html = `
      <div class="user-card">
        <h2>${user.name}</h2>
        <p><strong>Username:</strong> ${user.username}</p>
        <p><strong>Email:</strong> ${user.email}</p>
        <p><strong>Phone:</strong> ${user.phone}</p>
      </div>
    `
    elBox5.insertAdjacentHTML("beforeend", html)
  }
}



