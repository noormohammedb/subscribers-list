console.log("Hello World");

let trClone = $("tbody>tr");
// console.log(trClone);

let maninComponent = document.createDocumentFragment();
// console.log(maninComponent);

// console.log("mainElement");
// console.log(mainElement[0]);

// maninComponent.appendChild(mainElement[0]);

async function call() {
  let rawData = await fetch(
    "http://localhost:5500/YouTube and YouTube Music/subscriptions/subscriptions.json"
  );
  let data = await rawData.json();
  //   console.log(data);

  data.map((iterationData, index, array) => {
    //  console.log(index);
    //  console.log("iterationData");
    //  console.log(iterationData);

    //  console.log("element");
    //  console.log(element);

    let mainElement = trClone.clone();
    let element = mainElement.children();

    element[0].innerText = index + 1;

    element[1].innerText = iterationData.snippet.title;

    element[2].children[0].src = iterationData.snippet.thumbnails.default.url;

    element[3].innerText = iterationData.snippet.description;

    element[4].children[0].href = `https://www.youtube.com/channel/${iterationData.snippet.channelId}`;

    //  console.log(element[5].children[0].children[0].src);
    //   element[5].innerText = "";
    console.log(mainElement[0]);
    maninComponent.appendChild(mainElement[0]);
  });
  console.log("maninComponent");
  console.log(maninComponent);
  $("tbody").append(maninComponent);

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
