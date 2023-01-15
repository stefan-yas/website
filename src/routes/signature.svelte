<img src="/signature.png" alt="footer-signature" />

<style>
	img {
		position: absolute;
		bottom: 1em;
		width: 5em;
		opacity: 0.5;
	}

	@media only screen and (max-height: 700px) {
		img {
			position: relative;
			margin-top: 3em;
		}
	}

	@media only screen and (min-width: 480px) and (max-width: 900px) and (orientation: landscape) {
		img {
			position: fixed;
			bottom: 0em;
			left: 50%;
			transform: translateX(-50%);
		}
	}
</style>
