function ShoppingCartService($cookies) {
    var _this = this;
    var items = $cookies.getObject("shopping_cart") || [];

    function setCookies() {
        $cookies.putObject("shopping_cart", items);
    }

    _this.initialItems = function(getItems) {
        items = getItems;
        items.forEach(function(d) {
            d.count = 1;
        });
    };
    _this.getItems = function() {
        return items;
    };
    _this.addItem = function(item) {
        
        var check = items.some(function(d) {
            return d.id == item.id
        });
        if (!check)
        {
            item.count = 1;
            items.push(item);
            setCookies();
        }
        else
            alert("此商品已經加入購物車");
    };
    _this.removeItem = function(id) {
        var index = items.map(function(d) {return d.id;}).indexOf(id);
        console.log(index);
        if(index > -1)
            items.splice(index, 1);
    };
    _this.getItemsCount = function() {
        return items.length;
    };
    _this.getItemsPrice = function() {
        var price = 0;
        items.forEach(function(d) {
            price += (d.price * d.count);
        });
        return price;
    };
}