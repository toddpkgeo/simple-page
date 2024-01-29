//@ts-check

addEventListener("DOMContentLoaded", (event) => {
    console.log("Content has loaded except for images, iframes, and async scripts.");
    foo();
});

addEventListener("load", (event) => {
    console.log("The page is fully loaded");
});
