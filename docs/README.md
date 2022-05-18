# Riot Wrapper
[![npm version](https://badge.fury.io/js/riot-wrapper.svg)](https://badge.fury.io/js/riot-wrapper) [![last commit](https://img.shields.io/github/last-commit/Uraraka-Chan/riot-wrapper)](https://img.shields.io/github/last-commit/Uraraka-Chan/riot-wrapper)
NodeJs Wrapper for easier use of the [Riot API](https://developer.riotgames.com)

## Installing
```bash
npm install --save riot-wrapper
```

## Summoner Data Example
```ts
const { LeagueClient } = require('riot-wrapper');

// Replace the API_KEY with your Riot key.
// Replace the LEAGUE_VERSION with the latest League Patch.
const client = new LeagueClient("API_KEY", "LEAGUE_VERSION");
const summoner = await client.getSummoner("Scaredy Cat", "la1");

console.log(summoner);
```

## Summoner Mastery Example
```ts
const { LeagueClient } = require('riot-wrapper');

const client = new LeagueClient("API_KEY", "LEAGUE_VERSION");
const summoner = await client.getSummoner("Scaredy Cat", "la1");
const masteries = await summoner.getMasteries();
const champInfo = await masteries[0].getChampInfo();

console.log(champInfo);
```

## License
Please read the the [LICENSE](https://github.com/Uraraka-Chan/riot-wrapper/blob/main/LICENSE) file.

---
<div align=left>
  <img src="https://forthebadge.com/images/badges/built-with-love.svg" />
  <img src="https://forthebadge.com/images/badges/made-with-typescript.svg" />

  <img src="https://forthebadge.com/images/badges/powered-by-qt.svg" />
</div>