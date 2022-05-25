class AnyOfRecents {
	/**
	 * Constructs a new <code>AnyOfRecents</code>.
	 * @alias module:model/AnyOfRecents
	 */
	constructor() {
		AnyOfRecents.initialize(this);
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



export default AnyOfRecents;

