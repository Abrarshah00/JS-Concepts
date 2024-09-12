let books = [];
const bookForm = document.getElementById("bookForm");
const submitButton = document.getElementById("submitButton");
const title = document.getElementById("title");
const author = document.getElementById("author");
const readButton = document.getElementById("readButton");
const alert = document.getElementById("alert");
submitButton.disabled = true;
function previewBooks() {
    const bookList = document.getElementById("bookList");
    bookList.innerHTML = ""; // Clear the book list before adding new ones

    if (books.length > 0) {
        books.forEach((book, index) => {
            // Create a list item
            const bookItem = document.createElement("li");

            // Create a text node with book details
            const bookText = document.createTextNode(`${book.title} by ${book.author} `);

            // Create a button
            const readButton = document.createElement("button");
            readButton.textContent = "Read";
            readButton.className = "read-button"; // Optional: Add a class for styling or event handling
            readButton.id = "readButton"
            readButton.addEventListener("click", () => {
                handleReadClick(book, index);
            })
            // Append the text and button to the list item
            bookItem.appendChild(bookText);
            bookItem.appendChild(readButton);

            // Append the list item to the book list
            bookList.appendChild(bookItem);
            if (book.hasRead) {
                readButton.textContent = "Unread"; // Update the button text if the book has been read
            }
        });
    }

    console.log("Books", books);
}
// Function to handle button click
function handleReadClick(book, index) {
    // Perform actions based on the clicked button
    // For example, you could show a message or change book status
    console.log(`Read button clicked for book index:${index}`, book);
    books[index] = { ...book, hasRead: !book.hasRead }
    console.log("Books", books);
    previewBooks();
}

function addBook(title, author) {
    const hasBookAlready = books.filter((book) => book.title === title)
    if (hasBookAlready.length > 0) {
        alert.innerHTML('Book already added')
        return;
    } else {
        books.push({ title: title, author: author, hasRead: false });
        submitButton.disabled = true;
        previewBooks(); // Call this to update the book list after adding a new book
    }
}
function checkFields() {
    if (title.value.trim() !== '' && author.value.trim() !== '') {
        submitButton.disabled = false; // Enable the button
    } else {
        submitButton.disabled = true; // Disable the button
    }
}

// Add event listeners to the input fields to check on input
title.addEventListener('input', checkFields);
author.addEventListener('input', checkFields);

bookForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form submission behavior

    addBook(title.value, author.value); // Call the addBook function with values

    // Clear the input fields after submission
    title.value = "";
    author.value = "";
});
