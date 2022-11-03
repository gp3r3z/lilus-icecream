console.log("CONNECTED TO APP")

let iceOptCream = document.getElementById("cream")
let iceOptVessel = document.getElementById("vessel")
let iceOptToppings = document.getElementById("toppings")
let cartItems = []


let total = 0
// TODO addtional , purchase and clear
// TODO only one vessel 
// TODO draw the item to the page
// TODO create a dictionary 

const iceCream = [{
    name: 'Cookie Dough',
    image: 'https://celebratingsweets.com/wp-content/uploads/2014/04/Cookie-Dough-Ice-Cream-1-5.jpg',
    price: 1,
    qty: 0,
    type: 'cream'
}, {
    name: 'Vanilla',
    image: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/ultimate-vanilla-ice-cream-1628511695.jpg',
    price: 1,
    qty: 0,
    type: 'cream'
}, {
    name: 'Strawberry',
    image: 'https://www.realfoodwithjessica.com/wp-content/uploads/2017/07/paleostrawberryicecream2.jpg',
    price: 2,
    qty: 0,
    type: 'cream'

}]

const vessels = [{
    name: 'Waffle Cone',
    image: 'https://m.media-amazon.com/images/I/71VNjBMakfL._SL1500_.jpg',
    price: 2,
    qty: 0,
    type: 'vessel'
}, {
    name: 'Waffle Bowl',
    image: 'http://images.wbmason.com/350/L_JOY66050.jpg',
    price: 4,
    qty: 0,
    type: 'vessel'
}]

const toppings = [{
    name: 'Sprinkles',
    image: 'https://upload.wikimedia.org/wikipedia/commons/f/f6/Sprinkles2.jpg',
    price: 1,
    qty: 0,
    type: 'toppings'
}, {
    name: 'Chocolate Chips',
    image: 'https://www.eatthis.com/wp-content/uploads/sites/4/2020/05/chocolate-chips.jpg?quality=82&strip=1&resize=640%2C360',
    price: 2,
    qty: 0,
    type: 'toppings'
}]



function drawIceCream() {
    console.log("Loading iceCream option")

    let template = ''


    iceCream.forEach(ice => {
        template += `
  
               <div class="col-4">
                  <img
                    class="img-fluid"
                    src="${ice.image}"
                    alt=""
                    onclick="addIceCream('${ice.name}')"
                  />
                  <div class="d-flex justify-content-around">
                    <p class="col-3">${ice.name}</p>
                    <p class="col-3">${ice.price}</p>
                  </div>
                </div>
       
        `
    })

    iceOptCream.innerHTML = template


}


function drawVesselOptions() {
    console.log("Loading Vessel option")

    let template = ''
    vessels.forEach(v => {
        template += `
  
               <div class="col-4">
                  <img
                    class="img-fluid"
                    src="${v.image}"
                    alt=""
                     onclick="addVessel('${v.name}')"
                  />
                  <div class="d-flex justify-content-around">
                    <p class="col-3">${v.name}</p>
                    <p class="col-3">${v.price}</p>
                  </div>
                </div>
       
        `
    })

    iceOptVessel.innerHTML = template


}


function drawTopOptions() {
    console.log("Loading Top option")

    let template = ''


    toppings.forEach(top => {
        template += `
            <div class="col-4">
                  <img
                    class="img-fluid"
                    src="${top.image}"
                    alt=""
                     onclick="addTop('${top.name}')"
                  /> 
                  <div class="d-flex justify-content-around">
                    <p class="col-3">${top.name}</p>
                    <p class="col-3">${top.price}</p>
                  </div>
                </div>
       
        `
    })

    iceOptToppings.innerHTML = template


}

function drawlineItem() {

    console.log("adding item to line checkout")
    let lineElem = document.getElementById('line-item')
    let template = ''

    cartItems.forEach(cartItem => {

        template += `
            <div class="col-4" > ${cartItem.name}</div>
            <div class="col-2">${cartItem.qty}</div>
            <div class="col-3">${cartItem.price}</div>
            <div class="col-3"></div>

       
        `
    })
    lineElem.innerHTML = template

}
function addIceCream(input) {
    console.log("Adding IceCream", input)
    let foundCream = iceCream.find(c => c.name == input)

    console.log(foundCream)

    if (foundCream.qty == 0) {

        console.log("Cart empty, adding visual", foundCream.qty)
        foundCream.qty++

        cartItems.push(foundCream)


    } else {
        console.log("updating QTY", foundCream.name)
        foundCream.qty++


    }
    total = total + foundCream.price

    drawlineItem(foundCream)
    drawTotal()


}

function drawTotal() {
    console.log("Adding Total")
    let lineElemTotal = document.getElementById('line-total')
    let template = ''

    template += `
            <div class="col-3">Total:</div>
            <div class="col-3">${total}</div>
        `
    lineElemTotal.innerHTML = template

}
function addVessel(input) {
    console.log("Adding vessel", input)
    let foundVes = vessels.find(v => v.name == input)

    if (foundVes.qty == 0) {

        console.log("Cart empty, adding visual", foundVes.qty)
        foundVes.qty++

        cartItems.push(foundVes)


    } else {
        console.log("updating QTY", foundVes.name)
        foundVes.qty++

    }
    total = total + foundVes.price

    drawlineItem(foundVes)
    drawTotal()



}
function addTop(input) {
    console.log("Adding Topping", input)
    let foundTop = toppings.find(t => t.name == input)
    if (foundTop.qty == 0) {

        console.log("Cart empty, adding visual", foundTop.qty)
        foundTop.qty++

        cartItems.push(foundTop)


    } else {
        console.log("updating QTY", foundTop.name)
        foundTop.qty++


    }
    total = total + foundTop.price
    drawlineItem(foundTop)
    drawTotal()

}

drawIceCream()

drawVesselOptions()

drawTopOptions()