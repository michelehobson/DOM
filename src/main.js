const H1 = document.getElementById('#H1');
const menuAnchors = document.getElementsByName('a')
// let classesToAdd = []
// let concatClass = '';

const menuItems = [
    {text: 'about', href: '#'}, {text: 'kitchens', href: '#'}, {text: 'bath rooms', href: '#'}, {text: 'garden', href: '#'}, {text: 'farm', href: '#'}, {text: 'outdoor', href: '#'}
]

let mainMenu = document.querySelector('#whichSpace');
let menuLinks = loadMenu();
mainMenu.classList.add('whichSpace', 'a');


function loadMenu() {
    for ( let item of menuItems ) {
        let newItem = document.createElement( 'a' );
        newItem.textContent = item.text;
        newItem.setAttribute('href', item.href)
        mainMenu.append( newItem );
    }
    return mainMenu;
}

// function concatClasses(a, b) {
//     // let nav = document.querySelector( '#whichSpace' );
//     classesToAdd = [a, b]
//     console.log(classesToAdd)
//     classesToAdd.forEach( function ( token, index ) {
//         concatClass += index + " " + token
//     } )
//     return concatClass;
// }

