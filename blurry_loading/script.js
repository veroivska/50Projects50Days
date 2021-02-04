const LOAD_TEXT = document.querySelector('.loading-text');
const BG = document.querySelector('.bg');

let load = 0;

let int = setInterval(blurring, 30);

function blurring() {
  load++;

  if (load > 99) {
    clearInterval(int);
  }

  LOAD_TEXT.innerText = `${load}%`;
  LOAD_TEXT.style.opacity = SCALE(load, 0, 100, 1, 0);
  BG.style.filter = `blur(${SCALE(load, 0, 100, 30, 0)}px)`;
}

// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const SCALE = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};
