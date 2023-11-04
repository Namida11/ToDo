let myInput = document.getElementById("input_Id");
let sortIcon = document.getElementById("down");
let clearBtn = document.getElementById("clear");

// let alertMessage = document.querySelector(".alert-message");

console.log(sortIcon);
let notesArr = [];
let id = 1;

//add note start
const addNote = (text) => {
  // alertMessage.style.display = "none";
  myInput.style.outlineColor = "rgba(37, 51, 246, 0.557)";

  if (text.trim() != "") {
    const newNote = {
      id: id++,
      note: text,
      isCheck: false,
    };
    notesArr.push(newNote);
  } else {
    myInput.style.outlineColor = "red";
    // alertMessage.style.display = "block";
  }
  console.log(notesArr);
};

//show notes start
const showNotes = () => {
  let notes = document.getElementById("noteId");
  let result = "";
  notesArr.forEach((item) => {
    result += `
    <li class="li_name">
        <div class="div_li">
          <a href="#" class="done-btn ${
            item.isCheck ? "active-done" : "not-active-done"
          } " onclick="doneNote(${item.id})">${
      item.isCheck ? '<i class="fas fa-check check-icon" ></i>' : ""
    }</a><span class="${item.isCheck ? "alma" : ""}">${item.note}</span>
        </div>
        <a class=" clear remove_box fa-regular fa-circle-xmark" href="#" onclick="removeNote(${
          item.id
        })"></a>
      </li>
    `;
  });
  notes.innerHTML = result;
};
//show note end

//remove note start
const removeNote = (id) => {
  notesArr = notesArr.filter((item) => item.id != id);
  console.log(notesArr);
  showNotes();
};
//remove note end

//done note start
const doneNote = (id) => {
  let doneItem = notesArr.find((item) => item.id == id);
  if (!doneItem.isCheck) {
    doneItem.isCheck = true;
  } else {
    doneItem.isCheck = false;
  }
  console.log(doneItem);
  showNotes();
};
//done note end

//clear input start
const clearFunc = () => {
  myInput.value = "";
};
//clear input end

myInput.addEventListener("keypress", (e) => {
  if (e.keyCode == 13) {
    e.preventDefault();
    let text = myInput.value;

    myInput.value = "";
    addNote(text);
    showNotes();
  }
});

//sort start
const sortFunc = () => {
  if (notesArr.length) {
    if (sortIcon.classList.contains("fa-arrow-down-wide-short")) {
      notesArr.sort((a, b) => {
        if (a.note < b.note) {
          return -1;
        }
        if (a.note > b.note) {
          return 1;
        }
        return 0;
      });
      sortIcon.classList.remove("fa-arrow-down-wide-short");
      sortIcon.classList.add("fa-arrow-up-wide-short");
    } else {
      notesArr.sort((a, b) => {
        if (b.note < a.note) {
          return -1;
        }
        if (b.note > b.note) {
          return 1;
        }
        return 0;
      });
      sortIcon.classList.remove("fa-arrow-up-wide-short");
      sortIcon.classList.add("fa-arrow-down-wide-short");
    }

    console.log(notesArr);
    showNotes();
  }
};

sortIcon.addEventListener("click", sortFunc);
//sort end
