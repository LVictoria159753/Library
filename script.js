
let myLibrary=[
    {title: "A Game of Thrones",
    author: "George R. R. Martin",
    pages: 694,
    read: false}
];
console.log(myLibrary);

//Object Constructor
function myBook (author, title, pages,read){
    this.author= author;
    this.title=title;
    this.pages=pages;
    this.read=read;
  
};

function addBookToLibrary (){
  let inputTitle = document.getElementById("title");
  let inputAuthor = document.getElementById("author");
  let inputPages = document.getElementById("pages");
  let inputRead = document.getElementById("read");
  title = inputTitle.value;
  author = inputPages.value;
  pages = inputAuthor.value;
  summary = new myBook ( this.title, this.author, this.pages)
  myLibrary.push(summary);
}


/*
function displayLibrary (){
for (let i=0;i<myLibrary.length; i++){
    console.log(myLibrary[i]);
};
*/

//Allows the table values to be populated.
let submit=document.querySelector("#submit");
submit.addEventListener('click', ()=>{
 print();
 addBookToLibrary();
});

function print() {
    document.getElementById("displayTitle").innerHTML = document.getElementById('title').value + " ";
    document.getElementById("displayAuthor").innerHTML=document.getElementById('author').value + " " ;
    document.getElementById("displayPages").innerHTML=document.getElementById('pages').value +" ";

  }
