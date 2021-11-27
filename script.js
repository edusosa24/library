// Library Array
let myLibrary = [];

function addBookToLibrary(book) {
  myLibrary.push(book);
}


// Book Constructor
function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}


// Calls book constructor and adds new book to the library
function newBook() {
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const pages = document.getElementById('pages').value;
  const read = document.getElementById('read').checked;

  const book = new Book(title, author, pages, read);

  addBookToLibrary(book);

  return book;
}


// Table handling
let booksInfo = document.querySelector(".books");

function displayNewBook(book) {
  // Create elements
  const newBook = document.createElement("tr");
  const bookTitle = document.createElement("td");
  const bookAuthor = document.createElement("td");
  const bookPages = document.createElement("td");
  const bookRead = document.createElement("td");
  const bookDelete = document.createElement("td");


  // Append elements to parent
  booksInfo.appendChild(newBook);
  newBook.appendChild(bookTitle);
  newBook.appendChild(bookAuthor);
  newBook.appendChild(bookPages);
  newBook.appendChild(bookRead);
  newBook.appendChild(bookDelete);

  // Add text content
  bookTitle.textContent = book.title;
  bookAuthor.textContent = book.author;
  bookPages.textContent = book.pages;
  if(book.read){
    bookRead.textContent = "YES"
    bookRead.style.color = "green"; 
  } else{
    bookRead.textContent = "NO"
    bookRead.style.color = "red"; 
  }   
  bookDelete.textContent = " X ";

  // Add classes
  bookRead.classList.add("read");
  bookDelete.classList.add("delete");

  // Extra functionalities
  bookRead.addEventListener('mousedown', function(e){ e.preventDefault(); }, false);
  bookDelete.addEventListener('mousedown', function(e){ e.preventDefault(); }, false);

  bookDelete.onclick = () => {
    newBook.parentElement.removeChild(newBook);
  }

  bookRead.onclick = () => {
    if(bookRead.textContent === "YES"){
      bookRead.textContent = "NO";
      bookRead.style.color = "red"; 
    } else {
      bookRead.textContent = "YES";
      bookRead.style.color = "green"; 
    }
  }
}


// Prevents form submit from refreshing the page
let form = document.querySelector(".book-form");
function handleForm(event) {
  event.preventDefault();
}
form.addEventListener('submit', handleForm);


// Switch between add button and form
function openForm() {
  document.querySelector(".small-btn").style.display = "none";
  document.querySelector("h1").style.display = "none";
  document.querySelector(".library-display").style.display = "none";
  document.querySelector(".popup-form").style.display = "flex";
}

function closeForm() {
  document.querySelector(".popup-form").style.display = "none";
  document.querySelector("h1").style.display = "block";
  document.querySelector(".library-display").style.display = "block";
  document.querySelector(".small-btn").style.display = "block";
  form.reset();
}


// Calls the necesary functions for adding a new book
function addBook(){
  const book = newBook();
  displayNewBook(book);
  closeForm();
}


/* Test
let wot = new Book("The wheel of time", "Robert Jordan", 864, true);
let cd = new Book("Corazón delator", "Edgar Alan Poe", 18, true);
addBookToLibrary(wot);
addBookToLibrary(cd);

function refreshLibrary(){
  for(let i = 0; i < myLibrary.length; i++){
    displayNewBook(myLibrary[i]);
  }
}*/
