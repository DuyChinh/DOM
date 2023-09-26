var component = {
    create: function(name, handler) {
        function BaseComponent() {
            return Reflect.construct(HTMLElement, [], BaseComponent);
        }
        BaseComponent.prototype = Object.create(HTMLElement.prototype);
        //Lifecycle Callback -> Vòng đời
        BaseComponent.prototype.construct = BaseComponent;

        BaseComponent.prototype.connectedCallback = handler;
        customElements.define(name, BaseComponent);
    }
}