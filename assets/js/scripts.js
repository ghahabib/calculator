function sg_modal_content(content, params){

	if(params === null || typeof params !== 'object'){
		params = {};
	}

	params.size = (typeof params.size !== 'undefined') ? params.size : '';
	params.iframe = (typeof params.iframe !== 'undefined') ? params.iframe : '';

	var output = '<div class="modal-dialog '+params.size+'">';
		output += '<div class="modal-content">';
		output += '<div class="modal-body">';
		output += '<div class="padded">';
		output += content;
		output += '</div><!-- padded -->';
		output += '</div><!-- modal-body -->';
		output += '</div><!-- modal-content -->';

		output += '<a class="btn btn-primary btn-close" data-dismiss="modal"><i class="fa fa-close"></i></a>';
		output += '</div><!-- modal-dialog -->';

	return output;
}

jQuery(document).ready(function($){

	var $window = $(window);
	var $modal = $('#theme-modal');

	/*---bootstrap dropdown fix---*/
	$('.menu .dropdown').hover(function() {
		var $this = $(this);
		$this.addClass('hovered');
		$this.find('.dropdown-menu').first().stop(true, true).delay(250).slideDown();
	}, function() {
		var $this = $(this);
		$this.removeClass('hovered');
		$this.find('.dropdown-menu').first().stop(true, true).delay(100).slideUp();
	});

	$('.menu .dropdown-sm > a').on('click', function(event){
		event.preventDefault();

		var $this = $(this);
		var $parent = $this.closest('.dropdown-sm');
		var $target = $(event.target);

		if($target.is('.toggle') || $target.parent().is('.toggle')){
			if($parent.hasClass('hovered')){
				$parent.removeClass('hovered').removeClass('active');
				// $parent.find('.dropdown-menu').first().stop(true, true).delay(100).slideUp();
			}
			else{
				$parent.addClass('hovered').addClass('active');
				$parent.siblings().removeClass('hovered').removeClass('active');
				// $parent.find('.dropdown-menu').first().stop(true, true).delay(250).slideDown();
			}
		}
		else if(typeof $this.attr('href') !== 'undefined'){
			location.href = $this.attr('href');
		}
	});

	$('.navbar-toggle').on('click', function(){
		var $body = $('body');
		if($('body').hasClass('show-mobile-menu')){
			$body.removeClass('show-mobile-menu');
		}
		else{
			$body.addClass('show-mobile-menu');
		}
	});

	/*---bootstrap navbar fix---*/
	// (function(){
	// 	$('.nav a').on('click', function(){ 
	// 		var $navbar_toggle = $('.navbar-toggle');
	// 		if($navbar_toggle.css('display') != 'none'){
	// 			$navbar_toggle.trigger( "click" );
	// 		}
	// 	});
	// })();
	// end function

	/*----fix anchor link menu----*/
	(function(){
		
		var current_url = window.location.protocol + '//' + window.location.host + window.location.pathname;

		$('a[href]').each(function(){
			var $this = $(this);
			var href = $this.attr('href');

			if(href.indexOf('#') !== -1){
				if(href.indexOf('#') === 0){
					$this.attr('href', href); 
				}
			}
		});

	})();
	// end function

	/*----video modal----*/
	(function(){

		// Gets the video src from the data-src on each button
		var video_src;
		$('.js-video-modal').click(function() {
			video_src = $(this).data('src');
		});
		  
		// when the modal is opened autoplay it  
		$('#video-modal').on('shown.bs.modal', function (e) {
			var suffix = 'autoplay=1&amp;modestbranding=1&amp;showinfo=0';

			if(video_src.indexOf('?') > -1){
				suffix = '&' + suffix;
			}
			else{
				suffix = '?' + suffix;
			}
			
			$(this).find('.video').attr('src', video_src + suffix ); 
			$('body').addClass('video-modal-open');
		});

		// stop playing the youtube video when I close the modal
		$('#video-modal').on('hide.bs.modal', function (e) {
			$(this).find('.video').attr('src', video_src); 
			$('body').removeClass('video-modal-open');
		}) 
			
			
	})();
	// end function

	/*----video modal----*/
	(function(){

		// Gets the video src from the data-src on each button
		var video_src;
		var video_ratio;
		var $video_hero = $('.video-hero').first();
		$('body').on('click', '.js-video-hero', function(event) {
			// event.preventDefault();
			video_src = $(this).data('src');
			video_ratio = $(this).data('ratio');

			$video_hero.trigger('video.hero.on');
		});

		$('body').on('click', '.js-video-hero-close', function(event) {
			event.preventDefault();
			$video_hero.trigger('video.hero.off');
		});
		  
		// when the modal is opened autoplay it  
		$video_hero.on('video.hero.on', function (e) {
			var suffix = 'autoplay=1&amp;modestbranding=1&amp;showinfo=0';

			if(video_src.indexOf('?') > -1){
				suffix = '&' + suffix;
			}
			else{
				suffix = '?' + suffix;
			}
			
			$(this).find('.video').attr('src', video_src + suffix ); 
			$('body').addClass('video-hero-on video-ratio-'+video_ratio);
			$(this).closest('.hshc-post-list').addClass('video-parent-on');
		});

		// stop playing the youtube video when I close the modal
		$video_hero.on('video.hero.off', function (e) {
			$(this).find('.video').attr('src', video_src); 
			$('body').removeClass('video-hero-on video-ratio-'+video_ratio);
			$(this).closest('.hshc-post-list').removeClass('video-parent-on');
		}) 
			
			
	})();
	// end function

	/*----carousel----*/
	(function(){
		if(typeof $.fn.slick === 'undefined'){ return false; }
		
		$('.sg-slick-carousel').each(function(){
			var $this = $(this);
			var cols = $this.data('cols') || 1;

			var slickConfig = {
				slidesToShow: $this.data('cols') || 1,
				slidesToScroll: $this.data('scroll_slide') || 1,
				dots: (typeof $this.data('dots') !== 'undefined') ? $this.data('dots') : true,
				arrows: (typeof $this.data('arrows') !== 'undefined') ? $this.data('arrows') : true,
				fade: (typeof $this.data('fade') !== 'undefined') ? $this.data('fade') : false,
				centerMode: (typeof $this.data('center_mode') !== 'undefined') ? $this.data('center_mode') : false,
				variableWidth: (typeof $this.data('variable_width') !== 'undefined') ? $this.data('variable_width') : false,
				initialSlide: $this.data('initial_slide') || 0,
				centerPadding: $this.data('center_padding') || 0,
				focusOnSelect: (typeof $this.data('focus_select') !== 'undefined') ? $this.data('focus_select') : false,
				asNavFor: $this.data('nav_for'),
				infinite: (typeof $this.data('infinite') !== 'undefined') ? $this.data('infinite') : false,
				autoplay: (typeof $this.data('autoplay') !== 'undefined') ? $this.data('autoplay') : false,
				autoplaySpeed: (typeof $this.data('speed') !== 'undefined') ? $this.data('speed') : 2000,
				prevArrow: '<button type="button" class="slick-prev" aria-label="prev"></button>',
				nextArrow: '<button type="button" class="slick-next" aria-label="next"></button>',
				responsive: []
			};

			if(typeof $this.data('cols-xs') !== 'undefined'){
				slickConfig.responsive.push({breakpoint:480, settings:{ slidesToShow:$this.data('cols-xs') }});
			}
			else{
				slickConfig.responsive.push({breakpoint:480, settings:{ slidesToShow:1 }});
			}

			if(typeof $this.data('cols-sm') !== 'undefined'){
				slickConfig.responsive.push({breakpoint:680, settings:{ slidesToShow:$this.data('cols-sm') }});
			}

			$.each(slickConfig, function(index, value){

				if(value=='true'){
					slickConfig[index] = true;
				}
				else if(value=='false'){
					slickConfig[index] = false;
				}
			});

			$this.slick(slickConfig);

			if(typeof $this.data('initial_slide') !== 'undefined'){
				$this.slick('slickGoTo', $this.data('initial_slide') - (cols/2));
			}


		});

	})();
	// end function

	/*----nice-select----*/
	(function(){
		if(typeof $.fn.niceSelect === 'undefined'){ return false; }
		
		$('select').niceSelect();


		jQuery('.hshc-graft-calc-main .nice-select ul.list li').click(function(evt){

			jQuery(this).closest('.form-control').parent().find('select').val($(this).data('value'))
		}) 
		 
	})();
	// end function


	/*----js window----*/
	(function(){
		$('#content').on('click','.js-window-open', function($event){
			$event.preventDefault();
			var $this = $(this);
			var this_title = $this.attr('title');
			var this_href = $this.attr('href');

			if(!this_title){
			   this_title = $this.data('title');
			}

			if(!this_title){
			   this_title = 'Modal Box';
			}

			window.open(this_href, this_title, config='height=300, width=400, toolbar=no, menubar=no, location=no, directories=no, status=no');
		});
	})();

	/*----fb share btn----*/

	(function(){
		$('#content').on('click', '.fb-share-btn', function(e){
			e.preventDefault();
			FB.ui({
				method: 'feed',
				name: meta_vars.fb_page_title,
				link: meta_vars.shared_url,
				picture: meta_vars.site_image_url,
				caption: meta_vars.fb_page_caption,
				description: meta_vars.fb_page_desc,
				message: '' //deprecated :(
			});
		});
	})();

	/*----scroll to element----*/
	function scroll_to_el(el){
		var el_pos = 0;
		
		if($(el).length > 0){
			el_pos = $(el).offset().top;
		}


		$('html,body').delay(200).animate({
			scrollTop: el_pos
		}, 600, function(){
			window.location.hash = el;
		});
	}

	(function(){
		$('.scroll-to').find('a[href^="#"]').click(function (e) {    
			e.preventDefault();
			var target = this.hash;
			scroll_to_el(target);         	
		});

		$('body').find('a[href^="#"]').filter('.scroll-to').click(function (e) {    
			e.preventDefault();
			var target = this.hash;
			scroll_to_el(target);         	
		});
	})();
	// end function

	/*----back to top----*/
	(function(){

		var $to_top = $('<div id="btn-to-top"><a class="btn btn-primary"><i class="fa fa-angle-up"></i></a></div>');
		$to_top.hide();
		
		$('body').append($to_top);

		$window.scroll(function(){
			if($window.scrollTop() > $(document).height()/2){
				$to_top.show();
			}
			else{
				$to_top.hide();
			}
		});

		$to_top.click(function(e) {
			e.preventDefault();
			scroll_to_el();
		});
	})();
	// end function

	/*----remove empty p----*/
	(function(){
		$('p:empty').remove();
		$('.blog-thumb-column .post-block, .js-match-height').siblings('br').remove();
	})();
	// end function

	(function(){
		$('#content img').each(function(){
			var $this = $(this);

			$this.on('error', function(){
				$this.attr('src', default_image);
				$this.attr('srcset', '');
			})
		})
	})();
	// end function

});
// end jquery


jQuery(window).load(function(){
	var $ = jQuery;
	var $window = $(window);

	$('body').removeClass('no-js').addClass('js');

	(function(){
		if(typeof $.fn.matchHeight === 'undefined'){ return false; }
		setTimeout(function(){
			
			if($window.width() > 480){
				$('.js-match-height').matchHeight({
					byRow: true
				});
			}

			$window.resize(function(){
				if($window.width() > 480){
					$('.js-match-height').matchHeight({
						byRow: true
					});
				}
				else{
					$('.js-match-height').css('height', 'auto');
				}
			});
		}, 500);
	})();
	// end function

	(function(){
		$('.tui-nav-tabs .toggle').on('click', function(){
			var $this = $(this);

			$this.closest('.nav-tabs').toggleClass('open');
		})
	})();

	(function(){
		if($window.width() < 640){ return; }

		var $tabbed_header = $('.tabbed-header');

		if($tabbed_header.length < 1){ return; }

		var tabbed_header_pos = $tabbed_header.offset();
		$window.on('scroll', function(){			
			if($window.scrollTop() >= tabbed_header_pos.top){
				$('body').addClass('tabbed-header-fix');
			}
			else{
				$('body').removeClass('tabbed-header-fix');
			}
		});
	})();

});
// end jquery


function closeCollapse() {
	jQuery('#main-menu-collapse').collapse('hide');
}