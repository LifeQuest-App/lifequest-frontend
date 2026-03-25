# Deployment (Vercel / Docker)

## Что нужно заранее

- иметь готовый backend (C# Web API) по адресу:
  - `NEXT_PUBLIC_API_BASE_URL`
- убедиться, что backend использует cookie-based auth (если вы храните токены в cookies)

## Вариант A: Vercel (рекомендуется для старта)

1. Создайте проект из репозитория.
2. Framework preset: Next.js.
3. Добавьте environment variable `NEXT_PUBLIC_API_BASE_URL`.
4. Deploy.

После деплоя:
- проверьте `GET /api/health`

## Вариант B: Docker

### Build

Сборка должна выполняться из директории `lifequest-frontend`, где лежит `Dockerfile`:

- `lifequest-frontend/Dockerfile`

Пример:

```bash
docker build -t lifequest-frontend .
```

### Run

```bash
docker run -p 3000:3000 \
  -e NEXT_PUBLIC_API_BASE_URL=https://your-api-domain.com/api \
  lifequest-frontend
```

Healthcheck endpoint:
- `http://localhost:3000/api/health`

## Dockerfile и standalone

`next.config.mjs` содержит `output: "standalone"`.

`Dockerfile` использует multi-stage build и копирует:

- `.next/standalone` → runtime
- `.next/static` → ассеты

Это снижает размер образа и упрощает запуск.

## Security headers (Vercel)

`vercel.json` добавляет базовые заголовки:

- `X-Frame-Options: DENY`
- `X-Content-Type-Options: nosniff`
- `Referrer-Policy: strict-origin-when-cross-origin`

