let hr = document.getElementsByClassName("js1");
let kri = document.getElementById("grab");
let tmzone = document.getElementById("am");
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
    tmzone.innerText = "PM";
  } else {
    tmzone.innerText = "AM";
  }
  if (hours > 12) {
    hours -= 12;
  }
  if (hours < 10) {
    hours = "0" + hours;
  }
  if (minut < 10) {
    minut = "0" + minut;
  }
  if (second < 10) {
    second = "0" + second;
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
let gdm = document.getElementById("m");
let grb = document.getElementById("grab");
let i = document.getElementsByClassName("box5");
let setalarm = document.getElementById("setalrm");

setalarm.addEventListener("click", () => {
  setalarm.innerHTML = "breakfast";
  let a = new Date();
  let hours = a.getHours();
  if (hours === parseInt(s1.value)) {
    console.log(s1.value);
    gdm.innerHTML = "GOOD MORNING!! WAKE UP !!";

    i[0].style.backgroundImage = "url('mrng.png')";
  } else if (hours === parseInt(s2.value)) {
    console.log(s2.value);
    gdm.innerHTML = "GOOD AFTERNOON !! TAKE SOME SLEEP ";

    i[0].style.backgroundImage = "url('luch.png')";
  } else if (hours === parseInt(s3.value)) {
    console.log(s3.value);
    gdm.innerHTML = "GOOD EVENING !! ";

    i[0].style.backgroundImage = "url('goodevening.png')";
  } else if (hours === parseInt(s4.value)) {
    console.log(s4.value);
    gdm.innerHTML = "GOOD NIGHT !!";

    i[0].style.backgroundImage = "url('./GOODNIGHT.png')";
  }

  let morningtext = sel1.options[sel1.selectedIndex].textContent;
  let morning = document.getElementById("chart1");
  morning.textContent = morningtext;

  let morningtext1 = sel2.options[sel2.selectedIndex].textContent;
  let morning1 = document.getElementById("chart2");
  morning1.textContent = morningtext1;

  let morningtext2 = sel3.options[sel3.selectedIndex].textContent;
  let morning2 = document.getElementById("chart3");
  morning2.textContent = morningtext2;

  let morningtext3 = sel4.options[sel4.selectedIndex].textContent;
  let morning3 = document.getElementById("chart4");
  morning3.textContent = morningtext3;
});
