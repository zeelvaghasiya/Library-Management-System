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
});
