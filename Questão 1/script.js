async function consultarCEP() {
    const cepInput = document.getElementById('cepInput').value;
    const cepResult = document.getElementById('cepResult');
    
    try {
        const response = await fetch(`https://viacep.com.br/ws/${cepInput}/json/`);
        const data = await response.json();
        cepResult.innerHTML = `
            <p>CEP: ${data.cep}</p>
            <p>Endereço: ${data.logradouro}, ${data.bairro}, ${data.localidade} - ${data.uf}</p>
        `;
    } catch (error) {
        console.error(error);
        cepResult.innerHTML = '<p>CEP não encontrado</p>';
    }
}

async function consultarClima() {
    const climaResult = document.getElementById('climaResult');
    
    try {
        const apiKey = 'SUA_CHAVE_API';
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=London&appid=${apiKey}&units=metric`);
        const data = await response.json();
        climaResult.innerHTML = `
            <p>Clima em ${data.name}: ${data.weather[0].description}</p>
            <p>Temperatura: ${data.main.temp}°C</p>
        `;
    } catch (error) {
        console.error(error);
        climaResult.innerHTML = '<p>Erro ao obter dados do clima</p>';
    }
}
