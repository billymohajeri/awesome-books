const titles = document.getElementById('title');
const authors = document.getElementById('author');

const add = document.getElementById('add');

const booksFromLocalStorage = JSON.parse(localStorage.getItem('books'));


add.addEventListener('click', () => {

const newBook = {
    // id: booksFromLocalStorage ? booksFromLocalStorage.lenght + 1 : 1,
    title: titles.value,
    author: authors.value
}
   if(booksFromLocalStorage) {
    localStorage.setItem('books', JSON.stringify([...booksFromLocalStorage, newBook]));
    
   } else {
    localStorage.setItem('books', JSON.stringify([newBook]));
   }
});