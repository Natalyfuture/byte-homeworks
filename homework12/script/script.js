let tooltipElem;

const button = document.getElementById('button');

button.onmouseover = function(event) {

  let tooltipHtml = createTooltip(button, "example tooltip text");
  
}




const createTooltip = (btn, text) => {

    tooltipElem = document.createElement('div');
    tooltipElem.className = 'tooltip';
    tooltipElem.innerHTML = `${text}`;
    document.body.append(tooltipElem);
  

    let coords = btn.getBoundingClientRect();
    console.log(coords);

    let left = coords.left + 32;
    if (left < 0) left = 0; 

    let top = coords.top - tooltipElem.offsetHeight - 25;

    tooltipElem.style.position = 'absolute';
    tooltipElem.style.left = left + 'px';
    tooltipElem.style.top = top + 'px';

    return tooltipElem;

}

   

button.onmouseout = function(e) {
  console.log("button.onmouseout");
  if (tooltipElem) {
    tooltipElem.remove();
    tooltipElem = null;
  }

};