// Interactive charts for the Food Security Assessment Dashboard

// Chart configuration and data
document.addEventListener('DOMContentLoaded', function() {
    // Sample data for charts
    const fcsData = {
        all: {
            labels: ['Poor', 'Borderline', 'Acceptable'],
            datasets: [{
                label: 'Food Consumption Score Categories',
                data: [13.8, 27.7, 57.4],
                backgroundColor: ['#dc3545', '#ffc107', '#28a745'],
                borderWidth: 1
            }]
        },
        prewar: {
            labels: ['Poor', 'Borderline', 'Acceptable'],
            datasets: [{
                label: 'Food Consumption Score Categories (Pre-War)',
                data: [10.6, 31.9, 57.5],
                backgroundColor: ['#dc3545', '#ffc107', '#28a745'],
                borderWidth: 1
            }]
        },
        postwar: {
            labels: ['Poor', 'Borderline', 'Acceptable'],
            datasets: [{
                label: 'Food Consumption Score Categories (Post-War)',
                data: [17.0, 23.4, 59.6],
                backgroundColor: ['#dc3545', '#ffc107', '#28a745'],
                borderWidth: 1
            }]
        }
    };

    const csiData = {
        all: {
            labels: ['Low', 'Medium', 'High'],
            datasets: [{
                label: 'Coping Strategy Index Categories',
                data: [4.8, 10.8, 84.3],
                backgroundColor: ['#28a745', '#ffc107', '#dc3545'],
                borderWidth: 1
            }]
        },
        prewar: {
            labels: ['Low', 'Medium', 'High'],
            datasets: [{
                label: 'Coping Strategy Index Categories (Pre-War)',
                data: [5.3, 12.8, 81.9],
                backgroundColor: ['#28a745', '#ffc107', '#dc3545'],
                borderWidth: 1
            }]
        },
        postwar: {
            labels: ['Low', 'Medium', 'High'],
            datasets: [{
                label: 'Coping Strategy Index Categories (Post-War)',
                data: [4.3, 8.5, 87.2],
                backgroundColor: ['#28a745', '#ffc107', '#dc3545'],
                borderWidth: 1
            }]
        }
    };

    const foodGroupsData = {
        labels: ['Cereals', 'Pulses', 'Vegetables', 'Fruits', 'Meat/Fish', 'Milk', 'Sugar', 'Oil'],
        datasets: [{
            label: 'Average Consumption Days per Week',
            data: [6.8, 2.1, 3.5, 1.8, 1.2, 1.5, 4.2, 5.9],
            backgroundColor: 'rgba(54, 162, 235, 0.7)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1
        }]
    };

    const copingStrategiesData = {
        labels: ['Rely on less preferred foods', 'Borrow food', 'Reduce number of meals', 'Reduce portion size', 'Restrict adult consumption'],
        datasets: [{
            label: 'Average Days per Week',
            data: [4.7, 2.3, 3.8, 3.5, 2.9],
            backgroundColor: 'rgba(255, 99, 132, 0.7)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1
        }]
    };

    const temporalData = {
        food: {
            labels: ['Pre-War', 'During War', 'Post-War'],
            datasets: [{
                label: 'Food Needs (%)',
                data: [41.5, 98.8, 45.7],
                backgroundColor: 'rgba(255, 159, 64, 0.7)',
                borderColor: 'rgba(255, 159, 64, 1)',
                borderWidth: 1
            }]
        },
        hygiene: {
            labels: ['Pre-War', 'During War', 'Post-War'],
            datasets: [{
                label: 'Hygiene Needs (%)',
                data: [35.2, 96.9, 42.3],
                backgroundColor: 'rgba(75, 192, 192, 0.7)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            }]
        },
        medical: {
            labels: ['Pre-War', 'During War', 'Post-War'],
            datasets: [{
                label: 'Medical Needs (%)',
                data: [8.7, 15.2, 12.1],
                backgroundColor: 'rgba(153, 102, 255, 0.7)',
                borderColor: 'rgba(153, 102, 255, 1)',
                borderWidth: 1
            }]
        }
    };

    // Initialize charts
    // FCS Chart
    const fcsCtx = document.getElementById('fcsChart').getContext('2d');
    const fcsChart = new Chart(fcsCtx, {
        type: 'pie',
        data: fcsData.all,
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom'
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return `${context.label}: ${context.raw}%`;
                        }
                    }
                }
            }
        }
    });

    // CSI Chart
    const csiCtx = document.getElementById('csiChart').getContext('2d');
    const csiChart = new Chart(csiCtx, {
        type: 'pie',
        data: csiData.all,
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom'
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return `${context.label}: ${context.raw}%`;
                        }
                    }
                }
            }
        }
    });

    // Food Groups Chart
    const foodGroupsCtx = document.getElementById('foodGroupsChart').getContext('2d');
    const foodGroupsChart = new Chart(foodGroupsCtx, {
        type: 'bar',
        data: foodGroupsData,
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true,
                    max: 7,
                    title: {
                        display: true,
                        text: 'Days per Week'
                    }
                }
            }
        }
    });

    // Coping Strategies Chart
    const copingStrategiesCtx = document.getElementById('copingStrategiesChart').getContext('2d');
    const copingStrategiesChart = new Chart(copingStrategiesCtx, {
        type: 'bar',
        data: copingStrategiesData,
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true,
                    max: 7,
                    title: {
                        display: true,
                        text: 'Days per Week'
                    }
                }
            }
        }
    });

    // Temporal Comparison Chart
    const temporalCtx = document.getElementById('temporalComparisonChart').getContext('2d');
    const temporalChart = new Chart(temporalCtx, {
        type: 'bar',
        data: temporalData.food,
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100,
                    title: {
                        display: true,
                        text: 'Percentage (%)'
                    }
                }
            }
        }
    });

    // Set up filter event listeners
    document.getElementById('fcsFilter').addEventListener('change', function(e) {
        const selectedValue = e.target.value;
        fcsChart.data = fcsData[selectedValue];
        fcsChart.update();
    });

    document.getElementById('csiFilter').addEventListener('change', function(e) {
        const selectedValue = e.target.value;
        csiChart.data = csiData[selectedValue];
        csiChart.update();
    });

    document.getElementById('needsFilter').addEventListener('change', function(e) {
        const selectedValue = e.target.value;
        temporalChart.data = temporalData[selectedValue];
        temporalChart.update();
    });
});
