/**
 * Creates an instance of UnauthorizedException
 */
class UnauthorizedException {
	constructor() {
		/**
		 * If the response is successful or not
		 */
		this.success = false;

		/**
		 * The error message
		 */
		this.message = 'Unauthorized access';

		/**
		 * The response error code
		 */
		this.errorCode = 401;

		/**
		 * The context of the error
		 */
		this.context = null;
	}
}

export default UnauthorizedException;
