const baseURL = "https://64ab817e0c6d844abedf70f0.mockapi.io"

const api = {
    get: '/users',
    delete: '/users/'
}

const emptyDiv = document.querySelector('#users')


getUsers()
function getUsers() {
    fetch(baseURL + api.get)
        .then(response => response.json())
        .then(data => {
console.log(data);
            renderUsers(data)

        })
}

function renderUsers(array) {
    emptyDiv.innerHTML = ""
    for( const user of array) {
        emptyDiv.innerHTML += `
        <div class="card" style="width: 18rem;">
        <img src="${user.avatar}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${user.name}</h5>
          <a href="#" class="btn btn-primary" onclick="updateUser(${user.id})">update</a>
          <a href="#" class="btn btn-primary">edit</a>
        </div>
      </div>
        `
    }
}

function updateUser(user_id) {
    localStorage.setItem("_id", user_id)
    location.href = "create.html"
}