	if (+localStorage.visual) {
		$('body').addClass('visual');
		$('.visually-impaired__link').html('Обычная версия');
	}
	$('.visually-impaired__link').click(function (e) {
		e.preventDefault();
		$('body').toggleClass('visual')
		if ($('body').hasClass('visual')) {
			$(this).html('Обычная версия');
			localStorage.visual = 1;

		} else {
			$(this).html('Версия для слабовидящих');
			localStorage.visual = 0;
		}
	});
