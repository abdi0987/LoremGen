.directive('genText',['TextGenerator',function(TextGenerator) {
    return {
        restrict: 'A',
        scope: {
            genText: '@'
        },
        template: '{{text}}',
        link: function (scope ,elem) {
          var value = scope.genText;
          if(value == "p"){
            scope.text = TextGenerator.generateParagraph();
          }
          else{
            var pos = value.indexOf("-");
            var type = value.slice(pos+1,value.length);
            var len =  parseInt(value.slice(0,pos));
            switch (type) {
              case "p":
                  scope.text = TextGenerator.generateParagraph();
                  break;
              case "s":
                  scope.text = TextGenerator.generateSentence(len);
                  break;
              case "w":
                  scope.text = TextGenerator.generateText(len);
                  break;
            }
          }
        }
    };
}]);
