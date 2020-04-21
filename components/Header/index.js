// STEP 1: Create a Header component.
// -----------------------
// Write a function that returns the markup you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

function Header(date) {
    const headerDiv = document.createElement('div')
	headerDiv.classList.add('header')
	

	const dateSpan = document.createElement('span')
	dateSpan.classList.add('date')
	dateSpan.textContent = date

	const titleDiv = document.createElement('h1')
	titleDiv.textContent = 'LAMBDA TIMES'

	const tempSpan = document.createElement('span')
	tempSpan.classList.add('temp')
	tempSpan.textContent = '98°'

	headerDiv.appendChild(dateSpan)
	headerDiv.appendChild(titleDiv)
	headerDiv.appendChild(tempSpan)

	return headerDiv;
}

function dateNow(){
    const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
    ];
    const fullDate = new Date()

    const month = monthNames[fullDate.getMonth()]

    const date = `${month} ${fullDate.getDay()}, ${fullDate.getFullYear()}`
     
    return date;
}

const headerCont = document.querySelector('.header-container');
const newHeader = Header(dateNow())
headerCont.appendChild(newHeader);