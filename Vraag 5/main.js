async function main() {
    const response = await fetch('https://public-lab.nl/api/vraag/5');
    const data = await response.json();

    console.log(data);

    let loop = [];

    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 !== 0) {
            loop.push(i);
        }
    }

    console.log(loop);
    console.log(`the amount of number between 1 and 100 that are divisible by 3 but not 5 is ${loop.length}`);


    const postResponse = await fetch('https://public-lab.nl/api/vraag/5', {
        method: 'POST',
        body: JSON.stringify({ antwoord: loop.length }),
    });

    const result = await postResponse.json();
    console.log(`the answer is: ${result.teken}`)
}

main();