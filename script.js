async function getProcuraPais() {
    const countryName = document.getElementById('name').value.trim();
    const apiUrl = `https://restcountries.com/v3.1/name/${countryName}`;
    const card = document.getElementById('card');
    card.style.display = "none";
 
    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error('País não encontrado');
        }
 
        const data = await response.json();
        const country = data[0];
 
        console.log(country.name.common); // Debug: verifica o nome do país
        console.log(document.getElementById('countryTitle')); // Debug: verifica o elemento
 
        // Atualiza os dados
        document.getElementById('pais').src = country.flags.png;
        document.getElementById('pais').alt = `Bandeira de ${country.name.common}`;
        document.getElementById('countryTitle').innerText = country.name.common;
        document.getElementById('capital').innerText = country.capital ? country.capital[0] : "Não possui capital";
        document.getElementById('continente').innerText = country.region;
        document.getElementById('population').innerText = country.population.toLocaleString();
 
        // Exibe o card
        card.style.display = "block";
    } catch (error) {
        console.error('Erro:', error.message);
        alert('Erro: ' + error.message);
    }
}