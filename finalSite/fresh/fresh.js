const URL = 'https://brotherblazzard.github.io/canvas-content/fruit.json'
const fruitSelect = document.getElementById("fruitSelect")

// console.log(fetch(URL));

fetchFruitData()


function fetchFruitData() {
    console.log(`Inside${arguments.callee.name}`)
    fetch(URL)
    .then(res => res.json())
//     .then(data => console.log(data))
    .then(data => loadFruitData(data))
    .catch(err => console.log(err))
}

function loadFruitData(data){
    console.log(`Inside${arguments.callee.name}`)
    for(row of data)
    {
        opt = document.createElement('option')
        opt.text = row.text
        opt.value = row.value

        fruitSelect.options.add(opt)

    }
}

function onFruitChange(ev){
    console.log(`Inside${arguments.callee.name}`)

}





console.log(URL);

var output = document.getElementById("output");
