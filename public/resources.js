const resourcesBtn = document.getElementById("resourcesBtn");
const baseUrl = "http://localhost:4000";

let resourcesArray;

resourcesBtn.addEventListener("click", () => {
  resourcesArray.classList.add("hide");
  resourcesArray.classList.remove("hide");
 
});

const getResources = () => {
    axios.get(`${baseUrl}/api/resources`).then((res) => {
      resourcesArray = res.data;
      console.log(res.data);
    });
  };



resourcesBtn.addEvenListener("click", getResources);