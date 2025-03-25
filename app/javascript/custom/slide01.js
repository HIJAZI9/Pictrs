    // Chart 1
    const ctx1 = document.getElementById('chart1_1').getContext('2d');
    const chart1 = new Chart(ctx1, {
    type: 'bar',
    data: {
    labels: ['January', 'February', 'March'],
    datasets: [{
    label: 'Sales',
    data: [12, 19, 3],
    backgroundColor: 'rgba(75, 192, 192, 0.2)',
    borderColor: 'rgba(75, 192, 192, 1)',
    borderWidth: 1
}]
},
    options: {
    scales: {
    y: {
    beginAtZero: true
}
}
}
});

    // Chart 2
    const ctx2 = document.getElementById('chart1_2').getContext('2d');
    const chart2 = new Chart(ctx2, {
    type: 'line',
    data: {
    labels: ['January', 'February', 'March'],
    datasets: [{
    label: 'Revenue',
    data: [30, 50, 20],
    backgroundColor: 'rgba(255, 99, 132, 0.2)',
    borderColor: 'rgba(255, 99, 132, 1)',
    borderWidth: 1
}]
},
    options: {
    scales: {
    y: {
    beginAtZero: true
}
}
}
});

    // Chart 3
    const ctx3 = document.getElementById('chart1_3').getContext('2d');
    const chart3 = new Chart(ctx3, {
    type: 'pie',
    data: {
    labels: ['Product A', 'Product B', 'Product C'],
    datasets: [{
    label: 'Products',
    data: [25, 40, 35],
    backgroundColor: [
    'rgba(153, 102, 255, 0.2)',
    'rgba(54, 162, 235, 0.2)',
    'rgba(255, 206, 86, 0.2)'
    ],
    borderColor: [
    'rgba(153, 102, 255, 1)',
    'rgba(54, 162, 235, 1)',
    'rgba(255, 206, 86, 1)'
    ],
    borderWidth: 1
}]
}
});

    // Chart 4
    const ctx4 = document.getElementById('chart1_4').getContext('2d');
    const chart4 = new Chart(ctx4, {
    type: 'doughnut',
    data: {
    labels: ['North', 'South', 'East', 'West'],
    datasets: [{
    label: 'Regions',
    data: [15, 25, 35, 25],
    backgroundColor: [
    'rgba(255, 159, 64, 0.2)',
    'rgba(153, 102, 255, 0.2)',
    'rgba(75, 192, 192, 0.2)',
    'rgba(255, 99, 132, 0.2)'
    ],
    borderColor: [
    'rgba(255, 159, 64, 1)',
    'rgba(153, 102, 255, 1)',
    'rgba(75, 192, 192, 1)',
    'rgba(255, 99, 132, 1)'
    ],
    borderWidth: 1
}]
}
});
