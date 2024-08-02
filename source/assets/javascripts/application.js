const UIkit = require('uikit')
const Icons = require('uikit/dist/js/uikit-icons')

UIkit.use(Icons)

const months = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "Novemeber", "December" ];
const days   = [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ];

function updateClock( elementId ) {

    const dt = new Date();

    let h = dt.getUTCHours().toString();
    h = h.length == 1 ? '0' + h : h;

    let m = dt.getUTCMinutes().toString();
    m = m.length == 1 ? '0' + m : m;

    let s = dt.getUTCSeconds().toString();
    s = s.length == 1 ? '0' + s : s;

    const result = days[ dt.getUTCDay() ] + ', ' + months[ dt.getUTCMonth() ] + ' ' + dt.getUTCFullYear() + ' - ' + h + ':' + m + ':' + s + ' UTC';
    document.getElementsByTagName( elementId )[0].textContent = result;

    setTimeout( updateClock.bind( this, elementId ), 100 );
}

window.addEventListener( 'DOMContentLoaded', function(e) { updateClock('h1'); } )
