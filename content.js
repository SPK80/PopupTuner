//works when window loaded
// console.log('PopupTuner');
window.onload = () => {
	//if window is not fullscreen
	if (window.outerWidth < screen.availWidth && window.outerHeight < screen.availHeight) {
		// console.log('loaded');
		adjustWindow();
		focusFirstTextarea();
		focusFirstInput();
	}
}

function adjustWindow() {
	//tune sizes by DOM html - main element size
	const wi = document.getElementsByTagName('html')[0].scrollWidth * 1.3 + 50;
	const he = document.getElementsByTagName('html')[0].scrollHeight * 1.3 + 50;
	window.resizeTo(wi, he);
}

function focusFirstTextarea() {
	//try to focus on first textarea
	const tags = document.getElementsByTagName("textarea");
	if (tags.length > 0) {
		tags[0].focus();
	}
}

function focusFirstInput() {
	//try to focus on first input
	const tags = document.getElementsByTagName("input");
	if (tags.length > 0) {
		var i = 0;
		while (i < tags.length) {
			var type = tags[i].getAttribute("type");
			if (type == "text" && !tags[i].hasAttribute("disabled")) {
				tags[i].focus();
				break;
			}
			i++;
		}
	}
}