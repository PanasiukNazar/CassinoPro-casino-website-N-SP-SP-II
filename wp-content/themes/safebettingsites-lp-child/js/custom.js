jQuery(document).ready(function($) {
	$('.ads_warnings').on('click', function() {
		$('.advertiser_disclosure_popup').show();
	});
	$('.model_popup svg.svg-cross').on('click', function() {
		$('.advertiser_disclosure_popup').hide();
	});
	$('.18_popup').on('click', function() {
		$('.apply_18_popup').show();
	});
	$('.model_popup svg.svg-cross').on('click', function() {
		$('.apply_18_popup').hide();
	});
	
    $('.AccordionHeading').on('click', function() {
        var parent = $(this).parent('.Accordions');
        $('.AccordionHeading').removeClass('Active01');
        $('.AccordionContent').slideUp();
        $(this).addClass('Active01');
        parent.find('.AccordionContent').slideDown();
    });
    $('.Querstion01').on('click', function() {
        var parent = $(this).parent('.AccordionInn');
        $('.Querstion01').removeClass('Active01');
        $('.Answer01').slideUp();
        $(this).addClass('Active01');
        parent.find('.Answer01').slideDown();
    });
});document.addEventListener("DOMContentLoaded", function() {
    // Create an IntersectionObserver instance to watch elements
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);  // Stop observing after the element is in view
            }
        });
    }, { threshold: 0.5 }); // Trigger when 50% of the element is in view

    // Target all .Content02 elements
    const contentElements = document.querySelectorAll('.Content02');
    contentElements.forEach(element => {
        observer.observe(element); // Start observing each element
    });
});
document.addEventListener("DOMContentLoaded", function() {
    // Create an IntersectionObserver instance to watch elements
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target); // Stop observing after the element is in view
            }
        });
    }, { threshold: 0.5 }); // Trigger when 50% of the element is in view

    // Target all .AccordionInn elements
    const accordionItems = document.querySelectorAll('.AccordionInn');
    accordionItems.forEach(item => {
        observer.observe(item); // Start observing each element
    });
});
