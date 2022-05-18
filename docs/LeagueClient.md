# LeagueClient

## Syntax
```js
const { LeagueClient } = require("riot-wrapper");
```

## Public Methods
| Name                                            | Description                                             |
|-------------------------------------------------|---------------------------------------------------------|
| [getSummoner](#getSummoners)                    | Function to Get the League Summoner Profile.            |
| [getSummonerEntries](#getSummonerEntries)       | Function to Get the Ranked Stats of a Summoner.         |
| [getSummonerMasteries](#getSummonerMasteries)   | Function to Get the List of Masteries of a Summoner.    |
| [getSummonerActiveGame](#getSummonerActiveGame) | Function to Get the Active Game of a Summoner.          |
| [getChampionList](#getChampionList)             | Function to get the Full List of Champions in the Game. |
| [getChampionByName](#getChampionByName)         | Search for a Champion in the List by it's name.         |
| [getChampionById](#getChampionById)             | Search for a Champion in the List by it's ID.           |

## Methods
<a name="getSummoners"></a>
### <mark style="background-color: #525252; color: white; padding: 5px; border-radius:5px;"> LeagueClient.getSummoner </mark>
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
A Promise containing a <mark style="background-color: #525252; color: white; padding: 5px; border-radius:5px;">[LeagueSummoner](/docs/Classes/LeagueSummoner.md)</mark>  Class Object.

___

<a name="getSummonerEntries"></a>
### <mark style="background-color: #525252; color: white; padding: 5px; border-radius:5px;"> LeagueClient.getSummonerEntries </mark>
Use this Function to Get the Ranked Stats of a Summoner.  
```js
LeagueClient.getSummonerEntries(id: string, region: string );
```
### Parameters
* <mark style="background-color: #525252; color: white; padding: 5px; border-radius:5px;"> id </mark>
The ID string which is the Summoner Profile ID.
* <mark style="background-color: #525252; color: white; padding: 5px; border-radius:5px;"> region </mark>
The Region string of the Client.
### Return Value
A Promise containing an Array of <mark style="background-color: #525252; color: white; padding: 5px; border-radius:5px;">LeagueEntry</mark>  Class Objects.

___

<a name="getSummonerMasteries"></a>
### <mark style="background-color: #525252; color: white; padding: 5px; border-radius:5px;"> LeagueClient.getSummonerMasteries </mark>
Use this Function to Get the List of Masteries of a Summoner.
```js
LeagueClient.getSummonerMasteries(id: string, region: string );
```
### Parameters
* <mark style="background-color: #525252; color: white; padding: 5px; border-radius:5px;"> id </mark>
The ID string which is the Summoner Profile ID.
* <mark style="background-color: #525252; color: white; padding: 5px; border-radius:5px;"> region </mark>
The Region string of the Client.
### Return Value
A Promise containing an Array of <mark style="background-color: #525252; color: white; padding: 5px; border-radius:5px;">LeagueMastery</mark>  Class Objects.

___

<a name="getSummonerActiveGame"></a>
### <mark style="background-color: #525252; color: white; padding: 5px; border-radius:5px;"> LeagueClient.getSummonerActiveGame </mark>
Use this Function to Get the Active Game of a Summoner. 
```js
LeagueClient.getSummonerActiveGame(id: string, region: string );
```
### Parameters
* <mark style="background-color: #525252; color: white; padding: 5px; border-radius:5px;"> id </mark>
The ID string which is the Summoner Profile ID.
* <mark style="background-color: #525252; color: white; padding: 5px; border-radius:5px;"> region </mark>
The Region string of the Client.
### Return Value
A Promise containing a <mark style="background-color: #525252; color: white; padding: 5px; border-radius:5px;">LeagueActiveMatch</mark>  Class Objects.

___

<a name="getChampionList"></a>
### <mark style="background-color: #525252; color: white; padding: 5px; border-radius:5px;"> LeagueClient.getChampionList </mark>
Use this Function to get the Full List of Champions in the Game.
```js
LeagueClient.getChampionList();
```

The Region string of the Client.
### Return Value
A Promise containing a <mark style="background-color: #525252; color: white; padding: 5px; border-radius:5px;">JSON</mark> Objects with all of the League Champions.

___

<a name="getChampionByName"></a>
### <mark style="background-color: #525252; color: white; padding: 5px; border-radius:5px;"> LeagueClient.getChampionByName </mark>
Use this Search for a Champion in the List by it's name.   
```js
LeagueClient.getChampionByName(name: string);
```
### Parameters
* <mark style="background-color: #525252; color: white; padding: 5px; border-radius:5px;"> id </mark>
The ID string contains the Name of the Champion that is going to be searched.
### Return Value
A Promise containing a <mark style="background-color: #525252; color: white; padding: 5px; border-radius:5px;">LeagueChampion</mark>  Class Objects.

___

<a name="getChampionById"></a>
### <mark style="background-color: #525252; color: white; padding: 5px; border-radius:5px;"> LeagueClient.getChampionById </mark>
Use this Search for a Champion in the List by it's ID.   
```js
LeagueClient.getChampionById(id: number);
```
### Parameters
* <mark style="background-color: #525252; color: white; padding: 5px; border-radius:5px;"> id </mark>
The ID number contains the ID of the Champion that is going to be searched.
### Return Value
A Promise containing a <mark style="background-color: #525252; color: white; padding: 5px; border-radius:5px;">LeagueChampion</mark>  Class Objects.

___

<div align=left>
  <img src="https://forthebadge.com/images/badges/built-with-love.svg" />
  <img src="https://forthebadge.com/images/badges/made-with-typescript.svg" />

  <img src="https://forthebadge.com/images/badges/powered-by-qt.svg" />
</div>