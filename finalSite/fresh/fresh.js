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

function createAlert() {

    const fName = document.getElementById('input-fName').value
    const email = document.getElementById('input-email').value
    const phone = document.getElementById('input-cell').value
    const fruit1 = document.getElementById('fruitSelect1').value
    const fruit2 = document.getElementById('fruitSelect2').value
    const fruit3 = document.getElementById('fruitSelect3').value
    const specInstruct = document.getElementById('specInstruct').value



    window.alert(fName + "\n" +  email + "\n" + phone + "\n" + fruit1 + "\n" + fruit2 + "\n" + fruit3 + "\n" + specInstruct );


}


function onFruitChange(ev){
    console.log(`Inside${arguments.callee.name}`)

}

console.log(URL);

var output = document.getElementById("output");



