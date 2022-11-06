let rocks = 0;
let multiplier = 1;
let autoMultiplier = 0;

let clickUpgrades = [
    {
      name: 'pickaxe',
      price: 10,
      quantity: 0,
      multiplier: 1
    },

    {
        name: 'bazooka',
        price: 50,
        quantity: 0,
        multiplier: 100
    }
  ];
  
  let automaticUpgrades = [
    {
    name: 'roomba',
    price: 20,
    quantity: 0,
    multiplier: 5
    },
    {
      name: 'rover',
      price: 100,
      quantity: 0,
      multiplier: 20
    }
  ];

function mineRocks() {
    rocks += multiplier
    drawRocks();
}

function drawRocks() {
    document.getElementById('rock-count').innerText = rocks;
    document.getElementById('pickaxe').innerText = clickUpgrades[0].price;
    document.getElementById('bazooka').innerText = clickUpgrades[1].price;
    document.getElementById('roomba').innerText = automaticUpgrades[0].price;
    document.getElementById('rover').innerText = automaticUpgrades[1].price;
    document.getElementById('click-count').innerText = multiplier;
    document.getElementById('auto-count').innerText = autoMultiplier;
    document.getElementById('pickaxe-quantity').innerText = clickUpgrades[0].quantity;
    document.getElementById('bazooka-quantity').innerText = clickUpgrades[1].quantity;
    document.getElementById('roomba-quantity').innerText = automaticUpgrades[0].quantity;
    document.getElementById('rover-quantity').innerText = automaticUpgrades[1].quantity;
}

function buyClickUpgrade(upgradeName) {
    let upgrade = clickUpgrades.find(upgrade => upgrade.name === upgradeName)
    if (rocks >= upgrade.price) {
        upgrade.quantity += 1
        rocks -= upgrade.price
        upgrade.price *= 2;
        console.log(upgrade.price);
        calculateClickMultiplier(upgrade)
        drawRocks()
    }
}

function calculateClickMultiplier(upgrade) {
    if (upgrade.name === 'pickaxe') {
        multiplier++
    } else {
        multiplier += upgrade.multiplier
    }
}

function buyAutoUpgrade(upgradeName) {
    let upgrade = automaticUpgrades.find(upgrade => upgrade.name === upgradeName)
    if (rocks >= upgrade.price) {
        upgrade.quantity +=1
        rocks -= upgrade.price
        upgrade.price *= 2;
        autoMultiplier += upgrade.quantity * upgrade.multiplier;
        console.log(autoMultiplier);
        drawRocks()
    }
}

function collectAutoUpgrades() {
    automaticUpgrades.forEach(upgrade => {
        if (upgrade.quantity > 0) {
            rocks += upgrade.multiplier * upgrade.quantity
        }
    })
    drawRocks()
}

setInterval(collectAutoUpgrades, 3000);