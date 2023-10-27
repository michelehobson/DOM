const H1 = document.getElementById('#H1');

const menuItems = [
    {text: 'about'}, {text: 'kitchens'}, {text: 'bath rooms'}, {text: 'garden'}, {text: 'farm'}, {text: 'outdoor'}
]

let mainMenu = document.querySelector('#whichSpace');
let menuLinks = loadMenu();

function loadMenu() {
    for ( let item of menuItems ) {
        let newItem = document.createElement( 'a' );
        newItem.textContent = item.text;
        mainMenu.append( newItem );
    }
    return mainMenu;
}
