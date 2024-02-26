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
//inform that only two person invite to dinner
console.log("Unfortunatly,I decided two person invite to dinner with me.");
//using while-loop to remove guest from the aray only two names remain 
while (guest_List.length > 2) {
    var remove_guest = guest_List.pop();
    console.log("Sorry, ".concat(remove_guest, " some reason i remove you to guest list. "));
}
//print message to guest_list
console.log("Invitation to last Two Guest");
guest_List.forEach(function (guest_remain) { return console.log("Luckly ".concat(guest_remain, ", You are still invite to dinner.")); });
guest_List.pop();
guest_List.pop();
console.log("empty list", guest_List);
