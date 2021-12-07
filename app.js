// Book class: represents a book
class Book{
    constructor(title, author, isbn)
    {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}
// UI Class: Handle UI task
class UI{
     
    static displayBooks(){
        const StoredBooks = [
            {
                title: "Book one",
                author: 'john doe',
                isbn: '3434434'
            },
            {
                title: "Book Two",
                author: 'john doe',
                isbn: '34554'
            }
        ];

        const books = StoredBooks;
        books.forEach((book)=>{UI.addBookToList(book)});
    }
    

    static addBookToList(cook){
        const list = document.querySelector('#book-list'); 
        const row = document.createElement('tr')

        row.innerHTML = `
        <td>${cook.title}</td>
        <td>${cook.author}</td>
        <td>${cook.isbn}</td>
        <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>
        `;
        list.appendChild(row);
    }
    static clearFields(){ 
        document.querySelector('#title').value = '';
        document.querySelector('#author').value = '';
        document.querySelector('#isbn').value = '';
    }
}
// Store Class: Handle Storage

//Event: Display Book

document.addEventListener('DOMContentLoaded',UI.displayBooks)
//Event: Add Book

document.querySelector('#book-form').addEventListener('submit',(e)=>{

    //Prevent Default
    e.preventDefault();
    //Get the form values
    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const isbn = document.querySelector('#isbn').value;

    //Intantiate book
     const book = new Book(title,author,isbn);

     //Add book to UI
     UI.addBookToList(book);
    });

//Event: Remove a Book



