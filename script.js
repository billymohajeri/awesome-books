const titles = document.getElementById('title');
const authors = document.getElementById('author');

const add = document.getElementById('add');

const booksFromLocalStorage = JSON.parse(localStorage.getItem('books'));

function showBooks() {
  if (booksFromLocalStorage) {
    for (let index = 0; index < booksFromLocalStorage.length; index += 1) {
      const savedBooksSection = document.getElementById('saved-books');
      const titleP = document.createElement('p');
      titleP.innerText = booksFromLocalStorage[index].title;
      titleP.innerText += `\n${booksFromLocalStorage[index].author}`;
      const btnRemove = document.createElement('button');
      btnRemove.innerText = 'Remove';
      btnRemove.className = 'remove-button';
      btnRemove.addEventListener('click', () => {
        booksFromLocalStorage.splice(index, 1);
        localStorage.setItem('books', JSON.stringify(booksFromLocalStorage));
        document.location.reload();
      });
      const hr = document.createElement('hr');
      savedBooksSection.append(titleP, btnRemove, hr);
    }
  }
}

showBooks();

add.addEventListener('click', () => {
  const newBook = {
    title: titles.value,
    author: authors.value,
  };
  if (booksFromLocalStorage) {
    localStorage.setItem(
      'books',
      JSON.stringify([...booksFromLocalStorage, newBook]),
    );
  } else {
    localStorage.setItem('books', JSON.stringify([newBook]));
  }
});
