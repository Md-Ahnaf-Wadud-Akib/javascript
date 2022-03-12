// var money = 120;
// var foodPrice = 115;

// if (foodPrice > money) {
//     console.log("no food");
// }
// else {
//     console.log("food is searved");
// }

var money, job, flat;
money = false;
job = true;
flat = false;

if (job == true && money == true && flat == true) {
    console.log("get married");
}
else if (job == true && (money == false || flat == true)) {
    console.log("get married");
}
else {
    console.log("not getting married")
}