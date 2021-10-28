import { IqTest } from "./src/iq.test";

let iqTest = new IqTest("20 94 56 50 10 98 52 32 14 22 24 60 4 8 98 46 34 68 82 82 98 90 50 20 78 49 52 94 64 36");
console.log(`Position of evenness number: ${iqTest.solveIqTest()}`);