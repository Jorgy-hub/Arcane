import { LeagueClient } from "./app";
LeagueFetch();

async function LeagueFetch() {
    let client = new LeagueClient("RGAPI-923639d5-66dd-4a12-b8e7-f59184d68191", "12.9.1" ); 
    let data = await client.getSummoner("Maniyami", "la1");
    let masteries = await data.getMasteries();
    console.log(masteries);
};