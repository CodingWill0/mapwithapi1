<script>
	import Icon from '$lib/assets/web_logo.svg';
</script>

<header>
	<div class="corner">
		<a href="/">
			<img src={Icon} alt="Task Icon" />
		</a>
	</div>

	<nav>
		<ul>
			<li>
				<a href="/">Home</a>
			</li>
			<li>
				<a href="/about">About</a>
			</li>
		</ul>
	</nav>

	<div class="corner" />
</header>

<style>
	header {
		font-family: 'Rubik';
		display: flex;
		justify-content: space-between;
		align-items: center;
		height: 8vh;
	}

	/* Applied to the two div containers in the header corners */
	.corner {
		width: 3em;
		height: 3em;
	}

	/* Applied to the div of the site logo */
	.corner a {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;
	}

	/* Applied to the image logo */
	.corner img {
		width: 2em;
		height: 2em;
	}

	ul {
		display: flex;
		justify-content: center;
		align-items: center;
		list-style: none;
	}

	li:hover {
		background-color: whitesmoke;
	}

	nav a {
		display: flex;
		height: 100%;
		padding: 2vh;
		color: black;
		font-weight: 500;
		font-size: 3vh;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		text-decoration: none;
		transition: color 0.2s linear;
	}

	a:hover {
		color: #f49;
	}
</style>
