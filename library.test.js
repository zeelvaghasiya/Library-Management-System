const Library = require('./Library');

describe("Library Management System", () => {
    let library;

    beforeEach(() => {
        library = new Library();
    });

    // Test for adding a book
    test("should add a book to the library", () => {
        library.addBook("123", "JavaScript Basics", "vishnu Rai", 2021);
        const books = library.viewAvailableBooks();

        expect(books).toHaveLength(1);
        expect(books[0].title).toBe("JavaScript Basics");
    });

    test("should throw an error if adding a book with duplicate ISBN", () => {
        try {
            library.addBook("123", "JavaScript Basics", "vishnu Rai", 2021);
            library.addBook("123", "Another Book", "Vinay Yadav", 2022);
        } catch (error) {
            expect(error.message).toBe("Book with this ISBN already exists.");
        }
    });

    // Test for viewing all books
    test("should return all books in the library", () => {
        library.addBook("123", "JavaScript Basics", "vishnu Rai", 2021);
        library.addBook("456", "Learn Node.js", "code with harry", 2020);

        const allBooks = library.viewAllBooks();

        expect(allBooks).toHaveLength(2);
        expect(allBooks[0].title).toBe("JavaScript Basics");
        expect(allBooks[1].title).toBe("Learn Node.js");
    });

    // Test for viewing available books
    test("should return only available books", () => {
        library.addBook("123", "JavaScript Basics", "vishnu Rai", 2021);
        library.addBook("456", "Learn Node.js", "code with harry", 2020);
        library.borrowBook("123");

        const availableBooks = library.viewAvailableBooks();

        expect(availableBooks).toHaveLength(1);
        expect(availableBooks[0].title).toBe("Learn Node.js");
    });

    // Test for borrowing a book
    test("should allow borrowing a book if available", () => {
        library.addBook("123", "JavaScript Basics", "vishnu Rai", 2021);
        library.borrowBook("123");

        const availableBooks = library.viewAvailableBooks();
        expect(availableBooks).toHaveLength(0);
    });

    test("should throw an error if trying to borrow a non-existent book", () => {
        try {
            library.borrowBook("999");
        } catch (error) {
            expect(error.message).toBe("Book not found.");
        }
    });

    test("should throw an error if the book is already borrowed", () => {
        try {
            library.addBook("123", "JavaScript Basics", "vishnu Rai", 2021);
            library.borrowBook("123");
            library.borrowBook("123");
        } catch (error) {
            expect(error.message).toBe("Book is not available for borrowing.");
        }
    });
});
