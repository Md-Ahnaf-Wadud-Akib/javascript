// var students = ["Akib", "Ahnaf"];
// var i;
// for (i = 0; i <= students.length; i++) {
//     var student = students[i];
//     console.log(student);
// }

var names, cat, i, position;

names = ["Oreo", "Covid", "Lily", "TimTim", "MinMin"];

for (i = 0; i <= names.length; i++) {
    cat = names[i];
    console.log(cat);
    if (cat == "Lily") {
        console.log("Found Lily");
        break;
    }

}