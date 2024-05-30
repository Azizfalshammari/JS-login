let btn = document.getElementById("btn");
let div = document.getElementById("bigcontainer");
let nameU = document.getElementById("name");

var username = localStorage.getItem('Name');
nameU.innerText=  username
printAll();

async function printAll() {
  let Response = await fetch(
      "https://api.thecatapi.com/v1/images/search?limit=20"
  );
  let data = await Response.json();

  // Clear the existing content in the bigcontainer
  div.innerHTML = '';

  for (let i = 0; i < data.length; i += 3) {
      const rowHolder = document.createElement("div");
      rowHolder.classList.add("row", "justify-content-center");

      for (let j = 0; j < 3 && i + j < data.length; j++) {
          const element = data[i + j];
          const imgHolderDiv = document.createElement("div");
          const imgHolder = document.createElement("img");
          imgHolder.src = element.url;
          imgHolder.style.objectFit = "cover";
          imgHolder.classList.add("img-fluid");
          imgHolderDiv.classList.add("col-sm-4", "col-12");
          imgHolderDiv.append(imgHolder);
          rowHolder.appendChild(imgHolderDiv);
      }
      div.appendChild(rowHolder);
  }
}

// async function printAll() {
//     let Response = await fetch(
//         "https://api.thecatapi.com/v1/images/search?limit=10"
//     );
//     let data = await Response.json();
//     data.forEach((element) => {
//         let imgHolder = document.createElement("img");
//         let imgHolderDiv = document.createElement("div");
        
//         div.append(imgHolderDiv);
//         imgHolderDiv.classList.add("container-fluid", "col-3");

//         imgHolder.src = element.url;

//         imgHolderDiv.append(imgHolder);
//     });
// }

// async function appendImages() {
//   for (let i = 0; i < resCodes.length; i += 3) {
//     const rowHolder = document.createElement("div");
//     rowHolder.classList.add("row", "justify-content-center");

//     for (let j = 0; j < 3 && i + j < resCodes.length; j++) {
//       const code = resCodes[i + j];
//       const imgSrc = await getimg(code);

//       if (imgSrc) {
//         const imgholder = document.createElement("div");
//         const img = document.createElement("img");
//         img.src = imgSrc;
//         img.style.objectFit = "cover";
//         img.classList.add("img-fluid");
//         imgholder.classList.add("col-sm-4", "col-12");
//         imgholder.append(img);
//         rowHolder.appendChild(imgholder);
//       }
//     }

//     div.appendChild(rowHolder);
//   }}

function logout(){

  localStorage.clear()
}