class SideBarView {
    constructor(container, model) {
        this.container = container;
        this.model = model;
        this.sideBarView = null;
    }

    render() {
        var content = /* template */ `
        <div id="sideBarView" class="sidebar">
            <div class="header d-flex align-items-center justify-content-center">
                <h1>Dinner Planner</h1>
            </div>
       
            <div class="row">
                <div class="col-9">
                    <h4> My dinner </h4>
                </div>
            </div>
    
            <div class="row">
                <div class="col-3"> People </div>
                <div class="col-9">
                    <form>
                        <div class="value-button" id="decrease" onclick="decreaseValue()" value="Decrease Value"></div>
                            <input type="number" id="number" value="0" />
                        <div class="value-button" id="increase" onclick="increaseValue()" value="Increase Value"></div>
                    </form>
                </div>
            </div>
    
            <div class="row">
                <div class="col-6"> Dish Name</div>
                <div class="col-6"> Cost </div>
            </div>
        </div>
        
        `;
        this.container.innerHTML = content;
        this.afterRender();

    }

    afterRender() {
        this.sideBarView = document.getElementById("sideBarView");
    }

}