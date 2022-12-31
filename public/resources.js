const resourcesBtn = document.getElementById("resourcesBtn");
const baseUrl = "http://localhost:4000";

let resourcesArray;




const getResources = () => {
    axios.get(`${baseUrl}/api/resources`).then((res) => {
      resourcesArray = res.data;
      console.log(res.data);
    });
  };



resourcesBtn.addWEvenListener("click", getResources);