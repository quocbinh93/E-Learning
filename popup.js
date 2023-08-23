// Xoá phần tử read-only trên web học 
// Tạo button
var btn = document.createElement("BUTTON");
// removeReadOnly
function removeReadOnly() {
    // Lấy tất cả các phần tử có class là read-only
    var readOnly = document.getElementsByClassName("read-only");
    // Lấy số lượng phần tử có class là read-only
    var readOnlyLength = readOnly.length;
    // Duyệt qua tất cả các phần tử có class là read-only
    for (var i = 0; i < readOnlyLength; i++) {
        // Xoá class read-only
        readOnly[i].classList.remove("read-only");
    }
}
// Thêm nội dung cho button
btn.innerHTML = "Click me";
// Thêm button vào body
document.body.appendChild(btn);
// Khi click thì chạy function removeReadOnly
btn.addEventListener('click', removeReadOnly);


