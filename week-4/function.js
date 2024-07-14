//1: Callback Function
function delayedResult(n1, n2, delayTime, callback) {
  setTimeout(() => {
    callback(n1 + n2);
  }, delayTime);
  // your code here
}
delayedResult(4, 5, 3000, function (result) {
  console.log(result);
}); // 9 (4+5) will be shown in the console after 3 seconds
delayedResult(-5, 10, 2000, function (result) {
  window.alert(result);
}); // 5 (-5+10) will be shown in an alert dialog after 2 seconds

//2: HTML DOM and AJAX
function ajax(url) {
  return fetch(url).then((response) => response.json());
}

function render(data) {
  console.log(data);
  let body = document.body;
  data.map((item) => {
    body.innerHTML += `
    <div>
        <h1>${item.name}</h1>
        <h2>$${item.price}</h2>
        <p>${item.description}</p>
    </div>
    `;
  });
}

const url =
  "https://remote-assignment.s3.ap-northeast-1.amazonaws.com/products";
ajax(url).then((data) => {
  render(data);
});
//you should get product information in JSON format and render data in the page

//4: HTML DOM and AJAX (Advanced Optional)
const data = fetch(
  "https://api.github.com/orgs/facebook/repos?per_page=5&page=1"
)
  .then((response) => response.json())
  .then((val) => console.log(val));
