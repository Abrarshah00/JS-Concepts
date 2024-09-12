function theHobbit(title, author, pages, hasRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.hasRead = function () {
        if (hasRead) {
            return "You have read this book";
        } else return "You have not read this book"
    }
}

const hobbit = new theHobbit("a thousand splendid suns", "Khalid Jibran", 123, false)
console.log("hobbit", hobbit.hasRead())
console.log("prototype", Object.getPrototypeOf(hobbit))