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
	var activePlayers = players.filter(function (player) {
		return player.available;
	});
	var playersPerWeight = activePlayers.reduce(function (acc, player) {
		if (!acc[player.weight]) acc[player.weight] = [];
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
	return { team1: team1, team2: team2 };
}
var players = [
	{ name: 'Arnos', weight: 6, available: true, skills: [] },
	{ name: 'Mido', weight: 7, available: true, skills: [] },
	{ name: 'Hani', weight: 9, available: true, skills: [] },
	{ name: 'Adel', weight: 10, available: true, skills: [] },
	{ name: 'Malek', weight: 6, available: true, skills: [] },
	{ name: 'Abo Malek', weight: 0, available: false, skills: [] },
	{ name: 'Tanawi', weight: 3, available: false, skills: [] },
	{ name: 'Halabya', weight: 6, available: true, skills: [] },
	{ name: 'Amr', weight: 4, available: false, skills: [] },
	{ name: 'Eyad', weight: 6, available: true, skills: [] },
	{ name: 'Lotfy', weight: 6, available: true, skills: [] },
	{ name: 'Gom3a', weight: 8, available: true, skills: [] },
	{ name: 'Helal', weight: 9, available: true, skills: [] },
	{ name: 'Omar', weight: 0, available: true, skills: [] },
	{ name: 'Soli', weight: 0, available: false, skills: [] },
	{ name: 'Nash2t', weight: 4, available: true, skills: [] },
	{ name: 'Bakry', weight: 0, available: false, skills: [] },
	{ name: '<>', weight: 0, available: false, skills: [] },
];
console.log(buildBalancedTeams(players));
//# sourceMappingURL=buildBalancedTeams.js.map
