var PersonName = "asad Miskeen";
console.log(PersonName.toLowerCase());
console.log(PersonName.toUpperCase());
console.log(PersonName.replace(/\b\w/g, function (char) { return char.toUpperCase(); }));
