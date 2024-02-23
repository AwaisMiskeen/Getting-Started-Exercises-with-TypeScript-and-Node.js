let guest_list = ["Asad" , "Tariq" , "Daniyal" , "Awais"];

let dont_come_guest = guest_list[0];

console.log(dont_come_guest, "Nahi a Sakta.");

guest_list.splice(0, 1, "Basil");

guest_list.forEach(invite => console.log(`Hello ${invite}, would you like to Dinner with me.`));