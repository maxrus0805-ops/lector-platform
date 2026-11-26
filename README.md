# Учебная платформа «Lector.com»

Веб-приложение учебной платформы: каталог лекторов с сортировкой по стажу,
страницы «О нас», «Партнёры», «Контакты». 

## Стек и версии

| Технология | Версия | Назначение |
|---|---|---|
| React | 19.3.1| UI-библиотека |
| React DOM | 19.3.1| Рендер в DOM |
| Vite | 8.3.4 | Сборка и dev-сервер |
| JavaScript (ES2020+) | — | Без TypeScript |
| CSS Modules | — | Изоляция стилей (`*.module.css`) |



## Установка и запуск

```bash
# 1. Клонировать репозиторий
git clone https://github.com/<username>/<repo>.git
cd <repo>

# 2. Установить зависимости
npm install

# 3. Запустить dev-сервер (http://localhost:5173)
npm run dev


## Структура папок

```
src/
├── App.jsx
├── main.jsx
├── assets/                     # Статические ресурсы (hero.png, react.svg, vite.svg)
├── components/
│   ├── layout/                 # Каркас приложения
│   │   ├── Footer.jsx
│   │   ├── Footer.module.css
│   │   ├── Header.jsx
│   │   ├── Header.module.css
│   │   └── Layout.jsx
│   ├── lecturers/              # Карточка лектора
│   │   ├── LecturerCard.jsx
│   │   └── LecturerCard.module.css
│   ├── partners/               # Партнёры
│   │   ├── PartnerCard.jsx
│   │   ├── PartnerCard.module.css
│   │   ├── PartnersSection.jsx
│   │   └── PartnersSection.module.css
│   ├── sections/               # Крупные секции страниц
│   │   ├── AboutSection.jsx
│   │   ├── AboutSection.module.css
│   │   ├── Hero.jsx
│   │   └── Hero.module.css
│   └── ui/                     # Переиспользуемые UI-элементы
│       ├── Button.jsx
│       └── Button.module.css
├── data/                       # Данные-заглушки
│   ├── lecturers.js
│   └── partners.js
├── pages/                      # Страницы (по одной на маршрут)
│   ├── AboutPage.jsx
│   ├── AboutPage.module.css
│   ├── ContactsPage.jsx
│   ├── HomePage.jsx
│   ├── LecturersPage.jsx
│   ├── LecturersPage.module.css
│   ├── NotFoundPage.jsx
│   └── PartnersPage.jsx
├── router/                     # Самописный роутинг
│   ├── Link.jsx
│   ├── Router.jsx
│   └── routes.js
└── styles/                     # Глобальные стили и тема
    ├── globals.css
    └── theme.css
```



## Где лежат данные

Все данные — локальные JS-модули в `src/data/`, бэкенда нет:

| Файл | Что содержит | Кто использует |
|---|---|---|
| `src/data/lecturers.js` | Массив лекторов: `id`, `name`, `gender`, `photoUrl`, `education`, `experienceYears`, `degree`, `disciplines[]` (с `topics[]`), `tariffs[]` | `src/pages/LecturersPage.jsx`, `src/components/lecturers/LecturerCard.jsx` |
| `src/data/partners.js` | Массив партнёров: `id`, `name`, `logoUrl`, `url`, `description` | `src/components/partners/PartnersSection.jsx`, `src/components/partners/PartnerCard.jsx` |

Сортировка лекторов на странице `/lecturers` идёт по полю `experienceYears`
(«по умолчанию», «по убыванию», «по возрастанию»).

## Где лежит роутинг

Роутинг — самописный, без `react-router`, в `src/router/`:

| Файл | Роль |
|---|---|
| `src/router/Router.jsx` | Провайдер и хук `useRouter()`: хранит текущий `path`, даёт `navigate(path)` |
| `src/router/Link.jsx` | Компонент `<Link to="...">` — обёртка над навигацией без перезагрузки страницы |
| `src/router/routes.js` | Карта маршрутов: путь → компонент страницы |

Маршруты:

| Путь | Страница | Файл |
|---|---|---|
| `/` | Главная | `src/pages/HomePage.jsx` |
| `/about` | О нас | `src/pages/AboutPage.jsx` |
| `/partners` | Партнёры | `src/pages/PartnersPage.jsx` |
| `/lecturers` | Лекторы | `src/pages/LecturersPage.jsx` |
| `/contacts` | Контакты | `src/pages/ContactsPage.jsx` |
| `*` | 404 | `src/pages/NotFoundPage.jsx` |

Навигация используется в `src/components/layout/Header.jsx` (меню и кнопка
«Записаться» → `/contacts`) и в `src/components/sections/Hero.jsx`
(кнопки «НАЙТИ ЛЕКТОРА» → `/lecturers`, «О нас» → `/about`,
«Наши партнёры» → `/partners`).