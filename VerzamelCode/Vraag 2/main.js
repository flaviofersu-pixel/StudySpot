export async function question2() {
    const response = await fetch('https://public-lab.nl/api/vraag/2');
    const data = await response.json();

    // how to pack a lengt: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce 
    const longest = data.woorden.reduce((a, b) => (a.length >= b.length ? a : b));

    console.log(`The longest word is: ${longest}`);

    const postResponse = await fetch('https://public-lab.nl/api/vraag/2', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ antwoord: longest }),
    });

    const result = await postResponse.json();
    console.log(`the answer is: ${result.teken}`);
}