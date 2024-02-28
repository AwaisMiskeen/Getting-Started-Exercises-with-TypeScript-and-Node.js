//making aray of countries and print its original order
let countries_to_visit : string[]=["Brazil","Denmark","China","Australia","Egypt"];
console.log("Original_order:",countries_to_visit);

//print the aray in alphabetical ordder without modifying the actual aray list
console.log("alphabetical_order:",[...countries_to_visit].sort());

//show that the aray is still in its original order
console.log(" still_in_its_original_order:",countries_to_visit);

//print the aray in reversed order without modifying the actual aray list  
console.log("reverse_alphabetical_order:",[...countries_to_visit].reverse());

//show that the aray is still in its original order 
console.log("still_in_its_originl_order:",countries_to_visit);

//we have changed the original aray list
console.log("Original_aray_reversed:",countries_to_visit.reverse());

//print the aray to show that it's back to it's original order
console.log("Original_aray_reversed:",countries_to_visit.reverse());

//print the aray to show that its order has beeen changed to alphabetical order now 
console.log("Original_aray_alphabetical_order:",countries_to_visit.sort());

//we have changed again the original aray order now in reverse order again
console.log("Original_aray_reversed_again:",countries_to_visit.reverse());