var numVids = 19;
var recordings = [];
for (let i = 0; i < numVids; i++) recordings.push({});

function Recording(a, b){
    this.fname=a;
    this.place=b;
}

recordings[0] = new Recording("https://github.com/nancxwu/geological-time-watch/raw/refs/heads/main/recordings/20251201_232000_1.mp4","日本东京都葛饰区柴又1丁目");
recordings[1] = new Recording("https://github.com/nancxwu/geological-time-watch/raw/refs/heads/main/recordings/IMG_1084.mp4","The Intersection I cross to get to my Bus Stop, Tomigaya, Shibuya, Tokyo");
recordings[2] = new Recording("https://github.com/nancxwu/geological-time-watch/raw/refs/heads/main/recordings/IMG_1678.mp4","天津市西青区万科西华府博华苑8栋");
recordings[3] = new Recording("https://github.com/nancxwu/geological-time-watch/raw/refs/heads/main/recordings/IMG_5580.mp4","The base of Kadoorie hill, where my uncle goes for a secret smoke every evening");
recordings[4] = new Recording("https://github.com/nancxwu/geological-time-watch/raw/refs/heads/main/recordings/IMG_7167.mp4","天津市西青区万科西华府博华苑6号");
recordings[5] = new Recording("https://github.com/nancxwu/geological-time-watch/raw/refs/heads/main/recordings/IMG_9604.mp4","Bedroom window in Crown Heights, Brooklyn");
recordings[6] = new Recording("https://github.com/nancxwu/geological-time-watch/raw/refs/heads/main/recordings/MAH00699.mp4","Living room overlooking Malcom X Blvd, Brooklyn, USA");
recordings[7] = new Recording("https://github.com/nancxwu/geological-time-watch/raw/refs/heads/main/recordings/PXL_20251201_141910982.mp4","Rådhusgade 56, 8300 Odder, Denmark");
recordings[8] = new Recording("https://github.com/nancxwu/geological-time-watch/raw/refs/heads/main/recordings/PXL_20251201_142015265.mp4","Bedroom window of my childhood home with my dog snoring at the foot of my bed, Inner Sunset, San Francisco");
recordings[9] = new Recording("https://github.com/nancxwu/geological-time-watch/raw/refs/heads/main/recordings/Video Dec 01 2025, 6 20 11 AM_Lauren.mp4","Cross street of my mom's house, Santa Rosa, California");
recordings[10] = new Recording("https://github.com/nancxwu/geological-time-watch/raw/refs/heads/main/recordings/Video Dec 01 2025, 9 20 07 AM.mp4","Corner of Mercer and Spring St, SoHo, New York, New York, 10012");
recordings[11] = new Recording("https://github.com/nancxwu/geological-time-watch/raw/refs/heads/main/recordings/Video Dec 01 2025, 9 20 17 AM.mp4","Northeast section of Prospect Park running loop");
recordings[12] = new Recording("https://github.com/nancxwu/geological-time-watch/raw/refs/heads/main/recordings/Video Dec 01 2025, 9 20 25 AM.mp4","Riverbend Park, facing the Potomac River");
recordings[13] = new Recording("https://github.com/nancxwu/geological-time-watch/raw/refs/heads/main/recordings/Video Dec 02 2025, 23 16 50.mp4","上海杨浦区18号线抚顺路地铁站");
recordings[14] = new Recording("https://github.com/nancxwu/geological-time-watch/raw/refs/heads/main/recordings/Video Dec 02 2025, 23 14 57.mp4","天津市南开区保泽道152号");
recordings[15] = new Recording("https://github.com/nancxwu/geological-time-watch/raw/refs/heads/main/recordings/Video Dec 02 2025, 23 25 06.mp4","西安市");
recordings[16] = new Recording("https://github.com/nancxwu/geological-time-watch/raw/refs/heads/main/recordings/Video Dec 03 2025, 01 11 27.mp4","北京市");
recordings[17] = new Recording("https://github.com/nancxwu/geological-time-watch/raw/refs/heads/main/recordings/Video Dec 03 2025, 07 57 01.mp4","天津市和平区解放北路京津国际中心租赁中心");
recordings[18] = new Recording("https://github.com/nancxwu/geological-time-watch/raw/refs/heads/main/recordings/Video Dec 03 2025, 09 40 04.mp4","北九州市立大学 ひびきのキャンパス 国際環境工学部 企画管理課 管理係 〒808-0135 福岡県北九州市若松区ひびきの1-1");

function shuffle(array) {
  let currentIndex = array.length;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {

    // Pick a remaining element...
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }
}
shuffle(recordings);

function playVideos(){
    for (let i=0;i<4;i++) {
        document.getElementById('vid'+i).setAttribute('src', recordings[i].fname);
        document.getElementById('label'+i).innerHTML= recordings[i].place;
    }
}
playVideos();

var startTime = Math.floor(Date.now() / 1000); //Get the starting time (right now) in seconds
localStorage.setItem("startTime", startTime); 
startTimeCounter();

function startTimeCounter() {
    var now = Math.floor(Date.now() / 1000); // get the time now
    var diff = now - startTime; // diff in seconds between now and start
    var m = Math.floor(diff / 60); // get minutes value (quotient of diff)
    var s = Math.floor(diff % 60); // get seconds value (remainder of diff)
    s = checkTime(s); // add a leading zero if it's single digit
    document.getElementById("minutes").innerHTML = m; 
    document.getElementById("seconds").innerHTML = s; // update the element where the timer will appear
    var t = setTimeout(startTimeCounter, 500); // set a timeout to update the timer
}

function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    }// add zero in front of numbers < 10
    return i;
}

setInterval(function(){
    document.getElementById("minutes").innerHTML = "0";
    document.getElementById("seconds").innerHTML = "00";
    shuffle(recordings);
    playVideos();
    startTime = Math.floor(Date.now() / 1000);
    startTimeCounter();
},300000);


