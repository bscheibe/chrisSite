$(document).ready(function() {
    $('.freelance-form').bootstrapValidator({
        message: 'This value is not valid',
        // To use feedback icons, ensure that you use Bootstrap v3.1.0 or later
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            name: {
                message: 'This name is not valid',
                validators: {
                    notEmpty: {
                        message: 'Your name is required'
                    },
                    /*stringLength: {
                        min: 6,
                        max: 30,
                        message: 'The username must be more than 6 and less than 30 characters long'
                    },*/
                    regexp: {
                        regexp: /^[a-zA-Z/ ]+$/,
                        message: 'You name can only consist of alphabetical letters'
                    },
                    /*different: {
                        field: 'password',
                        message: 'The username and password cannot be the same as each other'
                    }*/
                }
            },
            phone: {
                validators: {
                    //Doesn't have working for Canada
                    /*phone: {
                        message: 'The phone number is not valid'
                    }*/
                    regexp: {
                        regexp: /^[0-9/-]+$/,
                        message: 'This phone number is not valid'
                    }
                }
            },
            email: {
                validators: {
                    notEmpty: {
                        message: 'Your email is required and cannot be empty'
                    },
                    emailAddress: {
                        message: 'The email address is not a valid'
                    }
                }
            },
            description: {
                validators: {
                    notEmpty: {
                        message: 'A short description is required'
                    }
                }
            }
        }
    });
});


//SHOULDDO: Figure out why it is being bound twice
// Probably because of bootstrap validator
// removeAttr('onsubmit').
// $("#freelanceHire").removeAttr('onsubmit').submit((function(event) 
// {
//     /* stop form from submitting normally */
//     event.preventDefault();

//     /* get some values from elements on the page: */
//     var $form = $( this ),
//         $submit = $form.find( 'button[type="submit"]' ),
//         name_value = $form.find( 'input[name="name"]' ).val(),
//         phone_value = $form.find( 'input[name="phone"]' ).val(),
//         email_value = $form.find( 'input[name="email"]' ).val(),
//         description_value = $form.find( 'textarea[name="description"]' ).val(),
//         url = $form.attr('action');

//      /* Send the data using post */
//     var posting = $.post( url, {
//                        name: name_value,
//                        phone: phone_value,
//                        email: email_value,
//                        description: description_value,
//                     });

//     posting.done(function( data )
//     {
//         /* Clear the result of the input field */
//         $('#name').val('');
//         $('#phone').val('');
//         $('#inquiryEmail').val('');
//         $('#description').val('');

//         /* Put the results in a div */
//         $('#hireMeModal').modal('hide')
//         //$( "#successMessage" ).html("You have successfully subscribed! Look for the confirmation email.");

//     });

//     posting.fail(function( data )
//     {
//         /* Clear the result of the input field */
//         //$('#email').val(''); //Don't want to clear b/c that's bad UX
        
//         /* Put the results in a div */
//         $( "#modalErrorMessage" ).html("There was an error when submitting. Please try again.");
//     })

//     return false;
// });