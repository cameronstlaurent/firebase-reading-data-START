


function renderUser (data=null){
    const template = `
    <li class="user">
    <figure>
    <img src="assets/images/jimbits-vacations-1.jpg" width="160" height="110" alt="placeholder image">
    <figcaption>name</figcaption>
    </figure>
    </li>
    `
    const element = document.createRange().createContextualFragment(template).children[0]

    return element
    }

    export {renderUser} 