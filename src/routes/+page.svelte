<script>
	import Contacts from './contacts.svelte';
	const title = "Hi, I'm Stefan";

	const telegram = {
		href: 'https://stefanyas.t.me',
		src: '/telegram_icon.svg',
		alt: 'telegram-icon',
		name: 'Telegram'
	};

	const email = {
		href: 'mailto:stefan@stefanyas.me',
		src: '/email_icon.svg',
		alt: 'email-icon',
		name: 'Email'
	};

	const matrix = {
		href: 'https://matrix.to/#/@stefan_yas:matrix.org',
		src: '/element-messenger.svg',
		alt: 'element-icon',
		name: 'Matrix'
	};

	const threema = {
		href: 'https://threema.id/5AU7KBY5',
		src: '/threema-messenger.svg',
		alt: 'threema-icon',
		name: 'Threema'
	};

	const session = {
		href: '#session-id-copied-to-clipboard',
		src: '/session_icon.svg',
		alt: 'session-icon',
		name: 'Session',
		id: 'session-id'
	};

	const github = {
		href: 'https://github.com/stefan-yas',
		src: '/github logo.svg',
		alt: 'github-icon',
		name: 'GitHub'
	};
</script>

<head>
	<title>{title}</title>
</head>
<main>
	<h1>{title}</h1>

	<section class="block">
		<div class="contacts">
			<Contacts href={telegram.href} src={telegram.src} alt={telegram.alt} name={telegram.name} />
			<Contacts href={email.href} src={email.src} alt={email.alt} name={email.name} />
			<Contacts href={matrix.href} src={matrix.src} alt={matrix.alt} name={matrix.name} />
			<Contacts href={threema.href} src={threema.src} alt={threema.alt} name={threema.name} />
			<Contacts
				id={session.id}
				href={session.href}
				src={session.src}
				alt={session.alt}
				name={session.name}
			/>
			<Contacts href={github.href} src={github.src} alt={github.alt} name={github.name} />
		</div>
	</section>
</main>

<style>
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

	@media only screen and (max-width: 900px) {
		h1 {
			font-size: 2em;
		}

		.contacts {
			flex-direction: column;
			align-items: flex-start;
		}
	}
</style>
