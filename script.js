const titles = document.getElementById('title');
const authors = document.getElementById('author');

const add = document.getElementById('add');

const booksFromLocalStorage = JSON.parse(localStorage.getItem('books'));

const savedBooksSection = document.getElementById('saved-books');

// Class of book 
class Books {
    // constructor which execute directely when new create keyword 
    constructor (title, author)
    {
        // id wich we need for remove btn as well 
        this.book = {id: this.allBooks.length + 1, title, author}   
    }

    // Cheak local localStorage 
    allBooks = booksFromLocalStorage ? booksFromLocalStorage : [];

    add() {
        this.allBooks.push(this.book)
        localStorage.setItem('books', JSON.stringify(this.allBooks));
    }

    remove(bookId) {
        this.allBooks = this.allBooks.filter((book) => book.id !== bookId);
        localStorage.setItem('books', JSON.stringify(this.allBooks));
        savedBooksSection.innerHTML = '';
    }
}

const book = new Books(titles.value, authors.value);

function showBooks() {
  if (booksFromLocalStorage) {
    for (let index = 0; index < book.allBooks.length; index += 1) {
      const titleP = document.createElement('p');
      titleP.innerText = book.allBooks[index].title;
      titleP.innerText += `\n${book.allBooks[index].author}`;
      const btnRemove = document.createElement('button');
      btnRemove.innerText = 'Remove';
      btnRemove.className = 'remove-button';
      btnRemove.addEventListener('click', () => {
        book.remove(book.allBooks[index].id);

        showBooks()
      });
      const hr = document.createElement('hr');
      savedBooksSection.append(titleP, btnRemove, hr);
    }
  }
}

showBooks();


add.addEventListener('click', () => {
    book.book.title = titles.value;
    book.book.author = authors.value;
    book.add();
});
