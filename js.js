const data = [
  {
    id: 1,
    name: "Luke Skywalker",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/2/20/LukeTLJ.jpg",
    homeworld: "tatooine",
  },
  {
    id: 2,
    name: "C-3PO",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/3/3f/C-3PO_TLJ_Card_Trader_Award_Card.png",
    homeworld: "tatooine",
  },
  {
    id: 3,
    name: "R2-D2",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/e/eb/ArtooTFA2-Fathead.png",
    homeworld: "naboo",
  },
  {
    id: 4,
    name: "Darth Vader",
    pic: "https://vignette.wikia.nocookie.net/fr.starwars/images/3/32/Dark_Vador.jpg",
    homeworld: "tatooine",
  },
  {
    id: 5,
    name: "Leia Organa",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/f/fc/Leia_Organa_TLJ.png",
    homeworld: "alderaan",
  },
  {
    id: 6,
    name: "Owen Lars",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/e/eb/OwenCardTrader.png",
    homeworld: "tatooine",
  },
  {
    id: 7,
    name: "Beru Whitesun lars",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/c/cc/BeruCardTrader.png",
    homeworld: "tatooine",
  },
  {
    id: 8,
    name: "R5-D4",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/c/cb/R5-D4_Sideshow.png",
    homeworld: "tatooine",
  },
  {
    id: 9,
    name: "Biggs Darklighter",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/0/00/BiggsHS-ANH.png",
    homeworld: "tatooine",
  },
  {
    id: 10,
    name: "Obi-Wan Kenobi",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/4/4e/ObiWanHS-SWE.jpg",
    homeworld: "stewjon",
  },
  {
    id: 11,
    name: "Anakin Skywalker",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/6/6f/Anakin_Skywalker_RotS.png",
    homeworld: "tatooine",
  },
  {
    id: 12,
    name: "Wilhuff Tarkin",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/c/c1/Tarkininfobox.jpg",
    homeworld: "eriadu",
  },
  {
    id: 13,
    name: "Chewbacca",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/4/48/Chewbacca_TLJ.png",
    homeworld: "kashyyyk",
  },
  {
    id: 14,
    name: "Han Solo",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/e/e2/TFAHanSolo.png",
    homeworld: "corellia",
  },
  {
    id: 15,
    name: "Greedo",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/c/c6/Greedo.jpg",
    homeworld: "rodia",
  },
  {
    id: 16,
    name: "Jabba Desilijic Tiure",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/7/7f/Jabba_SWSB.png",
    homeworld: "tatooine",
  },
  {
    id: 18,
    name: "Wedge Antilles",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/6/60/WedgeHelmetless-ROTJHD.jpg",
    homeworld: "corellia",
  },
  {
    id: 19,
    name: "Jek Tono Porkins",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/e/eb/JekPorkins-DB.png",
    homeworld: "bestine",
  },
  {
    id: 20,
    name: "Yoda",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/d/d6/Yoda_SWSB.png",
    homeworld: "other",
  },
  {
    id: 21,
    name: "Palpatine",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/d/d8/Emperor_Sidious.png",
    homeworld: "naboo",
  },
];

const row = document.querySelector(".row");
const renderBtn = document.querySelector(".renderBtn");
document.getElementById("btnBtn").style.backgroundColor = "#006241";
function renderCharacters() {
  if (row.innerHTML == "") {
    for (let characterFirst of data) {
      row.innerHTML += `<div class="  col-12 col-lg-3 col-md-4 gy-5 me-3 charactersCard border border-2 rounded-2 border-warning text-warning bg-white">
      <img class="img-fluid" src="${characterFirst.pic}">
      
      <h4>${characterFirst.name}</h4>
      <h5>${characterFirst.homeworld || "Unknown"}</h5>
    </div>`;
      renderBtn.textContent = "Hide Characters";

      document.getElementById("btnBtn").style.backgroundColor = "#db1e24";
    }
  } else {
    row.innerHTML = "";
    renderBtn.textContent = "Show Characters";
    document.getElementById("btnBtn").style.backgroundColor = "#006241";
  }
}

let homeworldRaw = data.map((character) => character.homeworld);
console.log(homeworldRaw);
homeworldRaw = homeworldRaw.map((homeworld) =>
  homeworld !== undefined && homeworld !== null
    ? homeworld.toLowerCase()
    : "other"
);
console.log(homeworldRaw);

let homeworldsUnique = [...new Set(homeworldRaw)];
console.log(homeworldsUnique);

let homeworlds = homeworldsUnique;
console.log(homeworlds);

const inputClass = document.querySelector(".inputClass");

for (let i = 0; i < homeworlds.length; i++) {
  inputClass.innerHTML += `
  <div class="formCheck ps-4">
    <input
      class="formCheckInput"
      type="radio"
      name="homeworld"
      value="${homeworlds[i]}"
      id="homeworld-${homeworlds[i]}"
    />
    <label class="formCheckLabel text-white" for="homeworld-${homeworlds[i]}">
    ${homeworlds[i]}
    </label>
  </div>
</div>`;
}

const inputFirst = document.querySelectorAll(".formCheckInput");

inputFirst.forEach(function (inputSecond) {
  inputSecond.addEventListener("click", function () {
    selectedInput = this.value;

    const filteredHomeworld = data.filter(
      (item) => item.homeworld === selectedInput
    );

    if (row == "") {
      for (const selected of filteredHomeworld) {
        row.innerHTML += `<div class="  col-12 col-lg-3 col-md-4 gy-5 me-3 charactersCard border border-2 rounded-2 border-warning text-warning bg-white">
        <img class="img-fluid" src="${selected.pic}">
        
        <h4>${selected.name}</h4>
        <h5>${selected.homeworld}</h5>
      </div>`;
      }
    } else {
      row.innerHTML = "";
      for (const selected of filteredHomeworld) {
        row.innerHTML += `<div class="  col-12 col-lg-3 col-md-4 gy-5 me-3 charactersCard border border-2 rounded-2 border-warning text-warning bg-white">
        <img class="img-fluid" src="${selected.pic}">
        
        <h4>${selected.name}</h4>
        <h5>${selected.homeworld}</h5>
      </div>`;
      }
    }
  });
});
