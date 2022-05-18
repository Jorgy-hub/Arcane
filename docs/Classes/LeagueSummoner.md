# LeagueSummoner
Represents a League Summoner Profile.


## Properties
| Properties    | Type         | Description                    |
|---------------|--------------|--------------------------------|
| id            | string       | Summoner Main ID               |
| name          | string       | Summoner League display name   |
| icon          | string       | Summoner display icon          |
| region        | string       | Summoner Account region        |
| accountId     | string       | Account ID                     |
| summonerLevel | number       | Summoner Game Level            |
| _client       | LeagueClient | Main LeagueClient for requests |

## Public Methods

| Method                          | Description                          |
|---------------------------------|--------------------------------------|
| [getEntries](#getEntries)       | Get the Ranked Stats of the Summoner |
| [getMasteries](#getMasteries)   | Get the Summoner Array of Masteries  |
| [getActiveGame](#getActiveGame) | Get the Active Match of the Summoner |

## Methods

<a name="getEntries"></a>
### <mark style="background-color: #525252; color: white; padding: 5px; border-radius:5px;"> LeagueSummoner.getEntries </mark>
Use this function to Get the League Summoner ranked stats. 
```js
LeagueSummoner.getEntries();
```
### Return Value
A Promise containing an array of <mark style="background-color: #525252; color: white; padding: 5px; border-radius:5px;">LeagueEntry</mark>  Class Objects.

___

<a name="getMasteries"></a>
### <mark style="background-color: #525252; color: white; padding: 5px; border-radius:5px;"> LeagueSummoner.getMasteries </mark>
Use this function to Get the League Summoner Masteries List. 
```js
LeagueSummoner.getMasteries();
```
### Return Value
A Promise containing an array of <mark style="background-color: #525252; color: white; padding: 5px; border-radius:5px;">LeagueMastery</mark>  Class Objects.

___

<a name="getActiveGame"></a>
### <mark style="background-color: #525252; color: white; padding: 5px; border-radius:5px;"> LeagueSummoner.getActiveGame </mark>
Use this function to Get the League Summoner Active Game in case the Summoner is playing a match. 
```js
LeagueSummoner.getActiveGame();
```
### Return Value
A Promise containing a <mark style="background-color: #525252; color: white; padding: 5px; border-radius:5px;">LeagueActiveMatch</mark>  Class Object.

___