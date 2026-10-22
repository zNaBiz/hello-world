let age = 16;
let hasTicket = true;
let withAdult = true;

if (age >= 15 && hasTicket == true){
    console.log("välkommen in i bio")
} else{
    console.log("gå köp ticket din snåle fan")
}

const isLoggedIn = true;
const userRole = "admin";

if (isLoggedIn === true){
    if (userRole === "admin"){
        console.log("välkommen till adminpanelen")
    }else {
        console.log("välkommen vanliga användare")

    }
} else {
     console.log ("du måste logga in först")
}

const trafficLight = "gul";
switch (trafficLight) {
    case "grön":
        console.log("kör");
        break;
        case "gul":
            console.log("gör dig redo...");
            break;
            case "röd":
                console.log("stanna!");
                break;
                default:
                console.log("okänd signal")
}


const weather ="regn";
switch (weather) {
    case "regn":
        console.log("Ta med paraply!")
        break;
        case "sol":
        console.log("Glöm inte solglasögon")
        break;
        case "snö":
            console.log("Bygg en snögubbe")
            break;
            default:
                console.log("Kolla väderappen igen")
}




for (let i = 1; i < 6; i++){
    console.log(i)
}
   const fruits = ["banan", "äpple", "mango"]

   for (let i = 0; i < fruits.length; i++){
    console.log(fruits[i])
   }

   let energi = 3;
   while (energi > 0){
    console.log("sprang ett varv. energi kvar:" + energi)
    energi-- //Minskar energi med 1 efter varje vav 
   }
   console.log("slut på enrgi! måste vila...Zzz")

   let elever = [
    { name: "Hejsan", poang:85},
    { name: "Svejsan", poang:1000},
    { name: "Nejsan", poang:10},
   ]

   for (let i = 0; i < elever.length; i++){
    console.log(elever[i].name + " - " + elever[i].poang)
   }


   for (const elev of elever){
    console.log(elev.name)
   }

   for (let i = 5; i >=1; i--){
    if (i === 3) {
        console.log(i + "- Halvvägs där!")
    } else {
    console.log("Sekunder kvar:" + i)
   }
}
console.log("LIFT OFF!")