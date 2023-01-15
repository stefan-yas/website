<script>
	import Signature from './signature.svelte';
	import Toast from './toast.svelte';

	const title = "Hi, I'm Stefan";
	const telegramIcon = '/telegram_icon.svg';
	const elementIcon = '/element-messenger.svg';
	const emailIcon = '/email_icon.svg';
	const githubLogo = '/github logo.svg';
	const threemaIcon = '/threema-messenger.svg';
	const sessionIcon = '/session_icon.svg';
</script>

<head>
	<title>{title}</title>
</head>

<body>
	<main>
		<h1>{title}</h1>

		<section class="block">
			<div class="contacts">
				<a href="https://stefanyas.t.me" target="_blank" rel="noreferrer"
					><img src={telegramIcon} alt="telegram-icon" />
					<p>Telegram</p></a
				>
				<a href="mailto:stefan@stefanyas.me" target="_blank" rel="noreferrer"
					><img src={emailIcon} alt="email-icon" />
					<p>Email</p></a
				>
				<a href="https://matrix.to/#/@stefan_yas:matrix.org" target="_blank" rel="noreferrer"
					><img src={elementIcon} alt="element-icon" />
					<p>Matrix</p></a
				>
				<a href="https://threema.id/5AU7KBY5" target="_blank" rel="noreferrer"
					><img src={threemaIcon} alt="threema-icon" />
					<p>Threema</p></a
				>
				<a id="session-id" href="/#session-id-copied-to-clipboard"
					><img src={sessionIcon} alt="session-icon" />
					<p>Session</p></a
				>
				<a href="https://github.com/stefan-yas" target="_blank" rel="noreferrer"
					><img src={githubLogo} alt="github-logo" />
					<p>GitHub</p></a
				>
			</div>
		</section>
	</main>
	<Signature />
	<Toast />
</body>

<style>
	:root {
		--background-color: #dee2e6;
		--font-color: #212529;
		--secondary-font-color: #495057;
		--font-family: 'Inter', sans-serif;
		--border-radius: 5px;
		--card-background-color: #e9ecef;
		--padding: 3%;
	}

	:global(body) {
		padding: var(--padding);
		font-family: 'Courier New', Courier, monospace;
		background-color: var(--background-color);
		color: var(--font-color);
		font-family: var(--font-family);
	}

	body {
		display: flex;
		justify-content: center;
		align-items: center;
	}
	@font-face {
		font-family: var(--font-family);
		src: url('/inter.ttf');
	}

	main {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 2em;
	}

	h1 {
		font-size: 5em;
	}

	.block {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		background-color: var(--card-background-color);
		border-radius: var(--border-radius);
		width: fit-content;
		padding: var(--padding);
	}

	.contacts {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: row;
		gap: 2em;
	}

	.contacts a {
		text-decoration: none;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		gap: 1em;
	}

	.contacts a:visited {
		text-decoration: none;
		color: var(--secondary-font-color);
	}

	.contacts a p {
		margin: 0px;
		color: var(--secondary-font-color);
		font-weight: bold;
	}

	.contacts a img {
		width: 5em;
	}

	.contacts a:hover {
		transform: scale(1.01);
	}

	#session-id:hover:after {
		content: url(/session.png);
		width: 125px;
		display: block;
		position: absolute;
		top: 8em;
	}

	@media only screen and (max-width: 900px) {
		h1 {
			font-size: 2em;
		}
		.contacts {
			flex-direction: column;
		}

		.contacts a {
			flex-direction: row;
		}

		.contacts a img {
			width: 2em;
		}
	}
</style>
