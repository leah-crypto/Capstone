const addDrBtn = document.querySelector("#addCard");
// const delDrBtn = document.querySelector("#delCard");
const cardListContainer = document.querySelector("#card-list-container");
const baseURL = "http://localhost:4000/api/doctors";

let doctorsArr;

const getDoctorCards = () => axios.get(baseURL).then((res) => {
    let { data: doctorsArr } = res; 
    
    displayDoctors(doctorsArr);
}).catch((err) => console.log(err));

const displayDoctors = (doctorsArr) => {
    
    cardListContainer.innerHTML = "";
    for (let i = 0; i < doctorsArr.length; i++) {
        createdCard(doctorsArr[i]);
      }
    
}

const createdCard = (doctorcard) => {
    const card = document.createElement("div");
    card.classList.add("create-box");
    card.innerHTML = `<h4>Doctor Name: ${doctorcard.name}</h4>
    <p>Phone Number: ${doctorcard.phone}</p>
    <p>Date: ${doctorcard.date}</p>`
    cardListContainer.appendChild(card);
  };


  const submitEventHadler = (event) => {
    event.preventDefault();
  
    let name = document.querySelector("#name");
    let phone = document.querySelector("#phone");
    let date = document.querySelector("#date");
    if (name.value === "" || phone.value === "" || date.value === "") {
      alert("Doctor info cant be left out");
    } else {
      let cardObj = {
        name: name.value,
        phone: phone.value,
        date: date.value
      };
     
      postDoctorsCards(cardObj);
  
      name.value = "";
      phone.value = "";
      date.value = "";
    }
  };

const postDoctorsCards = (body) => {
    axios.post(baseURL, body)
    .then((res) => {
        
        getDoctorCards();

    })
    .catch((err) => console.log(err))
}

// const deleteDoctorscard = (id) =>
//   axios
//     .delete(`${baseURL}/${id}`) //think this may need to be drarray
//     .then((res) => {
//       getDoctorCards(doctorsArr);
//     })
//     .catch((err) => console.log(err));

addDrBtn.addEventListener("click", submitEventHadler);
// delDrBtn.addEventListener("click", deleteDoctorscard);
getDoctorCards();








