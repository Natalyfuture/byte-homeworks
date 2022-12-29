const btnPrev = document.getElementById('prev');
const btnNext = document.getElementById('next');
const imageOut = document.querySelector('.container');

let currentImg = document.createElement('img');

    currentImg.src = './images/'+`${images[0]}.jpg`;
    console.log(currentImg);
    currentImg.classList.toggle('active');
    console.log(currentImg);
    imageOut.append(currentImg); 
    let i = 0;

    const changingImg = () => {

        currentImg.classList.toggle('active');
    
            currentImg.src = `./images/${images[i]}.jpg`;
            currentImg.classList.toggle('active');
            imageOut.append(currentImg); 
            return imageOut;
    }

const prevShow = () => {

        btnPrev.addEventListener('click', () => {

            if(i === 0){
                i = images.length;  
            }
            i--;
           
            changingImg()
        }) 

}  

prevShow()

        
const nextShow = () => {

    btnNext.addEventListener('click', () => {

        if(i === images.length-1){
            i = -1;
        }
        i++;
       
        changingImg();
    }) 

}
nextShow() 