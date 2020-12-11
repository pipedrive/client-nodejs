class AnyType {
	/**
	 * Constructs a new <code>AnyType</code>.
	 * @alias module:model/AnyType
	 */
	constructor() {
		AnyType.initialize(this);
	}

	/**
	 * Initializes the fields of this object.
	 * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
	 * Only for internal use.
	 */
	static initialize(obj) {}

	static constructFromObject(data, obj) {
		return data;
	}
}



export default AnyType;

