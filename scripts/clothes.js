async function loadClothesData() {
    try {
        const response = await fetch('https://tboxapps.therapy-box.co.uk/hackathon/clothing-api.php?username=swapnil');
        const data = await response.json();
        
        // Extract clothing data
        const clothingTypes = Object.keys(data);
        const clothingCounts = Object.values(data);

        // Get the canvas element for the chart
        const ctx = document.getElementById('clothesChart').getContext('2d');

        // Render the pie chart
        new Chart(ctx, {
            type: 'pie',
            data: {
                labels: clothingTypes,
                datasets: [{
                    data: clothingCounts,
                    backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF'],
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'bottom',
                    },
                },
            }
        });
    } catch (error) {
        console.error('Error loading clothes data:', error);
    }
}

// Load clothes data and render chart on page load
loadClothesData();
