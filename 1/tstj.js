
const interText = document.querySelector(".show");
const ul = document.querySelector(".todo-list");
const input = document.querySelector(".cb");
const li = document.querySelector(".item");
const content = document.querySelector(".text");
const allClear = document.querySelector(".clearComplete");
const todoF = document.querySelector(".footer");
const complete = document.querySelector("#todo-complete");
const active = document.querySelector("#todo-active");
const itemsLeft = document.querySelector("#item-left")

todoF.addEventListener(('click'),(e) => {
  const id = e.target.id;
  if(id){
    document.querySelector(".on").classList.remove('on')
    document.getElementById(id).classList.add('on')
   
    

  }

});


interText.addEventListener("keyup", (event) => {
  if (event.keyCode == 13) {
    const getValue = interText.value;

    if (getValue.trim() != 0) {
      interText.value = "";
      const card = document.createElement("li");
      const cbContainer = document.createElement("div");
      const cbInput = document.createElement("input");
      const checkSpan = document.createElement("span");
      const item = document.createElement("p");
      const img = document.createElement("img");

      // //Add Classes
      card.classList.add("item");
      cbContainer.classList.add("checkmark");
      cbInput.classList.add("cb");
      checkSpan.classList.add("check");
      item.classList.add("text");
      img.classList.add("clear");

      //Add Attributes
      cbInput.setAttribute("type", "checkbox");
      img.setAttribute("src", "./images/x-lg.svg");
      img.setAttribute("alt", "Clear it");
      item.innerHTML = getValue;

      //Set Element by Parent Child
      cbContainer.appendChild(cbInput);
      cbContainer.appendChild(checkSpan);
      card.appendChild(cbContainer);
      card.appendChild(item);
      card.appendChild(img);
      ul.appendChild(card);
    }
  }
});




//line through on text
ul.addEventListener("click", (event) => {
  if (event.target.classList.contains("cb")) {
    const a =
      event.target.parentElement.nextElementSibling.classList.toggle("text1");
  }
  itemsLeft.textContent=document.querySelectorAll(".todo-list .item:not(.text1) ").length;
});

//close
ul.addEventListener("click", (event) => {
  if (event.target.classList.contains("clear")) {
    const a = event.target.parentElement;
    a.style.display = "none";
  }
});

//remove all
var myNodelist = document.getElementsByTagName("LI");

allClear.addEventListener("click", (event) => {
  for (let i = 0; i < myNodelist.length; i++) {
    myNodelist[i].style.display = "none";
  }
});
 

//active
active.addEventListener("click", (event) => {
  for (let i = 0; i < myNodelist.length; i++) {
    if (
      myNodelist[i].firstElementChild.nextElementSibling.classList.contains(
        "text1"
      )
    ) {
      myNodelist[i].style.display = "none";
    }
  }
});

// complete.addEventListener("click", (event) => {
//   for (let i = 0; i < myNodelist.length; i++) {
//     if (
//       !myNodelist[i].firstElementChild.nextElementSibling.classList.contains(
//         "text1"
//       )
//     ) {
//       myNodelist[i].style.display = "none";
//     }
//   }
// });

// // console.log(Array.from(ul));
// // active.addEventListener("click", (event) => {
// //   for (let i = 0; i < myNodelist.length; i++) {
// //     if (
// //       !myNodelist[i].firstElementChild.nextElementSibling.classList.contains(
// //         "text1"
// //       )
// //     ) {
// //       myNodelist[i].style.display = "block";
// //     }
// //   }
// // });


