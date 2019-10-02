var assert = chai.assert;
var expect = chai.expect;

describe("DinnerPlanner App", () => {
  let model = null;
  let homeView = null;
  let searchView = null;
  let overviewView = null;
  let sidebarView = null;
  let detailView = null;
  let sidebarController = null;
  let detailController = null;


  beforeEach(async() => {
    model = new DinnerModel();
    await model.getDish(559251).then(data => {model.addDishToMenu(data)});
    model.setNumberOfGuests(1);
    homeView = new HomeView(document.querySelector("#page-content"));
  //  searchView = new SearchView(document.querySelector("#mainpageSearch"), model);
    overviewView = new OverviewView(document.querySelector("#page-content"), model);
    //sidebarView = new SidebarView(document.querySelector("#sidebar-container"), model);
    sidebarView = new SidebarView(document.getElementsByClassName("sidebar-container")[0], model);
    searchView = new SearchView(document.getElementsByClassName("mainpageSearch-container")[0], model);
  });

  describe("Home View", () => {
    it("has the start button", () => {
      homeView.render();
      const button = document.getElementById("startBtn");
    });
  });

  describe("Home View", () => {
    it("has the start button", () => {
      homeView.render();
      const button = document.getElementById("startBtn");
      expect(button).to.not.be.a("null");
    });
  });

  describe("Search view", () => {
    beforeEach(() => {
      //model.addDishToMenu(559251);
      sidebarView.render();
      searchView.render();
    });

    it("has a sidebar", () => {
      const sidebar = document.getElementById("sidebarView");
      expect(sidebar).to.not.be.a("null");
    });

    it("has a dish search container", () => {
      const dishSearch = document.getElementById("dishSearchView");
      expect(dishSearch).to.not.be.a("null");
    });

    it("displays a loading message", (done) => {
      const loader = document.getElementById("dishLoader");
      expect(loader).to.not.be.a("null");
        done();
    }).timeout(3000);

    it("displays dishes", (done) => {
      const dishes = document.getElementsByClassName("sideBarMenu");
      expect(dishes).to.not.be.a("null");
      done();
    }).timeout(3000);

    it("Has a number of guests value", () => {
      const valueHolders = document.getElementsByClassName("input-num-guests");
      expect(valueHolders.length).to.be.above(0);
      for (let v of valueHolders) {
        expect(v).to.not.be.a("null");
        expect(v.value).to.equal(""+model.getNumberOfGuests());
      }
    });

    it("Has data on current dishes", () => {
      const valueHolders = document.getElementsByClassName("value-main-course-name");
      expect(valueHolders.length).to.be.above(0);
      for (let v of valueHolders) {
        expect(v).to.not.be.a("null");
        let arr = v.innerHTML.split('. ');
        let arr2 = arr[1].split('\n');
        expect(arr2[0]).to.equal("Breakfast Pizza");
      }
    });

    it("Displays the total price correctly", () => {
      const valueHolders = document.getElementsByClassName("value-total-price");
      expect(valueHolders.length).to.be.above(0);
      for (let v of valueHolders) {
        expect(v).to.not.be.a("null");
        expect(v.innerHTML).to.equal(""+model.getTotalMenuPrice());
      }
    });
  });

  describe("Confirmation page", () => {
    beforeEach(() => {
      overviewView.render();
    });

    it("exists", () => {
      const overviewContainer = document.getElementById("overviewView");
      expect(overviewView).to.not.be.a("null");
    });

    it("has a print button", () => {
      const printBtn = document.getElementById("toPrintBtn");
      expect(printBtn).to.not.be.a("null");
    });

    // REDUNDANT TEST SINCE WE HAVE THE INPUT-NUM-GUEST test
    it("Has a number of guests value", () => {
      const valueHolders = document.getElementsByClassName("value-num-guests");
      expect(valueHolders.length).to.be.above(0);
      for (let v of valueHolders) {
        expect(v).to.not.be.a("null");
        expect(v.innerHTML).to.equal(""+model.getNumberOfGuests());
      }
    });

    it("Has data on current dishes", () => {
      const valueHolders = document.getElementsByClassName("value-main-course-name");
      expect(valueHolders.length).to.be.above(0);
      for (let v of valueHolders) {
        expect(v).to.not.be.a("null");
        expect(v).to.not.be.a("null");
        let arr = v.innerHTML.split('. ');
        let arr2 = arr[1].split('\n');
        expect(arr2[0]).to.equal("Breakfast Pizza");
      }
    });

    it("Displays the total price correctly", () => {
      const valueHolders = document.getElementsByClassName("value-total-price");
      expect(valueHolders.length).to.be.above(0);
      for (let v of valueHolders) {
        expect(v).to.not.be.a("null");
        expect(v.innerHTML).to.equal(""+model.getTotalMenuPrice());
      }
    });
  });

  describe("Sidebar view", () => {
    beforeEach(() => {
      model = new DinnerModel();
      sidebarView = new SidebarView(document.getElementById("page-content"), model);
      sidebarController = new SidebarController(sidebarView, model);
      sidebarController.renderView();
    });

    it("Has a number of guests input", () => {
      const input = document.getElementsByClassName("input-num-guests")[0];
      expect(input).to.not.be.a("null");
      expect(input.tagName).to.equal("INPUT");
      expect(input.value).to.equal("1");
    });

    it("Controller modifies the model", () => {
      const input = document.getElementsByClassName("input-num-guests")[0];
      input.value = 5;
      input.dispatchEvent(new Event("input"));
      expect(""+model.getNumberOfGuests()).to.equal("5");
    });

    it("Observer updates the view", () => {
      model.setNumberOfGuests(6);
      const input = document.getElementsByClassName("input-num-guests")[0];
      expect(""+input.value).to.equal("6");
    });
  });

  describe("Detaildish view", () => {
    beforeEach(async() => {
      model = new DinnerModel();
      detailView = new DetailView(document.getElementById("page-content"), model);
      detailController = new DetailController(detailView, model);
      detailController.renderView(-1);
      await detailView.showDetails(559251);
      sidebarView = new SidebarView(document.getElementsByClassName("sidebar-container")[0], model);
      sidebarController = new SidebarController(sidebarView, model);
      sidebarController.renderView();
    //  await detailController.newDish(559251);
    });

    it("Has a dish", () => {
      const input = document.getElementsByClassName("value-main-course-nameinview")[0];
      console.log(input);
      expect(input).to.not.be.a("null");
      let arr = input.innerHTML.split('\n');
      let arr2 = arr[1].split('\n');
      expect(arr2[0]).to.equal("Breakfast Pizza");
    });

    //A test to see if addToMenu adds a dish to menu
    it("Controller modifies the model", async() => {
      const input = document.getElementById("addToMenuBtn");
      //input.value = 5;
      console.log(input);

      input.dispatchEvent(new Event("click"));
      let array = model.getFullMenu();
    //  console.log(array[0].title);
      console.log(model.getFullMenu());
      expect(""+array[0].title).to.equal("Breakfast Pizza");
    });

    it("Observer updates the view", async() => {
      //model.setNumberOfGuests(6);
      await model.getDish(559251).then(data => {model.addDishToMenu(data)});
      const input = document.getElementsByClassName("value-main-course-name")[0].innerHTML;
      console.log(input);
      expect(""+input).to.equal("1. Breakfast Pizza\n");
    });
  });
});
