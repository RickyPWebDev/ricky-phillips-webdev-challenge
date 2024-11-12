async function loadSports() {
    try {
        // Fetch the CSV file
        const response = await fetch('https://cors-anywhere.herokuapp.com/http://www.football-data.co.uk/mmz4281/1718/I1.csv');
        const csvText = await response.text();

        // Parse the CSV data
        const lines = csvText.split('\n');
        const headers = lines[0].split(',');
        const data = lines.slice(1).map(line => {
            const values = line.split(',');
            return headers.reduce((object, header, index) => {
                object[header] = values[index];
                return object;
            }, {});
        });

        // Select the sports container
        const sportsContainer = document.querySelector('#sports-data .sports-info');
        
        // Display the latest or relevant sports data (e.g., first 2 matches)
        data.slice(0, 2).forEach(match => {
            const homeTeam = match['HomeTeam'];
            const awayTeam = match['AwayTeam'];
            const fullTimeHomeGoals = match['FTHG'];
            const fullTimeAwayGoals = match['FTAG'];
            const matchDate = match['Date'];

            // Create a div for each match
            const matchItem = document.createElement('div');
            matchItem.className = 'match-item';

            matchItem.innerHTML = `
                <p class="match-date">${matchDate}</p>
                <p class="match-teams">${homeTeam} vs ${awayTeam}</p>
                <p class="match-score">Score: ${fullTimeHomeGoals} - ${fullTimeAwayGoals}</p>
            `;

            sportsContainer.appendChild(matchItem);
        });

    } catch (error) {
        console.error("Error fetching the sports data: ", error);
    }
}

// Call the function to load sports data on page load
loadSports();
