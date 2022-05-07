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

	return { team1, team2 };
}

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

const players: Player[] = [
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
