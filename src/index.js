let inputItems = document.querySelector("#budget-input-field");
let priceInput = document.querySelector("#budget-Amount-field");

let itemContainer = JSON.parse(localStorage.getItem("itemContainer")) || [];
let addBudget = document.querySelector("#add-btn");
let updateBudget = document.querySelector("#update-btn");
let itemsDiv = document.querySelector("#itemsDiv");

// let saveBtn = document.getElementById("save-btn");

let deleteBtn = document.querySelector("#delete-btn");
// let checkItem = document.querySelector("#check")
let exceededAmount = document.querySelector("#exceededAmount");
let remainingBudget = document.querySelector("#remainingBudget");
itemsDiv.textContent = "";

// displaying budgeted items inside the item containers
JSON.parse(localStorage.getItem("itemContainer")).forEach((itemList, itemId) => {
itemsDiv.innerHTML += ` <li
                    id=${itemList.id}
                    key="{index}"
                    class="item flex justify-between bg-white px-5 border border-[#c0c0c0]"
                  >
                    <div class="flex gap-2">
                      <i class="self-center fa-regular fa-circle-dot"></i>
                      <img
                        class="w-[50px] h-[50px]"
                        src="https://img.freepik.com/free-photo/pair-sock_1203-2448.jpg?ga=GA1.1.945534508.1726865207&semt=ais_hybrid "
                        alt=""
                      />
                      <span class="item-name self-center">${itemList.item}</span>
                    </div>
                    <i onclick="deleteItem(this)" class="delete-btn self-center fa-solid fa-delete-left"></i>
                  </li>`;
});
 

// adding items to itemContaniner=[] which is an array
const saveItem = () => {
  if (inputItems.value === "" || priceInput.value === "")
    return alert("please input an item name and add price");

  let itemObj = {
    id: crypto.randomUUID(),
    item: inputItems.value,
    price: priceInput.value,
    isBought: false,
  };

  itemContainer.push(itemObj);
  localStorage.setItem("itemContainer",JSON.stringify(itemContainer))
  inputItems.value = "";
  priceInput.value = "";

  updateDisplay(itemContainer);
};

// updating the item div when an item is deleted
const updateDisplay = () => {
  itemsDiv.textContent = "";

  JSON.parse(localStorage.getItem("itemContainer")).forEach((itemList,) => {
    itemsDiv.innerHTML += ` <li
                      id=${itemList.id}
                      key="{index}"
                      class="item flex justify-between bg-white px-5 border border-[#c0c0c0]"
                    >
                      <div class="flex gap-2">
                        <i class="self-center fa-regular fa-circle-dot"></i>
                        <img
                          class="w-[50px] h-[50px]"
                          src="https://img.freepik.com/free-photo/pair-sock_1203-2448.jpg?ga=GA1.1.945534508.1726865207&semt=ais_hybrid "
                          alt=""
                        />
                        <span class="item-name self-center">${itemList.item}</span>
                      </div>
                      <i onclick="deleteItem(this)"  class="delete-btn self-center fa-solid fa-delete-left"></i>
                    </li>`;
  });
};


addBudget.addEventListener("click", () => {
  saveItem();
});





const deleteItem = (button) => {
  let parentId = button.parentElement.id;
  itemContainer= itemContainer.filter(item => item.id !== parentId);
  localStorage.setItem("itemContainer",JSON.stringify(itemContainer))
  updateDisplay();
};


