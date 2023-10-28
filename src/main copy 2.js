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
            {text: 'Balling', href: '#'},
            {text: 'Boating', href: '#'},
            {text: 'Cycling', href: '#'},
            {text: 'Fishing', href: '#'},
            {text: 'Golfing', href: '#'},
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

const buildSubMenus = (...arr) => {
    let b = 0;
    subMenu1.innerHTML = '';
    for(const objs in arr[0]) {
        let sm1 = document.createElement('a');
        sm1.textContent = arr[0][b].text
        sm1.setAttribute('href', arr[0][b].href);
        subMenu1.appendChild(sm1);
        b++
    }

}

function loadMenu(e) {
    for(let a = 0; a < menuItems.length; a++) {
        let mm = document.createElement('a');
        mm.textContent = menuItems[a].text;
        mm.setAttribute('href', menuItems[a].href)
        mainMenu.append(mm);
    }
    return mainMenu;
}

let mainMenu = document.querySelector('#whichSpace');
mainMenu.classList.add('whichSpace', 'a');
mainMenu.style.height = '100%';


let subMenu1 = document.querySelector('#subMenu1');
subMenu1.classList.add('flex-around')
subMenu1.style.height = '100%';
subMenu1.style.top = '0'

let subMenu2 = document.querySelector('#subMenu2');
subMenu2.classList.add('flex-around')
subMenu2.style.height = '100%';
subMenu2.style.top = '0'

loadMenu();

let H2 = document.querySelector('h2');
const div1 = document.getElementById('div1')
const header = document.querySelector('header')
const H1 = document.querySelector('h1');
H1.classList.add('flex-center')

let activeLink = '';


mainMenu.addEventListener('click', (e) => {
    e.preventDefault();
    if(e.target.tagName !== 'A') {
        return;
    }
    e.target.classList.toggle('activeLink');

    let allAnchorTags = document.querySelectorAll('a');
    let i = 0, param = 0, active = false;
    for(let anchor of allAnchorTags) {
        if(e.target !== anchor && anchor.classList.contains('activeLink')) {
            anchor.classList.remove('activeLink');
            subMenu1.style.top = '0';
        } else if(anchor.classList.contains('activeLink') && e.target.text !== 'about' && e.target.text === anchor.text) {
            param = i;
            active = true;
        } else if(e.target.text === 'about') {
            subMenu1.innerHTML = '';
        }
        i++;
    }

    if(active) {
        subMenu1.style.top = '100%'
        buildSubMenus(menuItems[param].subLinks);
    }

    pageHeadings(e.target.text);
})

subMenu1.addEventListener('click', (e) => {
    e.preventDefault();
    if(e.target.tagName !== 'A') {
        return;
    }
    e.target.classList.toggle('activeLink');

})

const pageHeadings = (value) => {
    if(value === 'about') {
        (() => {
            H2.replaceWith('');
            H1.innerText = 'About Our Shared Portfolio';
        })();
    } else if(value === 'kitchens') {
        (() => {
            H2.replaceWith('');
            H1.innerText = 'Our Shared Kitchen Portfolio'
            H2.classList.add('kitchen')
            H2.innerHTML = '<span class="bold">Everything Kitchen: </span> (<i> wishlist, recipes, images, current/dream kitchen, etc.</li>)';
            div1.append(H2);
        })();
    } else if(value === 'baths') {
        (() => {
            H2.replaceWith('');
            H1.innerText = 'Portfolio of Our Amazing Bathrooms';
        })();
    } else if(value === 'gardens') {
        (() => {
            H2.replaceWith('');
            H1.innerText = 'Portfolio of the Green and Brown Thumbed';
        })();
    } else if(value === 'animals') {
        (() => {
            H2.replaceWith('');
            H1.innerText = 'The Portfolio of Friends and Food';
        })();
    } else if(value === 'sports') {
        (() => {
            H2.replaceWith('');
            H1.innerText = 'The Portfolio of All Things Sports';
        })();
    } else if(value === 'holidays') {
        (() => {
            H2.replaceWith('');
            H1.innerText = 'Holiday Portfolio';
        })();
    }
}