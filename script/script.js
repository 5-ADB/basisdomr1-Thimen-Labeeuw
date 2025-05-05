const groenten = [
  {
    id: 1,
    naam: "prei",
    prijs: 2.1,
  },
  {
    id: 1,
    naam: "brocoli",
    prijs: 1.5,
  },
  {
    id: 1,
    naam: "tomaat",
    prijs: 3.4,
  },
  {
    id: 1,
    naam: "erwten",
    prijs: 0.7,
  },
];

//oef1
const groentenLijstDiv = document.querySelector("#lijst");

groenten.forEach((groente) => {
  const groentItem = document.createElement("p");
  groentItem.innerHTML = groente.naam;
  groentenLijstDiv.appendChild(groentItem);
});

//oef2
