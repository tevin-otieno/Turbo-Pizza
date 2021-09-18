class Pizza {
    constructor (size, crust, ...topping){
        this.size = size;
        this.crust = crust;
        this.topping = topping.reduce((previous, current) => {return previous * current;});
        this.cost = size * crust * this.topping
        this.price = this.cost.toFixed(2);
    };
};

//let pPizza = new Pizza('1000', '1.1', '1.2','1.3','1.4','1.5')
//console.log(pPizza)
//console.log(pPizza.topping)
//console.log(typeof(pPizza.cost))
//console.log(pPizza.price) //1320

$(document).ready(function() {
    $("form#pizza-form").submit(function(event) {
      event.preventDefault();
    
      
      console.log('set');
    });
});