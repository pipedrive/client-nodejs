/**
 * Creates an instance of FailResponseException
 */
class FailResponseException {
	constructor() {
		/**
		 * If the response is successful or not
		 */
		this.success = false;

		/**
		 * The error message
		 */
		this.message = null;

		/**
		 * The response error code
		 */
		this.errorCode = null;

		/**
		 * The context of the error
		 */
		this.context = null;
	}
}

export default FailResponseException;
