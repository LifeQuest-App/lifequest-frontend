# LifeQuest (Frontend)

PWA LifeQuest на Next.js и TypeScript

Ключевые цели:

- Предоставить устанавливаемый PWA-каркас с навигацией, удобной для офлайна.
- Поддержать базовый сценарий рутины: аутентификация → создание дневных рутины → отметка выполнения → просмотр истории.
- Подготовить кодовую базу к расширению домена (достижения, лидерборды, комьюнити, карта, AI-ассистент).

## Документация

- Архитектура: `documentation/frontend-architecture.md`
- Маршруты/UX: `documentation/routing-and-ui.md`
- PWA-каркас: `documentation/pwa.md`
- Управление состоянием: `documentation/state-management.md`
- API-контракты: `documentation/api-contracts.md`
- Деплой: `documentation/deployment.md`
- Auth + on-boarding: `documentation/features/auth-and-onboarding.md`
- Today-рутины: `documentation/features/today-routines.md`
- History: `documentation/features/history.md`
- Profile: `documentation/features/profile.md`

## Технологический стек

- Next.js (App Router) + React + TypeScript
- Tailwind CSS
- Redux Toolkit + RTK Query (server state)
- React Hook Form + Zod (forms/validation)
- `next-pwa` (service worker + установляемость)

## Запуск локально

```bash
npm install
npm run dev
```

Открыть: `http://localhost:3000`

## Переменные окружения

```bash
NEXT_PUBLIC_API_BASE_URL=https://your-api-domain.com/api
```

Healthcheck:

- `/api/health`
