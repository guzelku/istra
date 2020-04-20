let DomElement=function () {
    

    selector='#block';

  height='200px'; 

width='200px';

 bg= '#89EBF2'; 

  fontSize='16pt';

};

DomElement.prototype.ride=function () {
    if( selector ==='.block'){
        const elem = document.createElement('div');
        elem.classList.add(selector);
        elem.style.height=height;
        elem.style.width=width;
        elem.style.backgroundColor=bg;
        elem.style.fontSize=fontSize;
        elem.innerHTML=' любой текст';
      document.body.append(elem);
}
else{
    const elem = document.createElement('p');
    elem.id = selector;
     elem.style.height=height;
    elem.style.width=width;
    elem.style.backgroundColor=bg;
    elem.style.fontSize=fontSize;
    elem.innerHTML=' любой текст';
  document.body.append(elem);
}
};

let newDiv = new DomElement();
newDiv.ride();


