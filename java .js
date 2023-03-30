let hr = document.getElementsByClassName("js1");
let kri = document.getElementById("grab");
function clock() {
  let a = new Date();
  let hours = a.getHours();
  let minut = a.getMinutes();
  let second = a.getSeconds();
  let value = `${hours}:${minut}:${second}`;
  if (hours >= 6 && hours < 12) {
    kri.innerText = "GRAB SOME HEALTHY BREAKFAST!!!";
  } else if (hours >= 12 && hours < 15) {
    kri.innerText = "LET'S HAVE SOME LUNCH !!";
  } else if (hours >= 15 && hours < 19) {
    kri.innerText = "STOP YAWNING, GET SOME TEA.. ITS JUST EVENING!";
  } else {
    kri.innerHTML = "CLOSE YOUR EYES AND GO TO SLEEP";
  }
  if (hours > 12) {
    hours -= 12;
  }
  console.log(value);
  let hrs = `${hours}`;
  hr[0].innerHTML = hrs;
  let mnt = `${minut}`;
  hr[1].innerHTML = mnt;
  let sec = `${second}`;
  hr[2].innerHTML = sec;
}
setInterval(() => {
  clock();
}, 1000);

let s1 = document.getElementById("sel1");
let s2 = document.getElementById("sel2");
let s3 = document.getElementById("sel3");
let s4 = document.getElementById("sel4");
let gdm = document.getElementById("mor");
let grb = document.getElementById("grab");
let i = document.getElementsByClassName("box5");
let setalarm = document.getElementById("setalrm");
let chrt = document.getElementsByClassName("chart");
setalarm.addEventListener("click", () => {
  setalarm.innerHTML = "breakfast";
  let a = new Date();
  let hours = a.getHours();
  if (hours === parseInt(s1.value)) {
    console.log(s1.value);
    gdm.innerHTML = "GOOD MORNING!! WAKE UP !!";
    chrt[0].innerHTML = s1.value;
    i[0].style.backgroundImage = "url('mrng.png')";
  } else if (hours === parseInt(s2.value)) {
    console.log(s2.value);
    gdm.innerHTML = "GOOD AFTERNOON !! TAKE SOME SLEEP ";
    chrt[1].innerHTML = s2.value;
    i[0].style.backgroundImage = "url('luch.png')";
  } else if (hours === parseInt(s3.value)) {
    console.log(s3.value);
    gdm.innerHTML = "GOOD EVENING !! ";
    chrt[2].innerHTML = s3.value;
    i[0].style.backgroundImage = "url('goodevening.png')";
  } else if (hours === parseInt(s4.value)) {
    console.log(s4.value);
    gdm.innerHTML = "GOOD NIGHT !!";
    chrt[3].innerHTML = s4.value;
    i[0].style.backgroundImage = "url('night.png')";
  }
});
