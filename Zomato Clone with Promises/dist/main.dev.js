"use strict";

/*
Before order:-
  a)User Add/remove items to cart->
  b)checkout Cart->Generate Bill
  c)Apply coupon -> Select Address+Payment Way
  d)Complete payment and place Order


After Order:----
 a)Order Sent to  Restaurant -> Wait for Restaurant Acceptance 
 b)Restaurant Accepts ->Start Preparing
 c)Restaurant Rejects->Return Payment
 d)Start Preparing -> Search for nearby delivery agents
 e)SAssign a delivery agent with same delivery parth and less distance 
 f)Check Have picked up after every 1min -> Pickup order form restaurant->
 g)if not picked up->Update estimated time
 h)if pickedup ->Get Estimated Order delivery time from map->Update time 
 i)Update delivery location and timeer after every 1 min to show current location 
 j)Order Deliverd ->GIve feed back +rating



we are working on After Order
*/
var isOrderAccepted = false;
var isValetFound = false;
var hasRestaurantSeenYourOder = false;
var restaurantTimer = null;
var valetTimer = null;
var isOrderDelivered = false;
var valetDiliveryTimer = null; //zomato app -BOOt up !power Up /start

window.addEventListener("load", function () {
  document.getElementById("acceptOrder").addEventListener("click", function () {
    askRestaurantToAcceptOrReject();
  });
  document.getElementById("findValet").addEventListener("click", function () {
    startSearchingForValets();
  });
  document.getElementById("deliverOrder").addEventListener("click", function () {
    isOrderDelivered = true;
  });
  var res = checkIfOrderAcceptedFormRestaurant();
  res.then(function (d) {
    console.log("update from restaurant ", d);
    if (d) startPreparingOrder();else alert("sorry restaurant couldnot accept your order!");
  })["catch"](function (e) {
    console.log(e);
    alert("something went wrong! please try again later");
  });
});

function askRestaurantToAcceptOrReject() {
  setTimeout(function () {
    isOrderAccepted = confirm("Should restaurant  accept or reject?");
    hasRestaurantSeenYourOder = true;
    console.log(isOrderAccepted);
  }, 1000);
} //step 2-chekc if restaurant has accept order


function checkIfOrderAcceptedFormRestaurant() {
  return new Promise(function (rs, rj) {
    restaurantTimer = setInterval(function () {
      console.log("checking if order accepted or not ");
      if (!hasRestaurantSeenYourOder) return;
      if (isOrderAccepted) rs(true);else rs(false);
      clearInterval(restaurantTimer);
    }, 1000);
  });
}

function startPreparingOrder() {
  Promise.allSettled([updateOrderStatus(), updateMapView(), checkIfValetAssigned(), checkIfOrderDelievered()]).then(function (res) {
    console.log(res);
    setTimeout(function () {
      alert("How was your food?Rate your food and delivery partner");
    }, 2000);
  })["catch"](function (err) {
    console.error(err);
  });
} //Helper functions -Pure functions


function updateOrderStatus() {
  document.getElementById("currentStatus").innerText = isOrderDelivered ? "Order Delivered successfully" : "Preparing your order";
  return true;
}

function updateMapView() {
  return new Promise(function (rs, rj) {
    setTimeout(function () {
      document.getElementById("mapview").style.opacity = "1";
      rs("map initialize");
    }, 1000);
  });
}

function startSearchingForValets() {
  //complex operations:-

  /*
   1.Get all locations of nearby valets
   2.Sort the valets based on shortest path of restaurant to customer home
   3.Select the valtes with shortes tdispance and minimum orders
  */
  //step 1 get valets
  var valetPromises = [];

  for (var i = 0; i < 5; i++) {
    valetPromises.push(getRandomDriver());
  }

  console.log(valetPromises);
  Promise.any(valetPromises).then(function (selectedvalets) {
    console.log("selected a valets => ", selectedvalets);
    isValetFound = true;
  })["catch"](function (err) {
    console.log(err);
  });
}

function getRandomDriver() {
  //fake delay to get location data from riders
  return new Promise(function (rs, rj) {
    var timeout = Math.random() * 2000;
    setTimeout(function () {
      rs("valet - " + timeout);
    }, timeout);
  });
}

function checkIfValetAssigned() {
  return new Promise(function (rs, rj) {
    valetTimer = setInterval(function () {
      if (isValetFound) {
        updateVeletDetails();
        rs("update valet details");
        clearTimeout(valetTimer);
      }
    }, 1000);
  });
}

function checkIfOrderDelievered() {
  return new Promise(function (rs, rj) {
    valetDiliveryTimer = setInterval(function () {
      console.log("is order delivered by valet");

      if (isOrderDelivered) {
        rs("order delivered valet details");
        updateOrderStatus();
        clearTimeout(valetDiliveryTimer);
      }
    }, 1000);
  });
}

function updateVeletDetails() {
  if (isValetFound) {
    document.getElementById("finding-driver").classList.add("none");
    document.getElementById("found-driver").classList.remove("none");
    document.getElementById("call").classList.remove("none");
  }
}