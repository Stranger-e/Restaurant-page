export function startUp() {
  const container = document.getElementById('content');

  const header = document.createElement('h1');
  header.innerHTML = 'Strangers Grill';
  container.appendChild(header);

  const Image = document.createElement('img');
  Image.classList.add('home-img');
  container.appendChild(Image);

  const intro = document.createElement('p');
  intro.classList.add('intro');
  intro.innerHTML =
    "Get to dine with some Outstanding strangers, meal cooked by highly skilled and specialized strangers. You definetely won't miss a strange Face.";
  container.appendChild(intro);
}
