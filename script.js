//pizza constractor to holad the name size crust and topping.
class Pizza {
    constructor (name, size, crust, number, topping){
        this.name = name;
        this.size = size;
        this.crust = crust;
        this.number = number;
        this.topping = topping.reduce((previous, current) => {return previous * current;});
        this.cost = size * crust * number * this.topping;
        this.price = this.cost.toFixed(2);
    };
};

//total order constractor.
class Total {
    constructor (number){
        this.number = number.reduce((previous, current) => {return parseInt(previous) + parseInt(current);});
    }
};

//Debugging data
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
      var number = $("input#numberPizza").val();
      var topping = $("input:checkbox:checked").map(function(){
          return $(this).val();
      }).get();
      var newOrder = new Pizza(name, size, crust, number, topping);

      //debugging data.....
      //console.log(crust);
      //console.log(size);
      //console.log(topping);

      //this makes the orders apper on the right side off the list for viewing 
      $("ul#pizzaList").append("<li><h3 class='orderlist'>" + newOrder.name + "</h3></li>"+
                                "<li>" + $("input[name='size']:checked").next().text() + "</li>" +
                                "<li>" + $("input[name='crust']:checked").next().text() + "</li>" +
                                "<li><span>" + $("input:checkbox:checked").map(function(){
                                    return $(this).next().text();
                                }).get() + "</span></li>" + 
                                "<li>" + "Amount :  " + newOrder.number + "</li>" +
                                "<li>" + "Price: Ksh" + "<span class = 'total' >" + newOrder.price + "</span>" + "</li>");
        const newTotal = $(".total").map(function(){return $(this).text();}).toArray();
        var grandTotal = new Total(newTotal);
        document.querySelector('.totalPrice').innerHTML = grandTotal.number;
        document.querySelector('#totalPrice').innerHTML = grandTotal.number;

        if ("input#delivery:checked"){
            document.querySelector('#deliveryPrice').innerHTML = 200;
        }else{
            document.querySelector('#deliveryPrice').innerHTML = 0;
        };
    });
});