chrome.commands.onCommand.addListener((command) => {
    if(command === "Buy") {
        console.log(`Command "${command}" triggered`);
        chrome.tabs.create({ url: "https://www.amazon.com" });
        chrome.tabs.create({ url: "https://www.ebay.com" });
        chrome.tabs.create({ url: "https://store.steampowered.com" });
        chrome.tabs.create({ url: "https://store.epicgames.com" });
        chrome.tabs.create({ url: "https://www.redbubble.com" });
        chrome.tabs.create({ url: "https://humblebundle.com" });
    }
});