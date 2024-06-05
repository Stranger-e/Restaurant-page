class Card {
  constructor(name, price, imageUrl) {
    this.name = name;
    this.price = price;
    this.imageUrl = imageUrl;
  }

  render() {
    const card = document.createElement('div');
    card.classList.add('card');

    card.style.backgroundImage = `url("${this.imageUrl}")`;
    card.style.backgroundSize = 'cover';

    const nameElement = document.createElement('h3');
    nameElement.textContent = this.name;
    card.appendChild(nameElement);

    const priceElement = document.createElement('p');
    priceElement.textContent = `Price: $${this.price}`;
    card.appendChild(priceElement);

    return card;
  }
}

export function MenuItems() {
  const container = document.getElementById('content');

  const menuItemsData = [
    {
      name: 'Pasta Primavera',
      price: 12.99,
      imageUrl: './Assets/Chai.jpg',
    },
    {
      name: 'Chicken Parmesan',
      price: 15.99,
      imageUrl: './Assets/Chapati.png',
    },
    { name: 'Caesar Salad', price: 8.99, imageUrl: './Assets/Mayai.jpg' },
  ];

  const display = document.createElement('div');
  display.classList.add('display');
  container.appendChild(display);

  menuItemsData.forEach((itemData) => {
    const card = new Card(itemData.name, itemData.price, itemData.imageUrl);
    display.appendChild(card.render());
  });
}
