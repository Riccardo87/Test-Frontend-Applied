fetch('json/data.json', {
    method: "GET",
    headers: {"Content-type": "application/json;charset=UTF-8"}
  })
  .then(response => response.json()) 
  .then(users => renderUsers(users));

function renderUsers(users) {
  console.log(users)
  const container = document.querySelector('#container-card');
  users.forEach(user => {
    const item = document.createElement('div');
    item.innerHTML = renderCards(user);
    container.appendChild(item);
  });
};

function renderCards(user) {
  const dateRegistered = (user.registered).toString().slice(0, 10).split('-').reverse().join('/');

  const tags = user.tags.map(tag => {
    return `<div class="tag"><p> ${tag}</p></div>`;}).join('');
  
  const gender = user.gender === 'male' ? 
    `<i class="fa-solid fa-mars"></i>` : 
    `<i class="fa-solid fa-venus"></i>`

  const isActive = user.isActive === true ?
    ` <i id='isActive' class="fa-solid fa-circle --green"></i>` :
    ` <i id='isActive' class="fa-solid fa-circle --red"></i>`

  return  `
  <div class="card" id="card">
    <div>${isActive}</div>
    <img
      class="card-img-top"
      src="${user.picture}"
      alt="Card image cap"
    />
    <div class="card-body">
      <div class="card-title">
        <h5 class="title">${user.name}</h5>
        <div>${gender}</div>
        <h4 class="subtitle">${user.age}</h4>
      </div>
      <div class="card-description">
        <div class="card-label">
          <i class="fa-solid fa-envelope"></i>
          <label for="email">Email</label>
        </div>
        <p class="email">${user.email}</p>
      </div>
      <div class="card-description">
        <div class="card-label">
          <i class="fa-solid fa-phone"></i>
          <label for="phone">Phone</label>
        </div>
        <p class="phone">${user.phone}</p>
      </div>
      <div class="card-description">
        <div class="card-label">
          <i class="fa-solid fa-location-dot"></i>
          <label for="address">Address</label>
        </div>
        <p class="address">${user.address}</p>
      </div>
      <div class="card-description">
        <div class="card-label">
          <i class="fa-solid fa-calendar-days"></i>
          <label for="registered">Registered</label>
        </div>
        <p class="registered">${dateRegistered}</p>
      </div>
    </div>
    <div class="card-footer">
      <div class="tags">
        ${tags}
      </div>
  </div>
  `
}