const contacts = [
  {
    id: 1,
    name: "Danmilola",
    number: "0706327189",
    email: "dami@gmail.com",
  },
  {
    id: 2,
    name: "bayo",
    number: "0706327189",
    email: "bayoi@gmail.com",
  },
  {
    id: 3,
    name: "ayomide",
    number: "07063632189",
    email: "ayomi@gmail.com",
  },
  {
    id: 4,
    name: "chukwu",
    number: "0706327189",
    email: "chucks@gmail.com",
  },
  {
    id: 5,
    name: "bamidele",
    number: "0706027389",
    email: "bami_dele@gmail.com",
  },
  {
    id: 6,
    name: "Danjuma",
    number: "07063797969",
    email: "danjuma@gmail.com",
  },
  {
    id: 7,
    name: "chidera",
    number: "0706327189",
    email: "chidera007@gmail.com",
  },
  {
    id: 8,
    name: "aisha",
    number: "0906423189",
    email: "aisha@yahoo.com",
  },
];

//search

//foreach
// const displayContacts = (contactsArray) => {
//   const contactList = document.getElementById("contactList");
//   contactList.innerHTML = "";

//   contactsArray.forEach((contact, index) => {
//     const ul = document.createElement("ul");
//     ul.innerHTML = `<li>${contact.name}</li>
//     <li>${contact.number}</li>
//     <li>${contact.email}</li>
//     <button onclick="deleteContact(${index})">Delete</button>`;
//     contactList.appendChild(ul);
//     return ul;
//   });
// };

// map

// function displayContacts(contactsArray)
const displayContacts = (contactsArray) => {
  const contactList = document.getElementById("contactList");
  contactList.innerHTML = "";

  // Using map to create a new array of HTML elements
  const contactElements = contactsArray.map((contact, index) => {
    const ul = document.createElement("ul");
    ul.innerHTML = `
      <li>${contact.name}</li>
      <li>${contact.number}</li>
      <li>${contact.email}</li>
      <button onclick="deleteContact(${index})">Delete</button>`;
    return ul;
  });

  // Appending each element to the contactList
  contactElements.forEach((ul) => {
    contactList.appendChild(ul);
  });
};

displayContacts(contacts);

// Search contacts based on user input
const searchContacts = (event) => {
  const query = event.target.value.toLowerCase();

  const filteredContacts = contacts.filter(
    (contact) =>
      contact.name.toLowerCase().includes(query) ||
      contact.number.includes(query) ||
      contact.email.toLowerCase().includes(query)
  );

  displayContacts(filteredContacts);
};

// splice
const deleteContact = (index) => {
  contacts.splice(index, 1);
  displayContacts(contacts);
};

const searchInput = document.getElementById("search");
searchInput.addEventListener("input", searchContacts);
