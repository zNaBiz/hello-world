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

   