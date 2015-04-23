angular
.module('cards')
.factory('Camera', ['$q', function($q) { 
  return {
    getPicture: function() {
      var q = $q.defer();
      
      navigator.camera.getPicture(function(result) {
        // Do any magic you need
        q.resolve(result);
      }, function(err) {
        q.reject(err);
      }, {
        quality: 75,
        targetWidth: 320,
        targetHeight: 320,
        saveToPhotoAlbum: false,
        correctOrientation: true
      });
      
      return q.promise;
    }
  }
}])

;
