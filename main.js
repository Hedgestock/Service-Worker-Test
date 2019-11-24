if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js').then((x)=> console.log("success",x), (e)=> console.log("error", e));
  }


function test() {
    fetch("https://jsonplaceholder.typicode.com/todos/4")
  .then(response => response.json())
  .then(json => document.getElementById("dataContainer").innerText = json.title);
}

function reset() {
  document.getElementById("dataContainer").innerText = "data";
}