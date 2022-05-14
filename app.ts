import { Tatsu } from "./lib/Tatsu";
TatsuFetch();

async function TatsuFetch() {
    let tatsu = new Tatsu({ token: "token" });
    let data = await tatsu.getUser("206333699833200640")
    console.log(data);
}