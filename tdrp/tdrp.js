let studentindex;
let students = [
    "Isono Miki","Harada Keizou","Chiba Airi","Kamimura Kazutoshi",
    "Hayashi Mai","Wada Masanari","Sasaki Hitomi","Ojima Takeshi",
    "Okazaki Hanano","Hama Ran","Tsuno Manami","Hiroaki Nakamigawa",
    "Tamba Ruiko","Hasegawa Ken","Watari Nishino","Yanagi Shigeki"
];
let img1;
let imgs = [
    "st1 (1).png","st2 (1).png","st3 (1).png","st4 (1).png",
    "st5 (1).png","st6 (1).png","st7.png","st8.png",
    "st9.png","st10.png","st11.png","st12.png",
    "st13.png","st14.png","st15.png","st16.png"
];
console.log("script loaded");
document.getElementById("getbutton").addEventListener("click", function() {
    studentindex = Math.floor(Math.random() * (15 - 0 + 1)) + 0;
    img1 = studentindex;
    document.getElementById("name").textContent = students[studentindex];
    document.getElementById("image").src = imgs[img1];
});