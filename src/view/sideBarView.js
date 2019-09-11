class SideBarView {
    constructor(container, model) {
        this.container = container;
        this.model = model;
        this.sideBarView = null;
    }

    render() {
        this.afterRender();

    }

    afterRender() {
        this.sideBarView = document.getElementById("sideBarView");
    }

}