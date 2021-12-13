
let _ritoUsername_ = localStorage.getItem('username')

async function getWeapons(uname) {
  var response = await fetch(url)
  var weapons = await response.json();
  return weapons
}

let url = `https://fig6jjc1bj.execute-api.ap-south-1.amazonaws.com/dev/store/${_ritoUsername_}`

getWeapons(url)
.then(weapons => {

  document.getElementById('uname').innerText = localStorage.getItem('username')

  document.getElementById('weapon1').src = weapons['weaponskins'][1].image ;
  document.getElementById('weapon2').src = weapons['weaponskins'][2].image ;
  document.getElementById('weapon3').src = weapons['weaponskins'][3].image ;
  document.getElementById('weapon4').src = weapons['weaponskins'][4].image ;

  document.getElementById('name1').innerText = weapons['weaponskins'][1].name ;
  document.getElementById('name2').innerText = weapons['weaponskins'][2].name ;
  document.getElementById('name3').innerText = weapons['weaponskins'][3].name ;
  document.getElementById('name4').innerText = weapons['weaponskins'][4].name ;

  document.querySelectorAll('.finisher').forEach(function(vidbutton){
    vidbutton.addEventListener('click', function() {
      let vidUrl = weapons['weaponskins'][parseInt(this.id[3])].video;
      if (vidUrl === null){
        alert("Fininsher Not Available");
        finisherClose();
      } else {
        document.getElementById('fvid').src = vidUrl;
      }
    });
  });
})

function finisherPlay() {
  let finisherVideo = document.getElementById("fvid");
  document.querySelector('.finisher_vid').style.visibility = 'visible';
  document.querySelector('.finisher_vid').style.opacity = 1;
  finisherVideo.play();
}

function finisherClose() {
  let finisherVideo = document.getElementById("fvid");
  document.querySelector('.finisher_vid').style.visibility = 'hidden';
  document.querySelector('.finisher_vid').style.opacity = 0;
  finisherVideo.pause();
}

window.document.onkeydown = function(e) {
  if (!e) {
    e = event;
  }
  if (e.keyCode == 27) {
    finisherClose();
  }
}

