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

//oef3
const GroentenDiv = document.querySelector("#lijst");

const kostPrijsP = document.createElement("p");
document.querySelector("#kostprijs").appendChild(kostPrijsP);
kostPrijsP.innerHTML = "totaal:";

groenten.forEach((groente) => {
  let kostprijs = 0.0;
  const groentItem = document.createElement("p");
  const checkBox = document.createElement("input");
  checkBox.type = "checkbox";
  checkBox.value = groente.prijs;
  checkBox.addEventListener("change", () => {
    if (checkBox.checked) {
      kostprijs += checkBox.value;
      console.log(`${groente.prijs} totaal: ${kostprijs}$`);
      kostPrijsP.innerHTML = `totaal: ${kostprijs}$`;
    } else {
      kostprijs -= checkBox.value;
      console.log(`${groente.prijs} totaal: ${kostprijs}$`);
      kostPrijsP.innerHTML = `totaal: ${kostprijs}$`;
    }
  });
  groentItem.innerHTML = `${groente.naam}, ${groente.prijs}0$`;
  groentItem.appendChild(checkBox);
  GroentenDiv.appendChild(groentItem);
});
