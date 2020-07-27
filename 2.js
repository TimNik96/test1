// Drugi zadatak

let N = 6;
let red = "";
let counter = 0;

for(let i = 1; i <= N; i++){
    red = "";
    if(i <= N){
        for(let j = 1; j <= 2 * N - 1; j++){
            if(j <= Math.floor((2 * N - 2 * i) / 2)){
                red += " ";
            }else if(j >= N + i) {
                red += " ";
            }else if(i == N){
                red = "*".repeat(N-1) + " " + "*".repeat(N-1)    
            }else{
                red += "*";
            }
        }
        console.log(red);
    }    
}





//1 1111*1111
//2 111***111
//3 11*****11
//4 1*******1
//5 ****1****
//6 1*******1
//7 11*****11
//8 111***111
//9 1111*1111