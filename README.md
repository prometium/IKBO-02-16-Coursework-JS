# IKBO-02-16-Coursework-JS

## Для начала

Проект использует webpack (https://webpack.js.org). Webpack уже настроен, установлены минимально необходимые плагины и загрузчики.

Для начальной установки всех зависимостей применяется команда `npm install`.

Для запуска (во время разработки) применяется команда `npm start`.

Для сборки применяется команда `npm run build`.

## Кому интересно

### Что именно установлено и зачем

#### Основные зависимости

- **React, ReactDOM** - https://ru.reactjs.org/.
- **React Router DOM** - маршрутизация на клиенте.
- **Prop Types** - проверка типов данных, передаваемых компонентам React.

#### Dev-зависимости

- **Webpack Dev Server** - использование живой перезагрузки браузера в процессе разработки.
- **Html Webpack Plugin** - автоматическое создание html-страницы и подключение к ней всех скриптов.
- **Сlean Webpack Plugin** - автоматическая очистка папки */dist* при сборке.
- **Css Loader** - импорт *css* файлов.
- **Style Loader** - вставка импортированных стилей на страницу.
- **File Loader** - импорт файлов (*png*, *svg*, *jpg*, *gif*).
- **Eslint, Eslint Plugin React** - статический анализ *JavaScript* кода.
- **Babel-*** - транспилятор *JavaScript* и *JSX* кода.

### Другие настройки

Webpack настроен на использование двух конфигураций: ***Development*** и ***Production***. Первая используется при запуске, вторая при сборке.

В конфигурации ***Development*** включена горячая замена модулей и используются Source Map.

В конфигурации ***Production*** предусмотрено правильное кэширование файлов и оптимизирование разделение кода.

## Рекомендации

Рекомендую в VSCode установить плагин ESLint, чтобы видеть все ошибки в JavaScript коде. Настройки конфигурации ESLint уже есть в проекте.

## Созданные модули

### Красновский - React-компонент AppBar
 Нужен для оформления шапки страницы. Слева отображается название проекта, которое также служит ссылкой на главную страницу, правее - название страницы.
 
 #### API
 
 Параметр | Тип | Значение по умолчанию  | Описание
------------ | ------------- | ------------- | -------------
title | Строка | `undefined` | Название страницы
color | Строка | `'#616161'`  | Цвет фона в HEX-формате, либо вариант цвета из темы `'primary'`, `'secondary'`

#### Пример
```javascript
import AppBar from 'src/components/AppBar';
...
<AppBar title="Красновский" color="primary" />
<AppBar title="Слепушко" color="secondary" />
<AppBar title="Шумилов" color="#512da8" />
```
 
### Шумилов - React-компонент Button
 Использование параметра `primary` оформляет кнопку как основную, без параметра кнопка оформляется как второстепенная (по умолчанию).

### Слепушко React-компонент NavigationButton
 Навигационная личная карточка на главной странице
 
Параметр | Значение по умолчанию | Описание
------------ | ------------- | -------------
title | обязательный параметр | Заголовок на карточке - ваша Фамилия
primaryColor | '#424242'| Цвет кружочка в заголовке
to | '/' | Ссылка на вашу страницу
text | 'empty' | Название модуля который вы используете
fontSize | "40px" | Размер `text` если вдруг название модуля слишком большое

#### Пример
```javascript
import NavigateButton from '../../components/NavigateButton';
...
<NavigateButton to="/rugged" title="Шумилов" text="React Yandex Maps" fontSize="30px" primaryColor="#1976D2" />
```

## Использованные сторонние модули

### Красновский - Recharts
Композиционная библиотека диаграмм, построенная на компонентах React (http://recharts.org).

### Шумилов - React Yandex Maps
Yandex Maps API bindings for React (https://github.com/gribnoysup/react-yandex-maps)

### Слепушко - React Color
A Collection of Color Pickers from Sketch, Photoshop, Chrome, Github, Twitter, Material Design & more
(https://casesandberg.github.io/react-color/)
