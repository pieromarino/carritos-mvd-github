mapboxgl.accessToken = 'pk.eyJ1IjoicGllcm9vMSIsImEiOiJja2o2cHJuYW02OTNyMnNwZGl2ajlyczVkIn0.t3zT5n4ECroqI-6xtdiuOQ';

const map = new mapboxgl.Map({
container: 'map',
style: 'mapbox://styles/mapbox/streets-v11', // stylesheet location
center: [-56.18612076723386, -34.90607253440899], // starting position [lng, lat]
zoom: 14, // starting zoom
});


const markers = [{
    name: 'Macanudo',
    lng: -56.19387153136165,
    lat: -34.904930916923554,
    rating: 5,
}, {
    name: 'Rosita',
    lng: -56.137879491767876,
    lat: -34.902241200253485,
    rating: 5,
},{
    name: 'El Imbatible',
    lng: -56.18006359060506,
    lat: -34.902301575520084,
    rating: 4.5,
}, {
    name: 'Ta Mejor',
    lng: -56.169894857890114,
    lat: -34.91313315775631,
    rating: 4.3,
}, {
    name: 'Mc Carro',
    lng: -56.19297916195116,
    lat: -34.903233376230766,
    rating: 4.8,
}, {
    name: 'Las Rubias',
    lng: -56.202550170893446,
    lat: -34.90264103839209,
    rating: 4.8,
}]

const createMarker = (name, lng, lat) => {
    const marker = new mapboxgl.Marker()
        .setLngLat([lng, lat])
        .setPopup(new mapboxgl.Popup().setHTML(`<h3>${name}</h3>`))
        .addTo(map)
}

fetch('https://pieromarino.github.io/carritos-mvd-github/foodtrucks.json')
    .then(res => res.json())
    .then(res => {
        res.map(marker => createMarker(marker.name ,marker.lng, marker.lat))
    })

/* map.on('mousemove', (e) => {
    document.getElementById('info-dev').innerHTML =
        JSON.stringify(e.point) +
        '<br/>' +
        JSON.stringify(e.lngLat.wrap())
})

map.on('click', (e) => {
    createMarker('TEMPORAL MARKER', e.lngLat.lng, e.lngLat.lat)
    console.log('Temporal marker created')
}) */