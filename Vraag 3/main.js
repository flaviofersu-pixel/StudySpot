async function main() {
    const response = await fetch('https://public-lab.nl/api/vraag/3');
    const data = await response.json();
      console.log(data);
}

main();
