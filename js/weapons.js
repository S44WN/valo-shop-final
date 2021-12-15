
let _ritoUsername_ = localStorage.getItem('username')

async function getWeapons(url){
  var response = await fetch(url)
  var weapons = await response.json();
  return weapons
}

let url = `https://api.checkvalorant.com/store/store/${_ritoUsername_}`

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
        document.querySelector('.finisher_vid').style.display = 'none';
      } else {
        document.getElementById('fvid').src = vidUrl;
      }
    });
  });
})


function finisherPlay() {
  document.querySelector('.finisher_vid').style.display = 'flex';
}

function finisherClose() {
  let x = document.querySelector('.finisher_vid')
  let finisherVideo = document.getElementById("fvid");
  x.onclick = function(div) {
    if (div.target.id !== 'fvid'){
      x.style.display = 'none';
      finisherVideo.pause();
    }
  };

}

