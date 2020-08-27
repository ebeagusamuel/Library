let library = []

function Book(title, author, numOfPages, read = false){
  this.title = title;
  this.author = author;
  this.numOfPages = numOfPages;
  this.read = read;
  this.info =  () => `${this.title} by ${this.author}, ${this.numOfPages} pages, read: ${this.read}.`
}


function addBookToLibrary(){
  let title = document.getElementById('title').value
  let author = document.getElementById('author').value
  let pages = document.getElementById('pages').value
  let read = document.getElementById('read').value;

  let book = new Book(title, author, pages, read);
  library.push(book) 
}

