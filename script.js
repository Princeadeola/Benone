window.onload = function(){
	var images = new Array(
			"images/mountains.jpg",
			"images/sky.jpg",
			"images/tree.jpg"
		);
	images.current = 0;

	var img = document.getElementById('slideImg');

	setInterval(function () {
		img.src = images [ images.current++ ];
		if ( images.current === images.length )
			images.current = 0;
	}, 3000 );
};

