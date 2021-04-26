let arr=['f',15,0,-9,'f','p',5,7,'p','p',3,4,8,'f','f'];
let uniquearr=arr.filter((Element,index) => {
return arr.indexOf(Element) == index ;})
alert(uniquearr);