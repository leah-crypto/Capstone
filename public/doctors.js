const addDrBtn = document.querySelector("#addCard");
const inputCardContain = document.querySelector()


const baseURL = "/api/doctors";

let doctorsArr;

const getDoctorCards = () => axios.get(baseURL).then((res) => {
    let { data: doctorsArr } = res; //array from backend data base???
    // console.log(res.data)
    displayDoctors(doctorsArr);
}).catch((err) => console.log(err));

const displayDoctors = (doctorsArr) => {
    inputCardContain.textContent = "";
    for (let i = 0; i < doctorsArr.length; i++) {
        createdCard(doctorsArr[i]);
      }
    
}

const createdCard = (doctorcard) => {
    const card = document.createElement("div");
    card.classList.add("doctors-card");
  
    card.innerHTML = `<p class="flash-topic">${flashcard.topic}</p>
            <p class="flash-answer">${flashcard.answer}</p>
            <button   class="delete" onclick="deleteFlashcard(${flashcard.id})">Delete</button>
            `;
    cardListContainer.appendChild(card);
  };

const displayCard = (doctorsArr) => {
    cardListContainer.textContent = "";
    for (let i = 0; i < doctorsArr.length; i++) {
      createdCard(doctorsArr[i]);
    }
  };

const showInputCardContainer = () => {
    inputCardContain.classList.remove("hide");
  };

const postDoctorsCards = (body) => {
    axios.post(baseUrl, body)
    .then((res) => {
        getDoctorCards();
    })
    .catch((err) => console.log(err))
}


addDrBtn.addEventListener("click", showCardContainer)

getDoctorCards();



