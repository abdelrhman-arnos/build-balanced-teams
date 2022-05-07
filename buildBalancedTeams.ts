interface Player {
	name: string;
	weight: number;
	available: boolean;
	skills: string[];
}

interface Team {
	weight: number;
	players: Player[];
}

/**
 * Get random element from array, and remove it from the array
 */
function getRandom(items: any[]): any {
	const index = Math.floor(Math.random() * items.length);
	const item = items[index];
	items.splice(index, 1);

	return item;
}

/**
 * Build balanced teams, with the same number of players in each team
 */
function buildBalancedTeams(players: Player[]): {
	team1: Team;
	team2: Team;
} {
	const team1: Team = { weight: 0, players: [] };
	const team2: Team = { weight: 0, players: [] };

	const activePlayers = players.filter((player) => player.available);

	const playersPerWeight = activePlayers.reduce((acc, player) => {
		if (!acc[player.weight]) acc[player.weight] = [];
		acc[player.weight].push(player);

		return acc;
	}, {});

	for (const weight in playersPerWeight) {
		while (playersPerWeight[weight].length) {
			const currentPlayer = getRandom(playersPerWeight[weight]);
			const targetTeam = team1.weight <= team2.weight ? team1 : team2;

			targetTeam.weight += +weight;
			targetTeam.players.push(currentPlayer);
		}
	}

	console.log({ team1, team2 });
	return { team1, team2 };
}
