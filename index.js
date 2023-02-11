const url = "https://dummyjson.com/products";

const data = fetch(url);

data
.then((res) => res.json())
.then((result) => console.log(result));

