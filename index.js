// user can add to budget
// user can update budget
// user can input items (Quantity, price)
// user can save items
// user can delete items
// user can "check" item if item is bought

// save item
// updateDisplay
// remove item

let inputItems = document.querySelector("#inputItem");
let priceInput = document.querySelector("#priceInput");

let itemContainer = [];
let addBudget = document.querySelector("#add-btn");
let updateBudget = document.querySelector("#update-btn");
let itemsDiv = document.querySelector("#itemsDiv");

let saveBtn = document.querySelector("#save-btn");
let deleteBtn = document.querySelector("#delete-btn");
// let checkItem = document.querySelector("#check")
let exceededAmount = document.querySelector("#exceededAmount");
let remainingBudget = document.querySelector("#remainingBudget");

const saveItem = () => {
  if (inputItems.value === "") return alert("value is empty");

  let itemObj = {
    id: 1,
    item: inputItems.value,
    price: priceInput.value,
    isBought: false,
  };
  itemContainer.push(itemObj);

  inputItems.value = "";
  priceInput.value = "";

  console.log(itemContainer);
};

const deleteItem = (itemId) => {
//  let newArray = itemContainer.splice(itemId, 1)
// //   let newArray = itemContainer.filter((itemList) => itemList.Id !== itemId);
//   updateDisplay(newArray);

  console.log("good")
};

const updateDisplay = (newArray) => {
  itemsDiv.textContent = "";

  newArray.forEach((itemList, itemId) => {
    itemsDiv.innerHTML += `<div id=${itemId}>
          <div>${itemList.item}</div>
          <br />
          <input type="checkbox" id="check" /> <br />
          <button class="delete-btn">Delete</button>
        </div>`;
  });
};

saveBtn.addEventListener("click", saveItem);
inputItems.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    saveItem();
  }
});
deleteBtn.addEventListener("click", () => {
    deleteItem(1)
})
