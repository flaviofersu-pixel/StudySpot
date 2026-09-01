import { question1 } from "./Vraag 1/main.js";
import { question2 } from "./Vraag 2/main.js";
import { question3 } from "./Vraag 3/main.js";
import { question4 } from "./Vraag 4/main.js";
import { question5 } from "./Vraag 5/main.js";

async function main() {
    await question1();
    await question2();
    await question3();
    await question4();
    await question5();
}

main();