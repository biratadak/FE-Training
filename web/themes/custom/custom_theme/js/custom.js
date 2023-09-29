(function ($, Drupal, once) {
  Drupal.behaviors.todo_list = {
    // To Set Todo lists.
    attach: function (context, settings) {
      count=0;
      once('myCustomBehavior', '.content .field--name-field-image img', context).forEach(function (element) {
        // once('myCustomBehavior', context).forEach(function (element) {


        // Apply the myCustomBehaviour effect to the elements only once.
        console.log('inside once func',element);
        $('.content .field--name-field-image img',context).mouseleave(function () {
          count++;
          console.log('visited: '+ count);
        });
      });
      
      $('.content .field--name-field-image img').mouseenter(function () {
        
        // count++;
        rgbValue= 'rgb('+100*Math.random()+','+100*Math.random()+','+100*Math.random()+')';
        // console.log(rgbValue);

        $('body').css('background-color',rgbValue );
        // console.log("hovering: "+count);
      });
      
      console.log("not hovering");
      // $('body').css('background-color', none);
    },
  };
})(jQuery, Drupal, once);
