// notable guest list
const guests = [
    { firstName: 'Audrey', lastName: 'Hepburn', occupation: 'Actress', image: './portraits/hepburn.png', era: 1960},
    { firstName: 'Babe', lastName: 'Ruth', occupation: 'Baseball Player', image: './portraits/ruth.png', era: 1920},  
    { firstName: 'Bob', lastName: 'Dylan', occupation: 'Singer', image: './portraits/dylan.png', era: 1960},  
    { firstName: 'Charlie', lastName: 'Chaplin', occupation: 'Actor', image: './portraits/chaplin.png', era: 1940},
    { firstName: 'Claude', lastName: 'Monet', occupation: 'Artist', image: './portraits/monet.png', era: 1870},
    { firstName: 'Edward VIII', lastName: '', occupation: 'King', image: './portraits/edward.png', era: 1940},
    { firstName: 'Elizabeth', lastName: 'Taylor', occupation: 'Actress', image: './portraits/taylor.png', era: 1960},
    { firstName: 'Frank', lastName: 'Sinatra', occupation: 'Singer', image: './portraits/sinatra.png', era: 1960},
    { firstName: 'George', lastName: 'Clooney', occupation: 'Actor', image: './portraits/clooney.png', era: 1980},
    { firstName: 'Led', lastName: 'Zeppelin', occupation: 'Band', image: './portraits/zeppelin.png', era: 1970 },
    { firstName: 'Marilyn', lastName: 'Monroe', occupation: 'Actress', image: './portraits/monroe.png', era: 1950 },
    { firstName: 'Marlon', lastName: 'Brando', occupation: 'Actor', image: './portraits/brando.png', era: 1950 },
    
  ];

  // guest sorting function
  
  function displayGuests(sortedGuests) {
    const guestList = document.getElementById('guestList');
    guestList.innerHTML = '';
  
    sortedGuests.forEach(guest => {
      const guestEl = document.createElement('div');
      guestEl.className = 'guest';
      guestEl.innerHTML = `
        <img src="${guest.image}" alt="${guest.firstName}">
        <div class="guest-name">${guest.firstName} ${guest.lastName}</div>
        <div class="guest-occupation">${guest.occupation}</div>
      `;
      guestList.appendChild(guestEl);
    });
  }
  
  function sortBy(method) {
    let sortedGuests = [...guests];
    const first = document.getElementById('first');
    const last = document.getElementById('last');
    const recent =document.getElementById('recent');
    const chron = document.getElementById('chron');
    switch(method) {
      case 'firstName':
        first.classList = `selected`;
        last.classList = ``;
        recent.classList= ``;
        chron.classList = ``;
        sortedGuests.sort((a, b) => a.firstName.localeCompare(b.firstName));
        break;
      case 'lastName':
        first.classList = ``;
        last.classList = `selected`;
        recent.classList= ``;
        chron.classList = ``;
        sortedGuests.sort((a, b) => a.lastName.localeCompare(b.lastName));
        break;
      case 'recency':
        first.classList = ``;
        last.classList = ``;
        recent.classList= `selected`;
        chron.classList = ``;
        sortedGuests.sort((a, b) => b.era - a.era);
        break;
      case 'chronological':
        first.classList = ``;
        last.classList = ``;
        recent.classList= ``;
        chron.classList = `selected`;
        sortedGuests.sort((a, b) => a.era - b.era);
        break;
    }
    displayGuests(sortedGuests);
  }
  
  displayGuests(guests);

  // card flipping

  const fact = document.querySelector(".fact");
  fact.addEventListener("click", function (e){
    fact.classList.toggle('flipped');
  });