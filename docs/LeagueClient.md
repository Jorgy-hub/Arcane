# League Client

## Syntax
```js
const { LeagueClient } = require("riot-wrapper");
```

## Public Methods
| Name                  | Description                                             |
|-----------------------|---------------------------------------------------------|
| [getSummoners](#getSummoners)        | Function to Get the League Summoner Profile.            |
| [getSummonerEntries](#getSummonerEntries)    | Function to Get the Ranked Stats of a Summoner.         |
| [getSummonerMasteries](#getSummonerMasteries)  | Function to Get the List of Masteries of a Summoner.    |
| getSummonerActiveGame | Function to Get the Active Game of a Summoner.          |
| getChampionList       | Function to get the Full List of Champions in the Game. |
| getChampionByName     | Search for a Champion in the List by it's name.         |
| getChampionById       | Search for a Champion in the List by it's ID.           |

## Methods
<a name="getSummoners"></a>
### <mark style="background-color: #525252; color: white; padding: 5px; border-radius:5px;"> LeagueClient.getSummoners </mark>
Use this function to Get the League Summoner Profile. 
```js
LeagueClient.getSummoner(name: string, region: string);
```
### Parameters
* <mark style="background-color: #525252; color: white; padding: 5px; border-radius:5px;"> name </mark>
The Name string of the summoner.
* <mark style="background-color: #525252; color: white; padding: 5px; border-radius:5px;"> region </mark>
The Region string of the Client.
### Return Value
A Promise containing a <mark style="background-color: #525252; color: white; padding: 5px; border-radius:5px;">LeagueSummoner</mark>  Class Object.

___

<a name="getSummonerEntries"></a>
### <mark style="background-color: #525252; color: white; padding: 5px; border-radius:5px;"> LeagueClient.getSummonerEntries </mark>
Use this function to Get the League Summoner Profile. 
```js
LeagueClient.getSummonerEntries(id: string, region: string );
```
### Parameters
* <mark style="background-color: #525252; color: white; padding: 5px; border-radius:5px;"> id </mark>
The ID string which is the Summoner Profile ID.
* <mark style="background-color: #525252; color: white; padding: 5px; border-radius:5px;"> region </mark>
The Region string of the Client.
### Return Value
A Promise containing a <mark style="background-color: #525252; color: white; padding: 5px; border-radius:5px;">LeagueEntry</mark>  Class Object.

___

<a name="getSummonerMasteries"></a>
### <mark style="background-color: #525252; color: white; padding: 5px; border-radius:5px;"> LeagueClient.getSummonerMasteries </mark>
Use this function to Get the League Summoner Profile. 
```js
LeagueClient.getSummonerMasteries(id: string, region: string );
```
### Parameters
* <mark style="background-color: #525252; color: white; padding: 5px; border-radius:5px;"> id </mark>
The ID string which is the Summoner Profile ID.
* <mark style="background-color: #525252; color: white; padding: 5px; border-radius:5px;"> region </mark>
The Region string of the Client.
### Return Value
A Promise containing an Array of <mark style="background-color: #525252; color: white; padding: 5px; border-radius:5px;">LeagueMastery</mark>  Class Object.