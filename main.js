let url = "https://coffee.alexflipnote.dev/random.json";
let link = "https://rickandmortyapi.com/api/character";
// setInterval(changepic, 5000);
// let img = document.createElement("img");
// img.style.width = "100vw";
// img.style.height = "100vh";

//  function changepic() {
//    fetch(url)
//     .then((res) => res.json())
//     .then((data) => {
//       let imglink = data.file;
//       console.log(imglink);
//       let collection = document.querySelector("body");
//       img.src = imglink;
//       collection.append(img);
//     });
// }

console.dir(link);
// async function fetchAPI(){
//   let res = await fetch(link)
//   let res2json = (await res.jason())
//     console.log(res2json)
// }

getResponse();
async function getResponse() {
  const response = await fetch(link);
  const data = await response.json();
    console.log(data)
  var list = document.createElement("div");
  document.body.append(list)
  list.style.display ='flex'
  list.style.flexWrap = 'wrap'
  list.style.textAlign = 'center'
  list.style.justifyContent = 'center'

  data.results.forEach((element) => {
    let div = document.createElement("div");
    let title = document.createElement("p");
    let img = document.createElement("img");
    img.src = element.image;
    title.innerText = element.name;

    div.style.border='solid black'
    // div.style.width='30vw'
   

    list.append(div);
    div.append(title);
    div.append(img);
    
    
  });
}

// fetchAPI()
