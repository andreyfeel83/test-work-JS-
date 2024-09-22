const allEvents = document.querySelectorAll('.aside-event');
const eventsBox = document.querySelector('.aside-events__wrapper');
const allReviews = document.querySelectorAll('.content-review__wrapper-item');
const reviewsBox = document.querySelector('.content-review__wrapper');
const headerMenu = document.querySelector('.header-menu__button');
const allCasinoApp = document.querySelectorAll('.aside-apps');
const allStars = document.querySelectorAll('.content-rating-star');
const globalModal = document.querySelector('.global-modal');
const ratingBonus = document.querySelector('.content-rating-bonus');
const allButton = document.querySelectorAll('button[data-type="button"]');

allEvents.forEach((activeEvent) => {
	activeEvent.addEventListener('click', () => {
		const currentActive = eventsBox.querySelector('.aside-event-active');
		if (currentActive) {
			currentActive.classList.remove('aside-event-active');
		}
		activeEvent.classList.add('aside-event-active');
	});
});

allReviews.forEach((activeReview) => {
	activeReview.addEventListener('click', () => {
		const currentActive = reviewsBox.querySelector(
			'.content-review__wrapper-item-active'
		);
		if (currentActive) {
			currentActive.classList.remove('content-review__wrapper-item-active');
		}
		activeReview.classList.add('content-review__wrapper-item-active');
	});
});

headerMenu.addEventListener('click', () => {
	const headerModal = document.querySelector('.header-menu__modal');
	headerModal.classList.toggle('active');
});

allCasinoApp.forEach((app) => {
	app.addEventListener('click', () => {
		globalModal.style.visibility = 'visible';
	});
});

allButton.forEach((button) => {
	button.addEventListener('click', () => {
		globalModal.style.visibility = 'visible';
	});
});

document.addEventListener('keydown', (e) => {
	if (e.key === 'Escape') {
		const globalModal = document.querySelector('.global-modal');
		globalModal.style.visibility = 'hidden';
	}
});

allStars.forEach((star, index) => {
	star.addEventListener('click', () => {
		allStars.forEach((s, i) => {
			if (i <= index) {
				s.src = './icons/star-gold.svg';
			} else {
				s.src = './icons/star-gray.svg';
			}
		});
		ratingBonus.textContent = `${index + 1}/10`;
	});
});
