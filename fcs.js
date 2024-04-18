(function(){
window.addEventListener('load', function(){
	console.log("LOAD WINDOW TEST");
	languageSelect = document.querySelectorAll("[data-type='language-selector']")[0].children[1].children[0];
	languageSelect.value = "de";
	languageSelect.dispatchEvent(new Event('change'));
});

document.addEventListener('load', function(){
	console.log("LOAD DOCUMENT TEST");
});

document.getElementById('root').addEventListener('load', function(){
	console.log("LOAD ROOT TEST");

});

document.getElementById('root').addEventListener('loadeddata', function(){
	console.log("LOADED DATA ROOT TEST");

});	

document.getElementById('root').addEventListener('loadstart', function(){
	console.log("LOADSTART ROOT TEST");

});	
	
})();
