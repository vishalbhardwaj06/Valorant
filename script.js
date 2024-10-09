//agents
function Agent() {
  var URL = "https://valorant-api.com/v1/agents";
  fetch(URL)
    .then((response) => response.json())
    .then((data) => {
      let allAgents = data.data;
      let agents = data.data.slice(0, 8);
      console.log(allAgents);
      agents.map(function (agent) {
        agentContainer = document.getElementById("agent");
        let agentDiv = document.createElement("div");
        agentDiv.innerHTML = `
                <img class="tx-displayIcon" src="${agent.fullPortraitV2}" alt="${agent.displayName}" >
                <h2 class="tx-displayName">${agent.displayName}</h2>
            `;
        agentContainer.appendChild(agentDiv);
      });
    })
    .catch((err) => console.error(err));
}

// singlePageAgent
function SinglePageAgent() {
  var URL = "https://valorant-api.com/v1/agents/";
  fetch(URL)
    .then((response) => response.json())
    .then((data) => {
      let allAgents = data.data;
      console.log(allAgents);
      allAgents
        .filter((agent) => agent.isPlayableCharacter)
        .forEach(function (agent) {
          let agentContainer = document.getElementById("agent");
          let agentDiv = document.createElement("div");
          agentDiv.innerHTML = `
            <a href="agentsInner.html?${agent.uuid}">
                <img class="tx-displayIcon" src="${agent.fullPortrait}" alt="${agent.displayName}">
                <h2 class="tx-displayName agent-page">${agent.displayName}</h2>
            </a>
            `;
          agentContainer.appendChild(agentDiv);
        });
    })
    .catch((err) => console.error(err));
}

// singleAgent
function fectAgentData(agentId1) {
  var URL = `https://valorant-api.com/v1/agents/${agentId1}`;
  fetch(URL)
    .then((response) => response.json())
    .then((data) => {
      let agentInner = data.data;
      console.log(agentInner);
      let agentInnerContainer = (document.getElementById(
        "agentInnerTitle"
      ).innerHTML = agentInner.displayName);
      let agentInnerContainerDescription = (document.getElementById(
        "agentInnerDescription"
      ).innerHTML = agentInner.description);
      let agentInnerImage = (document.getElementById("agentInnerImage").src =
        agentInner.fullPortrait);
    })
    .catch((err) => console.error(err));
}

// maps
function Maps() {
  var URL = "https://valorant-api.com/v1/maps";
  fetch(URL)
    .then((response) => response.json())
    .then((data) => {
      let allMaps = data.data;
      let maps = data.data.slice(0, 7);
      console.log(allMaps);
      maps.map(function (map) {
        mapContainer = document.getElementById("maps");
        let mapDiv = document.createElement("div");
        mapDiv.innerHTML = `
            <a href="#">
                <img class="tx-displayMapIcon" src="${map.listViewIconTall}" alt="${map.displayName}" >
                <h2 class="tx-displayMapName">${map.displayName}</h2>
            </a>
            `;
        mapContainer.appendChild(mapDiv);
      });
    })
    .catch((err) => console.error(err));
}

// seasons
function Seasons() {
  var URL = "https://valorant-api.com/v1/seasons";
  fetch(URL)
    .then((response) => response.json())
    .then((data) => {
      let allseasons = data.data.slice(0, 32);
      console.log(allseasons);
      allseasons.map(function (seasons) {
        seasonsContainer = document.getElementById("seasons");
        let seasonsDiv = document.createElement("div");
        seasonsDiv.innerHTML = `
                <h2 class="tx-displayseasonsName cursor-pointer">${seasons.displayName}</h2>
            `;
        seasonsContainer.appendChild(seasonsDiv);
      });
    })
    .catch((err) => console.error(err));
}

// weapons
function Weapons() {
  var URL = "https://valorant-api.com/v1/weapons";
  fetch(URL)
    .then((response) => response.json())
    .then((data) => {
      let allWeapons = data.data;
      console.log(allWeapons);
      allWeapons.map(function (weapons) {
        weaponsContainer = document.getElementById("/weapons");
        let weaponsDiv = document.createElement("div");
        weaponsDiv.innerHTML = `
            <a href="/weaponsInner.html?${weapons.displayName}">
                <img class="tx-displayMapIcon" src="${weapons.displayIcon}" alt="${weapons.displayName}" >
                <h2 class="tx-displayMapName weapons-page">${weapons.displayName}</h2>
            </a>
            `;
        weaponsContainer.appendChild(weaponsDiv);
      });
    })
    .catch((err) => console.error(err));
}

// singleAgent
function WeaponsData(WeaponsDn) {
  var URL = `https://valorant-api.com/v1/weapons/skinchromas`;
  let arWeaponsName = WeaponsDn.toString();
  let arWeaponsName1 = arWeaponsName.replace("?", "");
  console.log(arWeaponsName1);
  fetch(URL)
    .then((response) => response.json())
    .then((data) => {
      let WeaponsInner = data.data;
      console.log(WeaponsInner);
      let filteredWeapons = WeaponsInner.filter((WeaponsInner) =>
        WeaponsInner.displayName.includes(arWeaponsName1)
      );
      console.log(filteredWeapons);
      filteredWeapons.map(function (weapons) {
        weaponsContainerInner = document.getElementById("weaponsInner");
        let weaponsInnerContainer = (document.getElementById(
          "WeaponsInnerTitle"
        ).innerHTML = arWeaponsName1);
        let weaponsDiv = document.createElement("div");
        weaponsDiv.innerHTML = `
                <img class="tx-displayMapIcon" src="${weapons.fullRender}" alt="${weapons.displayName}" >
                <h2 class="tx-displayMapName weapons-page">${weapons.displayName}</h2>
            `;
        weaponsContainerInner.appendChild(weaponsDiv);
      });
    })
    .catch((err) => console.error(err));
}

//Search Filter
function SearchFilter() {
  let search = document.getElementById("search-main");
  let searchValue = search.value;
  console.log("hello" + searchValue);

  var URL = "https://valorant-api.com/v1/weapons/skinchromas";
  fetch(URL)
    .then((response) => response.json())
    .then((data) => {
      let allWeapons = data.data;
      allWeapons.map(function (weapons) {
        let weaponName = weapons.displayName;
        let Wname = searchValue.toString();
        if (weaponName == Wname) {
          let filteredWeapons = allWeapons.filter((weapons) =>
            weapons.displayName.includes(Wname)
          );
          console.log(filteredWeapons);
          filteredWeapons.map(function (weapons) {
            console.log(weapons.displayName);
            weaponsContainerInner = document.getElementById("search-output");
            let weaponsDiv = document.createElement("div");
            weaponsDiv.innerHTML = `<h1 class="search-heading text-center" id="searchName">${weapons.displayName}</h1>`;
            weaponsContainerInner.appendChild(weaponsDiv);
          });
        }
      });
    });
}
