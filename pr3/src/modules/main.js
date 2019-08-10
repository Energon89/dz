const url = "https://jsonplaceholder.typicode.com/users";

function addName(name) {
  return fetch(url, {
    method: "POST",
    body: JSON.stringify({ name }),
    headers: {
      "Content-Type": "application/json"
    }
  }).then(response => response.json());
}

function deleteId(id) {
  return fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
    method: "DELETE"
  }).then(response => response.status);
}

function uppdateZip(id, zipcode) {
  return fetch(url)
    .then(response => response.json())
    .then(users => {
      users.forEach(user => {
        if (user.id === id) {
          user.address.zipcode = zipcode;
          return fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
            method: "PATCH",
            body: JSON.stringify(user.address.zipcode),
            headers: {
              "Content-Type": "application/json"
            }
          });
        }
      });
    });
}

function uppdateCity(id, city) {
  return fetch(url)
    .then(response => response.json())
    .then(users => {
      users.forEach(user => {
        if (user.id === id) {
          user.address.city = city;
          return fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
            method: "PATCH",
            body: JSON.stringify(user.address.city),
            headers: {
              "Content-Type": "application/json"
            }
          });
        }
      });
    });
}

function runXhr(url) {
  let users;
  let xhr = new XMLHttpRequest();
  xhr.open("GET", url);
  xhr.onload = function() {
    users = JSON.parse(xhr.responseText);
    myFunction(users);
  };
  xhr.send();
}

function myFunction(users) {
  const filtered = users.filter(user => {
    if (user.id <= 5) {
      return console.log(user.name);
    }
  });
  console.log(filtered);
}

addName("John Smith");
deleteId(3);
uppdateZip(5, 220000);
uppdateCity(5, "Minsk");
runXhr(url);
