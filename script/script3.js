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
let kostprijs = 0;

groenten.forEach((groente) => {
  const groentItem = document.createElement("p");
  const checkBox = document.createElement("input");
  checkBox.type = "checkbox";
  checkBox.value = groente.prijs;
  checkBox.addEventListener("change", () => {
    groenten.forEach((groenteItem) => {
      if (`${groenteItem.prijs}` == checkBox.value) {
        if (checkBox.checked) {
          kostprijs += groenteItem.prijs;
          console.log(kostprijs);
          kostprijs = parseFloat(kostprijs.toFixed(2));
        } else {
          console.log(kostprijs);
          kostprijs -= groenteItem.prijs;
          kostprijs = parseFloat(kostprijs.toFixed(2));
        }
      }
    });
    kostPrijsP.innerHTML = `totaal: €${kostprijs}`;
  });
  groentItem.innerHTML = `${groente.naam}, €${groente.prijs}`;
  groentItem.appendChild(checkBox);
  GroentenDiv.appendChild(groentItem);
});
