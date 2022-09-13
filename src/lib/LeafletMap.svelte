<script>
	import { onMount, onDestroy } from 'svelte';
	import { browser } from '$app/environment';

	export let pinnedLocations;

	let mapElement;
	let map;

	onMount(async () => {
		if (browser) {
			const leaflet = await import('leaflet');

			map = leaflet.map(mapElement).setView([40.416729, -3.703339], 14);

			const accessToken = 'Wpd4KGCjAkhK6x5T4mZyXl0a9mB9BjITlSQbthPKgsnjdXoGUxeJSJNHlG9PeFRN';
			const styles = ['jawg-streets', 'jawg-sunny', 'jawg-terrain', 'jawg-dark', 'jawg-light'];
			const style = 'jawg-streets';

			leaflet
				.tileLayer(`https://tile.jawg.io/${style}/{z}/{x}/{y}.png?access-token=${accessToken}`, {
					attribution:
						'&copy; <a href="http://jawg.io" title="Tiles Courtesy of Jawg Maps" target="_blank" class="jawg-attrib" >&copy; <b>Jawg</b>Maps</a> | <a href="https://www.openstreetmap.org/copyright" title="OpenStreetMap is open data licensed under ODbL" target="_blank" class="osm-attrib" >&copy; OSM contributors</a>'
				})
				.addTo(map);
			//Iterates every pinned restaurant from the pinnedLocations, adding each to map
			for (const restaurant of pinnedLocations)
				leaflet.marker(restaurant.address).addTo(map).bindPopup(restaurant.name);
		}
	});

	onDestroy(async () => {
		if (map) map.remove();
	});
</script>

<main>
	<div bind:this={mapElement} />
</main>

<style>
	@import 'leaflet/dist/leaflet.css';

	/* Applies to the map component */
	* {
		height: 92vh;
		width: 100vw;
	}
</style>
