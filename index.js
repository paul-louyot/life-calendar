let now = new Date();
let year = now.getFullYear();
let date = new Date( `${year}-03-18` );
let weeks = ( now - date ) / ( 1000 * 60 * 60 * 24 * 7 );
yearlyWeekNumber = Math.floor( weeks % 52 );
document.querySelector( '#text' ).innerText = yearlyWeekNumber;
