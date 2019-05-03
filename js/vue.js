
class Vue{
	constructor(options){
		var self = this;
		this.data = options.data;
		this.methods = options.methods;
		Object.keys(this.data).forEach(function(key) {
		    self.proxyKeys(key);
		});
		observe(this.data);
		
		new Compile(options.el, this);
	}
	proxyKeys(key) {
	    var self = this;
	    Object.defineProperty(this, key, {
	        enumerable: false,
	        configurable: true,
	        get: function getter () {
	            return self.data[key];
	        },
	        set: function setter (newVal) {
	            self.data[key] = newVal;
	        }
	    });
	}
}