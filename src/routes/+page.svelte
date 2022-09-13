<script>
	import LeafletMap from '$lib/LeafletMap.svelte';

	//Get the JSON of the pinned restaurants from the page endpoint (API)
	const load = (async () => {
		const response = await fetch('/pinnedMaps');
		return await response.json();
	})();
</script>

<svelte:head>
	<title>Task</title>
	<meta name="description" content="Three restaurants in a map" />
</svelte:head>

<!-- Serve pinnedLocations to LeafletMap component as attribute-->
{#await load then data}
	<LeafletMap pinnedLocations={data} />
{/await}
