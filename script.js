document.addEventListener('DOMContentLoaded', () => {
    const facts = [
        "Honey never spoils. Archaeologists have found pots of honey in ancient Egyptian tombs that are over 3,000 years old and still perfectly edible.",
        "Bananas are berries, but strawberries aren't.",
        "A day on Venus is longer than a year on Venus.",
        "Octopuses have three hearts.",
        "There are more stars in the universe than grains of sand on all the Earth's beaches."
    ];

    const factDisplay = document.getElementById('fact-display');
    const generateFactButton = document.getElementById('generate-fact');

    generateFactButton.addEventListener('click', () => {
        const randomIndex = Math.floor(Math.random() * facts.length);
        factDisplay.textContent = facts[randomIndex];
    });
});
