/* Terminal animation for the About section: types each command, prints its
   output, then loops. */

type OutputLine = { text: string; cls: "" | "success" };
type ScriptEntry = { cmd: string } | { lines: OutputLine[] };

// Special token in text: "[PROGRESS:filled/total]", e.g. "[PROGRESS:8/10]" → ████████░░
const SCRIPT: ScriptEntry[] = [
  { cmd: "whoami" },
  {
    lines: [{ text: "lazaro ventancor cressatti", cls: "success" }],
  },

  { cmd: "cat current_role.txt" },
  {
    lines: [
      { text: "AI Engineer @ TradeSpark", cls: "" },
      { text: "building the AI area from scratch", cls: "" },
    ],
  },

  { cmd: "ls projects/" },
  {
    lines: [
      {
        text: "cea-network/   semillero/   my-automata/   tradespark-ai/   games/",
        cls: "",
      },
    ],
  },

  { cmd: "cd tradespark-ai && cat status.txt" },
  {
    lines: [
      { text: "leading the AI area", cls: "" },
      { text: "turning financial-domain problems into ML", cls: "" },
      { text: "the hard part isn't the model — it's the domain", cls: "" },
      { text: "status: [PROGRESS:8/10] shipping", cls: "success" },
    ],
  },

  { cmd: "cd ../cea-network && git log --oneline -3" },
  {
    lines: [
      { text: "a3f91c2 feat: multi-tenant admin panel", cls: "" },
      { text: "b82e441 fix: lifecycle state transitions", cls: "" },
      {
        text: "c19d330 deploy: ceabragado.com → production ✓",
        cls: "success",
      },
    ],
  },

  { cmd: "cd .. && cat about.txt" },
  {
    lines: [
      { text: "builder. researcher. teacher.", cls: "" },
      { text: "turning ideas into shipped products", cls: "" },
      { text: "since 2020.", cls: "" },
    ],
  },
];

const TOTAL_BARS = 10;
const CHAR_DELAY_MS = 50;
const PROGRESS_TOKEN = /\[PROGRESS:(\d+)\/(\d+)\]/;

type ProgressBar = { span: HTMLSpanElement; filled: number; total: number };

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const body = document.getElementById("terminal-body")!;

function scrollBottom() {
  body.scrollTop = body.scrollHeight;
}

function buildProgressSpan(filled: number, total: number) {
  const filledCount = Math.round((filled / total) * TOTAL_BARS);
  const emptyCount = TOTAL_BARS - filledCount;
  const span = document.createElement("span");
  span.innerHTML =
    `[<span class="bar-filled">${"█".repeat(filledCount)}</span>` +
    `<span class="bar-empty">${"░".repeat(emptyCount)}</span>]`;
  span.className = "term-progress-track";
  return span;
}

/** Splits a line around its progress token, if any; the bar starts empty. */
function parseLineText(text: string): { fragment: DocumentFragment; progress?: ProgressBar } {
  const fragment = document.createDocumentFragment();
  const match = text.match(PROGRESS_TOKEN);
  if (!match) {
    fragment.append(text);
    return { fragment };
  }
  const before = text.slice(0, match.index);
  const after = text.slice(match.index! + match[0].length);
  const filled = parseInt(match[1], 10);
  const total = parseInt(match[2], 10);

  const span = buildProgressSpan(0, total);
  fragment.append(before, span, after);
  return { fragment, progress: { span, filled, total } };
}

/** Animates the progress bar from 0 → filled over ~800ms */
async function animateProgress({ span, filled, total }: ProgressBar) {
  const delay = 800 / filled;
  for (let step = 1; step <= filled; step++) {
    await sleep(delay);
    const next = buildProgressSpan(step, total);
    span.replaceWith(next);
    span = next;
  }
}

function createPromptSymbol(text: string) {
  const symbol = document.createElement("span");
  symbol.className = "prompt-symbol";
  symbol.textContent = text;
  return symbol;
}

/** Appends a `~ $` prompt row followed by `content`. */
function appendPromptRow(...content: HTMLElement[]) {
  const row = document.createElement("div");
  row.className = "term-line";

  const dollar = createPromptSymbol("$");
  dollar.style.marginLeft = "2px";

  row.append(createPromptSymbol("~"), dollar, ...content);
  body.appendChild(row);
  scrollBottom();
}

function createCursor() {
  const cursor = document.createElement("span");
  cursor.className = "term-cursor";
  return cursor;
}

function appendOutputRow({ text, cls }: OutputLine) {
  const row = document.createElement("div");
  row.className = "term-line output-line fade-in" + (cls === "success" ? " output-success" : "");

  const { fragment, progress } = parseLineText(text);
  row.appendChild(fragment);
  body.appendChild(row);
  scrollBottom();
  return progress;
}

async function typeText(span: HTMLElement, text: string) {
  for (const character of text) {
    span.textContent += character;
    scrollBottom();
    await sleep(CHAR_DELAY_MS);
  }
}

async function typeCommand(command: string) {
  const commandSpan = document.createElement("span");
  commandSpan.className = "term-cmd";
  const cursor = createCursor();
  appendPromptRow(commandSpan, cursor);

  await typeText(commandSpan, command);
  cursor.remove();
  await sleep(400); // pause before output
}

async function printOutput(lines: OutputLine[]) {
  const progressBars: ProgressBar[] = [];
  for (const line of lines) {
    const progress = appendOutputRow(line);
    if (progress) progressBars.push(progress);
    await sleep(60); // small gap between output lines
  }

  // Bars fill in only after every line of the block is on screen.
  for (const progress of progressBars) {
    await animateProgress(progress);
  }
  await sleep(120); // brief breath between blocks
}

async function runAnimation() {
  for (;;) {
    body.replaceChildren();
    for (const entry of SCRIPT) {
      if ("cmd" in entry) await typeCommand(entry.cmd);
      else await printOutput(entry.lines);
    }

    appendPromptRow(createCursor()); // idle blinking cursor
    await sleep(3000);
  }
}

runAnimation();
