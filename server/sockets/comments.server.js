module.exports = (serverIO) => {
  // Socket Connection
  serverIO.on('connection', socket => {
    // console.log('Socket Connection: ', socket);
    let previousSessionId;
  
    // Safe Connection join
    const safeJoin = currentSessionId => {
      socket.leave(previousSessionId);
      socket.join(currentSessionId);
      previousSessionId = currentSessionId;
    };
  
    // Event
    socket.on("read", readId => {
      console.log('Read: ', readId);
      safeJoin(readId);
      socket.emit('Write', readId);
    });
  });
}