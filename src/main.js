const menuItems = [
    {text: 'about', href: '#'},
    {
        text: 'kitchens', href: '#', subLinks: [
            {text: 'Current...', href: '#'},
            {text: 'Dream...', href: '#'},
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
            {text: 'New Year\'s', href: '#'},
            {text: 'St Patrick\'s Day', href: '#'},
            {text: 'Thanksgiving', href: '#'},
            {text: 'Veteran\'s Day', href: '#'}
        ]
    },
]

const buildSubMenu1 = (...arr) => {
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
subMenu1.classList.add('subMenu1')
subMenu1.style.height = '100%';
subMenu1.style.top = '0'

let subMenu2 = document.querySelector('#subMenu2');
subMenu2.classList.add('flex-column')
subMenu2.style.height = '100%';
subMenu2.style.top = '0'

loadMenu();

let whosActive = '';

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
            subMenu1.innerHTML = '';
            subMenu1.style.top = '0';
        } else if(anchor.classList.contains('activeLink') && e.target.text !== 'about' && e.target.text === anchor.text) {
            param = i;
            active = true;
        } else {
            subMenu1.innerHTML = '';
            subMenu1.style.top = '0';
        }
        i++;
    }

    if(active) {
        subMenu1.style.top = '100%'
        buildSubMenu1(menuItems[param].subLinks);
    }

    mainMenuPageHdgs(e.target.text);
})

subMenu1.addEventListener('click', (e) => {
    e.preventDefault();
    if(e.target.tagName !== 'A') {
        return;
    }
    e.target.classList.toggle('activeLink');

    let allAnchorTags = document.querySelectorAll('a');
    for(let anchor of allAnchorTags) {
        if(e.target !== anchor && anchor.classList.contains('activeLink')) {
            anchor.classList.remove('activeLink');
            subMenu2.style.top = '0';
        } else if(e.target === anchor && anchor.classList.contains('activeLink')) {
            switch(whosActive) {
                case 'kitchens':
                    kitchen(e.target.text);
                    break;
                case 'baths':
                    bath(e.target.text);
                    break;
                case 'gardens':
                    garden(e.target.text);
                    break;
                case 'animals':
                    animal(e.target.text);
                    break;
                case 'sports':
                    sport(e.target.text);
                    break;
                case 'holidays':
                    holiday(e.target.text);
                    break;
                default:
                    break;
            }
        } else if(e.target.text !== 'Recipes') {
            subMenu2.innerHTML = '';
        }
    }
})

const kitchen = (value) => {
    H2.classList.add('subMenu1Header')
    if(value === 'Current...') {
        (() => {
            // H2.replaceWith('');

            H2.replaceWith('');
            H1.innerText = 'Current Kitchens';
            // H2.classList.add('kitchen')
            H2.innerHTML = 'Kitchens';
            div1.append(H2);
        })();
    } else if(value === 'Dream...') {
        (() => {
            H2.replaceWith('');
            H1.innerText = 'Dream Kitchens';
        })();
    } else if(value === 'Ideas') {
        (() => {
            H2.replaceWith('');
            H1.innerText = 'Ideas';
        })();
    } else if(value === 'Memories') {
        (() => {
            H2.replaceWith('');
            H1.innerText = 'Memories';
        })();
    } else if(value === 'Recipes') {
        (() => {
            H2.replaceWith('');
            H1.innerText = 'Recipes';
        })();
    } else if(value === 'Wishlist') {
        (() => {
            H2.replaceWith('');
            H1.innerText = 'Wishlist';
        })();
    } else if(value === 'Questions') {
        (() => {
            H2.replaceWith('');
            H1.innerText = 'Questions';
        })();
    }
}

const bath = (value) => {
    if(value === 'Current Bath') {
        (() => {
            H2.replaceWith('Current Bath');
            H1.innerText = 'Bath';
        })();
    } else if(value === 'Dream Bath') {
        (() => {
            H2.replaceWith('');
            H1.innerText = 'Dream Bath';
        })();
    } else if(value === 'Ideas') {
        (() => {
            H2.replaceWith('');
            H1.innerText = 'Ideas';
        })();
    } else if(value === 'Memories') {
        (() => {
            H2.replaceWith('');
            H1.innerText = 'Memories';
        })();
    } else if(value === 'Wishlist') {
        (() => {
            H2.replaceWith('');
            H1.innerText = 'Wishlist';
        })();
    } else if(value === 'Questions') {
        (() => {
            H2.replaceWith('');
            H1.innerText = 'Questions';
        })();
    }
}

const garden = (value) => {
    if(value === 'Fertilizers') {
        (() => {
            H2.replaceWith('');
            H1.innerText = 'Fertilizers';
        })();
    } else if(value === 'Flowers') {
        (() => {
            H2.replaceWith('');
            H1.innerText = 'Flowers';
        })();
    } else if(value === 'Fruits') {
        (() => {
            H2.replaceWith('');
            H1.innerText = 'Fruits';
        })();
    } else if(value === 'Grass') {
        (() => {
            H2.replaceWith('');
            H1.innerText = 'Grass';
        })();
    } else if(value === 'Greenhouse') {
        (() => {
            H2.replaceWith('');
            H1.innerText = 'Greenhouse';
        })();
    } else if(value === 'Landscapes') {
        (() => {
            H2.replaceWith('');
            H1.innerText = 'Landscapes';
        })();
    } else if(value === 'Questions') {
        (() => {
            H2.replaceWith('');
            H1.innerText = 'Questions';
        })();
    } else if(value === 'Shrubs') {
        (() => {
            H2.replaceWith('');
            H1.innerText = 'Shrubs';
        })();
    } else if(value === 'Snakes') {
        (() => {
            H2.replaceWith('');
            H1.innerText = 'Snakes';
        })();
    } else if(value === 'Trees') {
        (() => {
            H2.replaceWith('');
            H1.innerText = 'Trees';
        })();
    }
}

const animal = (value) => {
    if(value === 'Pets') {
        (() => {
            H2.replaceWith('');
            H1.innerText = 'Pets';
        })();
    } else if(value === 'Food') {
        (() => {
            H2.replaceWith('');
            H1.innerText = 'Food';
        })();
    } else if(value === 'For Sale') {
        (() => {
            H2.replaceWith('');
            H1.innerText = 'Animals For Sale';
        })();
    } else if(value === 'Memories') {
        (() => {
            H2.replaceWith('');
            H1.innerText = 'Memories of Animals';
        })();
    } else if(value === 'Wishlist') {
        (() => {
            H2.replaceWith('');
            H1.innerText = 'Wishlist';
        })();
    } else if(value === 'Questions') {
        (() => {
            H2.replaceWith('');
            H1.innerText = 'Questions';
        })();
    }
}

const sport = (value) => {
    if(value === 'Balling') {
        (() => {
            H2.replaceWith('');
            H1.innerText = 'Balling';
        })();
    } else if(value === 'Boating') {
        (() => {
            H2.replaceWith('');
            H1.innerText = 'Boating';
        })();
    } else if(value === 'Cycling') {
        (() => {
            H2.replaceWith('');
            H1.innerText = 'Cycling';
        })();
    } else if(value === 'Fishing') {
        (() => {
            H2.replaceWith('');
            H1.innerText = 'Fishing';
        })();
    } else if(value === 'Golfing') {
        (() => {
            H2.replaceWith('');
            H1.innerText = 'Golfing';
        })();
    } else if(value === 'Hunting') {
        (() => {
            H2.replaceWith('');
            H1.innerText = 'Hunting';
        })();
    } else if(value === 'Memories') {
        (() => {
            H2.replaceWith('');
            H1.innerText = 'Sports Memories';
        })();
    } else if(value === 'Running') {
        (() => {
            H2.replaceWith('');
            H1.innerText = 'Running';
        })();
    } else if(value === 'Swimming') {
        (() => {
            H2.replaceWith('');
            H1.innerText = 'Swimming';
        })();
    }
}

const holiday = (value) => {
    if(value === 'Christmas') {
        (() => {
            H2.replaceWith('');
            H1.innerText = 'Christmas';
        })();
    } else if(value === 'Cinco de Mayo') {
        (() => {
            H2.replaceWith('');
            H1.innerText = 'Cinco de Mayo';
        })();
    } else if(value === 'Easter') {
        (() => {
            H2.replaceWith('');
            H1.innerText = 'Easter';
        })();
    } else if(value === 'Hanukkah') {
        (() => {
            H2.replaceWith('');
            H1.innerText = 'Hanukkah';
        })();
    } else if(value === 'Labor Day') {
        (() => {
            H2.replaceWith('');
            H1.innerText = 'Labor Day';
        })();
    } else if(value === 'Martin Luther King Day') {
        (() => {
            H2.replaceWith('');
            H1.innerText = 'Martin Luther King Day';
        })();
    } else if(value === 'Memorial Day') {
        (() => {
            H2.replaceWith('');
            H1.innerText = 'Memorial Day';
        })();
    } else if(value === 'Juneteenth') {
        (() => {
            H2.replaceWith('');
            H1.innerText = 'Juneteenth';
        })();
    } else if(value === 'New Year\'s') {
        (() => {
            H2.replaceWith('');
            H1.innerText = 'New Year\'s';
        })();
    } else if(value === 'St Patrick\'s Day') {
        (() => {
            H2.replaceWith('');
            H1.innerText = 'St Patrick\'s Day';
        })();
    } else if(value === 'Thanksgiving') {
        (() => {
            H2.replaceWith('');
            H1.innerText = 'Thanksgiving';
        })();
    } else if(value === 'Veteran\'s Day') {
        (() => {
            H2.replaceWith('');
            H1.innerText = 'Veteran\'s Day';
        })();
    }
}

const mainMenuPageHdgs = (value) => {
    whosActive = value;
    if(value === 'about') {
        (() => {
            H2.replaceWith('');
            H1.innerText = 'About Our Shared Portfolio';
        })();
    } else if(value === 'kitchens') {
        (() => {
            H2.replaceWith('');
            H1.innerText = 'The All Things Kitchen Portfolio'
            H2.classList.add('kitchen')
            H2.innerHTML = `<span class="bold">Everything Kitchen: &nbsp</span> (<i> wishlist, recipes, images, current/dream kitchen, etc.</li>)`;
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
            H1.innerText = 'The Portfolio of Our Friends and  Food';
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