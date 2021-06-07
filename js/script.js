/* MOBILE MENU */

function toggleMenu(visible) {
  document.querySelector('.sidebar__menu').classList.toggle('active', visible);
}

document.querySelector('.hamburger').addEventListener('click', function(e) {
  e.preventDefault();
  toggleMenu();
});

/* CHART GENERATOR */

var ctx = document.getElementById('myChart').getContext('2d');

var chart = new Chart(ctx, {
  // 1
  type: 'bar',
  data: {
    // 2
    labels: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10'],
    // 3
    datasets: [{
    // 4
      label: 'Signups',
      // 5
      backgroundColor: '#8DBEC8',
      borderColor: '#8DBEC8',
      // 6
      data: [ 150, 180, 200, 220, 320, 400, 300, 280, 300, 280 ],
    },
    {
      label: 'FTD',
      backgroundColor: '#F29E4E',
      borderColor: '#F29E4E',
      data: [ 400, 180, 300, 280, 450, 150, 200, 480, 320, 200 ],
    },
    {
      label: 'Earned',
      backgroundColor: '#71B374',
      borderColor: '#71B374',
      data: [ 350, 200, 220, 350, 420, 400, 300, 280, 300, 280 ],
      hidden: true,
    }
    ]
  },
});