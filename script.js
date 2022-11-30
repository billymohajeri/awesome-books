const titles = document.getElementById('title');
const authors = document.getElementById('author');
const add = document.getElementById('add');
const booksFromLocalStorage = JSON.parse(localStorage.getItem('books'));
const savedBooksSection = document.getElementById('saved-books');
const form = document.querySelector('.add-book-form');
const bookList = document.querySelector('.books-list');
const contactInfo = document.querySelector('.contact-info');

function showAdd() {
  bookList.classList.add('non-visible');
  form.classList.remove('non-visible');
  contactInfo.classList.add('non-visible');
}

// Class of book
class Books {
  // constructor which execute directely when new create keyword
  constructor(title, author) {
    // id wich we need for remove btn as well
    this.book = { id: this.allBooks.length + 1, title, author };
  }

  // Cheak local localStorage
  allBooks = booksFromLocalStorage || [];

  add() {
    this.allBooks.push(this.book);
    localStorage.setItem('books', JSON.stringify(this.allBooks));
    showAdd();
  }

  remove(bookId) {
    this.allBooks = this.allBooks.filter((book) => book.id !== bookId);
    localStorage.setItem('books', JSON.stringify(this.allBooks));
  }

  showBooks() {
    if (this.allBooks.length) {
      for (let index = 0; index < this.allBooks.length; index += 1) {
        const bookArticle = document.createElement('article');
        const titleP = document.createElement('p');
        titleP.innerText = `"${this.allBooks[index].title}`;
        titleP.innerText += `" by ${this.allBooks[index].author}`;
        const btnRemove = document.createElement('button');
        btnRemove.innerText = 'Remove';
        btnRemove.className = 'remove-button';
        btnRemove.addEventListener('click', () => {
          this.remove(this.allBooks[index].id);
          if (!this.allBooks.length) {
            savedBooksSection.innerText = 'The list is empty...';
          }
          btnRemove.parentElement.remove();
        });
        savedBooksSection.append(bookArticle);
        bookArticle.append(titleP, btnRemove);
      }
    } else {
      savedBooksSection.innerText = 'The list is empty...';
    }
  }
}

const book = new Books(titles.value, authors.value);

book.showBooks();

add.addEventListener('click', () => {
  book.book.title = titles.value;
  book.book.author = authors.value;
  book.book.id = book.allBooks.length + 1;
  if (book.book.title && book.book.author) {
    book.add();
  }
});

function showList() {
  if (bookList.classList.contains('non-visible')) {
    bookList.classList.remove('non-visible');
    form.classList.add('non-visible');
    contactInfo.classList.add('non-visible');
  }
}

function showContact() {
  bookList.classList.add('non-visible');
  form.classList.add('non-visible');
  contactInfo.classList.remove('non-visible');
}

const listLi = document.getElementById('list-li');
const addLi = document.getElementById('add-li');
const contactLi = document.getElementById('contact-li');

listLi.addEventListener('click', showList);
addLi.addEventListener('click', showAdd);
contactLi.addEventListener('click', showContact);
