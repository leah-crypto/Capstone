const resourcesBtn = document.getElementById("resourcesBtn");
const baseUrl = "http://localhost:4000";

let resourcesArray;

resourcesBtn.addEventListener("click", () => {
  startScreen.classList.add("hide");
  displayContainer.classList.remove("hide");
  initial();
});

const getResources = () => {
    axios.get(`${baseUrl}/api/resources`).then((res) => {
      resourcesArray = res.data;
      console.log(res.data);
    });
  };



resourcesBtn.addEvenListener("click", getResources);