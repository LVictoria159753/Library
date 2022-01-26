
let myLibrary=[
    {title: "A Game of Thrones",
    author: "George R. R. Martin",
    pages: 694,
    read: false}
];
console.log(myLibrary);

//Object Constructor
function myBook (author, title, pages){
    this.author= author;
    this.title=title;
    this.pages=pages;
  
};

function addBookToLibrary (){
  let title = inputTitle.value;
  let author = inputPages.value;
  let pages = inputAuthor.value;
  let summary = new myBook (title,author,pages)
  myLibrary.push(summary);
}


/*
function displayLibrary (){
for (let i=0;i<myLibrary.length; i++){
    console.log(myLibrary[i]);
};
*/

//Allows the table values to be populated for a row
let submit=document.querySelector("#submit")
submit.addEventListener("click", print);

function print() {
    document.getElementById("displayTitle").innerHTML = document.getElementById('title').value + " ";
    document.getElementById("displayAuthor").innerHTML=document.getElementById('author').value + " " ;
    document.getElementById("displayPages").innerHTML=document.getElementById('pages').value +" ";

  }
