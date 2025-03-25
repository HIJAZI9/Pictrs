// Chart 1 (Bubble Chart)
const ctx1 = document.getElementById('chart2_1').getContext('2d');
const chart1 = new Chart(ctx1, {
    type: 'bubble',
    data: {
        datasets: [{
            label: 'Sales Performance',
            data: [
                { x: 1, y: 12, r: 10 }, // x, y position and radius (size of the bubble)
                { x: 2, y: 19, r: 15 },
                { x: 3, y: 3, r: 8 }
            ],
            backgroundColor: 'rgba(75, 192, 192, 0.6)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            x: {
                type: 'linear',
                position: 'bottom',
                beginAtZero: true
            },
            y: {
                beginAtZero: true
            }
        }
    }
});


// Chart 2 (Polar Area Chart)
const ctx2 = document.getElementById('chart2_2').getContext('2d');
const chart2 = new Chart(ctx2, {
    type: 'polarArea',
    data: {
        labels: ['January', 'February', 'March'],// Labels representing the data points on the chart
        datasets: [{
            label: 'Revenue',
            data: [30, 50, 20], // Revenue for January, February, and March
            backgroundColor: [
                'rgba(255, 99, 132, 0.6)',
                'rgba(54, 162, 235, 0.6)',
                'rgba(75, 192, 192, 0.6)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(75, 192, 192, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            r: {
                beginAtZero: true
            }
        }
    }
});


// Chart 3 (Radar Chart)
const ctx3 = document.getElementById('chart2_3').getContext('2d');
const chart3 = new Chart(ctx3, {
    type: 'radar',
    data: {
        labels: ['Resolution', 'Color Accuracy', 'Brightness', 'Sharpness', 'Exposure'], // Picture quality metrics
        datasets: [{
            label: 'Image Quality', // Name of the dataset
            data: [90, 75, 80, 85, 70], // default data
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 2,
            pointBackgroundColor: 'rgba(54, 162, 235, 1)', // Color of points
        }]
    },
    options: {
        scales: {
            r: {
                min: 0,
                max: 100,
                beginAtZero: true
            }
        }
    }
});




// Chart 4 (Horizontal Bar Chart)
const ctx4 = document.getElementById('chart2_4').getContext('2d');
const chart4 = new Chart(ctx4, {
    type: 'bar',
    data: {
        labels: ['Team A', 'Team B', 'Team C', 'Team D'], // Labels representing the data points on the chart

        datasets: [{
            label: 'Scores',
            data: [50, 80, 65, 90], // default data
            backgroundColor: [
                'rgba(75, 192, 192, 0.6)',
                'rgba(255, 99, 132, 0.6)',
                'rgba(153, 102, 255, 0.6)',
                'rgba(255, 159, 64, 0.6)'
            ],
            borderColor: [
                'rgba(75, 192, 192, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        indexAxis: 'y', // This makes the bar chart horizontal
        scales: {
            x: {
                beginAtZero: true
            }
        }
    }
});

