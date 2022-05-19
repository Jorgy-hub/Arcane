const { LeagueClient } = require('arcane.ts');

const client = new LeagueClient("API_KEY", "LEAGUE_VERSION");
const summoner = await client.getSummoner("Scaredy Cat", "la1");

// Entries List.
const entries = await summoner.getEntries();
console.log(entries);