class SideBarView {
    constructor(container, model) {
        this.container = container;
        this.model = model;
        this.sideBarView = null;
      //  this.numberOfGuests = document.getElementById("value-num-guests");
        model.setNumberOfGuests(2);
      //  this.numberOfGuests.value = model.getNumberOfGuests();
    }

    render() {
        document.getElementById("value-num-guests").value = this.model.getNumberOfGuests();
        this.afterRender();

    }

    afterRender() {
        this.sideBarView = document.getElementById("sideBarView");
        document.getElementById("loader").style.display = "none";
    }

}
