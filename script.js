"use strict";

let library = [];
const form = document.forms["addbook"];
const shelf = document.querySelector('body');
const showbtn = document.querySelector('.unhideModal');
const modal = document.querySelector('.modal');
const close = document.querySelector('.close-modal');
const overlay = document.querySelector('.overlay');



// console.log(form);
console.log(library);

function Book(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;
}




form.addEventListener('submit', function(e) {
  e.preventDefault();
  //getting form values(inputs)
  const title = form.querySelector('input[id="title"]').value;
  const author = form.querySelector('input[id="author"]').value;
  const pages = form.querySelector('input[id="pages"]').value;
  const newBook = new Book(title, author, pages);
  library.push(newBook);
  console.log(library);

  

  //creating a book on the page
  const bookCard = document.createElement('div');
  const bookTitle = document.createElement('h2');
  const bookAuthor = document.createElement('h3');
  const bookPages = document.createElement('h4');
  shelf.append(bookCard);
  bookCard.append(bookTitle);
  bookTitle.textContent = 'Title: ' + newBook.title;
  bookCard.append(bookAuthor);
  bookAuthor.textContent = 'Author: ' + newBook.author;
  bookCard.append(bookPages);
  bookPages.textContent = 'Pages: ' + newBook.pages;
  

})

showbtn.addEventListener('click', function() {
  modal.classList.remove('hidden');
})

close.addEventListener('click', function() {
  modal.classList.add('hidden');
})


