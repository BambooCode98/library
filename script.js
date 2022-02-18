"use strict";

let library = [];
const form = document.forms["addbook"];
const shelf = document.querySelector('body');



// console.log(form);
console.log(library);

function Book(title, author) {
  this.title = title;
  this.author = author;
}




form.addEventListener('submit', function(e) {
  e.preventDefault();
  const title = form.querySelector('input[id="title"]').value;
  const author = form.querySelector('input[id="author"]').value;
  // console.log(`title: ${title}`, `author: ${author}`);
  const newBook = new Book(title, author);
  library.push(newBook);
  // console.log(newBook);
  console.log(library);

  library.forEach((element, index) => {

    //creating a book on the page
    const bookCard = document.createElement('div');
    const bookTitle = document.createElement('h1');
    const bookAuthor = document.createElement('h3');
    shelf.append(bookCard);
    bookCard.append(bookTitle);
    bookTitle.textContent = element.title;
    // console.log(element.title, index);
    bookCard.append(bookAuthor);
    bookAuthor.textContent = element.author;
  })

})

function addBookToLibraryPage() {
  
  library.forEach((element, index) => {

    //creating a book on the page
    library.push(newBook);

    const bookCard = document.createElement('div');
    const bookTitle = document.createElement('h1');
    const bookAuthor = document.createElement('h3');
    shelf.append(bookCard);
    bookCard.append(bookTitle);
    bookTitle.textContent = element.title;
    console.log(element.title, index);
    bookCard.append(bookAuthor);
    bookAuthor.textContent = element.author;
  })
}





