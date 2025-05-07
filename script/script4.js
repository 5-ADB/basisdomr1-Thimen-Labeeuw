const groenten = [
  {
    id: 0,
    naam: "prei",
    prijs: 2.1,
  },
  {
    id: 1,
    naam: "brocoli",
    prijs: 1.5,
  },
  {
    id: 2,
    naam: "tomaat",
    prijs: 3.4,
  },
  {
    id: 3,
    naam: "erwten",
    prijs: 0.7,
  },
];

const MaxPrijsInput = document.querySelector("#maxPrijs");
const EnterBtn = document.createElement("button");
const Dropdown = document.createElement("select");

EnterBtn.innerHTML = "Enter";
document.querySelector("#lijst").appendChild(EnterBtn);
Dropdown.addEventListener("click", () => {
  ShowGroente();
});
document.querySelector("#groenten").appendChild(Dropdown);
EnterBtn.addEventListener("click", () => {
  ShowDropDown();
});

function ShowDropDown() {
  Dropdown.innerHTML = "";
  maxPrijs = MaxPrijsInput.value;
  console.log(maxPrijs);
  MaxPrijsGroenten = groenten.filter((groente) => {
    return groente.prijs <= maxPrijs;
  });
  MaxPrijsGroenten.forEach((groente) => {
    const option = document.createElement("option");
    option.value = groente.id;
    option.innerHTML = groente.naam;
    Dropdown.appendChild(option);
  });
}

function ShowGroente() {
  document.querySelector("#gekozenGroenteEnPrijs").innerHTML = "";
  const Pgroente = document.createElement("p");
  Pgroente.innerHTML = `${groenten[Dropdown.value].naam}: ${
    groenten[Dropdown.value].prijs
  }€`;
  document
    .querySelector("#gekozenGroenteEnPrijs")
    .appendChild(Pgroente);
}
