var getElement = document.getElementsByClassName("pic")[0];

var bookInfor = JSON.parse(localStorage.getItem("books"))
console.log(bookInfor);
function handleClickItem(index) {
    window.open("/html/bookDetail.html")
  event.preventDefault();
  console.log(bookInfor[index].bookLink);
  document.getElementById("addToCart").innerHTML = `<img style="width:100px;height:100px;"src="${bookInfor[index].bookLink}" alt="book">`;
}
bookInfor.map((item,index) => {
  getElement.innerHTML =
    getElement.innerHTML +
    `
      <div class="hi" onclick='handleClickItem(${index})' >
          <a><img src="${item.bookLink}" alt="book"></a>
          <h4>Title: ${item.bookTitle}</h4>
          <span>Author: ${item.bookAuthor}</span><br>
          <span>Discription:${item.bookDisc}</span><br>
          <span><b style="color:red;">Price from : ${item.bookPrice}$</b></span>
      </div>
`;
});
