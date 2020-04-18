// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each 'article' in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Use your function to create a card for each of the articles and add the card to the DOM.

const cardsCont = document.querySelector('.cards-container')

axios.get('https://lambda-times-backend.herokuapp.com/articles').then( response => {
    cardInfo(response)
}).catch( err => { console.log(err) })

function cardInfo (response) {
        const articles = [response.data.articles];
        articles.forEach( topics => {
            topicsArr = Object.entries(topics)
            topicsArr.forEach( items => {
                const arrays = items[1]
                arrays.forEach(obj => {
                   const cardI = Cards(obj)
                   cardsCont.appendChild(cardI)
                })
            })
        })
}

// cardInfo();

function Cards( obj ) {
    const cardDiv = document.createElement('div')
    cardDiv.classList.add('card')

    const headline = document.createElement('div')
    headline.classList.add('headline')
    headline.textContent = obj.headline

    const author = document.createElement('div')
    author.classList.add('author')

    const imgCont = document.createElement('div')
    imgCont.classList.add('img-container')

    const image = document.createElement('img')
    image.src = obj.authorPhoto
    
    const by = document.createElement('span')
    by.textContent = obj.authorName

    imgCont.appendChild(image)
    author.appendChild(imgCont)
    author.appendChild(by)
    cardDiv.appendChild(headline)
    cardDiv.appendChild(author)

    return cardDiv

}