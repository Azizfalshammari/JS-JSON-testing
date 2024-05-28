let url = "https://coffee.alexflipnote.dev/random.json";
setInterval(changepic, 5000)
let img = document.createElement('img')
img.style.width = '100vw'
img.style.height = '100vh' 

function changepic(){
    fetch(url)
  .then((res) => res.json())
  .then((data) => {
    let imglink = data.file
    console.log(imglink)

    let collection = document.querySelector("body");

    img.src = ('')
    img.src=(imglink)

    collection.append(img)
  });
}

