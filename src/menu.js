class Card {
  constructor(name, price, className) {
    this.name = name;
    this.price = price;
    this.className = className;
  }

  render() {
    const card = document.createElement('div');
    card.classList.add('card', this.className);

    const details = document.createElement('div');
    details.classList.add('details');
    card.appendChild(details);

    const nameElement = document.createElement('h3');
    nameElement.textContent = this.name;
    details.appendChild(nameElement);

    const priceElement = document.createElement('p');
    priceElement.textContent = `Price: $${this.price}`;
    details.appendChild(priceElement);

    return card;
  }
}

export function MenuItems() {
  const container = document.getElementById('content');

  const menuItemsData = [
    { name: 'Pilau', price: 12.99, className: 'pilau' },
    { name: 'Chapati', price: 15.99, className: 'chapati' },
    { name: 'Mayai', price: 8.99, className: 'mayai' },
    { name: 'Chai', price: 5.99, className: 'chai' },
    { name: 'Kuku', price: 5.99, className: 'kuku' },
    { name: 'Cabbage', price: 5.99, className: 'cabbage' },
  ];

  const display = document.createElement('div');
  display.classList.add('display');
  container.appendChild(display);

  menuItemsData.forEach((itemData) => {
    const card = new Card(itemData.name, itemData.price, itemData.className);
    display.appendChild(card.render());
  });
}
