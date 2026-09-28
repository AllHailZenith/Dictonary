const searchBtn = document.getElementById("search-button");
const wordInput = document.getElementById("word-input");
const resultContainer = document.getElementById("result-container");

async function searchWord(word) {
    resultContainer.innerHTML = "";

    const response = await fetch(`https://freedictionaryapi.com/api/v1/entries/en/${word}`);

    if (!response.ok) {
        resultContainer.textContent = "Service Down";
        return;
    }

    const data = await response.json();

    if (data.entries.length === 0) {
        resultContainer.textContent = "Word not found";
        return;
    }

    const heading = document.createElement("h2");
    heading.textContent = data.word;
    resultContainer.appendChild(heading);

    const list = document.createElement("ul");

    data.entries[0].senses.forEach(sense => {
        const li = document.createElement("li");
        li.textContent = sense.definition;
        list.appendChild(li);
    });

    resultContainer.appendChild(list);
}

searchBtn.addEventListener("click", () => {
    const word = wordInput.value.toLowerCase().trim();

    if (word === "") {
        resultContainer.textContent = "Please enter a word.";
        return;
    }

    searchWord(word);
});