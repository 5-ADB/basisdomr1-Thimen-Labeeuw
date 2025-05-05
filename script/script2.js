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

//oef2
const GroentenLijstDiv = document.querySelector("#lijst");
const Dropdown = document.createElement("select");
const PrijsText = document.createElement("p");

GroentenLijstDiv.appendChild(Dropdown);
GroentenLijstDiv.appendChild(PrijsText);

groenten.forEach((groente) => {
  const groentItem = document.createElement("option");
  groentItem.value = groente.prijs;
  groentItem.innerHTML = groente.naam;
  Dropdown.appendChild(groentItem);
});

Dropdown.addEventListener("change", () => {
  PrijsText.innerHTML = `prijs: ${Dropdown.value}0$`;
});
