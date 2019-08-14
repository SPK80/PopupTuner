//works when window loaded
window.onload = function()
{	//if window is not fullscreen
    if (window.outerWidth<screen.availWidth && window.outerHeight<screen.availHeight){     
		//tune sizes by DOM html - main element size
        var wi = document.getElementsByTagName('html')[0].scrollWidth*1.3+50; 
        var he = document.getElementsByTagName('html')[0].scrollHeight*1.3+50;
		//resize window
        window.resizeTo(wi, he);		
    }    
}