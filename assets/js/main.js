const app = {
	loginToggler() {

		let cardBlock = $(".overbox .card-block"),
			subtitle = $(".overbox .sub-title"),
			divider = $(".overbox .divider"),
			title = $(".overbox .title"),
			row = $(".overbox .row");

	   	$(".alt-2").click(function() {
	      	if (!$(this).hasClass('material-button')) {

	         	$("span:first-child").removeClass('rotate').css({
	         		"top": "42%",
	         		"left": "50%"
	         	});

	         	setTimeout(function() {
	            	$(".overbox").css({
	               		"overflow": "initial"
	            	})
	         	}, 600);

	         	$(this).animate({
	            	"width": "100px",
	            	"height": "100px"
	         	}, 500, function() {
	            	$(".box").removeClass("back");

	            	$(this).removeClass('active');
	         	});

	         	cardBlock.fadeOut(300);
	         	subtitle.fadeOut(300);
	         	divider.fadeOut(300);
	         	title.fadeOut(300);
	         	row.fadeOut(300);

	         	$(".overbox").addClass('scale-overbox');

	         	$(".alt-2").addClass('material-buton');
	      	}

	   	});

	   	$(".material-button").click(function() {

	      	if ($(this).hasClass('material-button')) {
	         	setTimeout(function() {
	            	$(".overbox").css({
	               		"overflow": "hidden"
	            	}).removeClass('scale-overbox');
	            	$(".box").addClass("back");
	         	}, 200);

	         	$(this).addClass('active').animate({
	            	"width": "1100px",
	            	"height": "1100px"
	         	});

	         	if (window.innerWidth <= 575) {
	            	$("span:first-child").css({
		         		"top": "5%",
		         		"left": "60%"
		         	});

		         	$(this).animate({
		         		"width": "1400",
		         		"height": "1400"
		         	})

	         	} else if ((window.innerWidth > 575) && (window.innerWidth < 768)) {
	            	$("span:first-child").css({
		         		"top": "13%",
		         		"left": "65%"
		         	});

	         	} else if ((window.innerWidth > 767) && (window.innerWidth < 992)) {
	            	$("span:first-child").css({
		         		"top": "12%",
		         		"left": "66%"
		         	});

	         	} else if ((window.innerWidth > 991) && (window.innerWidth < 1200)) {
	            	$("span:first-child").css({
		         		"top": "12%",
		         		"left": "68%"
		         	});

	         	} else if (window.innerWidth >= 1200) {
	         		$("span:first-child").css({
		         		"top": "10%",
		         		"left": "71%"
		         	});
	         	}

	         	setTimeout(function() {
	            	$("span:first-child").addClass('rotate');

	            	$(".overbox .card-block").fadeIn(300);
		         	$(".overbox .title").fadeIn(300);
		         	$(".overbox .sub-title").fadeIn(300);
		         	$(".overbox .row").fadeIn(300);
		         	$(".overbox .divider").fadeIn(300);

	         	}, 700);

	         	$(this).removeClass('material-button');

	      	}

	      	if ($(".alt-2").hasClass('material-buton')) {
	         	$(".alt-2").removeClass('material-buton');
	         	$(".alt-2").addClass('material-button');
	      	}

	   	});
	},
	productImageUpload(arg) {
		window.URL = window.URL || window.webkitURL;

		let productUploadElem = document.getElementsByClassName("product-img-input"),
			productUploadBtn = document.getElementsByClassName("btn-product-img"),
			timeline = document.getElementsByClassName("timeline"),
			productImgWrapper = document.getElementById("product-img-wrapper"),
			productUploadForm = document.getElementById("product-upload-form"),
			statusTextarea = document.getElementById("status_update"),
		    productImgList = document.getElementById("product-imgs"),
		    slots = arg,
		    imageList = [],
			products;

		const postController = {
			toggleWrapper(class1, class2) {
				if (productImgWrapper.classList.contains(class1)) {
				        productImgWrapper.classList.add(class2)
				        productImgWrapper.classList.remove(class1);
				}
			},
			inputClicker() {
				Array.from(productUploadBtn).forEach( button => {
			      	button.addEventListener('click', (e) => {
			      		Array.from(productUploadElem).some( (input) => {
				      		if (input) {
			      				input.click();
				      			return true;
				      		}
			      		});
			      		e.preventDefault();
			      	}, false);
			    });
			},
			imagePicker() {
				Array.from(productUploadElem).forEach( input => {
			      	input.addEventListener('change', (e) => {
			      		// productImgWrapper.style.display = "block";
			      		// console.log(input.files.length);
			      		this.toggleWrapper("dis-none", "dis-flex");

			      		// console.log(input.files.length);
			      		if (input.files.length > 4) {
			      			this.toggleWrapper("dis-flex", "dis-none");
			      			alert("Sorry, you can't upload more than four images at a time!");
			      			return;
			      		}
			      		else if (slots === 0) {
			      			alert("Sorry, you can't upload more than four images at a time!");
			      			return;
			      		}
			      		// else if ((input.files.length > 4) &&  (slots < 4)) {
			      		// 	alert("Yay");
			      		// 	return;
			      		// }
			      		else{
				      		products = input.files;
				      		imageList.unshift(products)
				      		// console.log(products);
				      		this.imageUploader(products);
				      		slots--;
				      		// console.log(slots);
			      		}
			      		
			      	}, false);
			    });
			},
		    imageUploader(files) {
	    		Array.from(files).forEach( file => {
		    		if ((file.type !== "image/jpeg") && (file.type !== "image/png")) {

		    			return;

		    		} else {

		    			let imageItem = document.createElement("li"),
		    				image = document.createElement("img"),
		    				removeBtn = document.createElement("span");

		    			image.src = window.URL.createObjectURL(file);
				      	image.onload = function() {
		    				// console.log(this);
				        	window.URL.revokeObjectURL(this.src);
				    	}

				    	imageItem.appendChild(removeBtn);
				    	imageItem.appendChild(image);
		    			productImgList.appendChild(imageItem);
		    		}
	    	    });
		    },
		    contentSubmit() {
		    	productUploadForm.addEventListener('submit', (e) => {
		    		e.preventDefault();
		    		if (statusTextarea.value === '') {
		    			alert("Please provide product details!");
		    		}
		    		else {
		    			let output;
		    			$.ajax({
		    				// pass url here
		    				url: '',
		    				type: 'POST',
		    				dataType: 'json',
		    				data: productUploadForm,
		    				success() {
		    					// console.log("Success!");
		    					productUploadForm.submit();

		    					output += ` <div class="media">
				                                <a class="pull-left" href="#">
				                                    <img class="media-object p-r-10" src="assets/img/acc-img-1.png" alt="Image">
				                                </a>
				                                <div class="media-body">
				                                    <h6 class="media-heading c-brand w-500">Jhud Fashion House</h6>
				                                    <p>
				                                    	New arrivals are everywhere. Get Quality 2017 dresses which never goes out of style. Call us: 08073404890 or Visit jhuds.com/clothing.
				                                    </p>
				                                </div>
				                            </div>

				                            <div class="card-group">
				                                <div class="card m-5">
				                                    <!--Card image-->
				                                    <div class="view overlay hm-white-slight">
				                                        <img src="assets/img/products/timeline-product-1.png" class="img-fluid width-100p" alt="">
				                                        <a href="#">
				                                            <div class="mask waves-effect waves-light"></div>
				                                        </a>
				                                    </div>
				                                    <!--/.Card image-->
				                                </div>
				                                <div class="card m-5">
				                                    <!--Card image-->
				                                    <div class="view overlay hm-white-slight">
				                                        <img src="assets/img/products/timeline-product-2.png" class="img-fluid width-100p" alt="">
				                                        <a href="#">
				                                            <div class="mask waves-effect waves-light"></div>
				                                        </a>
				                                    </div>
				                                    <!--/.Card image-->
				                                </div>
				                            </div>

				                            <div class="m-t-10 m-b-50">
				                                <div class="btn-group bd-dark-light p-5 p-l-10 p-r-10" role="group" aria-label="Ad Action Buttons">
				                                     <button type="button" class="btn bg-white m-r-3 f-14">
				                                        <span class="f-left">View Item&nbsp;</span><span class="f-right"> <i class="fa fa-eye"></i> </span>
				                                    </button>
				                                    <button type="button" class="btn bg-white m-l-3 f-14 m-r-3 f-14">
				                                        <span class="f-left">Admire&nbsp;</span><span class="f-right"><i class="fa fa-heart"></i></span>
				                                    </button>
				                                    <button type="button" class="btn bg-white m-l-3 f-14 m-r-3 f-14">
				                                        <span class="f-left">Comment&nbsp;</span><span class="f-right"><i class="fa fa-comment"></i></span>
				                                    </button>
				                                    <button type="button" class="btn bg-white m-l-3 f-14">
				                                        <span class="f-left">Hype&nbsp;</span><span class="f-right"><i class="fa fa-share-alt"></i></span>
				                                    </button>
				                                </div>
				                            </div>
				                            <!-- coomment section -->
				                            <div class="media m-b-15">
				                                <a class="pull-left" href="#">
				                                <img class="media-object p-r-10" src="assets/img/acc-img-1.png" alt="Image">
				                                </a>
				                                <div class="media-body">
				                                    <textarea name="" id="" class="md-textarea input-alternate p-10 h-58 border-box comment_box" placeholder="Press enter to send..."></textarea>
				                                </div>
				                            </div>
				                            <div class="media m-b-40 comment flex-column"></div>`
		    				},
		    				error() {
		    					// console.log("error!");
		    				}
		    			})
		    		}
		    	})
		    }
		}

		// postController.toggleWrapper("dis-flex", "dis-none");
		postController.inputClicker();
		postController.imagePicker();
		postController.contentSubmit();

	},
	likeToggler() {
        let likeBtn = document.getElementsByClassName("like");

    	for (var i = 0;	i < likeBtn.length; i++ ) {
    		// console.log(likeBtn[i].parentElement.lastElementChild);
    		likeBtn[i].parentElement.addEventListener('click', function(e) {
    			// alert("Clicked");
    			if (e.srcElement) {
    				// console.log(e.srcElement.children[1]);
    				likeBtnClicker();
    				e.srcElement.children[1].click();
    			}
	    		// likeBtn[i].parentElement.lastElementChild.click();
    		})
    	}

    	function likeBtnClicker() {
			Array.from(likeBtn).forEach( btn => {
    			// console.log(btn);
    			// btn.click();
				btn.addEventListener('click', (e) => {
					e.preventDefault();
					// console.log(e);
					let dislikeHTML = `<i class="fa fa-heart-o"></i>`,
						likeHTML = `<i class="fa fa-heart"></i>`;
					$.ajax({
						// pass url here
						url: '',
						type: 'POST',
						dataType: 'json',
						data: {
							likePost: 'json'
						},
						success() {
							// console.log("Success!");
							(btn.innerHTML = dislikeHTML) ? (btn.innerHTML = likeHTML) : (btn.innerHTML = dislikeHTML);
						},
						error() {
							// console.log("error!");
							(btn.innerHTML = dislikeHTML) ? (btn.innerHTML = likeHTML) : (btn.innerHTML = dislikeHTML);
							// Replace code at the top with comented out code if url is passed
							// (btn.innerHTML = dislikeHTML) ? (btn.innerHTML = dislikeHTML) : (btn.innerHTML = likeHTML);
						}
					})
					
				})
		    })
    	}

    	likeBtnClicker();
    },
    commentHandler() {
    	let $container = $('section.main'),
    		$addComment = $container.find('.comment_box');

    	// creating messages
    	let callbackdata = JSON.parse(localStorage.getItem('story'));
    	let comment = callbackdata || {}; //
    	comment.users = comment.users || []; //
    	//console.log({stories});
    	const commentParameters = {
    	    shouldEdit: false,
    	    userIndex: "",
    	    allUsers: comment.users.length,
    	    updateComment(arg) {
    	        //stories = callbackdata;
    	        //console.log(callbackdata.users);
    	        //console.log(stories.users.length);
    	        //console.log(arg.val());
    	        
    	        let output = "";
    	        for (var i = 0; i < comment.users.length; ++i) {
    	            output += ` <div class="media m-b-20">
    	                            <div class="pull-left p-r-10">
    	                                <img class="media-object " src="assets/img/acc-img-2.png" alt="Image">
    	                            </div>
    	                            <div class="media-body">
    	                                <h6 class="media-heading w-700 m-b-5 f-12">Cindy Fashion House</h6>
    	                                <p class="f-12">${comment.users[i].comment}</p>
    	                                <ul class="m-b-0 f-12">
    	                                    <li class="c-brand dis-inline-b p-r-10"><a href="#"><span><i class="fa fa-heart-o"></i></span> Like</a></li>
    	                                	<li class="c-brand dis-inline-b p-l-10 p-r-10 comment-reply"><a href="#">Reply</a></li>
    	                                	<li class="c-brand dis-inline-b p-l-10">31 May 2017</li>
    	                                </ul>
    	                                <div class="media m-t-5">
    	                                    <div class="pull-left p-r-10">
    	                                        <img src="assets/img/acc-img-1.png" class="media-object">
    	                                    </div>
    	                                    <div class="media-body">
    	                                        <textarea class="md-textarea input-alternate p-10 h-58 border-box" style="width:450px" placeholder="Write a reply..."></textarea>
    	                                    </div>
    	                                </div>
    	                            </div>
    	                        </div>`
    	        }
    	                    
    	        $(".comment").html(output);
    	        //console.log(arg.val());
    	        arg.val(" ");
    	        //console.log(arg.val());
    	    
    	    },
    	    createComment: function(arg){
    	        var $textarea = arg.val();//gets the text put in the text area
    	        //console.log($textarea);
    	        comment.users.unshift({
    	            comment: $textarea,
    	        });
    	        comment.allUsers ++;
    	        //console.log('stories');
    	    }
    	};
    	$.extend(comment, commentParameters);
    	$addComment.keypress(function(e) {
    	    //console.log($(this).val().length);
    	    if(e.which === 13 && $(this).val() !== '' && $(this).val().trim() !== '') {
    	        e.preventDefault();
    	        // console.log($(this));
    	        // $addComment[0].offsetParent.children[4].removeClass('m-b-50')
    	        //     .addClass('m-b-15');
    	        comment.createComment($(this));
    	        comment.updateComment($(this));
    	    }
    	     
    	});
    },
    validation(){
    	$('#register').click(function(){
        
         //prevent a form from submitting if no email
          if((document.getElementById("firstname").value == "")){
            document.getElementById("error_firstname").innerHTML = "Provide your firstname";
            //to STOP the form from submiting
            return false;
          }
          if((document.getElementById("lastname").value == "")){
            document.getElementById("error_lastname").innerHTML = "Provide your lastname";
            //to STOP the form from submiting
            return false;
          }
          if((document.getElementById("email").value == "")){
            document.getElementById("email_error").innerHTML = "provide us your email";
            //to STOP the form from submiting
            return false;
          }
          if((document.getElementById("password").value == "" )){
            document.getElementById("password_error").innerHTML = "password field can't be empty";
            //to STOP the form from submiting
            return false;
          }
          // checks if password matches
          if((document.getElementById("password-conf").value !== document.getElementById("password").value)){
            document.getElementById("passwordConf_error").innerHTML = "password does not match";
            //to STOP the form from submiting
            return false;
          }
          if((document.getElementById("gender").value == "")){
            document.getElementById("gender_error").innerHTML = "Select a gender";
            //to STOP the form from submiting
            return false;
          }
          if((document.getElementById("dob").value == "")){
            document.getElementById("dob_error").innerHTML = "select a date";
            //to STOP the form from submiting
            return false;
          }
          if((document.getElementById("state").value == "")){
            document.getElementById("state_error").innerHTML = "select a state";
            //to STOP the form from submiting
            return false;
          }
          if((document.getElementById("Community").value == "")){
            document.getElementById("Community_error").innerHTML = "select community";
            //to STOP the form from submiting
            return false;
          }
          if((document.getElementById("tradeInterest").value == "")){
            document.getElementById("tradeInterest_error").innerHTML = "select trade";
            //to STOP the form from submiting
            return false;
          }
          else{
            //reset and allow the form to submit
            document.getElementById("errorMessage").innerHTML = "";
            return true;
          }
 		});
    },
    LogIn() {
    	$('#Send').click(function(){
 			if((document.getElementById("username").value == "")){
 				document.getElementById("error_username").innerHTML = "provide a password";
 				return false;
 			}
 		});
    },
    addProductImageHandler:function (){
        $('input').on('change', function(){
            //alert("alert");
            //console.log($(this));
            readUrl($(this));
        });
        function readUrl(argument) {
            var file = argument[0].files[0];
            //console.log(argument[0]);
            var reader = new FileReader();
            reader.onloadend = function () {
                //console.log(argument[0].previousElementSibling());
                argument.prev().attr('src', reader.result);
            }
            if(file){
                reader.readAsDataURL(file);
            }
        }
    }
    
}