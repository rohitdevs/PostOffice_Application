// Retrieve the JSON string from localStorage
const jsonString = localStorage.getItem('userdata');

// Parse the JSON string back into a JavaScript object
const retrievedObject = JSON.parse(jsonString);

const latitude=retrievedObject.latitude;
const longitude=retrievedObject.longitude;


console.log(retrievedObject);


document.getElementById("lat").innerHTML=retrievedObject.latitude;
document.getElementById("long").innerHTML=retrievedObject.longitude;
document.getElementById("city").innerHTML=retrievedObject.city;
document.getElementById("org").innerHTML=retrievedObject.org;
document.getElementById("region").innerHTML=retrievedObject.region;
document.getElementById("Ip-Address").innerHTML=retrievedObject.ip;
document.getElementById("timezone").innerHTML=retrievedObject.timezone;
document.getElementById("pincode").innerHTML=retrievedObject.postal;

let time=retrievedObject.timezone;
let date1 = new Date().toLocaleString("en-US", { timeZone: time });

document.getElementById("date").innerHTML=date1;


document.getElementById("mapiframe").src=`https://maps.google.com/maps?q=${latitude}, ${longitude}&z=15&output=embed`;




const postofficeapi = `https://api.postalpincode.in/pincode/${retrievedObject.postal}`;

fetch(postofficeapi)
  .then(response => response.json())
  .then(data => {
    const container=document.getElementById("innertop4id");

    // console.log(data[0].PostOffice);
    let postoffices=data[0].PostOffice;
    postoffices.forEach(ele => {
      console.log(ele);
      const card=document.createElement("div");
      card.classList.add("card");
      card.innerHTML=`
      <p>Name:${ele.Name}</p>
      <p>Branch Type:${ele.BranchType}</p>
      <p>Delivery Status:${ele.DeliveryStatus}</p>
      <p>District:${ele.District}</p>
      <p>Division:${ele.Division}</p>
      `
      container.appendChild(card);
    });
  
  })
  .catch(error => {
    console.error('Error fetching postoffice:', error);
  });





     