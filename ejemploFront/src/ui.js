// ui.js
function renderUserList(users) {
const userList = document.getElementById("userList");
    userList.innerHTML = ""; // Limpiar la lista antes de renderizar

users.forEach((user) => {
    const listItem = document.createElement("li");
    listItem.classList.add("alert", "alert-primary"); // Añadir clases de Bootstrap

    listItem.textContent = user.name;
    userList.appendChild(listItem);
});
}

function renderPostList(posts) {
const postList = document.getElementById("postList");
postList.innerHTML = "";

posts.forEach((post) => {
    const listItem = document.createElement("li");
    listItem.classList.add("alert", "alert-danger"); // Añadir clases de Bootstrap
    listItem.textContent = post.title;
    postList.appendChild(listItem);
});
}

export { renderUserList, renderPostList };