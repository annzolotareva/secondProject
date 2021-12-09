const books = document.querySelectorAll(".book");
const advertising = document.querySelector(".adv");
const titleOfBooks = document.querySelectorAll("a");
const shapters = document.querySelectorAll("ul");
const shapter2 = shapters[0].querySelectorAll("li");
const shapter5 = shapters[5].querySelectorAll("li");
const shapter6 = shapters[2].querySelectorAll("li");

shapter2[3].after(shapter2[6], shapter2[8]);
shapter2[9].after(shapter2[2]);

shapter5[1].after(shapter5[9]);
shapter5[4].after(shapter5[2]);
shapter5[8].before(shapter5[5]);

const chapter8OfBook6 = document.createElement("li");
chapter8OfBook6.textContent = "Глава 8: За пределами ES6";
shapter6[8].append(chapter8OfBook6);

titleOfBooks[4].text = "Книга 3. this и Прототипы Объектов";

advertising.remove();

books[5].after(books[2]);
books[1].after(books[0]);
books[4].after(books[3]);
