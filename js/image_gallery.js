//http://packery.metafizzy.co/packery.pkgd.js added as external resource

/*===PACKERY.JS SETTINGS===*/

 	
	var $container = $(".container").packery();
	// init
	$container.packery({
		itemSelector: '.item',
		columnWidth:  $container.find('.grid-sizer')[0]
		//"isHorizontal": true;
	});
$container.packery('bindResize')



//IMAGE FILTER FUNCTIONALITY
$(document).ready(function(){
	var allVisible = $container.packery('getItemElements'); //save all the packer.js elements to the variable for later use
	$(".img-category").on("click", "div", function(){
		var filterBtn = $(this).attr("class").split("-")[0]; //save the first part (e.g. filter1) of the class-name during the click event and then use it  to determine which images will be shown and which filtered.
		$(".img-category div").removeClass("active-filter"); //remove the underline from other filter-buttons and add it to the clicked one.
		$(this).addClass("active-filter");
		$(".container").children(".item").detach(); //detach all the current child elements of the container
		for(var i = 1; i < allVisible.length; i++) { //loop through the elements inside allVisible-var & add them to the container, if their class-name is the same as ".item" + what is currently stored inside filterBtn-variable
			if (allVisible[i].className === "item " + filterBtn) {
				$container.append(allVisible[i]);
				$container.packery( 'appended', allVisible[i]);
				$container.packery('reloadItems'); // Recollect all packery.js item elements
				$container.packery(); //Lay out all item elements.
				}
			}
		});

	$("#showAll-btn").click(function(){ //to show all pictures, first remove all children of container and the add all the pictures to the container using the allVisible variable.
		$(".img-category div").removeClass("active-filter");
		$(".container").children(".item").detach();
		$container.append(allVisible);
		$container.packery( 'appended', allVisible);
		$container.packery('reloadItems');
		$container.packery();
	});
});



//IMAGE REVIEW FUNCTIONALITY
$(document).ready(function(){	
	$("div.item").on("click", "img", function(event){
		event.preventDefault();
		$(".closeImg-btn").show(); //this is the dark background behind the images in "review mode"
		$(".nextImg-btn").show();
		$(".prevImg-btn").show();
		if($(this).parent().index() === 1) { //if the clicked picture is the first picture, then hide the "prev image" button.
			$(".prevImg-btn").hide();
		}
		if($(this).parent().index() === $(".container").children().length - 1) { //if the clicked picture is the last picture, then hide the "next image" button.
			$(".nextImg-btn").hide();
		}
		$(this).attr("id", "review-img"); //add the review-img -Id to the clicked image (makes the image larger) 
		//$container.packery();
	});

	$(".closeImg-btn").on("click", function(){ //when the black background is clicked, the user will be taken back to the "gallery view" and all the elements associated with the "review mode" are hidden
		$(".item img").removeAttr("id","review-img");
		$(".closeImg-btn").hide();
		$(".nextImg-btn").hide();
		$(".prevImg-btn").hide();
		$container.packery('reloadItems');
		$container.packery();
	});
});
	


//IMAGE NAVIGATION BUTTONS
$(document).ready(function(){
	$(".nextImg-btn").on("click", function() {
		var activeImage = $(this).siblings(".container").find("#review-img"); //find the image with the ID "review-img" and save it in the variable
		var activeParentDiv = $(activeImage).parent(); //save the parent element of the image with "review-img"-ID to this variable
		$(".prevImg-btn").show(); //when the user clicks the first picture, the image is shown without the prev-button. This will make sure that the prev-button appears after the user clicks the "next image"-button
		if($(activeParentDiv).next("div").index() === $(".container").children().length - 1) { //if the next picture is the last picture of the container, then hide the "next image" button.
			$(".nextImg-btn").hide();
		}
		$(activeImage).removeAttr("id", "review-img"); //remove the "review-img"-ID from the picture
		$(activeParentDiv).next("div").find("img").attr("id", "review-img"); //find the picture next to the current picture and add the review-img-ID to it, i.e. next pictuer will be shown.
		

	});

	$(".prevImg-btn").on("click", function() { //Same things happen in this section that happen in the above one, just in reverse.
		var activeImage = $(this).siblings(".container").find("#review-img");
		var activeParentDiv = $(activeImage).parent();
		$(".nextImg-btn").show(); 
		if($(activeParentDiv).prev("div").index() === 1) { //if the next picture is the first picture of the container, then hide the "previous image" button.
			$(".prevImg-btn").hide();
		}
		$(activeParentDiv).prev("div").find("img").attr("id", "review-img");
		$(activeImage).removeAttr("id", "review-img");
	});
});