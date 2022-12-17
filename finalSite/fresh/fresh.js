const URL = 'https://brotherblazzard.github.io/canvas-content/fruit.json'
const fruitSelect1 = document.getElementById("fruitSelect1")
const fruitSelect2 = document.getElementById("fruitSelect2")
const fruitSelect3 = document.getElementById("fruitSelect3")

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
    console.log('1')
    for(row of data)
    {
        opt = document.createElement('option')
        opt.text = row.name

        fruitSelect1.options.add(opt)

    }
    for(row of data)
    {
        opt = document.createElement('option')
        opt.text = row.name

        fruitSelect2.options.add(opt)
        
    }
    for(row of data)
    {
        opt = document.createElement('option')
        opt.text = row.name

        fruitSelect3.options.add(opt)
        
    }
}


function onFruitChange(ev){
    console.log(`Inside${arguments.callee.name}`)

}

console.log(URL);

var output = document.getElementById("output");
