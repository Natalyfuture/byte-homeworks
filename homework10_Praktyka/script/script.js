const actionButton = document.querySelector("button");
actionButton.addEventListener("click", library);

const books = [
    {id: 1, author: "Фиджеральд", name: "Великий Гетсби", isReading: false},
    {id: 2, author: "Толстой", name: "Анна Каренина", isReading: false},
    {id: 3, author: "Оруел", name: "1984", isReading: false},
    {id: 4, author: "Сервантес", name: "Дон Кихот", isReading: false},
    {id: 5, author: "Достоевский", name: "Преступление и наказание", isReading: false},
];

function library() {
    let action = prompt('What action do you want?');
    action = action.toLowerCase().trim();
    
    if (action === null){
        alert('Bye!')
        return;
    }

    switch(action){
        case "take":
            takeBook();
            break;
        case "return":
            returnBook();
            break;
        case "add":
            addBook();
            break;
        default:
    }
}

function takeBook() {
    const availableBooksName = books
    .filter((book) => !book.isReading)
    .map((book) => `- ${book.name}`)
    .join('\n');

    let desireBookName = prompt(`Choose the book and enter it's name:\n ${availableBooksName}`);

    if(!desireBookName.trim()) {
        alert('No book name');

        return;
    }

    desireBookName = desireBookName.trim().toLowerCase();

    let desireBook = books.find((book) => {
        return book.name.trim().toLowerCase() === desireBookName;
    });

    if(!desireBook){
        alert('No book with this name');

        return;
    }

    if(desireBook.isReading){
        alert('This book is reading by someone else.');

        return;
    }else{
        alert(`OK. Id your book is : ${desireBook.id}`)
    }

    desireBook.isReading = true;
}

function returnBook() {
    const returningBook = Number(prompt('Enter id of your book:'));

    const bookId = books.find((book) => book.id === returningBook);

    if(!bookId){
        alert('There is no book with such id in the library.')
        return;
    }else{
        alert('Thanks for returning the book. Did you like it?');
        return bookId.isReading = false;
    }
}

function addBook() {
    let name = prompt("Enter a book's name");
    let author = prompt("Enter the author's name");

    name = name.trim();
    author = author.trim();

    const newBook = {
        name,
        author,
        isReading: false,
        id: generatedId(),
    }

    books.push(newBook);
    alert('The book is added successfully');

}


function generatedId() {
    let isBookWithIdExists = true;

    do{
    const generationId = Math.ceil(Math.random() * 100);
    console.log(generationId);
    isBookWithIdExists = Boolean(books.find((book) => book.id === generationId));

    return generationId;

}while(isBookWithIdExists);

}