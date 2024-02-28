var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
//
var countries_to_visit = ["Brazil", "Denmark", "China", "Australia", "Egypt"];
console.log("Original_order:", countries_to_visit);
console.log("alphabetical_order:", __spreadArray([], countries_to_visit, true).sort());
console.log(" still_in_its_original_order:", countries_to_visit);
console.log("reverse_alphabetical_order:", __spreadArray([], countries_to_visit, true).reverse());
console.log("still_in_its_originl_order:", countries_to_visit);
console.log("Original_aray_reversed:", countries_to_visit.reverse());
console.log("Original_aray_reversed:", countries_to_visit.reverse());
console.log("Original_aray_alphabetical_order:", countries_to_visit.sort());
console.log("Original_aray_reversed_again:", countries_to_visit.reverse());
