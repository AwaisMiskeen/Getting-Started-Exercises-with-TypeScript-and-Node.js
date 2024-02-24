//creating a guest_list aray
var guest_List = ["Asad", "Daniyal", "Tariq", "Awais"];
//making a variable who guest cant come
var dont_come = guest_List[0];
//print the name of guest who cant come
console.log(dont_come, "Nhi aa skty hn.");
//add or remove value fromguest_list
guest_List.splice(0, 1, "Basil");
//message print for bigger table
console.log("Good News! We have found the Bigger table of dinner.");
//adding a new guest at starting of our guest_lisy aray
guest_List.unshift("Zeeshan");
//adding a new guest at ending of our guest_lisy aray
guest_List.push("Shahhan");
//making a variable for storing a middle index of our guest_list
var middle_index = Math.floor(guest_List.length / 2);
//adding a new guest at middle_index of our guest_lisy aray
guest_List.splice(middle_index, 0, "Rehman");
//print message of update list
console.log("Updated list of our Guest");
//sending a invitation of our guest 1_by_1
guest_List.forEach(function (invite) { return console.log("Hello ".concat(invite, ", would you like to dinner with me.")); });
