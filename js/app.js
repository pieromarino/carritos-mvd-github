mapboxgl.accessToken = 'pk.eyJ1IjoicGllcm9vMSIsImEiOiJja2o2cHJuYW02OTNyMnNwZGl2ajlyczVkIn0.t3zT5n4ECroqI-6xtdiuOQ';

const map = new mapboxgl.Map({
container: 'map',
style: 'mapbox://styles/mapbox/streets-v11', // stylesheet location
center: [-56.18612076723386, -34.90607253440899], // starting position [lng, lat]
zoom: 14, // starting zoom
});

const createMarker = (name, lng, lat) => {
    const marker = new mapboxgl.Marker()
        .setLngLat([lng, lat])
        .setPopup(new mapboxgl.Popup().setHTML(`<h3>${name}</h3>`))
        .addTo(map)
}

const createCustomMarker = (lng, lat) => {
    const el = document.createElement('div')
    el.className = 'marker'
    el.style.backgroundImage =
        'url(https://placekitten.com/g/120/)'
    el.style.height = '120px'
    el.style.width = '120px'

    new mapboxgl.Marker(el)
        .setLngLat([lng,lat])
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