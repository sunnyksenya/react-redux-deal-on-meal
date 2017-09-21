export const syncSocketClientWithStore = (socket, store) =>
{
  socket.on('action', action => store.dispatch({ ...action, emitterExternal: true }));
};

export const createEmitterMiddleware = socket => store => next => action =>
{
  if(!action.emitterExternal)
  {
    socket.emit('action', action);
  }

  return next(action);
};
