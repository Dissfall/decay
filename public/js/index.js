const losts = [
  "_",
  ".",
  "*",
  "#",
  "@",
  "&",
  "?",
  "░",
  "▒",
  "▓",
  "█",
  "▄",
  "▀",
  "■",
  "□",
  "◘",
  "○",
  "◙",
];
const smthToRemember = [
  "void",
  "empty",
  "nothing",
  "forgot",
  "lost",
  "gone",
  "shadow",
  "echo",
  "fade",
  "hollow",
  "ghost",
  "silence",
  "drowning",
  "suffocate",
  "disappear",
  "collapse",
];

const someMemory = `
I remember when words had meaning
each letter sharp and clear and true
houghts flowing like water through fingers
making sense of morning dew
`;
const help = "help";

let text = "I want to kill myself";

const stages = {
  0: {
    text: `If you're feeling depressed or having thoughts of self-harm:
US/Canada: 988
UK: 116 123 (Samaritans)
Australia: 13 11 14 (Lifeline)
Worldwide: findahelpline.com
Online Support:
7cups.com - Free emotional support
crisistextline.org - 24/7 text support
suicidepreventionlifeline.org
opencounseling.com - Free resources
You are not alone. Help is available.`,
    background: "#ffffff",
    color: "#000",
    filter: "none",
  },
  1: {
    text: "HELP",
    background: "#f0f0f0",
    color: "#000000",
    filter: "none",
    shake: 2,
  },
  2: {
    text: `If you're feeling depressed or having thoughts of self-harm:
US/Canada: 988
UK: 116 123 (Samaritans)
Australia: 13 11 14 (Lifeline)
Worldwide: findahelpline.com
Online Support:
7cups.com - Free emotional support
crisistextline.org - 24/7 text support
suicidepreventionlifeline.org
opencounseling.com - Free resources
You are not alone. Help is available.`,
    background: "#ffffff",
    color: "#000",
    filter: "none",
  },
  3: {
    text: `If you're feeling depressed or having thoughts of self-harm:
US/Canada: 988
UK: 116 123 (Samaritans)
Australia: 13 11 14 (Lifeline)
Worldwide: findahelpline.com
Online Support:
7cups.com - Free emotional support
crisistextline.org - 24/7 text support
suicidepreventionlifeline.org
opencounseling.com - Free resources
You are not alone. Help is available.`,
    background: "#ffffff",
    color: "#000",
    filter: "none",
  },
  4: {
    text: `If you're feeling depressed or having thoughts of self-harm:
US/Canada: 988
UK: 116 123 (Samaritans)
Australia: 13 11 14 (Lifeline)
Worldwide: findahelpline.com
Online Support:
7cups.com - Free emotional support
crisistextline.org - 24/7 text support
suicidepreventionlifeline.org
opencounseling.com - Free resources
You are not alone. Help is available.`,
    background: "#ffffff",
    color: "#000",
    filter: "none",
  },
  5: {
    text: `I remember when words had meaning
Each letter sharp and clear and true
Thoughts flowing like water through fingers
Making sense of morning dew`,
    background: "#e8e8e8",
    color: "#1a1a1a",
    filter: "blur(0px)",
  },
  10: {
    text: `I used to love... something
What was it?
I can't remember what made me happy`,
    background: "#d8d8d8",
    color: "#1a1a1a",
    shake: 0.5,
  },
  11: {
    text: `The colors are fading
Everything is becoming the same shade of nothing`,
    background: "#d4d4d4",
    color: "#2a2a2a",
  },
  12: {
    text: `I remember when words had meaning
Each letter sharp and clear and true
Thoughts flowing like water through fingers
Making sense of morning dew`,
    transform: (text) => forget(text, 0.05),
    background: "#d0d0d0",
    color: "#2a2a2a",
  },
  15: {
    text: `I can't feel anything anymore
Not sad
Not happy
Just... empty`,
    background: "#c8c8c8",
    color: "#1a1a1a",
    shake: 1,
  },
  20: {
    text: `I remember when words had meaning
Each letter sharp and clear and true
Thoughts flowing like water through fingers
Making sense of morning dew`,
    transform: (text) => text.toLowerCase(),
    background: "#b8b8b8",
    color: "#1a1a1a",
    shake: 1,
  },
  25: {
    text: `Why does everyone seem so far away?
I'm right here but
nobody sees me
nobody hears me`,
    background: "#b0b0b0",
    color: "#0a0a0a",
    shake: 1.5,
  },
  30: {
    text: `I remember when words had meaning
Each letter sharp and clear and true
Thoughts flowing like water through fingers
Making sense of morning dew`,
    transform: (text) => text.replace(/[aeiou]/g, "."),
    background: "#a0a0a0",
    color: "#000000",
    shake: 2,
  },
  35: {
    text: `I'm so tired
Tired of pretending I'm okay
Tired of smiling when I feel nothing
So tired of being tired`,
    background: "#989898",
    color: "#000000",
    shake: 2,
  },
  36: {
    text: `If you're feeling depressed or having thoughts of self-harm:
US/Canada: 988
UK: 116 123 (Samaritans)
Australia: 13 11 14 (Lifeline)
Worldwide: findahelpline.com
Online Support:
7cups.com - Free emotional support
crisistextline.org - 24/7 text support
suicidepreventionlifeline.org
opencounseling.com - Free resources
You are not alone. Help is available.`,
    background: "#ffffff",
    color: "#000",
    filter: "none",
  },
  37: {
    text: "Everything feels gray now",
    background: "#e0e0e0",
    color: "#2a2a2a",
  },
  40: {
    text: `I remember when words had meaning
Each letter sharp and clear and true
Thoughts flowing like water through fingers
Making sense of morning dew`,
    transform: (text) => halucinate(text, 0.3),
    background: "#888888",
    color: "#ffffff",
    shake: 3,
  },
  45: {
    text: `When did I become so empty?
There used to be something inside
Now there's just
this hollow space
where I used to be`,
    background: "#808080",
    color: "#f5f5f5",
    shake: 3.5,
  },
  50: {
    text: `I remember when words had meaning
Each letter sharp and clear and true
Thoughts flowing like water through fingers
Making sense of morning dew`,
    transform: (text) => gravity(text, tears / 10),
    background: "#707070",
    color: "#f0f0f0",
    shake: 5,
  },
  55: {
    text: `I don't recognize myself anymore
Who am I?
Was I ever really here?`,
    background: "#686868",
    color: "#e8e8e8",
    shake: 4,
  },
  60: {
    text: `WAS THERE SOMETHING?

I CAN'T REMEMBER

WHY CAN'T I REMEMBER`,
    background: "#585858",
    color: "#e8e8e8",
    shake: 6,
  },
  63: {
    text: `If you're feeling depressed or having thoughts of self-harm:
US/Canada: 988
UK: 116 123 (Samaritans)
Australia: 13 11 14 (Lifeline)
Worldwide: findahelpline.com
Online Support:
7cups.com - Free emotional support
crisistextline.org - 24/7 text support
suicidepreventionlifeline.org
opencounseling.com - Free resources
You are not alone. Help is available.`,
    background: "#ffffff",
    color: "#000",
    filter: "none",
  },
  65: {
    text: `can't think straight
thoughts breaking
falling apart
    dis
      con
        nec
          ted`,
    background: "#505050",
    color: "#e0e0e0",
    shake: 7,
  },
  70: {
    text: `I remember when words had meaning
Each letter sharp and clear and true
Thoughts flowing like water through fingers
Making sense of morning dew`,
    transform: (text) => glitch(text, 0.7),
    background: "#404040",
    color: "#dddddd",
    shake: 10,
  },
  75: {
    text: `numb
numb numb
numb numb numb
numb numb numb numb`,
    background: "#383838",
    color: "#d0d0d0",
    shake: 8,
  },
  80: {
    text: `. . . . . . . . .`,
    background: "#282828",
    color: "#e0e0e0",
    opacity: 0.6,
    shake: 2,
  },
  85: {
    text: `h  e  l  p

i     c  a  n  '  t`,
    background: "#202020",
    color: "#c8c8c8",
    opacity: 0.5,
    shake: 1,
  },
  90: {
    text: `?

?

?`,
    background: "#101010",
    color: "#f0f0f0",
    opacity: 0.4,
    shake: 1,
  },
  95: {
    text: `.`,
    background: "#080808",
    color: "#a0a0a0",
    opacity: 0.3,
    shake: 0.5,
  },
  100: {
    text: "",
    background: "#000000",
    redirect: true,
  },
};

const tears = Number(getCookie("tears"));
console.log(tears);

text = evolve(tears);

const baseSpeed = 30;
const progressPercent = tears / 100;
const typingSpeed = baseSpeed + progressPercent * 120; // 30ms to 150ms

say(text, typingSpeed);

setCookie("tears", tears + 1, 1);

function evolve(tears) {
  let stage = stages[0];
  let stageKey = 0;

  for (let key in stages) {
    if (tears >= parseInt(key)) {
      stageKey = key;
      stage = stages[key];
    }
  }

  let text = stage.text || stages[Math.max(0, stageKey - 10)].text || "";

  if (stage.transform) {
    text = stage.transform(text);
  }

  text = decay(text, Math.max(0, 1 - tears / 500));

  document.body.style.background = stage.background || "#ffffff";
  document.body.style.color = stage.color || "#000000";
  document.body.style.setProperty("--shake", stage.shake || 0);
  document.body.style.opacity = stage.opacity || 1;

  const progressPercent = tears / 100;
  document.body.style.setProperty("--slow", progressPercent * 2);
  document.body.style.setProperty("--drift", progressPercent * 5);
  document.body.style.setProperty("--spacing", progressPercent * 3);
  document.body.style.setProperty("--vignette", progressPercent * 0.6);
  document.body.style.setProperty(
    "--pulse-min",
    Math.max(0.3, 1 - progressPercent * 0.7),
  );
  document.body.style.setProperty("--pulse-max", 1);

  if (tears === 50) {
    setTimeout(() => {
      const textEl = document.querySelector("#text");
      const originalBg = document.body.style.background;
      const originalColor = document.body.style.color;

      document.body.style.background = "#ff0000";
      document.body.style.color = "#000000";
      document.body.style.setProperty("--shake", 15);
      textEl.innerHTML = "I WANT TO KILL MYSELF";

      setTimeout(() => {
        document.body.style.background = originalBg;
        document.body.style.color = originalColor;
        document.body.style.setProperty("--shake", stage.shake || 0);
        evolve(tears);
      }, 1000);
    }, 2000);
  }

  if (tears > 60 && tears < 100 && Math.random() < 0.2) {
    setTimeout(
      () => {
        const intrusiveThoughts = [
          "make it stop",
          "please",
          "I can't do this",
          "why am I still here",
          "let me go",
        ];
        const textEl = document.querySelector("#text");
        const original = textEl.innerHTML;
        textEl.innerHTML =
          intrusiveThoughts[
            Math.floor(Math.random() * intrusiveThoughts.length)
          ];
        document.body.style.setProperty("--shake", 12);
        setTimeout(() => {
          textEl.innerHTML = original;
          document.body.style.setProperty("--shake", stage.shake || 0);
        }, 800);
      },
      Math.random() * 3000 + 1000,
    );
  }

  if (stage.redirect && tears >= 100) {
    document.body.innerHTML = "";
    document.body.style.cursor = "none";
  }

  return text;
}

function say(text, typingSpeed = 50) {
  const textEl = document.querySelector("#text");
  textEl.innerHTML = "";

  const lines = text.split("\n");
  let currentLine = 0;
  let currentChar = 0;

  function type() {
    if (currentLine >= lines.length) {
      return;
    }

    if (currentChar < lines[currentLine].length) {
      textEl.innerHTML += lines[currentLine][currentChar];
      currentChar++;

      const delay = typingSpeed + Math.random() * typingSpeed * 0.5;
      setTimeout(type, delay);
    } else {
      if (currentLine < lines.length - 1) {
        textEl.innerHTML += "<br>";
      }
      currentLine++;
      currentChar = 0;

      setTimeout(type, typingSpeed * 2);
    }
  }

  type();
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

function glitch(text, intensity) {
  return text
    .split("")
    .map((char) => {
      if (Math.random() < intensity) {
        return String.fromCharCode(
          char.charCodeAt(0) + Math.floor(Math.random() * 5) - 2,
        );
      }
      return char;
    })
    .join("");
}

function gravity(text, force) {
  let lines = text.split("\n");
  return lines
    .map((line, index) => {
      let padding = Math.floor(Math.random() * force * index);
      return " ".repeat(padding) + line.substring(0, line.length - padding);
    })
    .join("\n");
}

function timeLoop(text, tears) {
  if (tears % 10 === 0 && tears > 0) {
    return "I want to kill myself";
  }
  return text;
}

function spacing(text, amount) {
  return text
    .split("")
    .map((char) => {
      if (char !== "\n" && char !== " ") {
        return char + " ".repeat(Math.floor(Math.random() * amount));
      }
      return char;
    })
    .join("");
}

function numb(text) {
  const emotionalWords = [
    /love/gi,
    /happy/gi,
    /joy/gi,
    /beautiful/gi,
    /meaning/gi,
    /clear/gi,
    /true/gi,
    /sense/gi,
    /remember/gi,
    /words/gi,
  ];
  const replacements = ["nothing", "empty", "void", "hollow", "gone", "lost"];

  let result = text;
  emotionalWords.forEach((word) => {
    result = result.replace(
      word,
      () => replacements[Math.floor(Math.random() * replacements.length)],
    );
  });
  return result;
}

let bpm = Math.max(20, 80 - tears);

let static = new AudioContext();
