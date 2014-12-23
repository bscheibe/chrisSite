//Remove home page links
$(".home-page-only").css('visibility', 'hidden');

//For the filter?
$('#blogNav').addClass('on');

var categories = [];

function switchSelected(clickedElement) {
	if ($('.selected').attr("id") != clickedElement) {
        $( "li" ).removeClass( "selected" );
        $(clickedElement).addClass("selected");
    } 
}

//Have to do the selected category last to allow for multiple category tags
function filterBlogs(filter) {
	if (filter == "UpdatesFilter") {
		categories.forEach(function (category) {
			if (category != "updates") {
				$("." + category).hide();
			}
		})
		$(".updates").show();
	} else if (filter == "EditorialsFilter") {
		categories.forEach(function (category) {
			if (category != "editorials") {
				$("." + category).hide();
			}
		})
		$(".editorials").show();
	} else if (filter == "WritingFilter") {
		categories.forEach(function (category) {
			if (category != "writing") {
				$("." + category).hide();
			}
		})
		$(".writing").show();
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