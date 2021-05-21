console.log("Hello World");
async function call() {
  let rawData = await fetch(
    "http://localhost:5500/YouTube and YouTube Music/subscriptions/subscriptions.json"
  );
  let data = await rawData.json();
  console.log(data);
}

call();
