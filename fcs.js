(function(){
window.addEventListener('load', function(){
	console.log("TEST");
	languageSelect = document.querySelectorAll("[data-type='language-selector']")[0].children[1].children[0];
	languageSelect.value = "de";
	languageSelect.dispatchEvent(new Event('change'));


});
})();
