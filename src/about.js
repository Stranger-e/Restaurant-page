export function aboutInfo() {
  const container = document.getElementById('content');

  const info = document.createElement('div');
  info.classList.add('about-page-info');
  container.appendChild(info);

  const aboutHead = document.createElement('h1');
  aboutHead.innerHTML = 'ABOUT US';
  info.appendChild(aboutHead);

  const para = document.createElement('h4');
  para.innerHTML =
    'Welcome to Strangers, where we blend culinary excellence with a warm, inviting atmosphere. Our diverse menu features locally-sourced ingredients, crafted into innovative and comforting dishes. Join us for a memorable dining experience in the heart of Mombasa.';
  info.appendChild(para);

  const contact = document.createElement('div');
  contact.classList.add('about-page-info');
  container.appendChild(contact);

  const contactHead = document.createElement('h2');
  contactHead.innerHTML = 'CONTACT US';
  contact.appendChild(contactHead);

  const contactList = document.createElement('p');
  const list1 = '<p> Phone: +254 1234 567 098</p>';
  const list2 = '<p> Email: stranger@strange.org</p>';
  const list3 = '<p> 00100, Mombasa, kenya</p>';

  contactList.innerHTML = list1 + list2 + list3;
  contact.appendChild(contactList);
}
