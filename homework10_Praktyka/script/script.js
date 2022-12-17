const actionButton = document.querySelector("button");
actionButton.addEventListener("click", library);

const books = [
    {id: 1, author: "Фиджеральд", name: "Великий Гетсби", amount: 1},
    {id: 2, author: "Толстой", name: "Анна Каренина", amount: 2},
    {id: 3, author: "Оруел", name: "1984", amount: 1},
    {id: 4, author: "Сервантес", name: "Дон Кихот", amount: 3},
    {id: 5, author: "Достоевский", name: "Преступление и наказание", amount: 1},
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
    .filter((book) => book.amount > 0)
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

    if(desireBook.amount < 1){
        alert('This book is reading by someone else.');

        return;
    }else{
        desireBook.amount--;
        alert(`OK. Id your book is : ${desireBook.id}`)

    }
}

function returnBook() {
    const returningBook = Number(prompt('Enter id of your book:'));

    const bookId = books.find((book) => book.id === returningBook);

    if(!bookId){
        alert('There is no book with such id in the library.')
        return;
    }else{
        alert('Thanks for returning the book. Did you like it?');
        bookId.amount++;
        
    }
}

function addBook() {
    let name = prompt("Enter a book's name");
    let author = prompt("Enter the author's name");

    name = name.trim().toLowerCase();
    author = author.trim().toLowerCase();

    const verificationBooksName = books.find((book) => book.name.toLowerCase() === name);
    const verificationBookAuthor = books.find((book) => book.author.toLowerCase() === author);

    if(verificationBooksName && verificationBookAuthor){
        verificationBookAuthor.amount++;
        console.log(verificationBookAuthor.amount);
        
    }else{
        name = name.slice(0, 1).toUpperCase() + name.slice(1).toLowerCase();
    author = author.slice(0, 1).toUpperCase() + author.slice(1).toLowerCase();
    const newBook = {
        name,
        author,
        isReading: false,
        id: generatedId(),
        amount: 1,
    }
     books.push(newBook);

     
}
   
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