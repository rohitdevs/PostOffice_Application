console.log("hello");

const ip=document.getElementById("ip");


const ipifyEndpoint = 'https://api.ipify.org?format=json';

let ipAddress;

fetch(ipifyEndpoint)
  .then(response => response.json())
  .then(data => {
    ipAddress = data.ip;
    console.log('User IP address:', ipAddress);
    ip.innerHTML=ipAddress;
  })
  .catch(error => {
    console.error('Error fetching IP address:', error);
  });



  document.getElementById("getstarted").addEventListener("click", postoffice);

   function postoffice(){
    const secondep= `https://ipapi.co/${ipAddress}/json/`
    fetch(secondep)
  .then(response => response.json())
  .then(data => {
    console.log(data);
    const user=JSON.stringify(data);
    localStorage.setItem('userdata',user);
    window.location.href="index2.html"
   
  })
  .catch(error => {
    console.error('Error fetching sec address:', error);
  });

   }