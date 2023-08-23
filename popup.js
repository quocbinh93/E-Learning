// Xoá phần tử read-only trên web học 
// Tạo button
const button = document.createElement("button");
button.innerHTML = "Click me";
document.body.appendChild(button);
// remove read-only
function removeReadOnly() {
    const readOnly = document.getElementsByClassName("read-only");
    for (let i = 0; i < readOnly.length; i++) {
        readOnly[i].remove();
    }
}
// add event listener
button.addEventListener("click", removeReadOnly);

