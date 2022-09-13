<svelte:head>
	<title>About</title>
	<meta name="description" content="About this app" />
</svelte:head>

<div class="content">
	<h1>About this app</h1>

	<p>
		This is a <a href="https://kit.svelte.dev">SvelteKit</a> app, an application framework powered by Svelte.
	</p>

	<p>
		The main page contains a <a href="https://leafletjs.com/">Leaflet</a> implementation, using
		<a href="jawg.io">Jawg Streets</a> imagery as tilelayer.
	</p>

	<p>
		The map gets the name and addresses of the pinned restaurants via JSON from a Sveltekit
		endpoint, openly accessible from <a href="/pinnedMaps">here</a>.
	</p>
</div>

<style>
	h1 {
		font-size: 20px;
	}
	p {
		font-size: 16px;
	}
	.content {
		text-align: center;
		line-height: 2;
	}
</style>
