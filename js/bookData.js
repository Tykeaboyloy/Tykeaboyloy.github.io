var bookInfor = [
    {
        url: 'https://images-na.ssl-images-amazon.com/images/I/81D-gdnku+L.jpg',
        title: 'They Both Die at the End',
        author: 'Adam Silvera',
        price: '10$',
        category:'Romance',
    },
    {
        url: 'https://lh3.googleusercontent.com/proxy/QM7vQ3_Srge1Qx9YmM_EWO6j7YsxKHS5Gvuehw0yrB2GDlmab5SUj4R4QeUz7wEgCCzS0XVCXVWn-qXKy8Daayc0DL2KBCdvndxepk2gKpyYBb3L2KeM1ws_-ag1P-Q2YA',
        title:"To all the boys I've loved before",
        author: 'Jenny Han',
        price: '10$',
        category:'Romance',
    },
    {
        url: 'https://images-na.ssl-images-amazon.com/images/I/61JS5pSCQqL.jpg',
        title: "P.S. I still love you",
        author: 'Jenny Han',
        price: '10$',
        category:'Romance',
    },
    {
        url: 'https://images-na.ssl-images-amazon.com/images/I/71aKL1ss9KL.jpg',
        title: 'Always and Forever',
        author: 'Jenny Han',
        price: '10$',
        category:'Romance',
    },
    {
        url: 'https://m.media-amazon.com/images/I/41nngxCNKxL.jpg',
        title: 'IT',
        author: 'Stphen King',
        price: '10$',
        category:'Horror',
    },
    {
        url: 'https://images-na.ssl-images-amazon.com/images/I/81uQocUlNcL.jpg',
        title: 'Green Mile',
        author: 'Stephen King',
        price: '10$',
        category:'Crime',
    },
    {
        url: 'http://prodimage.images-bn.com/pimages/9780345806789_p0_v2_s1200x630.jpg',
        title: 'The Shinning',
        author: 'Stephen King',
        price: '10$',
        category:'Horror',
    },
    {
        url: 'https://m.media-amazon.com/images/I/41tATg+hmiL.jpg',
        title: 'The Long Walk',
        author: 'Stephen King',
        price: '10$',
        category:'Horror',
    },
    {
        url: 'https://m.media-amazon.com/images/I/51jv4ITqI6L.jpg',
        title: 'The Outsider',
        author: 'Stephen King',
        price: '10$',
        category:'Horror',
    },
]
var getElement = document.getElementsByClassName('pic')[0];
bookInfor.map((item,index)=>{
    getElement.innerHTML=getElement.innerHTML+
     `
        <div class="hi">
            <a href="/html/bookDetail.html" target="_blank"> <img src="${item.url}" alt="book"></a>
            <h4>Title: ${item.title}</h4>
            <span>Author: ${item.author}</span><br>
            <span><b style="color:red;">Price from : ${item.price}</b></span>
        </div>
  `
})