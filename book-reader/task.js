const book = document.getElementById('book');
const fontSize = document.querySelectorAll('.font-size');

for (let i = 0; i < fontSize.length; i++) {
    function click () {
        event.preventDefault();
        for (let m = 0; m < fontSize.length; m++) {
            fontSize[m].classList.remove('font-size_active');
            if (book.classList.contains('book_fs-big')) {
                book.classList.remove('book_fs-big');
            }
            if (book.classList.contains('book_fs-small')) {
                book.classList.remove('book_fs-small');
            }
        }
        fontSize[i].classList.add('font-size_active');
        if (fontSize.item(0).classList.contains('font-size_active')) {
            book.classList.add('book_fs-small');
        }
        if (fontSize.item(2).classList.contains('font-size_active')) {
            book.classList.add('book_fs-big');
        }
    }
fontSize[i].addEventListener('click', click);
}