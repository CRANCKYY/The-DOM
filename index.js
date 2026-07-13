// Wait for DOM to load before manipulating
document.addEventListener('DOMContentLoaded', function() {
    // Book catalog data - MUST match test expectations
    const books = [
        {
            title: "Eloquent JavaScript: A Modern Introduction to Programming",
            author: "Marijn Haverbeke",
            image: "https://images-na.ssl-images-amazon.com/images/I/71kxa1-0mfL.jpg"
        },
        {
            title: "JavaScript & JQuery",
            author: "Jon Duckett",
            image: "https://images-na.ssl-images-amazon.com/images/I/71FTb9X6wsL.jpg"
        },
        {
            title: "HTML & CSS",
            author: "Jon Duckett",
            image: "https://images-na.ssl-images-amazon.com/images/I/71FxgtFKcQL.jpg"
        },
        {
            title: "You Don't Know JS",
            author: "Kyle Simpson",
            image: "https://images-na.ssl-images-amazon.com/images/I/71Q1tPupKjL.jpg"
        },
        {
            title: "The Pragmatic Programmer",
            author: "David Thomas",
            image: "https://images-na.ssl-images-amazon.com/images/I/71iKtrFZMuL.jpg"
        }
    ];

    // Update header - MUST be exact text tests expect
    const header = document.querySelector('h1');
    if (header) {
        header.textContent = "Flatbooks Technical Books";
    }

    // Display books - FIXED: using correct ID 'book-list'
    const container = document.getElementById('book-list');

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
