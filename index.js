// Wait for DOM to load before manipulating
document.addEventListener('DOMContentLoaded', function() {
     // Book catalog data
     const books = [
         {
            title: "The Great Gatsby",
            author: "F. Scott Fitzgerald",
            image: "https://images-na.ssl-images-amazon.com/images/I/71FTb9X6wsL.jpg"
         },
         {
             title: "To Kill a Mockingbird",
            author: "Harper Lee",
            image: "https://images-na.ssl-images-amazon.com/images/I/71FxgtFKcQL.jpg"
         },
         {
             title: "1984",
            author: "George Orwell",
            image: "https://images-na.ssl-images-amazon.com/images/I/71kxa1-0mfL.jpg"
         },
         {
             title: "Pride and Prejudice",
            author: "Jane Austen",
            image: "https://images-na.ssl-images-amazon.com/images/I/71Q1tPupKjL.jpg"
         },
         {
             title: "The Catcher in the Rye",
            author: "J.D. Salinger",
            image: "https://images-na.ssl-images-amazon.com/images/I/71iKtrFZMuL.jpg"
         }
        ];

     //Update header
     const header = document.querySelector('h1');
     if (header) {
         header.textContent = "Flatbook Bookstore";
     }
     //Display books
     const container = document.getElementById('book-container');

     if (container) {
     books.forEach(function(book) {
         const card = document.createElement('div');
         card.className = 'book-card';

         const img = document.createElement('img');
         img.src = book.image;
         img.alt = book.title;
         card.appendChild(img);

         const title = document.createElement('h2');
         title.textContent = book.title;
         card.appendChild(title);

         const author = document.createElement('p');
         author.textContent = 'By: ' + book.author;
         card.appendChild(author);

         container.appendChild(card);
        });
    }    
}); 
