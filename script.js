//Book objects will be stored in an array
let myLibrary=[];
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

//display library as well as the cards that pop up
function displayLibrary (){
const container= document.querySelector("#container");

// childElementCount- counts the number of child elements 
for (let i=container.childElementCount;i<myLibrary.length; i++){
    console.log(myLibrary[i]);
    let displayBooks=document.querySelector("#displayBooks").innerHTML= myBook.author + myBook.toString  + myBook.pages + myBook.read;

    let card= document.createElement("div");
        card.classList.add("card");
        card.dataset.index = i;
    let title= document.createElement("h3");
      card.textContent=myLibrary[i].title;
    let author= document.createElement("p");
      card.textContent=myLibrary[i].author;
    let pages= document.createElement("p");
      card.textContent=myLibrary[i].pages;


    card.appendChild(title);
    card.appendChild(author);
    card.appendChild(pages);
    container.appendChild(card);
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


/* Scrap Code

  //creating book card
  function booktile(){
  
    const container= document.querySelector("container");
     const tile = document.createElement("div");
    
     tile.style.width = "100px";
     tile.style.height = "100px";
     tile.style.background = "red";
     tile.style.color = "white";
     tile.innerHTML = "Hello";
    container.appendChild(tile)
      }
    
    myLibrary.forEach(function (){
      booktile();
    
    });
    
 */