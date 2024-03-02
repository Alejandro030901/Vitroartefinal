
const apiUrl = 'https://api.example.com/products';

async function searchProductsByName(query) {
    try {
        const response = await fetch(`${apiUrl}?name=${query}`);
        if (!response.ok) {
            throw new Error('Error fetching data');
        }
        return await response.json();
    } catch (error) {
        console.error('Error fetching data:', error);
        return [];
    }
}

searchProductsByName('shoes')
    .then(products => console.log('Productos encontrados:', products))
    .catch(err => console.error('Error al buscar productos:', err));

const badWords = ["palabra1", "palabra2", "ofensiva", "inapropiada"];

function filtrarPalabrasInapropiadas(texto) {
    let textoFiltrado = texto.toLowerCase();
    for (const palabra of badWords) {
        textoFiltrado = textoFiltrado.replace(new RegExp(palabra, 'g'), '****');
    }
    return textoFiltrado;
}

console.log(filtrarPalabrasInapropiadas("Este es un ejemplo con palabra2 ofensiva."));