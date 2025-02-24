// Define the API endpoint
const raceScheduleURL = "https://ergast.com/api/f1/2025.json";

// Fetch the race schedule data
async function fetchRaceSchedule() {
    try {
        const response = await fetch(raceScheduleURL);
        const data = await response.json();
        
        // Get the list of races from the data
        const races = data.MRData.RaceTable.Races;

        // Find the schedule container
        const scheduleDiv = document.getElementById("schedule");

        // Loop through the races and display each one
        races.forEach(race => {
            const raceElement = document.createElement("div");
            raceElement.classList.add("race");

            raceElement.innerHTML = `
                <h3>${race.raceName}</h3>
                <p><strong>Date:</strong> ${race.date}</p>
                <p><strong>Location:</strong> ${race.Circuit.circuitName}, ${race.Circuit.Location.locality}, ${race.Circuit.Location.country}</p>
            `;

            scheduleDiv.appendChild(raceElement);
        });
    } catch (error) {
        console.error("Error fetching race schedule:", error);
    }
}

// Call the function to fetch the schedule data
fetchRaceSchedule();

// Define the API endpoint for Driver Stats
const driverStatsURL = "https://ergast.com/api/f1/2025/drivers.json";

// Fetch the driver data
// Fetch driver stats and display them in a cleaner layout
async function fetchDriverStats() {
    try {
        const response = await fetch('https://ergast.com/api/f1/2025/drivers.json');
        const data = await response.json();
        const drivers = data.MRData.DriverTable.Drivers;
        const driversDiv = document.getElementById("drivers");

        driversDiv.innerHTML = '';

        drivers.forEach(driver => {
            const driverElement = document.createElement("div");
            driverElement.classList.add("driver");

            driverElement.innerHTML = `
                <h3>${driver.givenName} ${driver.familyName}</h3>
                <p><strong>Nationality:</strong> ${driver.nationality}</p>
                <p><strong>Team:</strong> ${driver.team || "Unknown"}</p>
                <p><strong>Date of Birth:</strong> ${driver.dateOfBirth}</p>
            `;

            driversDiv.appendChild(driverElement);
        });
    } catch (error) {
        console.error("Error fetching driver stats:", error);
    }
}

fetchDriverStats();





// Define the API endpoint for Race Results for 2025
const raceResultsURL = "https://ergast.com/api/f1/2025/results.json";

// Fetch the race results for the current season
async function fetchRaceResults() {
    try {
        const response = await fetch('https://ergast.com/api/f1/2025/results.json'); // Adjust for 2025 season
        const data = await response.json();

        const races = data.MRData.RaceTable.Races;
        const resultsDiv = document.getElementById("results");

        if (races.length === 0) {
            resultsDiv.innerHTML = '<p>No results available for 2025 yet.</p>';
            return;
        }

        resultsDiv.innerHTML = ''; // Clear existing content

        races.forEach(race => {
            const raceElement = document.createElement("div");
            raceElement.classList.add("race");

            raceElement.innerHTML = `
                <h3>${race.raceName} - ${race.date}</h3>
                <p><strong>Location:</strong> ${race.Circuit.circuitName}, ${race.Circuit.Location.locality}, ${race.Circuit.Location.country}</p>
                <p><strong>Winner:</strong> ${race.Results[0].Driver.givenName} ${race.Results[0].Driver.familyName}</p>
            `;
            resultsDiv.appendChild(raceElement);
        });
    } catch (error) {
        console.error("Error fetching race results:", error);
    }
}

fetchRaceResults();

async function fetchUpcomingRaces() {
    try {
        const response = await fetch('https://ergast.com/api/2025/f1.json'); // Endpoint for the 2025 season
        const data = await response.json();
        const races = data.MRData.RaceTable.Races;
        const raceScheduleDiv = document.getElementById("race-schedule");

        raceScheduleDiv.innerHTML = ''; // Clear existing content

        if (races.length === 0) {
            raceScheduleDiv.innerHTML = '<p>No upcoming races available yet.</p>';
            return;
        }

        races.forEach(race => {
            const raceElement = document.createElement("div");
            raceElement.classList.add("race");

            raceElement.innerHTML = `
                <h3>${race.raceName} - ${race.date}</h3>
                <p><strong>Location:</strong> ${race.Circuit.circuitName}, ${race.Circuit.Location.locality}, ${race.Circuit.Location.country}</p>
            `;

            raceScheduleDiv.appendChild(raceElement);
        });
    } catch (error) {
        console.error("Error fetching upcoming races:", error);
    }
}

fetchUpcomingRaces();



