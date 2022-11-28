let bookObj = {};
let booksArr = [];
let keys = Object.keys(localStorage);
// console.log(keys);
//console.log(localStorage.getItem(1));
console.log(keys);
// console.log(keys.length);

// if (keys) {
for (let index = 0; index < localStorage.length; index++) {
  let savedBooks = JSON.parse(localStorage.getItem(index));
  if (savedBooks) {
    console.log(index, savedBooks);
    const savedBooksSection = document.getElementById("saved-books");
    const titleP = document.createElement("p");
    titleP.innerText = savedBooks.title;
    titleP.innerText += "\n" + savedBooks.author;
    // const authorP = document.createElement("p");
    // authorP.innerText = savedBooks.author;
    const btnRemove = document.createElement("button");
    btnRemove.innerText = "Remove";
    const hr = document.createElement("hr");
    savedBooksSection.append(titleP, btnRemove, hr);
  }
}
// }

// console.log(bookObj);
// console.log(booksArr);
// console.log(savedBooks.length);
function addBook() {
  let titleTextBox = document.getElementById("title").value;
  bookObj.title = titleTextBox;
  let authorTextBox = document.getElementById("author").value;
  bookObj.author = authorTextBox;
  console.log(bookObj);
  booksArr.push(bookObj);
  localStorage.setItem(localStorage.length, JSON.stringify(bookObj));
}

// function removeBook() {}

//localStorage.setItem(1, JSON.stringify(dataObj));

const addBtn = document.getElementById("add");
addBtn.addEventListener("click", addBook);
