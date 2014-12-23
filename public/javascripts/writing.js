$('#blogNav').addClass('on');

var categories = [];

function switchSelected(clickedElement) {
	if ($('.selected').attr("id") != clickedElement) {
        $( "li" ).removeClass( "selected" );
        $(clickedElement).addClass("selected");
    } 
}
//Remove home page links
$(".home-page-only").css('visibility', 'hidden');

//Have to do the selected category last to allow for multiple category tags
function filterBlogs(filter) {
	if (filter == "CoachingFilter") {
		categories.forEach(function (category) {
			if (category != "coaching") {
				$("." + category).hide();
			}
		})
		$(".coaching").show();
	} else if (filter == "RecognitionFilter") {
		categories.forEach(function (category) {
			if (category != "recognition") {
				$("." + category).hide();
			}
		})
		$(".recognition").show();
	} else if (filter == "SupportFilter") {
		categories.forEach(function (category) {
			if (category != "writing") {
				$("." + category).hide();
			}
		})
		$(".support").show();
	} else {
		categories.forEach(function (category) {
			$("." + category).show();
		})
	}
}

//Goes though the categories and sets up on clicks events for all of them
$("#categories > li" ).each(function() {
	$(this).on('click', function () {
		switchSelected(this);
		filterBlogs($(this).attr('id'));
	});
	var category = $(this).text().replace(/\s/g, '').toLowerCase();
	if (category != "all") {
		categories.push(category);
	}
});