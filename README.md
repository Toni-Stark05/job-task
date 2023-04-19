# Job Task

##About
Это программа выполняет задани по созданию SQL таблицы в PostgresQL, и наполняет ееё данными из rickandmortyapi.com.

## Start
Для запуска требуется выполнить следующии команды:
```bash
$ npm install

$ npm start

```

## ENV
Перед запуском рекомендуется изминить значения в .env, для подключения к БД
```
POSTGRES_HOST=      // адрес базы данных
POSTGRES_PORT=      // порт базы данных
POSTGRES_USER=      // имя пользователя
POSTGRES_DB=        // имя базы данных
POSTGRES_PASSWORD=  // пароль пользователя
API_URL=            // адрес источника данных
SSL_PATH=           // адрес SSL
```
