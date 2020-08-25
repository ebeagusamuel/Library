function Book(title, author, numOfPages, read = false){
  this.title = title;
  this.author = author;
  this.numOfPages = numOfPages;
  this.read = read;
  this.info =  () => `${this.title} by ${this.author}, ${this.numOfPages} pages, read: ${this.read}.`
}
