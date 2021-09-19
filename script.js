class Pizza {
    constructor (name, size, crust, topping){
        this.name = name;
        this.size = size;
        this.crust = crust;
        this.topping = topping.reduce((previous, current) => {return previous * current;});
        this.cost = size * crust * this.topping;
        this.price = this.cost.toFixed(2);
    };
};

//let pPizza = new Pizza('New moon', '1000', '1.1', ['1.2','1.3','1.4','1.5'])
//console.log(pPizza)
//console.log(pPizza.topping)
//console.log(typeof(pPizza.cost))
//console.log(pPizza.price) //1320


$(document).ready(function() {
    $("button#addPizza").click(function(event) {
      event.preventDefault();
      var name = $("input#namePizza").val();
      var size = $("input[name='size']:checked").val();
      var crust = $("input[name='crust']:checked").val();
      var topping = $("input:checkbox:checked").map(function(){
          return $(this).val();
      }).get();
      var newOrder = new Pizza(name, size, crust, topping);
      //console.log(crust);
      //console.log(size);
      //console.log(topping);

      $("ul#pizzaList").append("<li><h3 class='orderlist'>" + newOrder.name + "</h3></li>"+
                                "<li>" + $("input[name='size']:checked").next().text() + "</li>" +
                                "<li>" + $("input[name='crust']:checked").next().text() + "</li>" +
                                "<li><span>" + $("input:checkbox:checked").map(function(){
                                    return $(this).next().text();
                                }).get() + "</span></li>" + 
                                "<li>" + "Price: Ksh" + newOrder.price+ "</li>");
    });
});