export async function question1() {
    const response = await fetch('https://public-lab.nl/api/vraag/1');
    const data = await response.json();
      console.log(data);

    // count elements in array: https://stackoverflow.com/questions/6120931/how-to-count-certain-elements-in-array
    let sum = 0;
    for (let i = 0; i < data.reeks.length; i++) {
        // first i had only sum++ that caused the result to be 20 because there were 20 elements in the array, but the question was to sum the elements that were equal to the teken, so i changed it to sum += data.reeks[i] and now it works correctly
        // https://chatgpt.com/share/6a96a6e7-aac0-83eb-92df-5a881b762801
       sum += data.reeks[i];
    }
    console.log(`The result of the counting is : ${sum}`);
    return sum;
}