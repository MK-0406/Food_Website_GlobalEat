/* Storage + Web History API */
function historyAPI() {
  // Check if Local Storage is available
  if (typeof(Storage) !== "undefined") {
      // Increment the click count if it exists, otherwise initialize it
      localStorage.clickCount = localStorage.clickCount ? Number(localStorage.clickCount) + 1 : 1;
  } else {
      console.warn("Web Storage is not supported by this browser.");
  }

  // Navigate back to the previous page
  window.history.back();
}