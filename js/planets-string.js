(function(){
    "use strict";

    var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    // var planetsArray;

    // TODO: Convert planetsString to an array, save it to planetsArray.
    var planetsArray = planetsString.split('|');
    console.log(planetsArray);

    // TODO: Create a string with <br> tags between each planet. console.log() your results.
    //       Why might this be useful?
    
    //console.log(planetsArray.join('<br>'));
    var planetsString2 = planetsArray.join('<br>')
    console.log(planetsString2);

    // Bonus: Create a second string that would display your planets in an undordered list.
    //        You will need an opening AND closing <ul> tags around the entire string, and <li> tags around each planet.
    //        console.log() your results.
    
    var array1 = planetsArray[0];
    var array2 = planetsArray[1];
    var array3 = planetsArray[2];
    var array4 = planetsArray[3];
    var array5 = planetsArray[4];
    var array6 = planetsArray[5];;
    var array7 = planetsArray[6];
    var array8 = planetsArray[7];

    /*console.log(array1);
    console.log(array2);
    console.log(array3);
    console.log(array4);
    console.log(array5);
    console.log(array6);
    console.log(array7);
    console.log(array8);*/

    var stringList = ('<ul>' + '<li>' + array1 + '</li>' + '<li>' + array2 + '</li>' + '<li>' + array3 + '</li>' + '<li>' + array4 + '</li>' + '<li>' + array5 + '</li>'
         + '<li>' + array6 + '</li>' + '<li>' + array7 + '</li>' + '<li>' + array8 + '</li>' + '</ul>');
    console.log(stringList);

    //display list in html format on webpage
    document.body.innerHTML += stringList;


})();