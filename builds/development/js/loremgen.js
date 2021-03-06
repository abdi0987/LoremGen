angular.module('LoremGen',[])

.factory("TextGenerator",[function () {
  return {
    generateText : function(len) {
        var words = ['lorem',
                                            'ipsum',
                                            'dolor',
                                            'sit',
                                            'amet',
                                            'consectetur',
                                            'adipiscing',
                                            'elit',
                                            'curabitur',
                                            'vel',
                                            'hendrerit',
                                            'libero',
                                            'eleifend',
                                            'blandit',
                                            'nunc',
                                            'ornare',
                                            'odio',
                                            'ut',
                                            'orci',
                                            'gravida',
                                            'imperdiet',
                                            'nullam',
                                            'purus',
                                            'lacinia',
                                            'a',
                                            'pretium',
                                            'quis',
                                            'congue',
                                            'praesent',
                                            'sagittis',
                                            'laoreet',
                                            'auctor',
                                            'mauris',
                                            'non',
                                            'velit',
                                            'eros',
                                            'dictum',
                                            'proin',
                                            'accumsan',
                                            'sapien',
                                            'nec',
                                            'massa',
                                            'volutpat',
                                            'venenatis',
                                            'sed',
                                            'eu',
                                            'molestie',
                                            'lacus',
                                            'quisque',
                                            'porttitor',
                                            'ligula',
                                            'dui',
                                            'mollis',
                                            'tempus',
                                            'at',
                                            'magna',
                                            'vestibulum',
                                            'turpis',
                                            'ac',
                                            'diam',
                                            'tincidunt',
                                            'id',
                                            'condimentum',
                                            'enim',
                                            'sodales',
                                            'in',
                                            'hac',
                                            'habitasse',
                                            'platea',
                                            'dictumst',
                                            'aenean',
                                            'neque',
                                            'fusce',
                                            'augue',
                                            'leo',
                                            'eget',
                                            'semper',
                                            'mattis',
                                            'tortor',
                                            'scelerisque',
                                            'nulla',
                                            'interdum',
                                            'tellus',
                                            'malesuada',
                                            'rhoncus',
                                            'porta',
                                            'sem',
                                            'aliquet',
                                            'et',
                                            'nam',
                                            'suspendisse',
                                            'potenti',
                                            'vivamus',
                                            'luctus',
                                            'fringilla',
                                            'erat',
                                            'donec',
                                            'justo',
                                            'vehicula',
                                            'ultricies',
                                            'varius',
                                            'ante',
                                            'primis',
                                            'faucibus',
                                            'ultrices',
                                            'posuere',
                                            'cubilia',
                                            'curae',
                                            'etiam',
                                            'cursus',
                                            'aliquam',
                                            'quam',
                                            'dapibus',
                                            'nisl',
                                            'feugiat',
                                            'egestas',
                                            'class',
                                            'aptent',
                                            'taciti',
                                            'sociosqu',
                                            'ad',
                                            'litora',
                                            'torquent',
                                            'per',
                                            'conubia',
                                            'nostra',
                                            'inceptos',
                                            'himenaeos',
                                            'phasellus',
                                            'nibh',
                                            'pulvinar',
                                            'vitae',
                                            'urna',
                                            'iaculis',
                                            'lobortis',
                                            'nisi',
                                            'viverra',
                                            'arcu',
                                            'morbi',
                                            'pellentesque',
                                            'metus',
                                            'commodo',
                                            'ut',
                                            'facilisis',
                                            'felis',
                                            'tristique',
                                            'ullamcorper',
                                            'placerat',
                                            'aenean',
                                            'convallis',
                                            'sollicitudin',
                                            'integer',
                                            'rutrum',
                                            'duis',
                                            'est',
                                            'etiam',
                                            'bibendum',
                                            'donec',
                                            'pharetra',
                                            'vulputate',
                                            'maecenas',
                                            'mi',
                                            'fermentum',
                                            'consequat',
                                            'suscipit',
                                            'aliquam',
                                            'habitant',
                                            'senectus',
                                            'netus',
                                            'fames',
                                            'quisque',
                                            'euismod',
                                            'curabitur',
                                            'lectus',
                                            'elementum',
                                            'tempor',
                                            'risus',
                                            'cras'
                                        ];
        var wordCount = (len > words.length) ? (words.length - 1) : len;
        var extracted = [];

        for (var i = 0; i < wordCount; i++) {

            var word = Math.floor(Math.random() * words.length);

            extracted[i] = words[word];


        }

        return extracted.join(' ');

    },
    generateSentence: function (len) {
      var text = '';
      for (var i = 0; i < len; i++) {
        var textLen = Math.floor((Math.random() * 10) + 5);
        text+=this.generateText(textLen)+'. ';
      }
      return text;
    },
    generateParagraph : function (len) {
      var paragraphs = '';

      var paragraphLength = Math.floor((Math.random() * 16) + 12);
      var paragraph = this.generateSentence(paragraphLength);
      paragraphs +=paragraph;

      return paragraphs;
    }
  };
}])

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
