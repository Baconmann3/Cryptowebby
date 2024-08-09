document.addEventListener('DOMContentLoaded', function() {
    const apiUrl = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false';

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const cryptoList = document.getElementById('crypto-list');
            data.forEach(crypto => {
                const cryptoItem = document.createElement('div');
                cryptoItem.className = 'crypto-item';
                cryptoItem.innerHTML = `
                    <h2>${crypto.name} (${crypto.symbol.toUpperCase()})</h2>
                    <p>Price: $${crypto.current_price}</p>
                    <p>24h Change: ${crypto.price_change_percentage_24h.toFixed(2)}%</p>
                    <p>1h Change: ${crypto.price_change_percentage_1h_in_currency ? crypto.price_change_percentage_1h_in_currency.toFixed(2) : 'N/A'}%</p>
                `;
                cryptoList.appendChild(cryptoItem);
            });
        })
        .catch(error => console.error('Error fetching data:', error));
});
