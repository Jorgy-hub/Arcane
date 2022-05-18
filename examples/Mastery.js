const { LeagueClient } = require('riot-wrapper');

const client = new LeagueClient("API_KEY", "LEAGUE_VERSION");
const summoner = await client.getSummoner("Scaredy Cat", "la1");

// Masteries List.
const masteries = await summoner.getMasteries();
const firstMastery = masteries[0].getChampInfo();

// I'm Main Pyke :D
console.log(firstMastery);