jQuery(document).on('ready', function() {
	$("#lightgallery").lightGallery({
        thumbnail:true,
        animateThumb: true,
        showThumbByDefault: true,
        download: false
    });

    $( "#main-photo" ).click(function() {
        $( "#main-thumbnail" ).click();
    });
});