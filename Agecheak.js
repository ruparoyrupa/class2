let age =prompt("Age");



if (age>=20) {console.log(`Welcome,You can participate in this event.`);
    
}else{if (age<=19) {
    console.log(`Sorry,You are not allowed in this event.`); 
}}


let $age=10;

switch ($age) {
    case 10:
        console.log(`Sorry,You are not allowed in this event.`);
        break;
    case 20:
        console.log(`Welcome,You can participate in this event.`);
        break;
    default: console.log(`Not founded`);
        break;
}