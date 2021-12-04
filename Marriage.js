let age$ =prompt("Age")


if(age$ >=18){
    console.log(`You have reached the age of marriage .Should agree.`);
}else{
    console.log(`You are not old enough to get married .Shouldn't.`);
}

let age2 =prompt("Age")


if(age2 <=17){
    console.log(`You are not old enough to get married .Shouldn't .`);
}else{console.log(`You have reached the age of marriage .Should agree.`);}

let age3 =prompt("Age")


if(age3 >=18){
    console.log(`You have reached the age of marriage .Should agree.`);
}else{
    console.log(`You are not old enough to get married .Shouldn't. Please wait${18-age3}years.`);
}


let first_name =prompt("first name")
let lest_mame =prompt("lest name")

if( lest_mame == "Haque"){console.log(`My name is ${first_name} ${lest_mame}.How are you ${lest_mame} vi ?`);
}else{console.log(`My name is ${first_name} ${lest_mame}`);}