const letters = ["a", "b", "c"];

for (let index = 0; index < letters.length; index++) {
    const element = array[index];
    console.log(`Made with a For: ${element}`);
}

letters.forEach(element => console.log(`Made with a Foreach: ${element}`));
