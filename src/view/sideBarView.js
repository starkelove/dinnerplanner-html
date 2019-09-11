class SideBarView {
    constructor(container, model) {
        this.container = container;
        this.model = model;
        this.sideBarView = null;
    }

    render() {
        document.getElementById("number").defaultValue = this.model.getNumberOfGuests();
        this.afterRender();

    }

    afterRender() {
        this.sideBarView = document.getElementById("sideBarView");
    }

}