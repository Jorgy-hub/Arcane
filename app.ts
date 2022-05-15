import { League } from "./lib/League";
LeagueFetch();

async function LeagueFetch() {
    let client = new League({ token: "RGAPI-6a00fa00-e8df-4693-bdc8-a280a80422e8", version: "12.9.1", region:"la1" }); 
    let data =  await client.getSummoner("NotDaiko");  
    let masteries = await data.getMasteries()
    console.log(await masteries[0].getChampInfo());

    let pyke = await client.getChampion("pyke");
    console.log(pyke);
};