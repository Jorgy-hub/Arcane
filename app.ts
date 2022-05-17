import { League } from "./lib/League";
LeagueFetch();

async function LeagueFetch() {
    let client = new League("RGAPI-923639d5-66dd-4a12-b8e7-f59184d68191", "12.9.1" ); 
    let data = await client.getSummoner("Wueloahumo", "la1");
    let game = await data.getActiveGame();
    let chrono = await game.participants[3].getEntries();
    console.log(chrono);
};