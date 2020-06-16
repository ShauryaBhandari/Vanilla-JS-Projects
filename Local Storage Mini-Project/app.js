const addItems = document.querySelector(".add-items");
const itemsList = document.querySelector(".plates");
const items = JSON.parse(localStorage.getItem("items")) || [];

function addItem(e) {
  e.preventDefault();
  const text = this.querySelector("[name=item").value;
  const item = {
    text,
    done: false,
  };
  items.push(item);
  populateList(items, itemsList);
  localStorage.setItem("items", JSON.stringify(items));
  this.reset();
}

function populateList(plates = [], platesList) {
  platesList.innerHTML = plates
    .map((plate, i) => {
      return `
    <li>
    <input type="checkbox" data-index=${i} id="item${i}" ${
        plate.done ? "checked" : ""
      }/>
    <label for="item${i}"> ${plate.text} </label>
    </li>
    `;
    })
    .join(""); // map returns array and join will join it to make one huge string
}

function toggleDone(e) {
  if (!e.target.matches("input")) {
    return;
  } else {
    const el = e.target;
    const index = el.dataset.index;
    items[index].done = !items[index].done;
    localStorage.setItem("ITEMS", JSON.stringify(items));
    populateList(items, itemsList);
  }
}

function clearAll(e) {
  e.preventDefault();
  // console.log(itemA);

  while (itemsList.firstChild) {
    itemsList.removeChild(itemsList.firstChild);
  }
  localStorage.clear();
}

itemsList.addEventListener("click", toggleDone);
addItems.addEventListener("submit", addItem);

populateList(items, itemsList);

const btn = document.getElementById("clr");
btn.addEventListener("click", clearAll);
