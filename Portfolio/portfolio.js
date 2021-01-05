 // javascript portfolio

function hideNavbar(){
  var x = document.getElementByTag("nav");
  if(x.tagName === 'nav'){
    x.tagName += " responsive";
  }else{
    x.tagName = 'nav';
  }
}
