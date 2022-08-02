const express = require('express')
const app = express();
const http = require('http');
const { Server } = require('socket.io');
const server = http.createServer(app);
const PORT = process.env.PORT || 5000
const ACTIONS = require('./src/Actions');
const io = new Server(server);
const path = require('path');
const userSocketMap = {};

app.use(express.static('build'))
app.use((req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'))
})
function getAllConnectedClient(roomId) {
    return Array.from(io.sockets.adapter.rooms.get(roomId) || []).map(
        (socketId) => {
            return {
                socketId,
                username: userSocketMap[socketId],
            };
        }
    )
}
// Connection Socket Io

io.on('connection', (socket) => {
    console.log(`socket connection ${socket.id}`);
    socket.on(ACTIONS.JOIN, ({ roomId, username }) => {
        userSocketMap[socket.id] = username;
        socket.join(roomId);
        const clients = getAllConnectedClient(roomId);
        clients.forEach(({ socketId }) => {
            io.to(socketId).emit(ACTIONS.JOINED, {
                clients,
                username,
                socketId: socket.id
            });
        });
    });
    socket.on(ACTIONS.CODE_CHANGE, ({ roomId, code }) => {
        socket.in(roomId).emit(ACTIONS.CODE_CHANGE, { code });
    });
    socket.on(ACTIONS.SYNC_CODE, ({ socketId, code }) => {
        io.to(socketId).emit(ACTIONS.CODE_CHANGE, { code });
    });
})


server.listen(PORT, () => {
    console.log(`server has been started http://localhost:${PORT}`);
});