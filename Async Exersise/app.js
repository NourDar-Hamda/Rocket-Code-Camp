document.addEventListener('DOMContentLoaded', fetchData);

function fetchData() {
  fetch("https://randomuser.me/api/")
    .then((response) => response.json())
    .then((json) => {
      addToTableAndUpdateLocalStorage(json);
    })
    .catch((error) => {
      console.error(error);
    });
}

function addToTableAndUpdateLocalStorage(json) {
    let tableData = localStorage.getItem('tableData');
    tableData = tableData ? JSON.parse(tableData) : { results: [] };
  
    if (json.results.length > 0) {
      // Accessing name properties
      const name = json.results[0].name;
    //   console.log(name);
      const fullName = `${name.first} ${name.last}`;
      console.log(fullName);
      // Add new data to tableData
      tableData.results.push({ 
        gender: json.results[0].gender,
        name: fullName,
        email: json.results[0].email, 
        city: json.results[0].location.city,
        country: json.results[0].location.country,
        postcode: json.results[0].location.postcode,
        phone: json.results[0].phone
      });
    } else {
      console.error("No results found in JSON.");
    }
  
    // Update local storage
    localStorage.setItem('tableData', JSON.stringify(tableData));
  
    buildTable(tableData);
}
  
function buildTable(json) {
  const tableContainer = document.getElementById("table-container");
  tableContainer.innerHTML = ''; // Clear previous table
  
  const table = document.createElement("table");
  const thead = document.createElement("thead");
  const tbody = document.createElement("tbody");
  const headTr = document.createElement("tr");
  const genderTh = document.createElement("th");
  genderTh.textContent = "Gender";
  const emailTh = document.createElement("th");
  emailTh.textContent = "Email";
  const cityTh = document.createElement("th");
  cityTh.textContent = "City";
  const countryTh = document.createElement("th");
  countryTh.textContent = "Country";
  const postcodeTh = document.createElement("th");
  postcodeTh.textContent = "Postcode";
  const phoneTh = document.createElement("th");
  phoneTh.textContent = "Phone";
  const nameTh = document.createElement("th");
  nameTh.textContent = "Name";
  headTr.appendChild(genderTh);
  headTr.appendChild(nameTh);
  headTr.appendChild(emailTh);
  headTr.appendChild(cityTh);
  headTr.appendChild(countryTh);
  headTr.appendChild(postcodeTh);
  headTr.appendChild(phoneTh);
  thead.appendChild(headTr);
  table.appendChild(thead);

  json.results.forEach((user) => {
    const fullName = user.name;

    const bodyTr = document.createElement("tr");
    const genderTd = document.createElement("td");
    genderTd.textContent = user.gender;
    const emailTd = document.createElement("td");
    emailTd.textContent = user.email;
    const citytd = document.createElement("td");
    citytd.textContent = user.city;
    const countrytd = document.createElement("td");
    countrytd.textContent = user.country;
    const postcodetd = document.createElement("td");
    postcodetd.textContent = user.postcode;
    const phonetd = document.createElement("td");
    phonetd.textContent = user.phone;
    const nametd = document.createElement("td");
    nametd.textContent = fullName;
    bodyTr.appendChild(genderTd);
    bodyTr.appendChild(nametd);
    bodyTr.appendChild(emailTd);
    bodyTr.appendChild(citytd);    
    bodyTr.appendChild(countrytd);   
    bodyTr.appendChild(postcodetd);
    bodyTr.appendChild(phonetd);    

    tbody.appendChild(bodyTr);
  });

  table.appendChild(tbody);
  tableContainer.appendChild(table);
}
