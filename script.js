class Pizza {
    constructor (size, crust, topping){
        this.size = size;
        this.crust = crust;
        this.topping = topping;
    };
};

let pPizza = new Pizza('Medium', 'stuffed', 'pepperoni')
console.log(pPizza)

$(document).ready(function() {
    $("#pizza-form").submit(function(event) {
      event.preventDefault();
      var size = $("select#size").val();
      var toppings = $("#toppings").val();
      var myPizzaOrder = new Pizzaorder(size, toppings);
      var cost = myPizzaOrder.cost();
      $("#price").text("$" + cost);
      $(".show-pizza").show();
    });
  });