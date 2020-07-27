// Cetvrti zadatak

let red = "";
let broj = 1;
let osnova = "1 2 3 4 5 6 7 8 9";

// console.log(osnova);

for(let i = 1; i < 10; i++){
    red = "";
    for(let j = 1; j <= 9; j++){
        broj = j * i;
        red += `${broj} `;    
    }
    console.log(red);
}
