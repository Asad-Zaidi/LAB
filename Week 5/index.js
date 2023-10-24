function inputData()
{
    var title=document.getElementById('title').value
    var author=document.getElementById('author').value
    const t = document.createElement('p')
    const a= document.createElement('p')
    t.innerText = title;
    a.innerText = author;
    const cont=document.getElementById('container');
    cont.appendChild(t);
    cont.appendChild(a);

}


























/*function removechild() {
    const div = document.getElementById('books-list')
    console.log(div)
    const list = document.getElementById('p1')
    console.log(list)
    div.removeChild(list)
}

function addchild() {
    const div = document.getElementById('books')
    const h1 = document.createElement('h1')
    const text = document.createTextNode('Hello Pakistan')
    h1.setAttribute('class', 'hello')
    h1.append(text)
    div.append(h1)
}

function addchildery() {
    const div = document.querySelector('.books')
    const h1 = document.createElement('h1')
    const text = document.createTextNode('Hello Pakistan')
    h1.setAttribute('class', 'hello')
    h1.append(text)
    div.append(h1)
}

function addBook() {
    const ul = document.getElementById('book-list-ul');

    const li = document.createElement('li');
    const titlePara = document.createElement('p');
    titlePara.textContent = 'Book Title: Example Title';
    const authorPara = document.createElement('p');
    authorPara.textContent = 'Author: John Doe';
    li.appendChild(titlePara);
    li.appendChild(authorPara);
    ul.appendChild(li);
}

function removeBook() {
    const ul = document.getElementtById('book-list-ul');
        const lastBook = ul.lastChild;
    if (lastBook) {
        ul.removeChild(lastBook);
    } else {
        alert('No books to remove.');
    }
}


*/


