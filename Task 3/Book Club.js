class BookClub {
    constructor(library) {
        this.library = library;
        this.books = [];
        this.members = [];
    }

    addBook(title, author) {
        let foundBook = this.books.find(book => book.title === title);

        if (foundBook) {
            return `The book "${title}" by ${author} is already in ${library} library.`;
        }

        this.books.push({
            title: title,
            author: author
        });

        return `The book "${title}" by ${author} has been added to ${this.library} library.`;
    }

    addMember(memberName) {
        let foundMemberName = this.members.find(membersName => membersName === memberName);

        if (foundMemberName) {
            return `Member ${memberName} is already a part of the book club.`;
        }

        this.members.push(memberName);
        return `Member ${memberName} has been joined to the book club.`;
    }

    assignBookToMember(memberName, bookTitle) {
        let foundMemberName = this.members.find(membersName => membersName === memberName);
        let foundBook = this.books.find(book => book.title === bookTitle);

        if (!foundMemberName) {
            throw new Error(`Member ${memberName} not found.`);
        }

        if (!foundBook) {
            throw new Error(`Book "${bookTitle}" not found.`);
        }

        this.books = this.books.filter((book) => book.title !== bookTitle);
        return `Member ${memberName} has been assigned the book "${bookTitle}" by ${foundBook.author}.`;
    }

    generateReadingReport() {
        if (this.members == 0) {
            return "No members in the book club.";
        }

        if (this.books == 0) {
            return "No available books in the library.";
        }

        let result = `Available Books in ${this.library} library:`;

        for (let el of this.books) {
            result += `\n"${el.title}" by ${el.author}`;
        }

        return result;
    }
}

const myBookClub = new BookClub('The Bookaholics');

console.log(myBookClub.addBook("The Great Gatsby", "F. Scott Fitzgerald"));
console.log(myBookClub.addBook("To Kill a Mockingbird", "Harper Lee"));
console.log(myBookClub.addBook("1984", "George Orwell"));
console.log(myBookClub.addMember("Alice"));
console.log(myBookClub.addMember("Peter"));
console.log(myBookClub.assignBookToMember("Mary", "The Great Gatsby"));