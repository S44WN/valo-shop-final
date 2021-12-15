
let form = document.getElementById('login');
let username, password;

form.addEventListener('submit', (e) => {
  e.preventDefault();

  document.querySelector('.preloader').style.display = 'flex';

  username = document.getElementById('riotid').value;
  password = document.getElementById('pswrd').value;
  localStorage.setItem('username', username);
  localStorage.setItem('password', password);


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

  let url = "https://api.checkvalorant.com/login/login";
  let data = {
    "RitoID": username,
    "RitoPass": password,
    }

  
  getWeapons(url, data)
  .then((wep) => {
        if (wep.status === 200){
          window.open("/weapons.html", target="_self");
          document.querySelector('.preloader').style.display = 'none';
        }else{
          alert("Something Went Wrong :( , Plz Try Again ;)");
          document.querySelector('.preloader').style.display = 'none';
        }
        });
  //     if (wep.status === 200){
  //       window.open("/weapons.html", target="_self");
  //       document.querySelector('.preloader').style.display = 'none';
  //     }
  
  // if (username === localStorage.getItem('username') && password === localStorage.getItem('password')){
  //   window.open("/weapons.html", target="_self");
  // }else{
  //   alert("U might have changed ur password, Plz login again :)")
  //   getWeapons(url, data)
  //   .then((wep) => {
  //     if (wep.status === 200){
  //       window.open("/weapons.html", target="_self");
  //       document.querySelector('.preloader').style.display = 'none';
  //     }else{
  //       alert("Something Went Wrong :( , Plz Try Again ;)");
  //       document.querySelector('.preloader').style.display = 'none';
  //     }
  //     });
  // }

})
