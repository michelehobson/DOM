const menuItems = [
    {text: 'about', href: '#'},
    {
        text: 'kitchens', href: '#', subLinks: [
            {text: 'Current...', href: '#'},
            {text: 'Dream...', href: '#'},
            {text: 'Ideas', href: '#'},
            {text: 'Memories', href: '#'},
            {text: 'Recipes', href: '#'},
            {text: 'Wishlist', href: '#'},
            {text: 'Questions', href: '#'},
        ]
    },
    {
        text: 'baths', href: '#', subLinks: [
            {text: 'Current...', href: '#'},
            {text: 'Dream...', href: '#'},
            {text: 'Ideas', href: '#'},
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
subMenu1.classList.add('subMenu1');
subMenu1.style.height = '100%';
subMenu1.style.top = '0';

let subMenu2 = document.querySelector('#subMenu2');
subMenu2.classList.add('flex-column');
subMenu2.style.height = '100%';
subMenu2.style.top = '0';

loadMenu();

let whosActive = '';
let sentByBtnSubmit = false;

let H2 = document.querySelector('h2');
const div1 = document.getElementById('div1');
const div2 = document.getElementById('div2');
const header = document.querySelector('header');
const H1 = document.querySelector('h1');
const btnSubmit = document.querySelector('#btnSubmit');
const btnReset = document.querySelector('#btnReset');
const displayImage = document.querySelector('.displayImage')
const imgUpload = document.querySelector('#imgUpload');
let url;
let txtInput = document.getElementsByName('txtInput');
const output = document.querySelector('#output')



txtInput.hidden = true;

H1.classList.add('flex-center');

document.querySelector('.div2').style.display = 'none';

let activeLink = '';
let activeSubLink = '';

const mainMenuPageHdgs = (value) => {
    whosActive = value;
    H2.replaceWith('');
    document.querySelector('.div2').style.display = 'none';
    if(value === 'about') {
        (() => {
            H1.innerText = 'About Our Shared Portfolio';
        })();
    } else if(value === 'kitchens') {
        (() => {
            H1.innerText = 'The All Things Kitchen Portfolio'
            H2.classList.add('kitchen')
            H2.innerHTML = `<span class="bold">Everything Kitchen: &nbsp</span> (<i> wishlist, recipes, images, current/dream kitchen, etc.</li>)`;
            div1.append(H2);
        })();
    } else if(value === 'baths') {
        (() => {
            H1.innerText = 'Portfolio of Our Amazing Bathrooms';
        })();
    } else if(value === 'gardens') {
        (() => {
            H1.innerText = 'Portfolio of the Green and Brown Thumbed';
        })();
    } else if(value === 'animals') {
        (() => {
            H1.innerText = 'The Portfolio of Our Friends and  Food';
        })();
    } else if(value === 'sports') {
        (() => {
            H1.innerText = 'The Portfolio of All Things Sports';
        })();
    } else if(value === 'holidays') {
        (() => {
            H1.innerText = 'Holiday Portfolio';
        })();
    }
}


const writeLocal = (key) => {
    if(sentByBtnSubmit) {
        const readAndWrite = document.getElementById("readAndWrite");

        const readWrite = document.createElement('DIV');
        readWrite.className = 'readWrite';
        readAndWrite.appendChild(readWrite);

        const h = document.createElement("H2");
        h.innerText = document.querySelector('#hdr').value;
        readWrite.appendChild(h);

        const p = document.createElement("P");
        p.innerText = document.querySelector('#txtInput').value;
        readWrite.appendChild(p);

        let i = document.createElement('IMG');
        i.value = document.querySelector('#imgUpload').value;
        i.src = url;
        readWrite.appendChild(i);

        localStorage.setItem(key, readAndWrite.innerHTML);
        localStorage.getItem(key);
        // alert("localStorage (Key):\n" + localStorage.getItem(key));
    }
}

const kitchen = (value) => {
    txtInput.hidden = false;
    imgUpload.hidden = false;
    btnReset.hidden = false;
    btnSubmit.hidden = false;

    if(value === 'Current...') {
        (() => {
            H1.innerText = 'Current Kitchens';
            localStorage.getItem('kitCur')
            writeLocal('kitCur');
        })();
    } else if(value === 'Dream...') {
        (() => {
            H1.innerText = 'Dream Kitchens';
            writeLocal('kitDream');
        })();
    } else if(value === 'Ideas') {
        (() => {
            H1.innerText = 'Kitchen Ideas';
            writeLocal('kitIdeas');
        })();
    } else if(value === 'Memories') {
        (() => {
            H1.innerText = 'Kitchen Memories';
            writeLocal('kitMemory');
        })();
    } else if(value === 'Recipes') {
        (() => {
            H1.innerText = 'Recipes';
            writeLocal('kitRecipes');
        })();
    } else if(value === 'Wishlist') {
        (() => {
            H1.innerText = 'Kitchen Wishlist';
            writeLocal('kitWish');
        })();
    } else if(value === 'Questions') {
        (() => {
            H1.innerText = 'Kitchen Questions';
            writeLocal('kitQA');
        })();
    }
}

const bath = (value) => {
    if(value === 'Current...') {
        (() => {
            H1.innerText = 'Current Bathroom';
            writeLocal('bathCur');
        })();
    } else if(value === 'Dream...') {
        (() => {
            H1.innerText = 'Dream Bathrooms';
            writeLocal('bathDream');
        })();
    } else if(value === 'Ideas') {
        (() => {
            H1.innerText = 'Bathroom Ideas';
            writeLocal('bathIdeas');
        })();
    } else if(value === 'Wishlist') {
        (() => {
            H1.innerText = 'Bathroom Wishlist';
            writeLocal('bathWish');
        })();
    } else if(value === 'Questions') {
        (() => {
            H1.innerText = 'Bathroom Questions';
            writeLocal('bathQA');
        })();
    }
}

const garden = (value) => {
    if(value === 'Fertilizers') {
        (() => {
            H1.innerText = 'Fertilizers';
            writeLocal('garFert');
        })();
    } else if(value === 'Flowers') {
        (() => {
            H1.innerText = 'Flowers';
            writeLocal('garFlwr');
        })();
    } else if(value === 'Fruits') {
        (() => {
            H1.innerText = 'Fruits & Vegetables';
            writeLocal('garFruits');
        })();
    } else if(value === 'Grass') {
        (() => {
            H1.innerText = 'Grass';
            writeLocal('garGrass');
        })();
    } else if(value === 'Greenhouse') {
        (() => {
            H1.innerText = 'Greenhouse';
            writeLocal('garHouse');
        })();
    } else if(value === 'Landscapes') {
        (() => {
            H1.innerText = 'Landscapes';
            writeLocal('garScapes');
        })();
    } else if(value === 'Questions') {
        (() => {
            H1.innerText = 'Garden Questions';
            writeLocal('garQA');
        })();
    } else if(value === 'Shrubs') {
        (() => {
            H1.innerText = 'Shrubs';
            writeLocal('garShrubs');
        })();
    } else if(value === 'Snakes') {
        (() => {
            H1.innerText = 'Snakes';
            writeLocal('garSnakes');
        })();
    } else if(value === 'Trees') {
        (() => {
            H1.innerText = 'Trees';
            writeLocal('garTrees');
        })();
    }
}

const animal = (value) => {
    if(value === 'Pets') {
        (() => {
            H1.innerText = 'Pets';
            writeLocal('aniPets');
        })();
    } else if(value === 'Food') {
        (() => {
            H1.innerText = 'Animals For Food';
            writeLocal('aniFood');
        })();
    } else if(value === 'For Sale') {
        (() => {
            H1.innerText = 'Animals For Sale';
            writeLocal('ani4Sale');
        })();
    } else if(value === 'Memories') {
        (() => {
            H1.innerText = 'Memories of Animals';
            writeLocal('aniMemory');
        })();
    } else if(value === 'Wishlist') {
        (() => {
            H1.innerText = 'Animal Wishlist';
            writeLocal('aniWish');
        })();
        writeLocal('ani');
    } else if(value === 'Questions') {
        (() => {
            H1.innerText = 'Animal Questions';
            writeLocal('aniQA');
        })();
    }
}

const sport = (value) => {
    if(value === 'Balling') {
        (() => {
            H1.innerText = 'Balling';
            writeLocal('sportBall');
        })();
    } else if(value === 'Boating') {
        (() => {
            H1.innerText = 'Boating';
            writeLocal('sportBoat');
        })();
    } else if(value === 'Cycling') {
        (() => {
            H1.innerText = 'Cycling';
            writeLocal('sportCycle');
        })();
    } else if(value === 'Fishing') {
        (() => {
            H1.innerText = 'Fishing';
            writeLocal('sportFish');
        })();
    } else if(value === 'Golfing') {
        (() => {
            H1.innerText = 'Golfing';
            writeLocal('sportGolf');
        })();
    } else if(value === 'Hunting') {
        (() => {
            H1.innerText = 'Hunting';
            writeLocal('sportHunt');
        })();
    } else if(value === 'Memories') {
        (() => {
            H1.innerText = 'Sports Memories';
            writeLocal('sportMemory');
        })();
    } else if(value === 'Running') {
        (() => {
            H1.innerText = 'Running';
            writeLocal('sportRun');
        })();
    } else if(value === 'Swimming') {
        (() => {
            H1.innerText = 'Swimming';
            writeLocal('sportSwim');
        })();
    }
}

const holiday = (value) => {
    if(value === 'Christmas') {
        (() => {
            H1.innerText = 'Christmas';
            writeLocal('holXmas');
        })();
    } else if(value === 'Cinco de Mayo') {
        (() => {
            H1.innerText = 'Cinco de Mayo';
            writeLocal('holCinco');
        })();
    } else if(value === 'Easter') {
        (() => {
            H1.innerText = 'Easter';
            writeLocal('holEaster');
        })();
    } else if(value === 'Hanukkah') {
        (() => {
            H1.innerText = 'Hanukkah';
            writeLocal('holHanuka');
        })();
    } else if(value === 'Labor Day') {
        (() => {
            H1.innerText = 'Labor Day';
            writeLocal('holLabor');
        })();
    } else if(value === 'Martin Luther King Day') {
        (() => {
            H1.innerText = 'Martin Luther King Day';
            writeLocal('holMLK');
        })();
    } else if(value === 'Memorial Day') {
        (() => {
            H1.innerText = 'Memorial Day';
            writeLocal('holMem');
        })();
    } else if(value === 'Juneteenth') {
        (() => {
            writeLocal('holJune');
            H1.innerText = 'Juneteenth';
        })();
    } else if(value === 'New Year\'s') {
        (() => {
            H1.innerText = 'New Year\'s';
            writeLocal('holNewYr');
        })();
    } else if(value === 'St Patrick\'s Day') {
        (() => {
            H1.innerText = 'St Patrick\'s Day';
            writeLocal('holPatty');
        })();
    } else if(value === 'Thanksgiving') {
        (() => {
            H1.innerText = 'Thanksgiving';
            writeLocal('holThanks');
        })();
    } else if(value === 'Veteran\'s Day') {
        (() => {
            H1.innerText = 'Veteran\'s Day';
            writeLocal('holVet');
        })();
    }
}

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
            H2.replaceWith('');
            document.querySelector('.div2').style.display = 'flex';
            switch(whosActive) {
                case 'kitchens':
                    activeSubLink = e.target.text;
                    kitchen(e.target.text);
                    break;
                case 'baths':
                    activeSubLink = e.target.text;
                    bath(e.target.text);
                    break;
                case 'gardens':
                    activeSubLink = e.target.text;
                    garden(e.target.text);
                    break;
                case 'animals':
                    activeSubLink = e.target.text;
                    animal(e.target.text);
                    break;
                case 'sports':
                    activeSubLink = e.target.text;
                    sport(e.target.text);
                    break;
                case 'holidays':
                    activeSubLink = e.target.text;
                    holiday(e.target.text);
                    break;
                default:
                    activeSubLink = '';
                    break;
            }
        } else if(e.target.text !== 'Recipes') {
            subMenu2.innerHTML = '';
        }
    }
})

imgUpload.addEventListener('change', () => {
    const reader = new FileReader();
    reader.readAsDataURL(imgUpload.files[0]);
    reader.addEventListener('load', () => {
        url = reader.result;
        let image = document.getElementById('output');
        image.src = url;
    })
})

btnSubmit.addEventListener('click', (e) => {
    e.preventDefault();
    let stopTheSubmission = false;
    if(imgUpload.files.length > 0) {
        let ext = imgUpload.value.split('.').pop();
        if(ext !== 'jpg' && ext !== 'png' && ext !== 'jpeg' && ext !== 'gif') {
            const h3 = document.getElementById('iFt');
            const node = document.createTextNode('Invalid File Type');
            h3.appendChild(node);
            const s1 = document.getElementById('s1');
            s1.append(document.getElementById('s1').firstElementChild.textContent);
            console.log('firstElementChild: ' + document.getElementById('s1').firstElementChild.textContent);
            alert('jpeg, jpg, png, and gif are the only accepted formats.')
            stopTheSubmission = true
        }
    } else {
        imgUpload = document.getElementById('output');
        image.src = URL.createObjectURL(e.target.files[0]);
    }
    if(txtInput.length === 0) {
        txtInput.focus();
        stopTheSubmission = true;
    }

    if(!stopTheSubmission) {
        H2.replaceWith('');
        sentByBtnSubmit = true;
        switch(whosActive) {
            case 'kitchens':
                kitchen(activeSubLink);
                break;
            case 'baths':
                bath(activeSubLink);
                break;
            case 'gardens':
                garden(activeSubLink);
                break;
            case 'animals':
                animal(activeSubLink);
                break;
            case 'sports':
                sport(activeSubLink);
                break;
            case 'holidays':
                holiday(activeSubLink);
                break;
            default:
                break;
        }
        sentByBtnSubmit = false;
    }
})

btnReset.addEventListener('click', () => {
    txtInput.value = '';
    const file = document.querySelector('#imgUpload');
    file.value = '';
})

output.addEventListener('click', () => {
    growImage = document.querySelector('#output');
    growImage.classList.add('growImage');
    window.open();
  
})
