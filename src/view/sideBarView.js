class SideBarView {
    constructor(container, model) {
        this.container = container;
        this.model = model;
        this.sideBarView = null;
      //  this.numberOfGuests = document.getElementById("value-num-guests");
      //  this.numberOfGuests.value = model.getNumberOfGuests();
    }

    render() {
      //  this.model.setNumberOfGuests(2);
        document.getElementsByClassName("value-num-guests").value = this.model.getNumberOfGuests();
        this.afterRender();

    }

    afterRender() {
        this.sideBarView = document.getElementById("sideBarView");
        //document.getElementById("loader").style.display = "none";
    }

}
