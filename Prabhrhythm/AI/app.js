function searchWikipedia(searchTerm) {
    const apiUrl = `https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=${searchTerm}&format=json&origin=*`;
    fetch(apiUrl)
        .then(response => response.json()) // Parse JSON response
        .then(data => {
            const results = data.query.search;
            const messagesDiv = document.getElementById('messages');
            messagesDiv.innerHTML = ''; // Clear previous messages
            
            
            results.forEach((result) => {
                const message = document.createElement('div');
                message.innerHTML = `<strong>${result.title}</strong>: ${result.snippet}...`;
                messagesDiv.appendChild(message); // Add to chat
            });
        })
        .catch(error => {
            console.error('Error fetching data from Wikipedia:', error);
            document.getElementById('messages').innerHTML = 'An error occurred while fetching data.';
        });
}


document.getElementById('sendButton').addEventListener('click', function() {
    const userInput = document.getElementById('userInput').value;
    if (userInput) {
        searchWikipedia(userInput); // Call the search function with user input
        document.getElementById('userInput').value = ''; // Clear the input field
    }
});
