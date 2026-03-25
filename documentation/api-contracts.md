# Backend Integration and API Contracts

## Принятый базовый контракт

Планируемый backend для MVP-потока: ASP.NET Core Web API на C#.

Базовый URL задается переменной окружения:

- `NEXT_PUBLIC_API_BASE_URL` (например `http://localhost:5000/api`)

Фронтенд-запросы ожидают JSON и, при auth через cookie:

- `credentials: "include"` (в RTK Query baseQuery уже заложено)

## Healthcheck

Endpoint:

- `GET /api/health`

Ожидаемый ответ:

- `200`:
  - `status: "ok"`
  - `service: "lifequest-frontend"`
  - `timestamp: ISO string`

## Auth

### Регистрация

- `POST /auth/register`

Request (пример — финальная схема будет согласована с backend):

- `email: string`
- `password: string`

Response:

- `accessToken`
- `refreshToken`
- `user`

### Логин

- `POST /auth/login`

Request:

- `email: string`
- `password: string`

Response:

- `accessToken`
- `refreshToken`
- `user`

## Onboarding / User goals

Endpoint:

- `PUT /users/onboarding`

Request (примерная модель):

- `name: string`
- `dailyStepGoal: number`
- `activityTypes: string[]`
- `remindersEnabled: boolean`

Response:

- обновленный профиль/настройки пользователя

## Routines

### Получить рутины на сегодня

- `GET /routines/today`

Response:

- массив `Routine` (зависит от выбранной даты/требуемых фильтров)

### Создать рутину

- `POST /routines`

Request (пример):

- `title: string`
- `type: "steps" | "workout" | "water" | "sleep" | "custom"`
- `targetValue: number`
- `unit: string`
- `isActive: boolean`

Response:

- созданная `Routine`

### Отметить выполнение

- `PATCH /routines/{id}/complete`

Request (примерная форма):

- `date: YYYY-MM-DD` (или backend сам проставляет текущую дату)
- `value: number` (для числовых рутины) или boolean/1-0 (для boolean)
- `proofs?: object` (опционально; для фото/гео)

Response:

- результат обновления completions

## History

Endpoint:

- `GET /history?date=YYYY-MM-DD`

Response:

- агрегированная структура по дням:
  - список выполненных рутины
  - список невыполненных или отметки статуса

## Профиль пользователя

Рекомендуемые endpoints:

- `GET /users/me`
- `PUT /users/me` или использовать onboarding endpoint для редактирования целей

## Текущее состояние в коде

Фронтенд сейчас имеет:

- каркас Redux/RTK Query (готовая точка для подключения endpoints)
- UI-скелет страниц

Следующий шаг — дописать `apiSlice.ts` endpoints и подключить данные в `Today / History / Profile` страницы.

