// var wrapper = document.querySelector("#barba-wrapper");
// var image = document.querySelector('img')


Barba.Pjax.start();

var FadeTransition = Barba.BaseTransition.extend({
  start: function() {
    Promise.all([this.newContainerLoading, this.fadeOut()]).then(
      this.fadeIn.bind(this)
    );
  },

  fadeOut: function() {},

  fadeIn: function() {
    this.newContainer.classList.add("slide-in");

    var that = this;

    this.newContainer.addEventListener("animationend", function() {
      that.newContainer.classList.remove("slide-in");
      that.done();
    });
  }
});

Barba.Pjax.getTransition = function() {
  /**
   * Here you can use your own logic!
   * For example you can use different Transition based on the current page or link...
   */

  return FadeTransition;
};

//document.getElementById("demo").setAttribute(
//   "style", "font-size: 100px; font-style: italic; color:#ff0000;");

// wrapper.addEventListener("animationend", function() {
//     image.style.transition = "opacity 2s ease-out";
//     image.style.opacity = "1";
//     console.log('loaded');
// });