export async function question4() {
    const response = await fetch('https://public-lab.nl/api/vraag/4');
    const data = await response.json();

    let amount = []
    for (let i = 0; i < data.reeks.length; i++) {
        if (data.reeks[i] > 50) {
            amount.push(data.reeks[i]);
        }
    }
    console.log('the amount of numbers greater than 50 is: ' + amount.length);

    const postResponse = await fetch('https://public-lab.nl/api/vraag/4', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ antwoord: amount.length }),
    });

    const result = await postResponse.json();
    console.log('the answer is:' + result.teken)
}