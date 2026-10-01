(function ($) {

	$(function () {
		var AddToCartFrontend = {
			init: function () {
				$(document.body)
					.on('click', '.add_to_cart_button', this.onAddToCart)
					.on('click', '.add-to-cart-using-point-button', this.onAddToCartUsingPoint)
					.on('click', '.remove_from_cart_button', this.onRemoveFromCart )
					.on('course_added_to_cart', this.updateAddToCartButton)
			},

			/**
			 * On course added on cart
			 *
			 * @param e
			 */
			onAddToCart: function (e) {
				e.preventDefault();

				let thisButton = $(this),
					data = thisButton.data();

				if ( thisButton.hasClass( 'loading' ) ) {
					return;
				}

				if(1 == thisButton.attr('is_already_purchased')) {
					window.location.href = thisButton.attr('href')
					return;
				}

				data['action']	= 'ohmylms_add_to_cart';
				data['nonce']	= ohmylms_add_to_cart_params.nonce;
				thisButton.removeClass( 'added' );
				thisButton.addClass( 'loading' );

				// Trigger event.
				$( document.body ).trigger( 'course_adding_to_cart', [ thisButton, data ] );

				$.ajax( {
					url: ohmylms_add_to_cart_params.ajax_url,
					type: 'POST',
					data: data,
					dataType: 'json',
					success( response ) {
						if ( ! response ) {
							thisButton.removeClass( 'loading' );
							return;
						}
						// Trigger event after course is successfully added to cart
						$( document.body ).trigger( 'course_added_to_cart', [ response, thisButton ] );
					},
					error() {
						thisButton.removeClass( 'loading' );
					}
				} );

			},
			
			onAddToCartUsingPoint: function (e) {
				e.preventDefault();

				let thisButton = $(this),
					data = thisButton.data();

				if ( thisButton.hasClass( 'loading' ) ) {
					return;
				}

				if(1 == thisButton.attr('is_already_purchased')) {
					window.location.href = thisButton.attr('href')
					return;
				}

				data['action']	= 'ohmylms_add_to_cart';
				data['purchase_by']	= 'point';
				data['nonce']	= ohmylms_add_to_cart_params.nonce;
				thisButton.removeClass( 'added' );
				thisButton.addClass( 'loading' );

				// Trigger event.
				$( document.body ).trigger( 'course_adding_to_cart', [ thisButton, data ] );

				$.ajax( {
					url: ohmylms_add_to_cart_params.ajax_url,
					type: 'POST',
					data: data,
					dataType: 'json',
					success( response ) {
						if ( ! response ) {
							thisButton.removeClass( 'loading' );
							return;
						}
						// Trigger event after course is successfully added to cart
						$( document.body ).trigger( 'course_added_to_cart', [ response, thisButton ] );
					},
					error() {
						thisButton.removeClass( 'loading' );
					}
				} );

			},

			onRemoveFromCart: function (e) {
				e.preventDefault();
			},

			updateAddToCartButton: function ( e, response, button ) {
				button.removeClass('loading');
				button.addClass('added');

				if (response.status === 'success') {
					window.location = response.redirect_url;
				}
			}

		}


		AddToCartFrontend.init();


	})

})(jQuery);
