const titles = document.getElementById('title');
const authors = document.getElementById('author');
const add = document.getElementById('add');
const booksFromLocalStorage = JSON.parse(localStorage.getItem('books'));
const savedBooksSection = document.getElementById('saved-books');

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
  }

  remove(bookId) {
    this.allBooks = this.allBooks.filter((book) => book.id !== bookId);
    localStorage.setItem('books', JSON.stringify(this.allBooks));
    savedBooksSection.innerHTML = '';
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
          this.showBooks();
        });
        savedBooksSection.append(bookArticle);
        bookArticle.append(titleP, btnRemove);
      }
    } else {
      savedBooksSection.style.display = 'none';
    }
  }
}

const book = new Books(titles.value, authors.value);

book.showBooks();

add.addEventListener('click', () => {
  book.book.title = titles.value;
  book.book.author = authors.value;
  book.add();
});
