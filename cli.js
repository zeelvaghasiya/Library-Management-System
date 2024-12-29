const readline = require("readline");
const Library = require("./Library");

const library = new Library();

// CLI Setup
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Menu Options
function showMenu() {
  console.log("\nLibrary Management System");
  console.log("1. Add Book");
  console.log("2. View Available Books");
  console.log("3. View All Books");
  console.log("4. Borrow Book");
  console.log("5. Return Book");
  console.log("6. Exit");
  rl.question("\nChoose an option: ", handleMenu);
}

// Handle Menu Selection
function handleMenu(option) {
  switch (option) {
    case "1":
      rl.question("Enter book details (ISBN, Title, Author, Year): ", (input) => {
        const [isbn, title, author, year] = input.split(",").map(s => s.trim());
        library.addBook(isbn, title, author, parseInt(year));
        console.log("Book added successfully!");
        showMenu();
      });
      break;
    case "2":
      console.log("\nAvailable Books:");
      library.viewAvailableBooks().forEach((book, index) => {
        console.log(`${index + 1}. ${book.title} by ${book.author} (ISBN: ${book.isbn})`);
      });
      showMenu();
      break;
    case "3":
      console.log("\nAll Books:");
      library.viewAllBooks().forEach((book, index) => {
        console.log(
          `${index + 1}. ${book.title} by ${book.author} (ISBN: ${book.isbn}, ${
            book.isAvailable ? "Available" : "Borrowed"
          })`
        );
      });
      showMenu();
      break;
    case "4":
      rl.question("Enter the ISBN of the book to borrow: ", (isbn) => {
        library.borrowBook(isbn.trim());
        showMenu();
      });
      break;
    case "5":
      rl.question("Enter the ISBN of the book to return: ", (isbn) => {
        library.returnBook(isbn.trim());
        showMenu();
      });
      break;
    case "6":
      console.log("Exiting the Library Management System. Goodbye!");
      rl.close();
      break;
    default:
      console.log("Invalid option. Please try again.");
      showMenu();
      break;
  }
}

// Start the CLI
showMenu();
