/**
 * Get random element from array, and remove it from the array
 */
function getRandom(items) {
    var index = Math.floor(Math.random() * items.length);
    var item = items[index];
    items.splice(index, 1);
    return item;
}
/**
 * Build balanced teams, with the same number of players in each team
 */
function buildBalancedTeams(players) {
    var team1 = { weight: 0, players: [] };
    var team2 = { weight: 0, players: [] };
    var activePlayers = players.filter(function (player) { return player.available; });
    var playersPerWeight = activePlayers.reduce(function (acc, player) {
        if (!acc[player.weight])
            acc[player.weight] = [];
        acc[player.weight].push(player);
        return acc;
    }, {});
    for (var weight in playersPerWeight) {
        while (playersPerWeight[weight].length) {
            var currentPlayer = getRandom(playersPerWeight[weight]);
            var targetTeam = team1.weight <= team2.weight ? team1 : team2;
            targetTeam.weight += +weight;
            targetTeam.players.push(currentPlayer);
        }
    }
    console.log({ team1: team1, team2: team2 });
    return { team1: team1, team2: team2 };
}
//# sourceMappingURL=buildBalancedTeams.js.map