const menuItems = [ { text: 'about', href: '#' }, { text: 'kitchens', href: '#' }, { text: 'baths', href: '#' }, { text: 'gardens', href: '#' }, { text: 'animals', href: '#' }, { text: 'outdoors', href: '#' }, { text: 'holidays', href: '#' } ]

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

