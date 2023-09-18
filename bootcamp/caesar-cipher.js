// Write a function that takes in a string and and an offset and returns a new string with each character moved by the offset

/*var caesarCipher = function(str, offset) {

    var rts = new String;

    for (var i = 0; i < str.length; i++) {
        var toAdd = str[i].charCodeAt();

        if (offset > 0) {
            if (toAdd >= 65 && toAdd <= 90) {
                var index = toAdd - 64;
                if ((offset+index)%26 == 0) {
                    toAdd = offset%26 + index;
                } else {
                    toAdd = 64 + (index + offset)%26;
                }
            } else if (toAdd >= 97 && toAdd <= 122) {
                var index = toAdd - 96;
                if ((offset+index)%26 == 0) {
                    toAdd = offset%26 + index;
                    console.log("this is 0 " + index)
                } else {
                    toAdd = 96 + (index + offset)%26;
                }
            }
        } else if (offset < 0) {
            if (toAdd >= 65 && toAdd <= 90) {
                var index = toAdd - 64;
                toAdd = 90 + (index + offset)%26;
            } else if (toAdd >= 97 && toAdd <= 122) {
                var index = toAdd - 96;
                toAdd = 122 + (index + offset)%26;
            }
        }
        rts += String.fromCharCode(toAdd);
    }
    return rts;
};
*/

var caesarCipher = function(str, offset) {
    var result = "";
  
    while (offset < 0) {
      offset = 26 + offset;
    }
  
    for (var i = 0; i < str.length; i++) {
      var char = str[i];
      var charCode = char.charCodeAt(0);
      var offsetChar = char;
  
      if (charCode >= 65 && charCode <= 90) {
        offsetChar = String.fromCharCode(((charCode - 65 + offset) % 26) + 65);
      } else if (charCode >= 97 && charCode <= 122) {
        offsetChar = String.fromCharCode(((charCode - 97 + offset) % 26) + 97);
      }
  
      result += offsetChar;
    }
  
    return result;
};
