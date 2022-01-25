let display=document.getElementById("display");
let inputTitle=document.querySelector("#inputtitle");
let inputPages=document.querySelector("#inputpages");
let inputAuthor=document.querySelector("#inputauthor");

let myLibrary=[
    {title: "A Game of Thrones",
    author: "George R. R. Martin",
    pages: 694,
    read: false}
];
console.log(myLibrary);

//Object Constructor
function myBook (author, title, pages, read){
    this.author= author;
    this.title=title;
    this.pages=pages;
    this.read=read;    
};

function addBookToLibrary (){
  let title = inputTitle.value;
  let author = inputPages.value;
  let pages = inputAuthor.value;
  let summary = new myBook (title,author,pages,read)
  myLibrary.push(summary);
}


/*
function displayLibrary (){
for (let i=0;i<myLibrary.length; i++){
    console.log(myLibrary[i]);
};
*/


let submit=document.querySelector("#submit")
submit.addEventListener("click", print);


function print() {
 document.getElementById("display").innerHTML = document.getElementById('title').value + " " + 
document.getElementById('author').value + " " +
document.getElementById('pages').value;
  }
