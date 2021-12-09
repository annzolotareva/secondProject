"use strict";
const books = document.querySelectorAll(".book");
const titlesOfBooks = document.querySelectorAll("a");
const shapters = document.querySelectorAll("ul");
const shaptersOfBook2 = shapters[0].querySelectorAll("li");
const shaptersOfBook5 = shapters[5].querySelectorAll("li");
const shaptersOfBook6 = shapters[2].querySelectorAll("li");
const chapter8OfBook6 = document.createElement("li");

const advertising = document.querySelector(".adv");
const body = document.querySelector("body");

books[5].after(books[2]);
books[1].after(books[0]);
books[4].after(books[3]);

body.style.backgroundImage = "url(./image/you-dont-know-js.jpg)";

titlesOfBooks[4].text = "Книга 3. this и Прототипы Объектов";

advertising.remove();

shaptersOfBook2[3].after(shaptersOfBook2[6], shaptersOfBook2[8]);
shaptersOfBook2[9].after(shaptersOfBook2[2]);

shaptersOfBook5[1].after(shaptersOfBook5[9]);
shaptersOfBook5[4].after(shaptersOfBook5[2]);
shaptersOfBook5[8].before(shaptersOfBook5[5]);

chapter8OfBook6.textContent = "Глава 8: За пределами ES6";
shaptersOfBook6[8].append(chapter8OfBook6);
