//The Logo Hijack
//Replace Google logo with Yahoo logo

var img = document.getElementById('hplogo');
img.setAttribute('src', 'https://s1.yimg.com/rz/d/yahoo_en-US_f_p_bestfit_2x.png');

//Add Yahooo! to button -- no button on page so adding under search history blocks
var pageNode = document.getElementsByTagName('body')[0];
var newDiv = document.createElement('div');
var divText = document.createTextNode('Yahoooo!');
newDiv.appendChild(divText);
pageNode.appendChild(newDiv);

