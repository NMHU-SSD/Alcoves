/*
'use strict';

class XMLToJSON {
  // https://davidwalsh.name/convert-xml-json
  // Changes XML to JSON
  constructor(xml) {
    var self = this;
    // Create the return object
    self.obj = {};

    if (xml.nodeType == 1) {
      // element
      // do attributes
      if (xml.attributes.length > 0) {
        self.obj["attributes"] = {};
        for (let j = 0; j < xml.attributes.length; j++) {
          var attribute = xml.attributes.item(j);
          self.obj["attributes"][attribute.nodeName] = attribute.nodeValue;
        }
      }
    } else if (xml.nodeType == 3) {
      // text
      self.obj = xml.nodeValue;
    } else if (xml.nodeType == 4) {
      // cdata
      self.obj = xml.nodeValue;
    }

    // do children
    if (xml.hasChildNodes()) {
      for (let i = 0; i < xml.childNodes.length; i++) {
        var item = xml.childNodes.item(i);
        var nodeName = item.nodeName;
        if (typeof self.obj[nodeName] == "undefined") {
          self.obj[nodeName] = new XMLToJSON(item);
        } else {
          if (typeof self.obj[nodeName].push == "undefined") {
            var old = self.obj[nodeName];
            self.obj[nodeName] = [];
            self.obj[nodeName].push(old);
          }
          self.obj[nodeName].push(new XMLToJSON(item));
        }
      }
    }
    return self.obj;
  }
}

*/
// https://davidwalsh.name/convert-xml-json
// Changes XML to JSON
var xmlToJson = function(xml) {
   // Create the return object
   var obj = {};

   if (xml.nodeType == 1) {
     // element
     // do attributes
     if (xml.attributes.length > 0) {
       obj["attributes"] = {};
       for (var j = 0; j < xml.attributes.length; j++) {
         var attribute = xml.attributes.item(j);
         obj["attributes"][attribute.nodeName] = attribute.nodeValue;
       }
     }
   } else if (xml.nodeType == 3) {
     // text
     obj = xml.nodeValue;
   } else if (xml.nodeType == 4) {
     // cdata
     obj = xml.nodeValue;
   }

   // do children
   if (xml.hasChildNodes()) {
     for (var i = 0; i < xml.childNodes.length; i++) {
       var item = xml.childNodes.item(i);
       var nodeName = item.nodeName;
       if (typeof obj[nodeName] == "undefined") {
         obj[nodeName] = xmlToJson(item);
       } else {
         if (typeof obj[nodeName].push == "undefined") {
           var old = obj[nodeName];
           obj[nodeName] = [];
           obj[nodeName].push(old);
         }
         obj[nodeName].push(xmlToJson(item));
       }
     }
   }
   return obj;
 }