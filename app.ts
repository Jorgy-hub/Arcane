import { Tatsu } from "./lib/Tatsu";
import { UnbelievaBoat } from "./lib/UnbelievaBoat";
Fetch();

async function TatsuFetch() {
    let tatsu = new Tatsu({ token: "test" });
    let data = await tatsu.getUser("304357538101723137");
    console.log(data.level)
}

async function Fetch() {
    let client = new UnbelievaBoat({ token: "test" });
    //let data = await client.getMember("562864900003594253", "304357538101723137");
    let data = await client.getGuild("562864900003594253");
    console.log(data)
}