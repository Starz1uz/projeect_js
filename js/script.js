/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

let promo = document.querySelectorAll('.promo__adv img')
let title = document.querySelector('.promo__genre')
let main_img = document.querySelector('.promo__bg')

promo.forEach(a => {
    a.remove()
})

title.innerHTML = 'драма'

main_img.style.backgroundImage = "url('./img/bg.jpg')"

let all_check = document.querySelectorAll('.promo__interactive-item')
let modal = document.querySelector('.modal')
let ex = document.querySelectorAll('.close')

all_check.forEach((el, le) => {
    let ch = el.innerHTML = movieDB.movies[le]
    el.onclick = (on) => {

        if (on = true) {
            modal.style.display = 'flex'
        }
        console.log(ch);
    }

})

ex.forEach(del =>{
    del.onclick = () => {
        modal.style.display = 'none'
    }
})
