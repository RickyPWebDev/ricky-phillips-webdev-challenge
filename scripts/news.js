async function loadNews() {
    try {
        const response = await fetch('https://cors-anywhere.herokuapp.com/http://feeds.bbci.co.uk/news/rss.xml');
        const rssText = await response.text();

        // Parse the RSS feed
        const parser = new DOMParser();
        const xml = parser.parseFromString(rssText, 'application/xml');
        const items = xml.querySelectorAll('item');

        // Select the news overlay container
        const newsContainer = document.querySelector('#news-data .news-info');
        
        // Add the first 2 news headlines
        items.forEach((item, index) => {
            if (index < 2) { // Display the first 2 news items
                const title = item.querySelector('title').textContent;
                const description = item.querySelector('description').textContent;

                // Create elements for each news item
                const newsItem = document.createElement('div');
                newsItem.className = 'news-item';
                
                const newsTitle = document.createElement('p');
                newsTitle.className = 'news-title';
                newsTitle.innerText = title;

                const newsDesc = document.createElement('p');
                newsDesc.className = 'news-desc';
                newsDesc.innerText = description;

                newsItem.appendChild(newsTitle);
                newsItem.appendChild(newsDesc);

                newsContainer.appendChild(newsItem);
            }
        });

    } catch (error) {
        console.error("Error fetching the RSS feed: ", error);
    }
}

// Call the function to load news on page load
loadNews();
