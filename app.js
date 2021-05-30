//1. change head

var h = document.getElementsByTagName("h1")[0].innerHTML = "main content Here";

// 2.change color

const main = document.querySelector('main');

for (let p = 1; p < main.children.length; p++) {
    main.children[p].style.color = "#985AA0";
}

// 3.add ancars

const a = document.querySelector('nav');

const ancar1 = a.insertAdjacentHTML("afterbegin", '<a href="#">Link 1</a>');

const ancar7 = a.insertAdjacentHTML("beforeend", '<a href="#">Link 7</a>');


let aside = document.querySelector('aside');

const p1 = aside.children[0];

p1.innerHTML = "<h4>Title 1</h4> <p>comment 1</p>";

const p2 = aside.children[1];

p2.innerHTML = "<h4>Title 2</h4> <p>comment 2</p>";

const p3 = aside.children[2];

p3.innerHTML = "<h4>Title 3</h4> <p>comment 3</p>";






