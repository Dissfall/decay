const losts = ["_", ".", "*", "#", "@", "&", "?", "░", "▒", "▓"];
const smthToRemember = [
  "life",
  "death",
  "lover",
  "loose",
  "void",
  "empty",
  "tear",
  "nothing",
];

const someMemory = `
I remember when words had meaning
each letter sharp and clear and true
houghts flowing like water through fingers
making sense of morning dew
`;
const help = "help";

let text = "I want to kill myself";

const tears = Number(getCookie("tears"));
console.log(tears);

setCookie("tears", tears + 1, 1);

if (tears === 0) {
  text = help;
}

if (tears > 0) {
  text = someMemory;
}

text = decay(someMemory, 1 - tears / 100);

text = forget(text);

text = halucinate(text);

say(text);

function say(text) {
  document.querySelector("#text").innerHTML = text.split("\n").join("<br>");
}

function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "0";
}

function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  let expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function forget(text) {
  return text
    .split("\n")
    .map((line) =>
      line
        .split(" ")
        .map((word) => {
          if (Math.random() > 0.9) {
            return Array.apply(null, Array(word.length))
              .map(() => losts[Math.floor(Math.random() * losts.length)])
              .join("");
          }
          return word;
        })
        .join(" "),
    )
    .join("\n");
}

function halucinate(memory) {
  return memory
    .split("\n")
    .map((lines) =>
      lines
        .split(" ")
        .map((word) => {
          if (Math.random() > 0.9) {
            return smthToRemember[
              Math.floor(Math.random() * smthToRemember.length)
            ];
          }
          return word;
        })
        .join(" "),
    )
    .join("\n");
}

function decay(memory, level) {
  return memory
    .split("")
    .map((pice) => {
      if (Math.random() > level) {
        if (pice === "\n" || pice === " ") {
          return pice;
        }
        return losts[Math.floor(Math.random() * losts.length)];
      }
      return pice;
    })
    .join("");
}
