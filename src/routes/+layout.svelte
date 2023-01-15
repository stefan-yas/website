<script>
	import Signature from './signature.svelte';
	import Toast from './toast.svelte';
</script>

<slot />

<Signature />
<Toast />

<style>
	:root {
		--background-color: #dee2e6;
		--font-color: #212529;
		--secondary-font-color: #495057;
		--font-family: 'Inter', sans-serif;
		--border-radius: 5px;
		--card-background-color: #e9ecef;
		--padding: 3%;
		--button-background-color: #ced4da;
	}

    :global(html) {
        font-size: 16px;
    }

	:global(body) {
		padding: var(--padding);
		font-family: 'Courier New', Courier, monospace;
		background-color: var(--background-color);
		color: var(--font-color);
		font-family: var(--font-family);
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
	}

	@font-face {
		font-family: var(--font-family);
		src: url('/inter.ttf');
	}

	:global(main) {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 2em;
	}

	:global(h1) {
		font-size: 2rem;
	}

	:global(h2) {
		font-size: 1.5rem;
	}

	:global(h3) {
		font-size: 1.17rem;
	}

    :global(h4) {
		font-size: 1rem;
	}

    :global(h5) {
		font-size: 0.83rem;
	}

	:global(button) {
		font-weight: bold;
		font-size: 1em;
		border-radius: var(--border-radius);
		background-color: var(--button-background-color);
		border: none;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	:global(button:hover) {
		transform: scale(1.01);
	}

	:global(button a) {
		display: block;
		width: 100%;
		height: 100%;
		padding: 1em;
	}

	:global(a) {
		color: var(--font-color);
		text-decoration: none;
	}

	:global(a:visited) {
		color: var(--font-color);
	}
</style>
