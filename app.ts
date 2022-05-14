import { Tatsu } from "./lib/Tatsu";
TatsuFetch();

async function TatsuFetch() {
    let tatsu = new Tatsu({ token: "kR8RYT0pFS-aGHZ0D50uGupEGaFJ6PJho" });
    let data = await tatsu.getUserRank("304357538101723137","562864900003594253")
    console.log(data);
}