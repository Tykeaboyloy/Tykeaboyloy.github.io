

var bookDisc=document.getElementById("bookDisc")
var Books=JSON.parse(localStorage.getItem("books"))

    Books.map(item=>{
        bookDisc.innerHTML+=`  
        <h4>${bookTitle}</h4>
        <span>${bookDisc}</span>
        <b>By: ${bookAuthor}</b>
    `
    })

//     Books.map(getBookDisc);
//     function getBookDisc(item){
//         return  bookDisc.innerHTML+=`  
//         <h4>${bookTitle}</h4>
//         <span>${bookDisc}</span>
//         <b>By: ${bookAuthor}</b>
//     `
//     }
//     bookDisc.innerHTML+=`  
//         <h4>${bookTitle}</h4>
//         <span>${bookDisc}</span>
//         <b>By: ${bookAuthor}</b>
//     `
// })