const pop_up = document.getElementById("js-pop-up");

function close_pop_up(event) {
    pop_up.style.display = "none";
}

function open_pop_up(event) {
  if (pop_up) {
    pop_up.style.display = "block";
  }
};