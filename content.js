//works when window loaded
window.onload = () => {
	//if window is not fullscreen
	if (window.outerWidth < screen.availWidth && window.outerHeight < screen.availHeight) {
		//tune sizes by DOM html - main element size
		var wi = document.getElementsByTagName('html')[0].scrollWidth * 1.3 + 50;
		var he = document.getElementsByTagName('html')[0].scrollHeight * 1.3 + 50;
		//resize window
		// console.log('PopupTweaker resize window');
		window.resizeTo(wi, he);

		var tas = document.getElementsByTagName("textarea");
		if (tas.length > 0) {
			// console.log('PopupTweaker focus textarea');
			tas[0].focus();
		}

		var tas = document.getElementsByTagName("input");
		if (tas.length > 0) {
			var i = 0;
			while (i < tas.length) {
				var type = tas[i].getAttribute("type");
				if (type == "text" && !tas[i].hasAttribute("disabled")) {
					// console.log('PopupTweaker focus input');
					tas[i].focus();
					break;
				}
				i++;
			}
		}
	}
}