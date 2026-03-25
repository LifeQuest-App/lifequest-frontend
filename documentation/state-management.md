# State Management (Redux Toolkit + RTK Query)

## Почему так

LifeQuest активно использует server state (данные из backend: рутины, completions, профиль, история). Для предсказуемой загрузки/кэширования подходит:

- Redux Toolkit
- RTK Query (для запросов и инвалидации)

## Текущая реализация в коде

### Store

`shared/state/store.ts`:

- `configureStore`
- reducer для `apiSlice.reducer` по пути `apiSlice.reducerPath`
- middleware: добавляет `apiSlice.middleware`

### RTK Query base

`shared/state/api/apiSlice.ts`:

- `createApi`
- `fetchBaseQuery` с:
  - `baseUrl` из `NEXT_PUBLIC_API_BASE_URL` (fallback `http://localhost:5000/api`)
  - `credentials: "include"` (ориентировано на cookie-based auth)

Пока в `endpoints` задан пустой объект — это намеренно: интерфейсы уже готовы, endpoints добавляются по мере интеграции UI с backend.

### Provider

`app/providers.tsx`:

- оборачивает приложение в Redux `Provider`
- подключает созданный `store`

## Как добавлять endpoints

Шаблон:

1. В `apiSlice.ts` добавить `endpoints: (builder) => ({ ... })`
2. Определить:
   - query (GET): `builder.query`
   - mutation (POST/PATCH/PUT): `builder.mutation`
3. Настроить `tagTypes`/`providesTags`/`invalidatesTags` для корректной инвалидации данных (когда появятся completions и today-список).

## RTK Query и offline-first (позже)

Для offline-first типичная стратегия:

- оптимистичные апдейты на UI при mutation
- retry при восстановлении сети
- инвалидация/перезапрос актуальных данных

Если понадобится “очередь” действий как отдельная сущность — ее обычно подключают отдельным слоем (IndexedDB + сервис worker + синхронизация).

