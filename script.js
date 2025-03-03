const products = [
  {
    name: 'Camiseta FC Barcelona 2024/25',
    price: 29.99,
    liga: 'LaLiga',
    equipo: 'Barça',
    año: 2024,
    class: 'camiseta',
    stars: 5,
    image:
      'https://images.footballfanatics.com/barcelona/barcelona-nike-home-dri-fit-adv-match-shirt-2024-25_ss5_p-200889581+u-edbeajh1biq4sma7lq1p+v-35p0fbx8wxxe3zolteeb.jpg?_hv=2&w=340'
  },
  {
    name: 'Camiseta Real Madrid 2024/25 ',
    price: 29.99,
    liga: 'LaLiga',
    equipo: 'Madrid',
    año: 2024,
    class: 'camiseta',
    stars: 5,
    image:
      'https://images.footballfanatics.com/real-madrid/real-madrid-adidas-home-shirt-2024-25-kids_ss5_p-201163122+u-qmkfh5xu8zoza52p2eig+v-5alu4negec4bntai0yp7.jpg?_hv=2&w=340v'
  },
  {
    name: 'Camiseta Atlético de Madrid 2024/25',
    price: 29.99,
    liga: 'LaLiga',
    equipo: 'Atleti',
    año: 2024,
    class: 'camiseta',
    stars: 5,
    image:
      'https://images.footballfanatics.com/atletico-de-madrid/atl%C3%A9tico-de-madrid-nike-third-stadium-shirt-2024-25_ss5_p-201441548+u-riq3j3oqvepzf77i6ss8+v-ejupotogprmkh4zndyhy.jpg?_hv=2&w=340'
  },
  {
    name: 'Camiseta Leganés 2024/25',
    price: 29.99,
    liga: 'LaLiga',
    equipo: 'Lega',
    año: 2024,
    class: 'camiseta',
    stars: 3,
    image:
      'https://store.cdleganes.com/cdn/shop/files/Frontalconsponsor_cf66ee0b-329b-47cb-8e7e-5cb131677ea0.jpg?v=1739783527&width=3000'
  },
  {
    name: 'Chandal FC Barcelona 2024/25',
    price: 49.99,
    liga: 'LaLiga',
    equipo: 'Barça',
    año: 2024,
    class: 'chandal',
    stars: 5,
    image:
      'https://images.footballfanatics.com/barcelona/barcelona-nike-strike-tracksuit-black_ss5_p-200889600+u-6m5y2paaipzlmgioojfb+v-6owq1p0snvrz8jgfrwn7.png?_hv=2&w=340'
  },
  {
    name: 'Chandal Real Madrid 2024/25',
    price: 49.99,
    liga: 'LaLiga',
    equipo: 'Madrid',
    año: 2024,
    class: 'chandal',
    stars: 5,
    image:
      'https://images.footballfanatics.com/real-madrid/real-madrid-adidas-training-tracksuit-blue_ss5_p-201163177+u-ymgkxk8wku2koqhj41jj+v-yiiqnqbujqrb2reefbhk.jpg?_hv=2&w=340'
  },
  {
    name: 'Chandal  Atlético de Madrid 2024/25',
    price: 49.99,
    liga: 'LaLiga',
    equipo: 'Atleti',
    año: 2024,
    class: 'chandal',
    stars: 4,
    image:
      'https://images.footballfanatics.com/atletico-de-madrid/atl%C3%A9tico-de-madrid-nike-strike-tracksuit-teal_ss5_p-201441528+u-tkllntjytmqmjooecuir+v-ug6jt9ho5x2ajfasc6te.png?_hv=2&w=340'
  },
  {
    name: 'Chandal Leganés 2024/25 ',
    price: 49.99,
    liga: 'LaLiga',
    equipo: 'Lega',
    año: 2024,
    class: 'chandal',
    stars: 3,
    image:
      'https://store.cdleganes.com/cdn/shop/files/ChaquetaPaseoJugadorFondoBlanco_2c31c544-ea98-4388-a3b6-63e4774f8210.jpg?v=1718797089&width=3000'
  },
  {
    name: 'Equipacion completa FC Barcelona 2024/25 ',
    price: 39.99,
    liga: 'LaLiga',
    equipo: 'Barça',
    año: 2024,
    class: 'equipacion',
    stars: 5,
    image:
      'https://images.footballfanatics.com/barcelona/barcelona-nike-home-stadium-kit-2024-25-little-kids_ss5_p-200889593+u-xriaa3gcq7o18odpxxw2+v-wgnolgjckzhohr0mohpt.png?_hv=2&w=340'
  },
  {
    name: 'Equipacion completa Real Madrid 2024/25',
    price: 39.99,
    liga: 'LaLiga',
    equipo: 'Madrid',
    año: 2024,
    class: 'equipacion',
    stars: 5,
    image:
      'https://images.footballfanatics.com/real-madrid/real-madrid-adidas-away-minikit-2024-25_ss5_p-201164844+u-939tsayuknhjcft2bnxn+v-mzxmgqsivbu8ee5sjlar.jpg?_hv=2&w=340'
  },
  {
    name: 'Equipacion completa Atlético de Madrid 2024/25',
    price: 39.99,
    liga: 'LaLiga',
    equipo: 'Atleti',
    año: 2024,
    class: 'equipacion',
    stars: 4,
    image:
      'https://images.footballfanatics.com/atletico-de-madrid/atl%C3%A9tico-de-madrid-nike-home-stadium-kit-2024-25-infants_ss5_p-201441540+u-icriigvum2yg2y9f0n5r+v-es5rgbo4kuce2ikzx6zl.jpg?_hv=2&w=340'
  },
  {
    name: 'Equipacion completa Leganés 2024/25',
    price: 39.99,
    liga: 'LaLiga',
    equipo: 'Lega',
    año: 2024,
    class: 'equipacion',
    stars: 3,
    image:
      'https://store.cdleganes.com/cdn/shop/files/Minikit24-25_2650201a-4cf1-4465-aafc-2365b0b0bc50.jpg?v=1739783957&width=3000'
  }
]
const productContainer = document.querySelector('.product-list')
const filtrosForm = document.getElementById('filtrosForm')

// Función para crear y mostrar productos
function displayProducts(filteredProducts) {
  productContainer.innerHTML = ''
  filteredProducts.forEach((product) => {
    const productCard = document.createElement('div')
    productCard.classList.add('product-card')

    productCard.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p class="price">${product.price}€</p>
      <div class="stars">${'★'.repeat(product.stars)}${'☆'.repeat(5 - product.stars)}</div>
    `
    productContainer.appendChild(productCard)
  })
}

function filterProducts() {
  const liga = filtrosForm.liga.value
  const año = filtrosForm.año.value
  const clase = filtrosForm.clase.value
  const equipo = filtrosForm.equipo.value

  const filteredProducts = products.filter((product) => {
    return (
      (liga ? product.liga === liga : true) &&
      (año ? product.año === parseInt(año) : true) &&
      (clase ? product.class === clase : true) &&
      (equipo ? product.equipo === equipo : true)
    )
  })

  displayProducts(filteredProducts)
}

document.addEventListener('DOMContentLoaded', () => {
  displayProducts(products)

  filtrosForm.addEventListener('change', filterProducts)
})
