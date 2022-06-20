export default function renderScreen(screen, game, curretPlayerId) {
  const context = screen.getContext("2d");
  context.fillStyle = "white";
  context.clearRect(0, 0, 10, 10);

  for (const playerId in game.state.players) {
    const player = game.state.players[playerId];
    context.fillStyle = "red";
    context.fillRect(player.x, player.y, 1, 1);
  }

  for (const fruitId in game.state.fruits) {
    const fruit = game.state.fruits[fruitId];
    context.fillStyle = "green";
    context.fillRect(fruit.x, fruit.y, 1, 1);
  }

  const curretPlayer = game.state.players[curretPlayerId]

  if(curretPlayer){
    context.fillStyle = '#F0DB4F'
    context.fillRect(curretPlayer.x, curretPlayer.y, 1, 1)
  }
  
  requestAnimationFrame(() => {
    renderScreen(screen, game, curretPlayerId)
  });
}