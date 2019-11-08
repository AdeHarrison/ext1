// content.js
// alert("Hello from your Chrome extension!")
console.log(12345)

var firstHref = $("a[href^='http']").eq(0).attr("href");

console.log("here it is : " + firstHref);
