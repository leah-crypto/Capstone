const resourcesBtn = document.getElementById("resourcesBtn");
const baseUrl = "http://localhost:4000/api/resources";
const cardListContainer = document.querySelector("#card-list-container");

let resourcesArray;

const hide = elem => {
  let elem = resourcesArray;
  elem.classList.add('hidden')
}

resourcesBtn.addEventListener("click", () => {
  resourcesArray.classList.remove("hidden");
 
});


const getResources = () => {
    axios.get(`${baseUrl}/api/resources`).then((res) => {
      resourcesArray = res.data;
      // console.log(res.data);
      startScreen.classList.add("hidden");
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
  <p>Link: ${resourcescard.link}</p>`
  cardListContainer.appendChild(card);
};

resourcesBtn.addEvenListener("click", getResources);