// test/indexTest.js
describe('DOM Flatbook Tests', function() {
    beforeEach(function() {
        // Set up DOM before each test
        document.body.innerHTML = `
            <header>
                <h1>Welcome to Flatbook</h1>
            </header>
            <div id="book-list"></div>
        `;
    });

    it('header element has the text "Flatbooks Technical Books"', function() {
        // Run your index.js code here
        // Then test the header
        const header = document.querySelector('h1');
        expect(header.textContent).toBe('Flatbooks Technical Books');
    });

    // Add other tests...
});
