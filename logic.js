const sequence = document.getElementById('sequence');
const current = document.getElementById('current');
const stringer = document.getElementById('string');

var chars = ["b", "d", "f", "k", "m", "n","p", "v", "z"];
var pattern = [];
var p = 'a';

Array.prototype.random = function () {
  return this[Math.floor((Math.random()*this.length))];
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function code() {
  for (let i=0; i<48; i++) {
    pattern.push(chars.random());
  }
  sequence.innerHTML = pattern.join(' ');
}

async function currentChar() {
  for (var j=0; j<pattern.length; j++){
    stringer.innerHTML = pattern.join(' ');
    if (j == pattern.length-1) {
      p = pattern.shift();
      stringer.innerHTML = pattern.join(' ');
      current.innerHTML = p;
      pattern.push(p);
      j=0;
    }
    else {
      p = pattern.shift();
      stringer.innerHTML = pattern.join(' ');
      current.innerHTML = p;
      pattern.push(p)
    }
    await sleep(450);
  }
}

document.addEventListener('keydown', (event) => {
  if (event.key == " ") {
    pattern.splice(p, 1);
  }
});

code();
currentChar();