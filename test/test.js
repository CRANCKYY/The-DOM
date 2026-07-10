const assert = require('assert');

describe('DOM Flatbook Tests', function() {
    it('should change the header text', function() {
        document.body.innerHTML = '<h1>Welcome</h1>';
        const header = document.querySelector('h1');
        header.textContent = 'Flatbook Bookstore';
        assert.strictEqual(header.textContent, 'Flatbook Bookstore');
    });

    it('should have book-container element', function() {
        document.body.innerHTML = '<div id="book-container"></div>';
        const container = document.getElementById('book-container');
        assert.notStrictEqual(container, null);
    });
});