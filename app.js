const library = [];
let index = -1;
const form = document.getElementById('form');

function Book(title, author, numOfPages, read = false) {
  this.title = title;
  this.author = author;
  this.numOfPages = numOfPages;
  this.read = read;
  this.info = () => `${this.title} by ${this.author}, ${this.numOfPages} pages, read: ${this.read}.`;
}

function addBookToLibrary(title, author, pages, read) {
  const book = new Book(title, author, pages, read);
  library.push(book);
}

function clearInputField() {
  document.getElementById('title').value = '';
  document.getElementById('author').value = '';
  document.getElementById('pages').value = '';
}

function render() {
  const div = document.createElement('div');
  div.classList.add('card');
  div.classList.add('m-3');
  div.style.width = '18rem';

  const ul = document.createElement('ul');
  ul.classList.add('list-group');
  ul.classList.add('list-group-flush');

  const firstList = document.createElement('li');
  firstList.classList.add('list-group-item');
  firstList.textContent = `Title: ${library[index].title}`;

  const secondList = document.createElement('li');
  secondList.classList.add('list-group-item');
  secondList.textContent = `Author: ${library[index].author}`;

  const thirdList = document.createElement('li');
  thirdList.classList.add('list-group-item');
  thirdList.textContent = `Pages: ${library[index].numOfPages}`;

  const fourthList = document.createElement('li');
  fourthList.classList.add('list-group-item');
  fourthList.textContent = `Read: ${library[index].read}`;

  const fifthList = document.createElement('li');
  fifthList.classList.add('list-group-item');

  const button = document.createElement('button');
  button.classList.add('btn');
  button.classList.add('btn-primary');
  button.textContent = 'Delete';

  const readButton = document.createElement('button');
  readButton.classList.add('btn');
  readButton.classList.add('btn-primary');
  readButton.classList.add('ml-2');
  readButton.textContent = 'Toggle Read';

  fifthList.appendChild(button);
  fifthList.appendChild(readButton);

  ul.appendChild(firstList);
  ul.appendChild(secondList);
  ul.appendChild(thirdList);
  ul.appendChild(fourthList);
  ul.appendChild(fifthList);

  div.appendChild(ul);

  const container = document.getElementById('card-container');
  container.appendChild(div);

  clearInputField();
}

form.addEventListener('submit', (e) => {
  e.preventDefault();

  index += 1;

  const title = e.target.elements.title.value;
  const author = e.target.elements.author.value;
  const pages = e.target.elements.pages.value;
  const read = e.target.elements.read.value;

  addBookToLibrary(title, author, pages, read);

  document.getElementById('close-modal').click();

  render();
});

document.querySelector('#card-container').addEventListener('click', (e) => {
  if (e.target.innerHTML === 'Delete') {
    e.target.parentElement.parentElement.parentElement.remove();
  }
});

document.querySelector('#card-container').addEventListener('click', (e) => {
  if (e.target.innerHTML === 'Toggle Read') {
    const parentNode = e.target.parentElement.parentElement;
    const text = parentNode.childNodes[3].innerHTML;
    if (text === 'Read: No') {
      parentNode.childNodes[3].innerHTML = 'Read: Yes';
    } else {
      parentNode.childNodes[3].innerHTML = 'Read: No';
    }
  }
});
