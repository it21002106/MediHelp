// Import Chart.js
import Chart from 'chart.js/auto';

// Get the canvas element
const chartEl = document.getElementById('crudChart');

// Create a new Chart instance with the canvas element
const chart = new Chart(chartEl, {
  type: 'bar',
  data: {
    labels: ['Add', 'Get', 'Update', 'Delete'],
    datasets: [
      {
        label: 'CRUD Function Usage',
        data: [0, 0, 0, 0],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
        ],
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});

// Function to fetch data from the backend and update the chart
function updateChart() {
  fetch('/api/projects')
    .then((response) => response.json())
    .then((data) => {
      const counts = {
        add: 0,
        get: 0,
        update: 0,
        delete: 0,
      };

      data.forEach((project) => {
        if (project._id.includes('add')) {
          counts.add++;
        } else if (project._id.includes('get')) {
          counts.get++;
        } else if (project._id.includes('update')) {
          counts.update++;
        } else if (project._id.includes('delete')) {
          counts.delete++;
        }
      });

      chart.data.datasets[0].data = [counts.add, counts.get, counts.update, counts.delete];
      chart.update();
    })
    .catch((error) => {
      console.error(error);
    });
}

// Call the updateChart function initially and every 5 seconds
updateChart();
setInterval(updateChart, 5000);
