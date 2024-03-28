<h1 align="center">Страница для поиска товаров (верстка)</h1>

<div align="center">
  <a href="https://elrouss.github.io/spiks/">
    <img width="575" alt="Главная страница приложения" src="https://github.com/elrouss/spiks/assets/108838349/fe537f0a-ac19-4193-82ac-3fc07f369ae5" />
  </a>
</div>

<a name="summary">
  <details>
    <summary>Оглавление</summary>
    <ol>
      <li><a href="#project-description">Краткое описание проекта</a></li>
      <li><a href="#technologies">Стек технологий</a></li>
      <li><a href="#installation">Установка и запуск приложения</a></li>
      <li><a href="#peculiarProperties">Особенности разработки и работы приложения</a></li>
      <li><a href="#enhancement">Улучшение</a></li>
    </ol>
  </details>
</a>

<a name="project-description"><h2>1. Краткое описание проекта</h2></a>
Проект представляет собой кроссбраузерную верстку страницы на разрешения устройств от 1419px и выше. Макет с интерактивными элементами (текстовое поле, чекбоксы, радиокнопки, аккордеон, выпадающее меню, ползунки) рассчитан на подключение в дальнейшем бизнес-логики поиска товаров с возможностью фильтрации и сортировки результатов. Структура файлов и стек технологий обусловлен требованиями технического задания

<b>Ссылки на проект:</b>
<br>
Задание: https://living-vinca-df3.notion.site/59dd74de2c384fb8b4e359b8fe676fda
<br>
Макет: https://www.figma.com/file/oade9pxS8wGXjRvJa3pL8H/Untitled?node-id=1-354&t=fGDZJ2QyQDuAHLiN-0
<br>
Деплой: https://elrouss.github.io/spiks/
<br>

<div align="right">(<a href="#summary">к оглавлению</a>)</div>

<a name="technologies"><h2>2. Стек технологий</h2></a>
<span>
  <img src="https://img.shields.io/badge/Gulp-CF4647?style=for-the-badge&logo=gulp&logoColor=white" alt="Иконка 'GulpJS'">
  <img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E" alt="Иконка 'JavaScript'">
  <img src="https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white" alt="Иконка 'Sass (SCSS)'">
  <img src="https://img.shields.io/badge/Pug-E3C29B?style=for-the-badge&logo=pug&logoColor=black" alt="Иконка 'Pug'">
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="Иконка 'HTML5'">
</span>

<div align="right">(<a href="#summary">к оглавлению</a>)</div>

<a name="installation"><h2>3. Установка и запуск приложения</h2></a>

1. `git clone https://github.com/elrouss/spiks.git` - клонировать репозиторий (HTTPS)
2. `npm i` - установить зависимости
3. `npm run prepare` - установить <a href="https://typicode.github.io/husky/">husky</a>
5. `npm run start` - запустить приложение и перейти по ссылке `http://localhost:8080/`

<div align="right">(<a href="#summary">к оглавлению</a>)</div>

<a name="peculiarProperties"><h2>4. Особенности разработки и работы приложения</h2></a>

- В изначально предложенный шаблон с настройками Gulp внесены дополнения, которые позволяют автоматизировать процесс сборки страниц и компонентов из .json файлов. Также добавлена минификация js, css и html файлов
- Модифицирована изначальная структура шаблона проекта, которая позволяет создавать блоки и элементы интерфейса как компоненты, обеспечивая их слабую связность и повышая безопасность разработки
- Для единства стиля разработки подключены инструменты форматирования кода Prettier и ESLint
- В приложение не заложен отзывчиво-адаптивный интерфейс (будет плохо отображаться на маленьких ноутбуках, планшетах и мобильных телефонах)
- Ползунки реализованы через библиотеку <a href="https://refreshless.com/nouislider/">nouislider</a> (по требованию задания)

<div align="right">(<a href="#summary">к оглавлению</a>)</div>

<a name="enhancement"><h2>5. Улучшение</h2></a>

- Подготовить UI Kit, используя <a href="https://storybook.js.org/">Storybook</a> (на этапе разработки была страница Blocks, удаленная перед деплоем)
- Переписать проект на TypeScript для повышения безопасности разработки проекта при его дальнейшем разрастании (в рамках задания стояло обязательное требование реализации на JavaScript)
- Доработать ползунок со шкалой диапазона ароматов (nose): добавить возможность выбора нужной шкалы не на клик столбца, а при зажатии левой кнопки мышью
- Разработка стилей для удобства в пользовании интерфейсом людьми с ограниченными возможностями (прежде всего, фокусы, которые не отрисованы дизайнером в макете)

<div align="right">(<a href="#summary">к оглавлению</a>)</div>
