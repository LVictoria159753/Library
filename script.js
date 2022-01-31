//Book objects will be stored in an array
let myLibrary=[
];
console.log(myLibrary);


//Object Constructor
function myBook (author, title, pages,read){
    this.author= author;
    this.title=title;
    this.pages=pages;
    this.read=read;
  
};

//constructor function where user input is pushed into array 
function addBookToLibrary (){
  let inputTitle = document.getElementById("title");
  let inputAuthor = document.getElementById("author");
  let inputPages = document.getElementById("pages");
  let inputRead = document.getElementById("read");
  title = inputTitle.value;
  author = inputPages.value;
  pages = inputAuthor.value;
  read= inputRead.value;
  summary = new myBook ( this.title, this.author, this.pages, this.read)
  myLibrary.push(summary);
}

//prints array values on page
function displayLibrary (){
for (let i=0;i<myLibrary.length; i++){
    console.log(myLibrary[i]);
    arrayContents=JSON.stringify(myLibrary)
    let displayBooks=document.querySelector("#displayBooks").innerHTML=arrayContents;
}

}

//Allows the table values to be populated.
let submit=document.querySelector("#submit");
submit.addEventListener('click', ()=>{
  print();
  addBookToLibrary();
  displayLibrary();
});

//prints userinput on the webpage so you can see what is going on. 
function print() {
    document.getElementById("displayTitle").innerHTML = document.getElementById('title').value + " ";
    document.getElementById("displayAuthor").innerHTML=document.getElementById('author').value + " " ;
    document.getElementById("displayPages").innerHTML=document.getElementById('pages').value +" ";
    document.getElementById("displayRead").innerHTML=document.getElementById('read').value +" ";
  }

