// Prvi zadatak

let kolicinaPica = 5;
let cenaPica = 100;
let brojGodina = 21;
let racun = 0;

if(brojGodina >= 18){
    if(brojGodina % 7 == 0){
        racun = kolicinaPica * cenaPica - ((kolicinaPica * cenaPica) * 0.15);
    }else if(brojGodina % 11 == 0){
        racun = kolicinaPica * cenaPica - ((kolicinaPica * cenaPica) * 0.25);
    }else{
        racun = kolicinaPica * cenaPica;
    }
    console.log(racun);
}else{
    console.log("Musterija nema 18 godina!");
}