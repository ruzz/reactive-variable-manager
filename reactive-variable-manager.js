/** @license
 * reactiveVariableManager <https://github.com/ruzz/reactive-variable-manager.git>
 * Released under the MIT license
 * Author: i.m. ruzz
 * Version: 0.0.1
 */

(function (global) {
    var root = this;

    /**
     * reactive variable manager class
     * @name _ReactiveVariableManager
     * @author i.m.ruzz
     * @constructor
     */
    function _ReactiveVariableManager(config) {
        var self = this;

        this._config = config || { initialize: [] };
        this._reactiveVariables = {};

        if (this._config.hasOwnProperty('initialize')) {
            _.each(this._config.initialize, function(reactiveVariableConfig){
                self.registerReactiveVariable(reactiveVariableConfig);
            })
        }
    }

    _ReactiveVariableManager.prototype = {
        /**
         * _ReactiveVariableManager Version Number
         * @type String
         * @const
         */
        VERSION: '0.9.0',

        /**
         * invokes passed error handler or exits quietly
         * @private
         * @param {string} errorString a string to be handled
         * @throws uses passed error handler or exits quietly
         */
        _handleError: function (errorString) {
            if (!this._config.hasOwnProperty("errorHandler"))
                return;
            this._config.errorHandler(errorString);
        },

        /**
         * registers a new reactive variable
         * @param {Object} reactiveVariableConfig a ReactiveVariable config object.
         * @return {null} returns no value
         * @throws uses passed error handler or exits quietly
         */
        registerReactiveVariable: function (reactiveVariableConfig) {
            if (!(reactiveVariableConfig && reactiveVariableConfig.hasOwnProperty("name")))
                this._handleError('cannot create unnamed reactive variables');

            this._reactiveVariables[reactiveVariableConfig.name] = new ReactiveVariable(reactiveVariableConfig);
        },

        /**
         * unregisters an existing reactive variable
         * @param {string} name of desired reactive variable
         */
        unregisterReactiveVariable: function (name) {
            if (!this._reactiveVariables.hasOwnProperty(name))
                return;
            delete this._reactiveVariables[name];
        },

        /**
         * deletes all existing Reactive Variables
         */
        empty: function () {
            delete this._reactiveVariables;
            this._reactiveVariables= {}
        },

        /**
         * gets the desired reactive variable
         * @param {string}  name of the registered reactive variable
         * @return {?} returns the value stored or null
         */
        get: function (name) {
            return (this.has(name)) ?
                this._reactiveVariables[name].get() : undefined;
        },

        /**
         * sets the desired reactive variable
         * @param {string} name of the registered reactive variable
         * @param {value} value you want set
         */
        set: function (name, value) {
            value = value || null;
            return (this.has(name)) ?
                this._reactiveVariables[name].set(value) :
                this._handleError('cannot set value for non existent reactive variable');
        },

        /**
         * invokes passed error handler or exits quietly
         * @param {string} name of the registered reactive variable
         * @return {boolean}
         */
        has: function (name) {
            return !!((this._reactiveVariables.hasOwnProperty(name)));
        }
    };


    // Namespace -----------------------------------------------------
    //================================================================

    /**
     * Reactive Variable Manager namespace
     * @namespace
     * @name ReactiveVariableManager
     */
    var ReactiveVariableManager = _ReactiveVariableManager;

    if (typeof define === 'function' && define.amd) { //AMD
        define(function () {
            return ReactiveVariableManager;
        });
    } else if (typeof module !== 'undefined' && module.exports) { //node
        module.exports = ReactiveVariableManager;
    } else {
        global['ReactiveVariableManager'] = ReactiveVariableManager;
    }
}(this));