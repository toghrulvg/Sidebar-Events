let input = document.querySelector(".text-input");
let removeInput = document.querySelector(".list-group");

input.addEventListener("keyup", function (e) {

  if (e.keyCode == 13) {

    e.target.nextElementSibling.innerHTML = "";

    for (let i = 1; i <= e.target.value; i++) {

      let li = document.createElement("li");

      li.className = "list-group-item";
      li.innerText = i;

      e.target.nextElementSibling.append(li);

      let icon = document.createElement("i");

      icon.classList.add("fa-solid");
      icon.classList.add("fa-xmark");

      icon.style.float = "right";
      icon.style.cursor = "pointer";

      li.append(icon);

      icon.onclick = function(){
        li.remove();
      }
    }

    e.target.value = "";
  }
});
