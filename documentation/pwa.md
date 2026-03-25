# PWA and Offline Shell

## Цель PWA

Сделать приложение:

- устанавливаемым (install prompt)
- удобным в режиме плохой сети
- с быстрым “shell” (минимальная разметка/навигация доступна офлайн)

## Что используется

- `next-pwa` — генерация service worker и стратегии кеширования
- `app/manifest.ts` — описание PWA манифеста (name, short_name, colors, start_url)

## Конфигурация

- `next.config.mjs` подключает `next-pwa`:
  - `dest: "public"`
  - `disable: process.env.NODE_ENV === "development"` (в dev для простоты)
- При production сборке service worker будет доступен и статические ассеты кешируются согласно стратегии плагина.

## Offline behavior (заложено)

В продуктовых требованиях заложено:

- открыть экран `Today` и взаимодействовать с кнопками
- завершения должны сохраняться локально и синхронизироваться при восстановлении сети

Типовая реализация:

- локальная очередь изменений (IndexedDB)
- service worker background sync (или повтор отправок при next online)
- UI должен показывать статус синхронизации (pending / synced / failed)

Текущий код содержит каркас и health endpoint; конкретная offline queue логика будет добавлена при интеграции completion-мутейшенов с backend.

## Проверка после деплоя

Рекомендуется проверить:

- `GET /manifest.webmanifest` доступен
- install prompt появляется
- при offline режиме навигация по shell работает (хотя бы `/today`)
- `/api/health` отвечает

