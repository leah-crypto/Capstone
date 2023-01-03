const addDrBtn = document.querySelector("#addCard");
// const inputCardContain = document.querySelector(".create-box")
// const layout = document.querySelector("create-box");
const cardListContainer = document.querySelector("#card-list-container");
const baseURL = "http://localhost:4000/api/doctors";

let doctorsArr;

const getDoctorCards = () => axios.get(baseURL).then((res) => {
    let { data: doctorsArr } = res; 
    // console.log(res.data)
    displayDoctors(doctorsArr);
}).catch((err) => console.log(err));

const displayDoctors = (doctorsArr) => {
    // inputCardContain.textContent = "";
    cardListContainer.innerHTML = "";
    for (let i = 0; i < doctorsArr.length; i++) {
        createdCard(doctorsArr[i]);
      }
    
}

const createdCard = (doctorcard) => {
    const card = document.createElement("div");
    card.classList.add("create-box");
    card.innerHTML = `<h4>Doctor Name: ${doctorcard.name}</h4>`
    cardListContainer.appendChild(card);
  };


// const showInputCardContainer = () => {
//     inputCardContain.classList.remove("hide");
//   };

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
      // inputCardContainer.classList.add("hide");
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


addDrBtn.addEventListener("click", submitEventHadler);

getDoctorCards();








