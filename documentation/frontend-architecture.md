# Frontend Architecture

## High-level idea

LifeQuest UI организован вокруг единой доменной модели: пользовательские рутины (действия) → факты выполнения → отображение прогресса и истории. На фронтенде приоритет — стабильный UX, быстрые действия “в один клик”, и готовность подключить backend-контракты (C# Web API).

## Layers (папки в репозитории)

Корневые слои:

- `app/` — маршруты Next.js (App Router), layout и server/client boundaries
- `features/` — feature-модули (планируется функциональность вокруг доменных сценариев)
- `entities/` — доменные сущности и типы (минимальные модели для UI/контрактов)
- `shared/` — переиспользуемые утилиты:
  - `shared/ui/` — небольшие UI-обёртки (например `AppShell`)
  - `shared/api/` — клиент/абстракции для HTTP (часть может быть дополнена под RTK Query)
  - `shared/state/` — Redux store и RTK Query
  - `shared/config/` — константы и маршруты

## Domain types

Минимальные типы, которые уже заведены в `entities/`:

- `entities/user/types.ts` — `User`
- `entities/routine/types.ts` — `Routine` и `RoutineType`
- `entities/action/types.ts` — `ActionCompletion`

Эти типы нужны для согласования UI и backend-контрактов и чтобы далее расширять доменную модель (ачивки, лидерборды, proofs и т.д.).

## UI primitives

В `shared/ui/` сейчас есть базовые “строительные блоки”:

- `AppShell` — общий каркас страниц с навигацией
- `PageHeader` — единый стиль заголовка/описания на экранах

Дальше их можно расширять компонентами (cards, modals, progress bars, toasts) без изменения бизнес-логики.

## State management

Серверное состояние — через **Redux Toolkit + RTK Query**.

Клиентское UI/локальные настройки сейчас не вынесены в отдельный store (пока используется только каркас Redux/RTK Query). Когда начнутся модалки/онбординг/офлайн очереди, сюда добавится UI state при необходимости.

См. `documentation/state-management.md`.

## Offline-first (заложено в сценарии)

Продуктово требуется:

- открытие экрана и интерфейса даже при нестабильной сети
- возможность отметить выполнение и синхронизировать при восстановлении сети

Текущая реализация пока каркасная; конкретные механики offline queue и retry лучше подключать по мере интеграции с backend и выбора стратегии (service worker + RTK Query caching + background sync).

