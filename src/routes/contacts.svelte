<script>
	export let href;
	export let src;
	export let alt;
	export let name;
	export let id;
</script>

<a {id} {href} target="_blank" rel="noreferrer"
	><img {src} {alt} />
	<p>{name}</p></a
>

<style>
	a {
		text-decoration: none;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		gap: 1em;
	}

	a:visited {
		text-decoration: none;
		color: var(--secondary-font-color);
	}

	a:hover {
		transform: scale(1.01);
	}

	a p {
		margin: 0px;
		color: var(--secondary-font-color);
		font-weight: bold;
	}

	a img {
		width: 5em;
	}

	#session-id:hover:after {
		content: url(/session.png);
		width: 125px;
		display: block;
		position: absolute;
		top: 8em;
	}

	@media only screen and (max-width: 900px) {
		a {
			flex-direction: row;
		}

		a img {
			width: 3em;
		}
	}
</style>
