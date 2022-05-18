const { LeagueClient } = require('riot-wrapper');

// Replace the API_KEY with your Riot key.
// Replace the LEAGUE_VERSION with the latest League Patch.
const client = new LeagueClient("API_KEY", "LEAGUE_VERSION");
const summoner = await client.getSummoner("Scaredy Cat", "la1");
console.log(summoner);