let myLibrary=[];
console.log(myLibrary);

//Object Constructor
function myBook (author, title, pages, read){
    this.author= author;
    this.title=title;
    this.pages=pages;
    this.read=read;
    this.summary = function (){
      return ('${this.title}','${this.author}', '${this.pages}', '${this.read}');
    }
};

function addBookToLibrary (book){
  myLibrary.push(book);
}



function displayLibrary (){
for (i=0; myLibrary.length; i++){
    myLibrary[i];
    console.log(myLibrary[i]);
};


let submit=document.querySelector("#submit")

submit.addEventListener("click", print);


function print() {
 document.getElementById("display").innerHTML = document.getElementById('title').value + " " + 
document.getElementById('author').value + " " +
document.getElementById('pages').value;
  }


