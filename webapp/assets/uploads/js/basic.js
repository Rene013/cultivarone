/**
 * Custom JavaScript Functionality
 *
 * This document contains the custom JavaScript functionality for
 * theme. This is written using jQuery to simplify code complexity.
 *
 * @package ecwv
 * @subpackage ecwv
 * @since ecwv 1.0
 */

// Encapsulate Code
(function ($) {

	// After Document is Ready
	$(document).ready( function() {
		
		// Header Menu Scrolled Display Functionality
		var $header = $('.navbar'),
		    $headerWrapper = $('.navbar-wrapper');
		if ( $header.hasClass('fixed') ) {
			function adjustHeaderClasses() {
				if ( $(document).scrollTop() > 0 && !$headerWrapper.hasClass('scrolled') ) {
					$headerWrapper.addClass('scrolled');
				}
				else if ( $(document).scrollTop() <= 0 && $headerWrapper.hasClass('scrolled') ) {
					$headerWrapper.removeClass('scrolled');
				}
				console.log("FIXED NDBJS");
			}
			adjustHeaderClasses();
			$(document).scroll( function() {
				adjustHeaderClasses();
			} );
		}
		
		// Header Mobile Menu Toggle Functionality
		var $headerNavigation = $('.header-navigation');
		    $headerNavigationOpenLink = $('.header-navigation-open-link'),
		    $headerNavigationCloseLink = $('.header-navigation-close-link');
			$headerNavigationOpenLink.click( function(event) {
			event.preventDefault();
			$headerNavigation.addClass('open');
		} );
		$headerNavigationCloseLink.click( function(event) {
			event.preventDefault();
			$headerNavigation.removeClass('open');
		} );
		$(window).resize( function() {
			$headerNavigation.removeClass('open');
		} );
		
		// Header Mobile Submenu Toggle Functionality
		var $headerDropdown = $('.header-dropdown'),
		    $headerDropdownToggleLink = $('.header-dropdown-toggle-link');
			$headerDropdownToggleLink.click( function(event) {
			if ( $(window).width() < 768 ) {
				event.preventDefault();
				$(this).toggleClass('active');
				$(this).parent().find('.header-dropdown').slideToggle(200);
			}
		} );
		$(window).resize( function() {
			if ( $(window).width() >= 768 ) {
				$headerDropdown.removeAttr('style');
				$headerDropdownToggleLink.removeClass('open');
			}
		} );
		
		// Header Navigation HTML Placement
		var $header = $('.header'),
		    $headerNavigation = $('.header-navigation'),
		    $headerNavigationOpenLink = $('.header-navigation-open-link');
		function adjustNavigationPlacement() {
			if ( $(window).width() >= 768 ) {
				$headerNavigation.insertAfter($headerNavigationOpenLink);
			}
			else {
				$headerNavigation.insertAfter($header);				
			}
		}
		adjustNavigationPlacement();
		$(window).resize( function() {
			adjustNavigationPlacement();
		} );

		// Header Search Toggle Functionality
		var $searchForm = $('.header-search-form'),
		    $searchField = $('.header-search-form input[type="search"]'),
		    $searchToggle = $('.header-search-link'),
		    $searchOpenIcon = $('.header-search-icon'),
		    $searchCloseIcon = $('.header-search-close-icon');
		function openSearch() {
			$searchForm.fadeIn(200);
			$searchOpenIcon.fadeOut(200);
			$searchField.focus();
			$searchCloseIcon.fadeIn(200);
		}
		function closeSearch() {
			$searchForm.fadeOut(200);
			$searchOpenIcon.fadeIn(200);
			$searchCloseIcon.fadeOut(200);
		}
		$searchToggle.click( function( event ) {
			event.preventDefault();
			if ( $searchForm.is(':visible') ) {
				closeSearch();
			}
			else {
				openSearch();
			}
		} );
		$(document).mouseup( function( event ) {
			if ( $(window).width() >= 768 &&
			     $searchForm.is(':visible') &&
			     !$searchForm.is(event.target) &&
			     $searchForm.has(event.target).length === 0 &&
			     !$searchToggle.is(event.target) &&
			     $searchToggle.has(event.target).length === 0 ) {
				closeSearch();
			}
		} );
		$(document).keyup( function( event ) {
			if ( $(window).width() >= 768 &&
			     event.keyCode == 27 &&
			     $searchForm.is(':visible') ) {
				closeSearch();
			}
		} );
		$(window).resize( function() {
			if ( $(window).width() >= 768 ) {
				$searchForm.removeAttr('style');
				$searchOpenIcon.removeAttr('style');
				$searchCloseIcon.removeAttr('style');
			}
		} );

		// Solutions and Case Studies Functionality
		var sectionCaseStudies = $("#case-studies"),
			sectionSolutions = $("#solutions");
		var runCaseStudies = function () {
			var box = document.querySelector('.case-studies__box'),
				list = document.querySelector('.case-studies__list'),
				items = box.querySelectorAll('.case-study'),
				anchors = list.querySelectorAll('.anchor'),
				counter = 0,
				currentItem = items[0],
				currentAnchor = anchors[0];

			function navigate(counter) {
				currentItem.classList.remove('current');
				currentAnchor.classList.remove('current');

				currentItem = items[counter];
				currentAnchor = anchors[counter];

				currentItem.classList.add('current');
				currentAnchor.classList.add('current');
			}
			anchors.forEach(function (anchor) {
				anchor.addEventListener('click', function (ev) {
					var i = $(this).index();
					navigate(i);
					ev.preventDefault();
				});
			});
			navigate(0);
		}
		var runSolutions = function () {
			var box = document.querySelector('.solutions__circle'),
				next = box.querySelector('.next__solution'),
				prev = box.querySelector('.prev__solution'),
				items = box.querySelectorAll('.solution'),
				counter = 0,
				amount = items.length,
				current = items[0];

			function navigate(direction) {
				current.classList.remove('current');
				counter = counter + direction;
				if (direction === -1 &&
					counter < 0) {
					counter = amount - 1;
				}
				if (direction === 1 &&
					!items[counter]) {
					counter = 0;
				}
				current = items[counter];
				current.classList.add('current');
			}
			next.addEventListener('click', function (ev) {
				navigate(1);
			});
			prev.addEventListener('click', function (ev) {
				navigate(-1);
			});
			navigate(0);
		}

		// Customers Functionality
	    var sectionCustomers = $("#alternative #customers");
	    var runCustomers = function() {
	        var box = document.querySelector('.customers__circle'),
	            prev = box.querySelector('.prev__customer'),
				next = box.querySelector('.next__customer'),
				items = box.querySelectorAll('.customer'),
				counter = 0,
				amount = items.length,
				counterPrev = amount - 1,
				counterNext = 1,
				current = items[counter],
				currentPrev = items[counterPrev],
				currentNext = items[counterNext];
			function navigate(direction) {
				current.classList.remove('current');
				currentPrev.classList.remove('customer--prev');
				currentNext.classList.remove('customer--next');
				counter = counter + direction;
				if (direction === -1 &&
					counter < 0) {
					counter = amount - 1;
				}
				if (direction === 1 &&
					!items[counter]) {
					counter = 0;
				}
				counterPrev = counter - 1;
				if (counter === 0) {
					counterPrev = amount - 1;
				}
				counterNext = counter + 1;
				if (counter === amount - 1) {
					counterNext = 0;
				}
				current = items[counter];
				currentPrev = items[counterPrev];
				currentNext = items[counterNext];
				current.classList.add('current');
				currentPrev.classList.add('customer--prev');
				currentNext.classList.add('customer--next');
			}
			next.addEventListener('click', function(ev) {
				navigate(1);
			});
			prev.addEventListener('click', function(ev) {
				navigate(-1);
			});
			navigate(0);
		}

		// Slideshow Script
		function startSlideshow( wrapperClass, slideClass, nextButtonClass, previousButtonClass, autoPlay ) {
			var $wrapper = $('.' + wrapperClass),
				$nextButton = $('.' + nextButtonClass),
				$previousButton = $('.' + previousButtonClass),
				$slides = $('.' + slideClass),
				counter = 0,
				amount = $slides.length,
				interactedWith = false,
				$current = $slides.eq(0);
				function navigate( direction ) {
					$current.removeClass('current');
					counter = counter + direction;
					if ( direction === -1 && counter < 0 ) {
						counter = amount - 1;
					}
					if ( direction === 1 && !$slides.eq(counter).length ) {
						counter = 0;
					}
					$current = $slides.eq(counter);
					$current.addClass('current');
				}
				$nextButton.click( function( event ) {
					event.preventDefault();
					interactedWith = true;
					navigate(1);
				} );
				$previousButton.click( function( event ) {
					event.preventDefault();
					interactedWith = true;
					navigate(-1);
				} );
				navigate(0);
				if ( autoPlay ) {
					interval = setInterval( function() {
						if ( !interactedWith ) {
							navigate(1);
						}
					}, 4000);
				}
		}

		// Tool to Get Query Parameters
		function getURLParameters( name, url ) {
			if ( !url ) {
				url = location.href;
			}
			name = name.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
			var regexS = "[\\?&]"+name+"=([^&#]*)";
			var regex = new RegExp( regexS );
			var results = regex.exec( url );
			return results == null ? null : results[1];
		}

		// Run Solutions and Case Studies Functionality
		if (sectionCaseStudies.length) {
			runCaseStudies();
		}
		if (sectionSolutions.length) {
			runSolutions();
		}

		// Run Customers Functionality
		if (sectionCustomers.length) {
			runCustomers();
		}

		// Add Popover Support
		if ( $.isFunction($.fn.popover) ) {
			$('[data-role="popover"]').popover();
		}

		// Form Label Animations
		$('.form__input').focus( function() {
			var label = $(this).siblings('.field__label');
			label.addClass('field__label--focus');
		} );
		$('.mktoField').focus( function() {
			var label = $(this).siblings('.mktoLabel');
			label.addClass('field__label--focus');
		} );
		$('.form__select, .form__textarea').focus( function() {
			var label = $(this).siblings('.field__label');
			label.addClass('field__label--inside--focus');
		} );
		$('.form__input, .form__select, .form__textarea').blur( function() {
			if ($(this).val() == '' || !$(this).val()) {
				$(this).siblings('.field__label').removeClass('field__label--focus field__label--inside--focus');
			}
		} );
		$('.mktoField').blur( function() {
			if ( $(this).val() == '' || !$(this).val() ) {
				$(this).siblings('.mktoLabel').removeClass('field__label--focus');
			}
		} );

		// Blog Mobile Navigation Toggle Functionality
		if ( $('.blog-navigation-intro-toggle').length && $('.blog-navigation-categories').length ) {
			$('.blog-navigation-intro-toggle').click( function( event ) {
				event.preventDefault();
				$(this).toggleClass('js-active');
				$('.blog-navigation-categories').slideToggle(200);
			} );
			$(window).resize( function() {
				if ( $(window).width() >= 768 ) {
					$('.blog-navigation-intro-toggle').removeClass('js-active');
					$('.blog-navigation-categories').removeAttr('style');
				}
			} );
		}

		// Features Resources Carousel Functionality
		if ( $('.resources-featured-slide').length && $('.resources-featured-slide').length > 1 ) {
			startSlideshow('resources-featured-carousel', 'resources-featured-slide', 'resources-featured-carousel-next', 'resources-featured-carousel-previous', true );
		}

		$(document).on('click', '.scroll-anchor-link', function (event) {
			event.preventDefault();
			$('html, body').animate({
				scrollTop: $($.attr(this, 'href')).offset().top
			}, 500);
		});
		
		// Resources Search Functionality
		if ( window.location.pathname.split('/')[1] === 'resources' ) {

			// Search Submit Functionality
			$('.resources-filters-form').submit( function( event ) {
				event.preventDefault();
				var searchParameters = [];
				var typeFieldValue = $('.resources-filters-type').val();
				var serviceFieldValue = $('.resources-filters-service').val();
				var searchFieldValue = $('.resources-filters-search').val();
				var displayFieldValue = $('.resources-filters-display').val();
				if ( typeFieldValue ) {
					searchParameters.push('resource_type=' + typeFieldValue);
				}
				if ( serviceFieldValue ) {
					searchParameters.push('service=' + serviceFieldValue);
				}
				if ( searchFieldValue ) {
					searchParameters.push('keywords=' + searchFieldValue);
				}
				if ( displayFieldValue ) {
					searchParameters.push('display=' + displayFieldValue);
				}
				var searchURL = window.location.origin + '/resources/';
				if ( searchParameters.length ) {
					for ( var i = 0; i < searchParameters.length; i++ ) {
						if ( i === 0 ) {
							searchURL += '?';
						}
						else {
							searchURL += '&';
						}
						searchURL += searchParameters[i];
					}
				}
				searchURL = encodeURI(searchURL);
				window.location = searchURL;
			} );

			// Populate Search Fields from URL if Needed
			if ( window.location.search ) {
				var typeURLParam = getURLParameters( 'resource_type', window.location.href );
				var serviceURLParam = getURLParameters( 'service', window.location.href );
				var searchURLParam = getURLParameters( 'keywords', window.location.href );
				var displayURLParam = getURLParameters( 'display', window.location.href );
				if ( typeURLParam ) {
					$('.resources-filters-type').val(typeURLParam);
				}
				if ( serviceURLParam ) {
					$('.resources-filters-service').val(serviceURLParam);
				}
				if ( searchURLParam ) {
					$('.resources-filters-search').val(decodeURI(searchURLParam));
				}
				if ( displayURLParam ) {
					$('.resources-filters-display').val(decodeURI(displayURLParam));
				}
			}

		}

		// Add Glossary Scrolling Functionality
		$('.backtoTop').click( function (event) {
			event.preventDefault();
			$('html, body').animate({
				scrollTop: $($.attr(this, 'href')).offset().top
			}, 500);
		} );

	} );

} )( jQuery );
