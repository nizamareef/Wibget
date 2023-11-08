const tokenSelect = document.getElementById('token-name');
const tokenImage = document.getElementById('token-image');
const currencySelect = document.getElementById("Currency")

// Function to fetch and display token details
async function fetchTokenDetails() {
    const selectedToken = tokenSelect.value;
    const selectedCurrency = currencySelect.value;
    const apiUrl = `https://api.coingecko.com/api/v3/coins/${selectedToken} `

    try {
        const response = await fetch(apiUrl);
        if (response.ok) {
            const data = await response.json();

            document.getElementById('token-name-value').textContent = data.name;
            document.getElementById('symbol').textContent=data.symbol.toUpperCase()

            // Set the image source from the API
            if (data.image && data.image.small) {
                tokenImage.src = data.image.small;
            } 

            document.getElementById('current-price').textContent = `  ${data.market_data.current_price [selectedCurrency]} ${selectedCurrency.toUpperCase()}`;
            // Display token details
            document.getElementById('rank').textContent = `   ${data.  market_cap_rank}`;
            document.getElementById('market-cap').textContent = `  $${data.market_data.market_cap[selectedCurrency]} (${selectedCurrency.toUpperCase()})`;
            document.getElementById('volume').textContent = `   $${data.market_data.total_volume[selectedCurrency]} (${selectedCurrency.toUpperCase()})`;
        } else {
            console.error('Failed to fetch token details.');
        }
    } catch (error) {
        console.error('An error occurred:', error);
    }
}

tokenSelect.addEventListener('change', fetchTokenDetails);
currencySelect.addEventListener('change', fetchTokenDetails)

fetchTokenDetails();
