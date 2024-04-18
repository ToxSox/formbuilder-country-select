(function(){
	window.addEventListener('load', function(){
		setTimeout(function() {
			var queryString = window.location.search;
			var urlParams = new URLSearchParams(queryString);
			var language = urlParams.get('prefill_language');
		
			languageSelect = document.querySelectorAll("[data-type='language-selector']")[0].children[1].children[0];
			languageSelect.value = language;
			languageSelect.dispatchEvent(new Event('change'));
		}, 1000);
	});
})();
