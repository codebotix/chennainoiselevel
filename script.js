// Fetch data from ThingSpeak API and display in a bar chart
// fetch('https://api.thingspeak.com/channels/2210647/feeds.json?api_key=3K7S7ZZIVLRAR2K9')
//   .then(response => response.json())
//   .then(data => {
//     // Extract the sound data from the response
//     const soundData = data.feeds.map(feed => parseFloat(feed.field1));
//     const labels = soundData.map((_, index) => `Data ${index + 1}`);
//     const timestamps = data.feeds.map(feed => feed.created_at);

//     // Create a bar chart using Chart.js
//     const ctx = document.getElementById('chart').getContext('2d');
//     new Chart(ctx, {
//       type: 'bar',
//       data: {
//         labels: labels, // Labels for x-axis
//         datasets: [{
//           label: 'Sound Data',
//           data: soundData, // Sound data values
//           backgroundColor: 'rgba(0, 123, 255, 0.8)', // Bar color
//           borderColor: 'rgba(0, 123, 255, 1)', // Bar border color
//           borderWidth: 1 // Bar border width
//         }]
//       },
//       options: {
//         responsive: true,
//         scales: {
//           x: {
//             ticks: {
//               autoSkip: true,
//               maxTicksLimit: 10, // Maximum number of ticks to display
//               maxRotation: 0, // Rotation angle of the tick labels (0 degrees)
//               callback: function (value, index) {
//                 // Format timestamp for display
//                 const date = new Date(timestamps[index]);
//                 return date.toLocaleTimeString(); // Adjust formatting as needed
//               }
//             }
//           },
//           y: {
//             beginAtZero: true // Start y-axis at zero
//           }
//         },
//         plugins: {
//           tooltip: {
//             callbacks: {
//               title: function (context) {
//                 // Display the timestamp as tooltip title
//                 const dataIndex = context[0].dataIndex;
//                 const date = new Date(timestamps[dataIndex]);
//                 return date.toLocaleString(); // Adjust formatting as needed
//               },
//               label: function (context) {
//                 // Hide the default label
//                 return null;
//               }
//             }
//           }
//         }
//       }
//     });
//   })
//   .catch(error => console.log(error));



//NEW WEBPAGE
fetch("https://api.thingspeak.com/channels/2210647/feeds.json?api_key=3K7S7ZZIVLRAR2K9")
    .then(response => response.json())
    .then(data => {
        const feeds = data.feeds;

        let highest = parseFloat(feeds[0].field1);
        let lowest = parseFloat(feeds[0].field1);
        let sum = 0;

        for (const feed of feeds) {
            const value = parseFloat(feed.field1);
            sum += value;

            if (value > highest) {
                highest = value;
            }

            if (value < lowest) {
                lowest = value;
            }
        }

        const average = sum / feeds.length;

        // Display the results
        // const apiDataElement = document.getElementById("api-data");
        // apiDataElement.innerHTML = `
        //     <p>Highest Value: ${highest}</p>
        //     <p>Lowest Value: ${lowest}</p>
        //     <p>Average Value: ${average.toFixed(2)}</p>
        // `;

        const highestValueElement = document.getElementById("highestValue");
        const lowestValueElement = document.getElementById("lowestValue");
        const averageValueElement = document.getElementById("averageValue");

        highestValueElement.textContent = `Highest: ${highest}`;
        lowestValueElement.textContent = `Lowest: ${lowest}`;
        averageValueElement.textContent = `Average: ${average.toFixed(2)}`;

        // Display timestamps (assuming timestamps are in field created_at)
        // for (const feed of feeds) {
        //     apiDataElement.innerHTML += `
        //         <p>${feed.created_at}: ${parseFloat(feed.field1)}</p>
        //     `;
        // }
    })
    .catch(error => console.error("Error fetching API data:", error));

// Get the modal and close button elements
const modal = document.getElementById("aboutModal");
const closeModal = document.getElementById("closeModal");

// Get the "About Us" button
const aboutButton = document.querySelector(".header-right button:nth-child(2)");

// Show the modal when the "About Us" button is clicked
aboutButton.addEventListener("click", function() {
    modal.style.display = "block";
});

// Close the modal when the close button is clicked
closeModal.addEventListener("click", function() {
    modal.style.display = "none";
});

// Close the modal if the user clicks outside of it
window.addEventListener("click", function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});


// Get the modal and close button elements for the "Tech" modal
const techModal = document.getElementById("techModal");
const closeTechModal = document.getElementById("closeTechModal");

// Get the "Tech" button
const techButton = document.querySelector(".header-right button:nth-child(1)");

// Show the "Tech" modal when the "Tech" button is clicked
techButton.addEventListener("click", function() {
    techModal.style.display = "block";
});

// Close the "Tech" modal when the close button is clicked
closeTechModal.addEventListener("click", function() {
    techModal.style.display = "none";
});

// Close the "Tech" modal if the user clicks outside of it
window.addEventListener("click", function(event) {
    if (event.target === techModal) {
        techModal.style.display = "none";
    }
});


// Get the modal and close button elements for the "Volunteer" modal
const volunteerModal = document.getElementById("volunteerModal");
const closeVolunteerModal = document.getElementById("closeVolunteerModal");

// Get the "Volunteer" button
const volunteerButton = document.querySelector(".header-right button:nth-child(3)");

// Show the "Volunteer" modal when the "Volunteer" button is clicked
volunteerButton.addEventListener("click", function() {
    volunteerModal.style.display = "block";
});

// Close the "Volunteer" modal when the close button is clicked
closeVolunteerModal.addEventListener("click", function() {
    volunteerModal.style.display = "none";
});

// Close the "Volunteer" modal if the user clicks outside of it
window.addEventListener("click", function(event) {
    if (event.target === volunteerModal) {
        volunteerModal.style.display = "none";
    }
});
