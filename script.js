console.log("Hello World");

let trClone = $("tbody>tr");
console.log(trClone);

async function call() {
  let rawData = await fetch(
    "http://localhost:5500/YouTube and YouTube Music/subscriptions/subscriptions.json"
  );
  let data = await rawData.json();
  console.log(data);

  let iterationData = data[0];
  console.log("iterationData");
  console.log(iterationData);

  let element = trClone.clone().children();
  console.log("element");
  console.log(element);

  element[0].innerText = "sl number";

  element[1].innerText = iterationData.snippet.title;

  element[2].children[0].src = iterationData.snippet.thumbnails.default.url;

  element[3].innerText = iterationData.snippet.description;

  element[4].children[0].href = `https://www.youtube.com/channel/${iterationData.snippet.channelId}`;

  console.log(element[5].children[0].children[0].src);
  //   element[5].innerText = "";

  $("tbody").append(element);

  //   let domChannelName = element;
  //   domChannelName.innerText = "ksdjflkj";
  //   console.log("domChannelName");
  //   console.log(domChannelName);

  //   let dom = trClone[0];
  //   dom.innerText = "";
  //   console.log(dom);

  //   let dom4 = trClone[0];
  //   dom4.innerText = "";
  //   console.log(dom4);
}

call();
