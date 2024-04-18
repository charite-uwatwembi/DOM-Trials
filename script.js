// function changeAllArticlesColors(){
//     let product = document.querySelector('#products')
//     console.log(product)
//     let article = product.querySelectorAll('article')

//     for(let element of article){
//         element.classList.add('sale')
//     }
    

// }

// changeAllArticlesColors()

// function attachBuyEvents() {
//     let product = document.querySelector('#products')
//      let articles = product.querySelectorAll('article')
     
//      for(let article of articles){
//         const buttons = article.querySelectorAll('button')   
         

//     buttons.forEach(button => {
//         button.addEventListener('click', function(e) {
//             console.log(e.currentTarget);
             
//         });
//     });
// }
// }

// attachBuyEvents();

//Attributes


function attachBuyEvents() {
    let product = document.querySelector('#products')
     let articles = product.querySelectorAll('article')
     
     for(let article of articles){
        const buttons = article.querySelectorAll('button')   
         

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            console.log(button.parentNode)
             button.parentNode.classList.toggle('sale')
            let data = button.parentNode.getAttribute('data-id')
            console.log(data)
            let h2 = article.querySelector('h2').textContent
            console.log('The name of the product is:',h2)
            let price = article.querySelector('.price').textContent
            console.log('The price of the product is:', price)
            let quantity = article.querySelector('input[type="number"]').value
            
            console.log('The quantity of the product is:', quantity)

            const table = document.querySelector('#cart table');
            const tbody = table.querySelector('tbody');
        });
    });
}
}

attachBuyEvents();