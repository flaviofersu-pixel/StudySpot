async function sendPost() {
    const post = await fetch('https://public-lab.nl/api/vraag/1', {
        method: 'POST',
        body: JSON.stringify({ antwoord: 842 })
    });
    const data = await post.json();
    console.log(data);
}

sendPost();