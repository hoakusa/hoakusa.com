import angular from 'angular';

export default angular.module('directives.ngParallax',[]).directive('ngParallax', [
  '$timeout',
  function ($window, $timeout) {
    return {
        restrict: 'AE',
        scope:{
          pattern: '=',
          speed: '=',
          top: '=',
          overlay: '='
        },
        link: function(scope, elem, attr) {

          window.mobileAndTabletcheck = function() {
            return( navigator.userAgent.match(/Android/i)
             || navigator.userAgent.match(/webOS/i)
             || navigator.userAgent.match(/iPhone/i)
             || navigator.userAgent.match(/iPad/i)
             || navigator.userAgent.match(/iPod/i)
             || navigator.userAgent.match(/BlackBerry/i)
             || navigator.userAgent.match(/Windows Phone/i)
             );
          };

          var isMobile = window.mobileAndTabletcheck();


          function executeBackground(){

              var bgObj = elem[0];
              // bgObj.style.height = "100%";
              // bgObj.style.margin = "0 auto";
              // bgObj.style.position = "relative";
              bgObj.style.backgroundImage = "url(" + scope.pattern + ")";
              bgObj.style.backgroundAttachment = 'fixed';
              
              var scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
              var speed = (scrollTop / scope.speed);
              if(isMobile){
                speed = speed * .10
              }
              if(speed == 0){
                bgObj.style.backgroundPosition = 'center '+ (0 - scope.top) + '%';
              }
              else{
                bgObj.style.backgroundPosition = 'center '+ (speed - scope.top) + '%';
              }

          }

          function executeOverlay(){
              
              var bgObj = elem[0];              
              var scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
              var alpha = (scrollTop / window.innerHeight)*0.6;

              if(alpha == 0){
                bgObj.style.backgroundColor = 'rgba(1,1,1,' + 0 + ')';
              }
              else{
                bgObj.style.backgroundColor = 'rgba(1,1,1,' + alpha + ')';
              }

          }

          // for mobile
          window.document.addEventListener("touchmove", function(){
              if (scope.overlay) {
                  executeOverlay();
              } else {
                  executeBackground();
              }
              
          });


          // for browsers
          window.document.addEventListener("scroll", function() {
              
              if (scope.overlay) {
                  executeOverlay();
              } else {
                  executeBackground();
              }
          });

          if (scope.overlay) {
              executeOverlay();
          } else {
              executeBackground();
          }

        }

    };
  }
]).name;