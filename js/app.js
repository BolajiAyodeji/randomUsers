let createNode = (element) => {
  return document.createElement(element);
}

let append = (parent, el) => {
return parent.appendChild(el);
}

const ul = document.getElementById('authors');
const url = 'https://randomuser.me/api/?results=200';
fetch(url)
.then((resp) => resp.json())
.then(function(data) {
let authors = data.results;
return authors.map((author) => {
  let li = createNode('li'),
      img = createNode('img'),
      span = createNode('span');
  img.src = author.picture.medium;
  span.innerHTML = `${author.name.first} ${author.name.last}`;
  append(li, img);
  append(li, span);
  append(ul, li);
})
})
.catch((error) =>{
console.log(JSON.stringify(error));
});
