// Optional WebSocket server starter. The Android game does not connect to this yet.
const WebSocket = require("ws");
const server = new WebSocket.Server({ port: process.env.PORT || 8080 });
const players = new Map();
server.on("connection", socket => {
  const id = Math.random().toString(36).slice(2, 10);
  players.set(id, { id, name: "Wanderer", x: 24, y: 23 });
  socket.send(JSON.stringify({ type: "welcome", id, players: [...players.values()] }));
  socket.on("message", raw => {
    let message;
    try { message = JSON.parse(raw.toString()); } catch { return; }
    if (message.type === "move" && Number.isFinite(message.x) && Number.isFinite(message.y)) {
      const p = players.get(id);
      if (p) { p.x = Math.max(0, Math.min(48, message.x)); p.y = Math.max(0, Math.min(48, message.y)); }
      const payload = JSON.stringify({ type: "players", players: [...players.values()] });
      for (const client of server.clients) if (client.readyState === WebSocket.OPEN) client.send(payload);
    }
  });
  socket.on("close", () => players.delete(id));
});
console.log("ECLIPSE server starter listening on port", process.env.PORT || 8080);
