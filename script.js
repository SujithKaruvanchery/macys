function getAllData() {
    fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then(json => {

        let allProducts = json
        console.log(allProducts)

        let productList = document.getElementById("product-list")

        for (let i = 0; i < allProducts.length; i++) {
            let productElement = document.createElement("div")

            productElement.classList.add("col-12")
            productElement.classList.add("col-sm-6")
            productElement.classList.add("col-md-4")
            productElement.classList.add("col-lg-4")
            productElement.classList.add("col-xl-3")
            productElement.classList.add("col-xxl-3")

            productElement.innerHTML = `<div class="card d-flex mt-4">
                                                    <img src="${allProducts[i].image}" class="card-img-top product-image" alt="..." />
                                                <div class="card-body">
                                                    <h5 class="card-title card-title">${allProducts[i].title}</h5>
                                                    <h3 class="price-tag">$${allProducts[i].price}</h3>
                                                    <p class="card-text product-des">${allProducts[i].description}</p>
                                                    <div class="buttons">
                                                      <a href="#" class="btn btn-outline-dark btn-sm">View product</a>
                                                      <a href="#" class="btn btn-outline-secondary btn-sm">Add to cart</a>
                                                    </div>
                                                </div>
                                        </div>`

            productList.appendChild(productElement)
        }
    })
    .catch((err) => {
        console.log(err)
    })
}



function filterProducts() {

    let maxprice = document.getElementById("max-price-input").value
    fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(json => {

            let allProducts = json.filter((p) =>{
                return  p.price < maxprice
            })
            console.log(maxprice)

            let productListElement = document.getElementById("product-list")
            productListElement.innerHTML = " "

            for (let i = 0; i < allProducts.length; i++) {
                let productElement = document.createElement("div")

                productElement.classList.add("col-12")
                productElement.classList.add("col-sm-6")
                productElement.classList.add("col-md-4")
                productElement.classList.add("col-lg-4")
                productElement.classList.add("col-xl-3")
                productElement.classList.add("col-xxl-3")

                productElement.innerHTML = `<div class="card">
                                                    <img src="${allProducts[i].image}" class="card-img-top product-image" alt="..." />
                                                <div class="card-body">
                                                    <h5 class="card-title card-title">${allProducts[i].title}</h5>
                                                    <h3 class="price-tag">$${allProducts[i].price}</h3>
                                                    <p class="card-text product-des">${allProducts[i].description}</p>
                                                    <div class="buttons">
                                                      <a href="#" class="btn btn-outline-dark btn-sm">View product</a>
                                                      <a href="#" class="btn btn-outline-secondary btn-sm">Add to cart</a>
                                                    </div>
                                                </div>
                                            </div>`

                productListElement.appendChild(productElement)
            }
        })
        .catch((err) => {
            console.log(err)
        })
}

getAllData()