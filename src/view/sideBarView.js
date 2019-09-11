class SideBarView {
    constructor(container, model) {
        this.container = container;
        this.model = model;
        this.sideBarView = null;
    }

    render() {
        document.getElementById("value-num-guests").value = this.model.getNumberOfGuests();
        console.log(document.getElementById("value-num-guests").value);
        this.afterRender();

    }

    afterRender() {
        this.sideBarView = document.getElementById("sideBarView");
        console.log(this.sideBarView = document.getElementById("sideBarView"));
    }

}