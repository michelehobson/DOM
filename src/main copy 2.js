const menuItems = [
    { text: 'about', href: '#' },
    {
        text: 'kitchens', href: '#', subLinks: [
            { text: 'Current Kitchen', href: '#' },
            { text: 'Dream Kitchen', href: '#' },
            { text: 'Ideas', href: '#' },
            { text: 'Memories', href: '#' },
            {
                text: 'Recipes', href: '#', subLinks: [
                    {
                        text: 'Food', href: '#', subLinks: [
                            { text: 'Adults', href: '#' },
                            { text: 'Children', href: '#' },
                            { text: 'Desserts', href: '#' },
                        ]
                    },
                    {
                        text: 'Beverages', href: '#', subLinks: [
                            { text: 'Alcoholic', href: '#' },
                            { text: 'Non-alcoholic', href: '#' },
                        ]
                    },
                ]
            },
            { text: 'Wishlist', href: '#' },
            { text: 'Questions', href: '#' },
        ]
    },
    {
        text: 'baths', href: '#', subLinks: [
            { text: 'Current Bath', href: '#' },
            { text: 'Dream Bath', href: '#' },
            { text: 'Ideas', href: '#' },
            { text: 'Memories', href: '#' },
            { text: 'Wishlist', href: '#' },
            { text: 'Questions', href: '#' },
        ]
    },
    {
        text: 'gardens', href: '#', subLinks: [
            { text: 'Fertilizers', href: '#' },
            { text: 'Flowers', href: '#' },
            { text: 'Fruits', href: '#' },
            { text: 'Grass', href: '#' },
            { text: 'Greenhouse', href: '#' },
            { text: 'Landscapes', href: '#' },
            { text: 'Questions', href: '#' },
            { text: 'Shrubs', href: '#' },
            { text: 'Snakes', href: '#' },
            { text: 'Trees', href: '#' },
        ]
    },
    {
        text: 'animals', href: '#', subLinks: [
            { text: 'Pets', href: '#' },
            { text: 'Food', href: '#' },
            { text: 'For Sale', href: '#' },
            { text: 'Memories', href: '#' },
            { text: 'Wishlist', href: '#' },
            { text: 'Questions', href: '#' },
        ]
    },
    {
        text: 'sports', href: '#', subLinks: [
            { text: 'Balls (basket,foot,etc)', href: '#' },
            { text: 'Boating', href: '#' },
            { text: 'Cycling', href: '#' },
            { text: 'Fishing', href: '#' },
            { text: 'Golf', href: '#' },
            { text: 'Hunting', href: '#' },
            { text: 'Memories', href: '#' },
            { text: 'Running', href: '#' },
            { text: 'Swimming', href: '#' },
        ]
    },
    {
        text: 'holidays', href: '#', subLinks: [
            { text: 'Christmas', href: '#' },
            { text: 'Cinco de Mayo', href: '#' },
            { text: 'Easter', href: '#' },
            { text: 'Hanukkah', href: '#' },
            { text: 'Labor Day', href: '#' },
            { text: 'Martin Luther King Day', href: '#' },
            { text: 'Memorial Day', href: '#' },
            { text: 'Juneteenth', href: '#' },
            { text: 'New Year', href: '#' },
            { text: 'St Patrick\'s Day', href: '#' },
            { text: 'Thanksgiving', href: '#' },
            { text: 'Veteran\'s Day', href: '#' },
            // { text: '', href: '#' },
            // { text: '', href: '#' },
            // { text: '', href: '#' },
            // { text: '', href: '#' },
            // { text: '', href: '#' },
        ]
    },
]

let mainMenu = document.querySelector( '#whichSpace' );
mainMenu.classList.add( 'whichSpace', 'a' );
// mainMenu.style.height = '100%';


let buildSubMenus = () => {
    // for (const items of menuItems) {
    console.log( menuItems.length )
    for ( let i = 0; i < menuItems.length; i++ ) {
        let ctr = 0;
        const row = menuItems[ i ];
        for ( let j = 0; j < row.length; j++ ) {
            const s1 = document.createElement( 'a' );
            s1.textContent = menuItems[ i ][ j ].text;
            s1.setAttribute( 'href', menuItems[ i ][ j ].href );
            subMenu1.append( s1 )
            for ( let k = 0; k < row.length; k++ ) {
                const s1 = document.createElement( 'a' );
                s1.textContent = menuItems[ i ][ k ].text;
                s1.setAttribute( 'href', menuItems[ i ][ k ].href );
                subMenu2.append( s1 )
            }
        }
    }
}

let subMenu1 = document.querySelector( '#subMenu1' );
let subMenu2 = document.querySelector( '#subMenu2' );
let menuLinks = loadMenu();

let H2 = document.querySelector( 'h2' );
const div1 = document.getElementById( 'div1' )
const header = document.querySelector( 'header' )
const H1 = document.querySelector( 'h1' );
H1.classList.add( 'flex-center' )

function loadMenu() {
    let i = 0;
    for ( let item of menuItems ) {
        let newItem = document.createElement( 'a' );
        newItem.textContent = item.text;
        newItem.setAttribute( 'href', item.href )
        mainMenu.append( newItem );
        let j = 0;
        for (const obj1 in menuItems[i][j]) {
            const sm1 = document.createElement( 'a' );
            sm1.textContent = menuItems[ i ][ j ].text;
            sm1.setAttribute( 'href', menuItems[ i ][ j ].href );
            subMenu1.append( sm1 )     
            let k = 0;
            for (const obj2 in menuItems[i][k])        {
                const sm2 = document.createElement( 'a' );
                sm2.textContent = menuItems[ i ][ j ].text;
                sm2.setAttribute( 'href', menuItems[ i ][ j ].href );
                subMenu2.append( sm2 )
                k++;  
            }
            j++;
        }
    }
    // for ( let item of menuItems ) {
    //     let newItem = document.createElement( 'a' );
    //     newItem.textContent = item.text;
    //     newItem.setAttribute( 'href', item.href )
    //     mainMenu.append( newItem );
    // }
    // buildSubMenus();
    return mainMenu;
}


function buildSubMenu2() {}

let clearScreen = () => {
    H2 = '';
}
const aLink = () => {
    H1.innerText = 'About Our Shared Portfolio';
}
const kLink = () => {
    H1.innerText = 'Our Shared Kitchen Portfolio'
    H2.classList.add( 'kitchen' )
    H2.innerHTML = '<span class="bold">Everything Kitchen: </span> (<i> wishlist, recipes, images, current/dream kitchen, etc./i>)';
    console.log( typeof H2 )
    div1.append( H2 );
}
const bLink = () => {
    H2.replaceWith( '' );
    H1.innerText = 'Portfolio of Our Amazing Bathrooms';
}
const gLink = () => {
    H2.replaceWith( '' );
    H1.innerText = 'Portfolio of the Green and Brown Thumbed';
}
const fLink = () => {
    H2.replaceWith( '' );
    H1.innerText = 'The Portfolio of Friends and Food';
}
const sLink = () => {
    H2.replaceWith( '' );
    H1.innerText = 'The Portfolio of All Things Sports';
}
const hLink = () => {
    H2.replaceWith( '' );
    H1.innerText = 'Holiday Portfolio';
}

mainMenu.addEventListener( 'click', ( e ) => {
    e.preventDefault();
    if ( e.target.tagName !== 'A' ) {
        return;
    }
    if ( e.target.text === 'about' ) {
        H2.replaceWith( '' );
        aLink();
    }
    else if ( e.target.text === 'kitchens' ) { kLink(); }
    else if ( e.target.text === 'baths' ) { bLink(); }
    else if ( e.target.text === 'gardens' ) { gLink(); }
    else if ( e.target.text === 'animals' ) { fLink(); }
    else if ( e.target.text === 'sports' ) { sLink(); }
    else if ( e.target.text === 'holidays' ) { hLink(); }
} )