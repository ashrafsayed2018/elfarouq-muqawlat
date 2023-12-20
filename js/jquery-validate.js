/*!
 * Survey Validate v1
 * www.santakrouz.com/portfolio
 *
 * Copyright (c) Said Asebbane
 */

	$().ready(function() {
		
		// validate signup form on keyup and submit
		$("#Form").validate({
			rules: {
				name: "required",
				email: {
					required: true,
					email: true
				},
				tel: "required",
				
								
				
				
			},
			messages: {
				name: "",
				email: "",
				tel: "",
				
			}
		});
		
		

	});