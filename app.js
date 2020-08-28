let library = []
let index = -1;
const form = document.getElementById('form')

function Book(title, author, numOfPages, read = false){
  this.title = title;
  this.author = author;
  this.numOfPages = numOfPages;
  this.read = read;
  this.info =  () => `${this.title} by ${this.author}, ${this.numOfPages} pages, read: ${this.read}.`
}


function addBookToLibrary(e){
  let title = document.getElementById('title').value
  let author = document.getElementById('author').value
  let pages = document.getElementById('pages').value
  let read = document.getElementById('read').value;

  let book = new Book(title, author, pages, read);
  library.push(book) 
}


form.addEventListener('submit', e => {
  e.preventDefault();

  index += 1;

  let title = e.target.elements.title.value;
  let author = e.target.elements.author.value;
  let pages = e.target.elements.pages.value;
  let read = e.target.elements.read.value;

  addBookToLibrary(title, author, pages, read);

  document.getElementById('close-modal').click();
  
  render();
})

function render(){
  var div = document.createElement('div')
  div.classList.add('card')
  div.classList.add('m-3')
  div.style.width = '18rem';

  var ul = document.createElement('ul')
  ul.classList.add('list-group');
  ul.classList.add('list-group-flush');

  var firstList = document.createElement('li');
  firstList.classList.add('list-group-item')
  firstList.textContent = `Title: ${library[index].title}`;

  var secondList = document.createElement('li');
  secondList.classList.add('list-group-item')
  secondList.textContent = `Author: ${library[index].author}`

  var thirdList = document.createElement('li');
  thirdList.classList.add('list-group-item');
  thirdList.textContent = `Pages: ${library[index].numOfPages}`;

  var fourthList = document.createElement('li');
  fourthList.classList.add('list-group-item')
  fourthList.textContent = `Read: ${library[index].read}`

  var fifthList = document.createElement('li');
  fifthList.classList.add('list-group-item')

  var button = document.createElement('button');
  button.classList.add('btn');
  button.classList.add('btn-primary');
  button.textContent = 'Delete';

  fifthList.appendChild(button)

  ul.appendChild(firstList);
  ul.appendChild(secondList);
  ul.appendChild(thirdList);
  ul.appendChild(fourthList);
  ul.appendChild(fifthList);

  div.appendChild(ul);

  var container = document.getElementById('card-container');
  container.appendChild(div);

  clearInputField()

}

function clearInputField(){
  document.getElementById('title').value = '';
  document.getElementById('author').value = '';
  document.getElementById('pages').value = '';
}

