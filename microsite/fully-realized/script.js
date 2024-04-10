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
    switch(method) {
      case 'firstName':
        sortedGuests.sort((a, b) => a.firstName.localeCompare(b.firstName));
        break;
      case 'lastName':
        sortedGuests.sort((a, b) => a.lastName.localeCompare(b.lastName));
        break;
      case 'recency':
        sortedGuests.sort((a, b) => b.era - a.era);
        break;
      case 'chronological':
        sortedGuests.sort((a, b) => a.era - b.era);
        break;
    }
    displayGuests(sortedGuests);
  }
  
  displayGuests(guests);