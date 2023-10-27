const menuItems = [
    { text: 'about', href: '#' },
    {
        text: 'kitchens', href: '#', subLinks: [
            { text: 'Current Kitchen', href: '#' },
            { text: 'Dream Kitchen', href: '#' },
            { text: 'Ideas', href: '#' },
            { text: 'Memories', href: '#' },
            { text: 'Recipes', href: '#' },
            { text: 'Wishlist', href: '#' },
            { text: 'Questions', href: '#' },
            // { text: '', href: '#' },
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
            // { text: '', href: '#' },
            // { text: '', href: '#' },
        ]
    },
    {
        text: 'gardens', href: '#', subLinks: [
            { text: '', href: '#' },
            { text: '', href: '#' },
            { text: '', href: '#' },
            { text: '', href: '#' },
            { text: '', href: '#' },
            { text: 'Questions', href: '#' },
            { text: '', href: '#' },
            { text: '', href: '#' },
        ]
    },
    {
        text: 'animals', href: '#', subLinks: [
            { text: 'Pets', href: '#' },
            { text: 'Food', href: '#' },
            { text: 'Memories', href: '#' },
            { text: 'Mortgage', href: '#' },
            { text: 'Wishlist', href: '#' },
            { text: '', href: '#' },
            { text: '', href: '#' },
            { text: '', href: '#' },
            { text: '', href: '#' },
        ]
    },
    {
        text: 'outdoors', href: '#', subLinks: [
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
            { text: '', href: '#' },
            { text: '', href: '#' },
            { text: 'Easter', href: '#' },
            { text: '', href: '#' },
            { text: '', href: '#' },
            { text: '', href: '#' },
            { text: 'Hanukkah', href: '#' },
            { text: '', href: '#' },
            { text: '', href: '#' },
            { text: '', href: '#' },
            { text: '', href: '#' },
            { text: '', href: '#' },
            { text: '', href: '#' },
            { text: '', href: '#' },
            { text: '', href: '#' },
            { text: '', href: '#' },
            { text: '', href: '#' },
            { text: '', href: '#' },
            { text: '', href: '#' },
        ]
    },
]

let mainMenu = document.querySelector( '#whichSpace' );
let menuLinks = loadMenu();
mainMenu.classList.add( 'whichSpace', 'a' );

let H2 = document.querySelector( 'h2' );
const div1 = document.getElementById( 'div1' )
const header = document.querySelector( 'header' )
const H1 = document.querySelector( 'h1' );
H1.classList.add( 'flex-center' )

function loadMenu() {
    for ( let item of menuItems ) {
        let newItem = document.createElement( 'a' );
        newItem.textContent = item.text;
        newItem.setAttribute( 'href', item.href )
        mainMenu.append( newItem );
    }
    return mainMenu;
}

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
const oLink = () => {
    H2.replaceWith( '' );
    H1.innerText = 'The Portfolio of All Things Outdoors';
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
    else if ( e.target.text === 'outdoors' ) { oLink(); }
    else if ( e.target.text === 'holidays' ) { hLink(); }
} )

// let classesToAdd = []
// let concatClass = '';

// function concatClasses(a, b) {
//     // let nav = document.querySelector( '#whichSpace' );
//     classesToAdd = [a, b]
//     console.log(classesToAdd)
//     classesToAdd.forEach( function ( token, index ) {
//         concatClass += index + " " + token
//     } )
//     return concatClass;
// }

