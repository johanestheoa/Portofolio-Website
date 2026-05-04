const texts = [
    "Web-Developer",
    "Student",
    "Child",
    "Boyfriend",
    "Bestfriend"
];

const el = document.getElementById("rotating-text");
let index = 0;

setInterval(() => {
    index = (index + 1) % texts.length;
    el.textContent = texts[index]; 
}, 500);

