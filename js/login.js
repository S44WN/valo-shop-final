
let form = document.getElementById('login');
let username, password;

form.addEventListener('submit', (e) => {
  e.preventDefault();

  document.querySelector('.preloader').style.visibility = 'visible';
  document.querySelector('.preloader').style.opacity = 1;

  username = document.getElementById('riotid').value;
  password = document.getElementById('pswrd').value;
  localStorage.setItem('username', username);

  async function getWeapons(url, data) {
    let response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(data)
    })

    let loginData = await response;
    return loginData
  }

  let url = "https://fig6jjc1bj.execute-api.ap-south-1.amazonaws.com/dev/login";
  let data = {
    "RitoID": username,
    "RitoPass": password,
    }

  getWeapons(url, data)
  .then((wep) => {
    if (wep.status === 200){
      window.open("/weapons.html", target="_self");
      document.querySelector('.preloader').style.visibility = 'hidden';
      document.querySelector('.preloader').style.opacity = 0;
    }else{
      alert("Something Went Wrong :( , Plz Try Again ;)");
      document.querySelector('.preloader').style.visibility = 'hidden';
      document.querySelector('.preloader').style.opacity = 0;
    }
    });
})
