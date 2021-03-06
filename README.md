<div align=center>
  <img src="https://cdn.discordapp.com/attachments/772843317100544012/976640973335588924/arcane.ts.png" />
  <br>
  <img src="https://badge.fury.io/js/riot-wrapper.svg"/>
  <img src="https://img.shields.io/github/last-commit/Uraraka-Chan/riot-wrapper"/>
  <img src="https://img.shields.io/amo/dw/riot-wrapper" />
</div>


## About
Arcane.ts is a NodeJs and Typescript wrapper for easier use of the [Riot API](https://developer.riotgames.com) used for games such as League of Legends, Valorant, TFT; This Wrapper is still on development so I haven't completly covered all of the API.
* Object-oriented
* Performant

## Installation
```bash
npm install --save arcane.ts
```

## Summoner Data Example
```ts
const { LeagueClient } = require('arcane.ts');

const client = new LeagueClient("API_KEY", "LEAGUE_VERSION");
const summoner = await client.getSummoner("Scaredy Cat", "la1");

console.log(summoner);
```

## Summoner Mastery Example
```ts
const { LeagueClient } = require('arcane.ts');

const client = new LeagueClient("API_KEY", "LEAGUE_VERSION");
const summoner = await client.getSummoner("Scaredy Cat", "la1");
const masteries = await summoner.getMasteries();
const champInfo = await masteries[0].getChampInfo();

console.log(champInfo);
```

## License
Please read the the [LICENSE](https://github.com/Uraraka-Chan/riot-wrapper/blob/main/LICENSE) file.

---
<div align=center>
  <img src="https://forthebadge.com/images/badges/built-with-love.svg" />
  <img src="https://forthebadge.com/images/badges/made-with-typescript.svg" />

  <img src="https://forthebadge.com/images/badges/powered-by-qt.svg" />
</div>