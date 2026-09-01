async function main() {
    const response = await fetch('https://public-lab.nl/api/vraag/3');
    const data = await response.json();
    console.log(data);

    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match
    // find the letters e in the text and count them
    const count = (data.tekst.match(/e/gi) || []).length;

    console.log(`the letter 'e' appears ${count} times in the text.`);

    const postResponse = await fetch('https://public-lab.nl/api/vraag/3', {
        method: 'POST',
        body: JSON.stringify({ antwoord: count }),
    });

    const result = await postResponse.json();
    console.log(`the answer is: ${result.teken}`);
}

main();
