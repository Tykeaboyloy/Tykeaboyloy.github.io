var Book = JSON.parse(localStorage.getItem("books"));
// console.log(Book);
var getElement = document.getElementsByClassName("pic")[0];
if (Book.length > 0) {
  Book.filter((item) => item.bookCat.includes("Motivation", "Romance")).map(
    (item, index) => {
      getElement.innerHTML =
        getElement.innerHTML +
        `
                <div class="hi">
                    <a href="/html/bookDetail.html" target="_blank"> <img src="${item.bookLink}" alt="book"></a>
                    <h4>Title:${item.bookTitle}</h4>
                    <span>Author:${item.bookAuthor}</span><br>
                    <span><b style="color:red;">Price from : ${item.bookPrice}</b></span>
                </div>
             `;
    }
  );
}
