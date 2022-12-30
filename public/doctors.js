// const cards = document.getElementsByClassName("cards")[0];
// const cards = document.getElementsByClassName("cards")[0];

const doctorsContainer = document.querySelector('#doctors-container')
const form = document.querySelector('form')

// const newCardsBtn = document.qureySelector("#new-card");
// const delCardsBtn = document.qureySelector("#del-card");

const baseURL = "/api/doctors";

const getDoctorCards = () => axios.get(baseURL).then((res) => {
    let { data: doctorsArr } = res; //array from backend data base???
    // console.log(res.data)
    displayDoctors(doctorsArr);
}).catch((err) => console.log(err));

const displayDoctors = (doctorcard) => {
    const card = document.createElement("div");
    
}



