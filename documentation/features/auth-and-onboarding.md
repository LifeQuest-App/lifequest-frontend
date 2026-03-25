# Authentication and Onboarding

## Цель

Сделать вход/регистрацию и минимальный on-boarding, который формирует:

- базовые цели (например дневной шаговый ориентир)
- предпочтения (какие типы рутины отображать по умолчанию)
- настройки уведомлений/напоминаний (пока boolean-флагами)

## Auth: регистрация и логин

Планируемые backend endpoints (ASP.NET Core Web API):

- `POST /auth/register`
- `POST /auth/login`

Ожидаемый формат ответа (пример):

- `accessToken`
- `refreshToken`
- `user` (минимальная модель профиля)

## Хранение токенов (рекомендовано)

Чтобы снизить риск XSS и утечек:

- `accessToken`/`refreshToken` хранить в `HttpOnly` + `Secure` cookie
- на фронтенде использовать `credentials: "include"` в запросах

RTK Query/RTK baseQuery в `shared/state/api/apiSlice.ts` уже настроен с `credentials: "include"` — это должно совпасть с backend-реализацией cookie auth.

## Формы: React Hook Form + Zod

UI формы должны:

- валидировать поля на клиенте (RHF + Zod)
- показывать ошибки рядом с инпутом
- блокировать submit до валидного состояния

## Onboarding: что собираем

Шаги on-boarding:

- имя пользователя
- цель (например `daily_step_goal`)
- мультиселект типов активностей (например шаги/вода/сон/тренировка)
- флаг “напоминать” (boolean)

Планируемый endpoint:

- `PUT /users/onboarding`

## Privacy by default

Продуктовое ограничение:

- по умолчанию действия/карта/посты — приватные
- пользователь управляет разрешениями и видимостью в профиле/настройках

Это закладывается в доменные поля и UI-поведение при подключении реальной интеграции.

## Текущее состояние в коде

Страницы `app/login/page.tsx`, `app/register/page.tsx`, `app/onboarding/page.tsx` — это UI-скелет (контейнеры и структура). Следующий шаг — подключить RTK Query mutations/queries и связать формы с endpoint’ами.

