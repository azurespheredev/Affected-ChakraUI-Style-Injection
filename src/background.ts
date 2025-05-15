chrome.runtime.onMessage.addListener((message, _, sendResponse) => {
  if (message.type === "TEST") {
    console.log("Received message from content script:", message);
    sendResponse({ response: "Message received!" });
  }
});
