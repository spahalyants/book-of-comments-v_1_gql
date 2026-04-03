function boilWater() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("Water boiled!");
            resolve();
        }, 2000); // 2 seconds
    });
}

async function cookPasta() {
    console.log("Boiling water...");
    await boilWater(); // wait
    console.log("Cooking pasta...");
    console.log("Done!");
}

cookPasta();
console.log("I can write the code while waiting!");
