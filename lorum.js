const paragraphRange = document.getElementById("paragraph-range");
const wordRange = document.getElementById("word-range");
const paragraphValue = document.getElementById("paragraph-value");
const wordValue = document.getElementById("word-value");
const generateButton = document.getElementById("generatebutton"); // Corrected ID
const loremOutput = document.getElementById("lorem-output");
const tagSelect = document.getElementById("tag-select");
const htmlSelect = document.getElementById("html-select");

// Update paragraph value display
paragraphRange.addEventListener("input", function () {
  paragraphValue.innerText = this.value;
});

// Update word value display
wordRange.addEventListener("input", function () {
  wordValue.innerText = this.value;
});

generateButton.addEventListener("click", function () {
  const paragraphs = parseInt(paragraphRange.value);
  const wordsPerParagraph = parseInt(wordRange.value);
  const tag = tagSelect.value;
  const includeHtml = htmlSelect.value === "Yes";

  let loremText = generateLoremIpsum(
    paragraphs,
    wordsPerParagraph,
    includeHtml,
    tag
  );
  loremOutput.innerHTML = loremText;
});

function generateLoremIpsum(paragraphs, wordsPerParagraph, includeHtml, tag) {
  let str = "";
  const loremWords =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.".split(
      " "
    );
  let result = "";

  for (let i = 0; i < paragraphs; i++) {
    let paragraph = [];
    for (let j = 0; j < wordsPerParagraph; j++) {
      paragraph.push(loremWords[Math.floor(Math.random() * loremWords.length)]);
    }
    result += includeHtml
      ? `<${tag}>${paragraph.join(" ")}</${tag}>`
      : `${paragraph.join(" ")}\n\n`;
  }

  return result;
}
