const menuItems = [
    {text: 'about', href: '#'},
    {
        text: 'kitchens', href: '#', subLinks: [
            {text: 'Current Kitchen', href: '#'},
            {text: 'Dream Kitchen', href: '#'},
            {text: 'Ideas', href: '#'},
            {text: 'Memories', href: '#'},
            {
                text: 'Recipes', href: '#', subLinks: [
                    {
                        text: 'Food', href: '#', subLinks: [
                            {text: 'Adults', href: '#'},
                            {text: 'Children', href: '#'},
                            {text: 'Desserts', href: '#'},
                        ]
                    },
                    {
                        text: 'Beverages', href: '#', subLinks: [
                            {text: 'Alcoholic', href: '#'},
                            {text: 'Non-alcoholic', href: '#'},
                        ]
                    },
                ]
            },
            {text: 'Wishlist', href: '#'},
            {text: 'Questions', href: '#'},
        ]
    },
    {
        text: 'baths', href: '#', subLinks: [
            {text: 'Current Bath', href: '#'},
            {text: 'Dream Bath', href: '#'},
            {text: 'Ideas', href: '#'},
            {text: 'Memories', href: '#'},
            {text: 'Wishlist', href: '#'},
            {text: 'Questions', href: '#'},
        ]
    },
    {
        text: 'gardens', href: '#', subLinks: [
            {text: 'Fertilizers', href: '#'},
            {text: 'Flowers', href: '#'},
            {text: 'Fruits', href: '#'},
            {text: 'Grass', href: '#'},
            {text: 'Greenhouse', href: '#'},
            {text: 'Landscapes', href: '#'},
            {text: 'Questions', href: '#'},
            {text: 'Shrubs', href: '#'},
            {text: 'Snakes', href: '#'},
            {text: 'Trees', href: '#'},
        ]
    },
    {
        text: 'animals', href: '#', subLinks: [
            {text: 'Pets', href: '#'},
            {text: 'Food', href: '#'},
            {text: 'For Sale', href: '#'},
            {text: 'Memories', href: '#'},
            {text: 'Wishlist', href: '#'},
            {text: 'Questions', href: '#'},
        ]
    },
    {
        text: 'sports', href: '#', subLinks: [
            {text: 'Balls (basket,foot,etc)', href: '#'},
            {text: 'Boating', href: '#'},
            {text: 'Cycling', href: '#'},
            {text: 'Fishing', href: '#'},
            {text: 'Golf', href: '#'},
            {text: 'Hunting', href: '#'},
            {text: 'Memories', href: '#'},
            {text: 'Running', href: '#'},
            {text: 'Swimming', href: '#'},
        ]
    },
    {
        text: 'holidays', href: '#', subLinks: [
            {text: 'Christmas', href: '#'},
            {text: 'Cinco de Mayo', href: '#'},
            {text: 'Easter', href: '#'},
            {text: 'Hanukkah', href: '#'},
            {text: 'Labor Day', href: '#'},
            {text: 'Martin Luther King Day', href: '#'},
            {text: 'Memorial Day', href: '#'},
            {text: 'Juneteenth', href: '#'},
            {text: 'New Year', href: '#'},
            {text: 'St Patrick\'s Day', href: '#'},
            {text: 'Thanksgiving', href: '#'},
            {text: 'Veteran\'s Day', href: '#'}
        ]
    },
]

let buildSubMenus = (...arr) => {
    console.log(arr)
    subMenu1.innerHTML = '';
    let b = 0;
    for (const objs in arr[0]) {
        let sm1 = document.createElement('a');
        sm1.textContent = arr[0][b].text
        sm1.setAttribute('href', arr[0][b].href);
        subMenu1.append(sm1);
        b++
        let c = 0;
        for (const objs2 in arr[0]) {
            let sm2 = document.createElement('a');
            sm2.textContent = arr[0][b][c].text
            sm2.setAttribute('href', arr[0][b][c].href);
            subMenu2.append(sm2);
            c++
        }
    }
}

function loadMenu(e) {
    for(let a = 0; a < menuItems.length; a++) {
        console.log(menuItems[a].text)
        let mm = document.createElement('a');
        mm.textContent = menuItems[a].text;
        mm.setAttribute('href', menuItems[a].href)
        mainMenu.append(mm);
        const row = menuItems[a];
        let b = 0;
        buildSubMenus(menuItems[a].subLinks);
    }
    // for(let b = 0; b < 1; b++) {
    //     if (menuItems[a].subLinks === null) {
    //         break;
    //     }
    //     let sm1 = document.createElement('a');
    //     sm1.textContent = menuItems[a].subLinks
    //     sm1.setAttribute('href', menuItems[a].subLinks);
    //     subMenu1.append(sm1);
    // }
return mainMenu;
}

let mainMenu = document.querySelector('#whichSpace');
mainMenu.classList.add('whichSpace', 'a');

let subMenu1 = document.querySelector('#subMenu1');
let subMenu2 = document.querySelector('#subMenu2');
let subMenuLinks = document.querySelectorAll('a');
let menuLinks = loadMenu();

let H2 = document.querySelector('h2');
const div1 = document.getElementById('div1')
const header = document.querySelector('header')
const H1 = document.querySelector('h1');
H1.classList.add('flex-center')






let clearScreen = () => {
    H2 = '';
}
const aLink = () => {
    H1.innerText = 'About Our Shared Portfolio';
}
const kLink = () => {
    H1.innerText = 'Our Shared Kitchen Portfolio'
    H2.classList.add('kitchen')
    H2.innerHTML = '<span class="bold">Everything Kitchen: </span> (<i> wishlist, recipes, images, current/dream kitchen, etc./i>)';
    console.log(typeof H2)
    div1.append(H2);
}
const bLink = () => {
    H2.replaceWith('');
    H1.innerText = 'Portfolio of Our Amazing Bathrooms';
}
const gLink = () => {
    H2.replaceWith('');
    H1.innerText = 'Portfolio of the Green and Brown Thumbed';
}
const fLink = () => {
    H2.replaceWith('');
    H1.innerText = 'The Portfolio of Friends and Food';
}
const sLink = () => {
    H2.replaceWith('');
    H1.innerText = 'The Portfolio of All Things Sports';
}
const hLink = () => {
    H2.replaceWith('');
    H1.innerText = 'Holiday Portfolio';
}

mainMenu.addEventListener('click', (e) => {
    e.preventDefault();
    if(e.target.tagName !== 'A') {
        return;
    }
    if(e.target.text === 'about') {
        H2.replaceWith('');
        aLink();
    }
    else if(e.target.text === 'kitchens') {kLink();}
    else if(e.target.text === 'baths') {bLink();}
    else if(e.target.text === 'gardens') {gLink();}
    else if(e.target.text === 'animals') {fLink();}
    else if(e.target.text === 'sports') {sLink();}
    else if(e.target.text === 'holidays') {hLink();}
})