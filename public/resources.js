const resourcesBtn = document.getElementById("resourcesBtn");
const baseUrl = "http://localhost:4000";
const cardListContainer = document.querySelector("#card-list-container");

let resourcesArray;

// const hide = elem => {
//   let elem = resourcesArray;
//   elem.classList.add('hidden')
// }

// resourcesBtn.addEventListener("click", () => {
//   resourcesArray.classList.remove("hidden");
 
// });


const getResources = () => {
    axios.get(`${baseUrl}/api/resources`).then((res) => {
      resourcesArray = res.data;
      console.log(res.data);
      displayResources(resourcesArray);
    });
  };

  const displayResources = (resourcesArray) => {
    cardListContainer.innerHTML = ""; //needs to take in a link
    for (let i = 0; i < resourcesArray.length; i++) {
        createdCard(resourcesArray[i]);
      }
    
}

const createdCard = (resourcescard) => {
  const card = document.createElement("div");
  card.classList.add("create-box");
  card.innerHTML = `<h4>Title: ${resourcescard.name}</h4>
  <a href = "${resourcescard.link}">Press for video</a>`
  cardListContainer.appendChild(card);
};

resourcesBtn.addEventListener("click", getResources);