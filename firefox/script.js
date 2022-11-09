const selectSearchEngine = document.getElementById("select-search-engine");
const selectedSearchEngine = document.getElementById("selected-search-engine");
const searchForm = document.getElementById("search-form");

if (localStorage.getItem("search-engine") == null) {
  localStorage.setItem("search-engine", "google");
}

selectedSearchEngine.innerText = capitalize(localStorage.getItem("search-engine"));

selectSearchEngine.addEventListener("change", (e) => {
  localStorage.setItem("search-engine", selectSearchEngine.options[selectSearchEngine.selectedIndex].value);

  e.preventDefault();
});

searchForm.addEventListener("submit", (e) => {
  const query = searchForm.elements["query"].value;
  const searchEngine = localStorage.getItem("search-engine");

  switch (searchEngine) {
    case "google":
      window.location.replace("https://google.com/search?q=" + query); 
      break;
    case "yahoo":
      window.location.replace("https://search.yahoo.com/search?p=" + query);
      break;
    case "bing":
      window.location.replace("https://www.bing.com/search?q=" + query);
      break;
    case "duckduckgo":
      window.location.replace("https://duckduckgo.com/?q=" + query)
      break;
    case "brave search":
      window.location.replace("https://search.brave.com/search?q=" + query);
      break;
    case "qwant":
      window.location.replace("https://www.qwant.com/?q=" + query);
      break;
    case "ecosia":
      window.location.replace("https://www.ecosia.org/search?q=" + query);
      break;
    default:
      break;
  }

  e.preventDefault();
});

function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
