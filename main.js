library = [];

function Book(title, author, pages, coverUrl, read) {
  if(!new.target) {
    throw Error("You must use the 'new' operator");
  }
  this.id = crypto.randomUUID();
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.coverUrl = coverUrl;
  this.read = read;
  function info() {
    console.log(`${title} by ${author}, ${pages} pages, ${read ? "read" : "not read yet"}`);
  }
  info()
}

// Sample books to populate the library
addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 310, "https://covers.openlibrary.org/b/isbn/9780345339683-L.jpg", true);
addBookToLibrary("To Kill a Mockingbird", "Harper Lee", 281, "https://covers.openlibrary.org/b/isbn/9780446310789-L.jpg", false);
addBookToLibrary("1984", "George Orwell", 328, "https://covers.openlibrary.org/b/isbn/9780451524935-L.jpg", true);
addBookToLibrary("The Great Gatsby", "F. Scott Fitzgerald", 180, "https://covers.openlibrary.org/b/isbn/9780743273565-L.jpg", false);
addBookToLibrary("The Catcher in the Rye", "J.D. Salinger", 214, "https://covers.openlibrary.org/b/isbn/9780316769488-L.jpg", true);

function addBookToLibrary(title, author, pages, coverUrl, read) {
  const book = new Book(title, author, pages, coverUrl, read);
  library.push(book);
}

function toggleReadStatus(id) {
  library[id].read = !library[id].read;
  displayLibrary();
}

function removeBook(id) {  
  library.splice(id, 1);
  displayLibrary();
}

function displayLibrary() {
  const libraryContainer = document.getElementById("library");
  libraryContainer.innerHTML = "";
  library.forEach((book, index) => {
    const bookElement = document.createElement("div");
    bookElement.classList.add("book");
    bookElement.innerHTML = `
      ${book.coverUrl ? `<img src="${book.coverUrl}" alt="Cover of ${book.title}">` : `<div class="cover-placeholder">No cover available</div>`}
      <h3>${book.title}</h3>
      <p><b>Author:</b> ${book.author}</p>
      <p><b>Pages:</b> ${book.pages}</p>
      <p><b>Status:</b> ${book.read ? "Read" : "Not read yet"}</p>
      <button class="button-primary" onclick="toggleReadStatus(${index})">Toggle Read Status</button>
      <button class="button-primary" onclick="removeBook(${index})">Remove Book</button>
    `;
    libraryContainer.appendChild(bookElement);
  });
}