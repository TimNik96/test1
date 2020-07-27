// Treci zadatak

let K = 3;
let N = 35;
let i;
let zbir = 0;
let proizvod = 1;

if(K > N){
    for(i = N; i <= K; i++){
        if(i % 3 == 0){
            zbir += i;
        }
        if(i % 3 != 0 && i % 7 == 0){
            proizvod *= i;
        }
    }
    console.log(zbir, proizvod);
}else{
    for(i = K; i <= N; i++){
        if(i % 3 == 0){
            zbir += i;
        }
        if(i % 3 != 0 && i % 7 == 0){
            proizvod *= i;
        }
    }
    console.log(zbir, proizvod);
}