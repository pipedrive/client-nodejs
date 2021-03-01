/**
 * Creates an instance of NotFoundException
 */
class NotFoundException {
	constructor() {
		/**
		 * If the response is successful or not
		 */
		this.success = false;

		/**
		 * The error message
		 */
		this.message = 'Not found';

		/**
		 * The response error code
		 */
		this.errorCode = 404;

		/**
		 * The context of the error
		 */
		this.context = null;
	}
}

export default NotFoundException;
