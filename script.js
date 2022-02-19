"use strict";

let library = [];
const form = document.forms["addbook"];
const shelf = document.querySelector('body');
const showbtn = document.querySelector('.unhideModal');
const modal = document.querySelector('.modal');
const close = document.querySelector('.close-modal');



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

  

  //creating a book on the page
  const bookCard = document.createElement('div');
  const bookTitle = document.createElement('h1');
  const bookAuthor = document.createElement('h3');
  shelf.append(bookCard);
  bookCard.append(bookTitle);
  bookTitle.textContent = newBook.title;
  bookCard.append(bookAuthor);
  bookAuthor.textContent = newBook.author;
  

})

showbtn.addEventListener('click', function() {
  modal.classList.remove('hidden');
})

close.addEventListener('click', function() {
  modal.classList.add('hidden');
})


