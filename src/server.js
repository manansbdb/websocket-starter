/**
 * Minimal WebSocket server / Servidor WebSocket mínimo
 * EN: Echo + broadcast skeleton for local learning.
 * PT: Skeleton de echo + broadcast para aprendizagem local.
 */
const { WebSocketServer } = require("ws");

const PORT = Number(process.env.PORT || 8080);
const wss = new WebSocketServer({ port: PORT });

wss.on("connection", (socket) => {
  socket.send(JSON.stringify({ type: "welcome", message: "connected" }));

  socket.on("message", (raw) => {
    const text = String(raw);
    // Echo to sender / Eco para o remetente
    socket.send(JSON.stringify({ type: "echo", data: text }));
    // Broadcast to others / Broadcast para os outros
    for (const client of wss.clients) {
      if (client !== socket && client.readyState === 1) {
        client.send(JSON.stringify({ type: "broadcast", data: text }));
      }
    }
  });
});

console.log(`WebSocket listening on ws://localhost:${PORT}`);
