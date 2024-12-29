class Book {
    constructor(isbn, title, author, year) {
      this.isbn = isbn;
      this.title = title;
      this.author = author;
      this.year = year;
      this.isAvailable = true;
    }
  }
  
  class Library {
    constructor() {
      this.books = [];
    }
  
    addBook(isbn, title, author, year) {
      try {
        if (this.books.some(book => book.isbn === isbn)) {
          throw new Error("Book with this ISBN already exists.");
        }
  
        const book = new Book(isbn, title, author, year);
        this.books.push(book);
      } catch (error) {
        console.error(`Error adding book: ${error.message}`);
      }
    }

    viewAvailableBooks() {
        return this.books.filter(book => book.isAvailable);
      }

    viewAllBooks() {
        return this.books;
      }
  
  }
  
  module.exports = Library;
  