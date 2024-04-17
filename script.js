// function changeAllArticlesColors(){
//     let product = document.querySelector('#products')
//     console.log(product)
//     let article = product.querySelectorAll('article')

//     for(let element of article){
//         element.classList.add('sale')
//     }
    

// }

// changeAllArticlesColors()

function attachBuyEvents() {
    let product = document.querySelector('#products')
     let articles = product.querySelectorAll('article')
     
     for(let article of articles){
        const buttons = article.querySelectorAll('button')   
         

    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            console.log(e.currentTarget);
             
        });
    });
}
}

attachBuyEvents();
