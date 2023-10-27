const menuAnchors = document.getElementsByName('a')

const menuItems = [{text: 'about', href: '#'}, {text: 'kitchen', href: '#'}, {text: 'bathroom', href: '#'}, {text: 'garden', href: '#'}, {text: 'farm', href: '#'}, {text: 'outdoor', href: '#'}]

let mainMenu = document.querySelector('#whichSpace');
let menuLinks = loadMenu();
mainMenu.classList.add('whichSpace', 'a');

const header = document.querySelector('header')
const H1 = document.getElementById('#H1');

function loadMenu() {
    for ( let item of menuItems ) {
        let newItem = document.createElement( 'a' );
        newItem.textContent = item.text;
        newItem.setAttribute('href', item.href)
        mainMenu.append( newItem );
    }
    return mainMenu;
}

const aLink = () => {
    
}
const kLink = () => {}
const bLink = () => {}
const gLink = () => {}
const fLink = () => {}
const oLink = () => {}
mainMenu.addEventListener('click', (e) => {
    e.preventDefault();
    if (e.target.tagName !== 'A') {
        return;
    }
    if (e.target.text === 'about') {

    } else if (e.target.text === 'kitchen'){
    } else if (e.target.text === 'bath'){
    } else if (e.target.text === 'garden'){
    } else if (e.target.text === 'farm'){
    } else if (e.target.text === 'outdoor'){
    } else if (e.target.text === ''){}
})

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

