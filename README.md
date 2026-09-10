<p align="center">
  <img src="docs/banner.svg" alt="WebSocket Starter banner" width="100%" />
</p>

<h1 align="center">websocket-starter</h1>

<p align="center">
  <strong>EN</strong> Minimal Node WebSocket server skeleton (ws)<br/>
  <strong>PT</strong> Skeleton mínimo de servidor WebSocket em Node (ws)
</p>

<p align="center">
  <a href="https://github.com/manansbdb/websocket-starter/blob/main/LICENSE"><img src="https://img.shields.io/badge/license-MIT-22c55e?style=for-the-badge" alt="MIT" /></a>
  <img src="https://img.shields.io/badge/lang-EN%20%7C%20PT-3b82f6?style=for-the-badge" alt="EN PT" />
  <img src="https://img.shields.io/badge/topic-WebSocket-06b6d4?style=for-the-badge" alt="WebSocket" />
  <a href="#support--apoio"><img src="https://img.shields.io/badge/donate-BTC-f59e0b?style=for-the-badge" alt="Donate BTC" /></a>
</p>

---

## What it does / Para que serve

| English | Português |
|---------|-----------|
| A **minimal WebSocket server** using the `ws` package — clone, `npm install`, `npm start`. | Um **servidor WebSocket mínimo** com o pacote `ws` — clona, `npm install`, `npm start`. |
| Ideal as a teaching skeleton or starting point for realtime features. | Ideal como skeleton didático ou ponto de partida para features realtime. |

```mermaid
flowchart LR
  A["💻 Client"] -->|WS connect| B["🟢 src/server.js"]
  B --> C["📨 message"]
  C --> D["🔄 broadcast / reply"]
  style A fill:#6366f1,stroke:#4338ca,color:#fff
  style B fill:#0891b2,stroke:#0e7490,color:#fff
  style C fill:#ec4899,stroke:#be185d,color:#fff
  style D fill:#22c55e,stroke:#15803d,color:#fff
```

---

## Install / Instalação

### 1) Clone / Clona

```bash
git clone https://github.com/manansbdb/websocket-starter.git
cd websocket-starter
```

### 2) Install & run / Instala e corre

```bash
npm install
npm start
# server listens (see src/server.js for port)
```

### Requirements / Requisitos

- Node.js 18+
- `npm`

---

## Quick start / Início rápido

```bash
git clone https://github.com/manansbdb/websocket-starter.git
cd websocket-starter
npm install && npm start
```

---

## Contents / Conteúdos

| Path | Purpose / Função |
|------|------------------|
| `package.json` | Scripts + `ws` dependency |
| `src/server.js` | Minimal WS server |
| `SUPPORT.md` | Donations / Doações |

---

## Project layout / Estrutura

```text
websocket-starter/
├── docs/banner.svg
├── package.json
├── src/server.js
├── SUPPORT.md
└── README.md
```

---

## Support / Apoio

Bitcoin donations welcome / Doações em Bitcoin bem-vindas:

```
bc1q0qfnlnxyum9u45stzxe0a7jnhtj4j0usfkqdjw
```

See [SUPPORT.md](./SUPPORT.md).

---

## License / Licença

[MIT](./LICENSE) © 2026 manansbdb
