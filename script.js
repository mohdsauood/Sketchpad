window.addEventListener('load', action());

let clear_button=document.querySelector('#clear_button');
clear_button.onclick=function(){
    let boxes=document.querySelectorAll('.box');
    boxes.forEach((val)=>{
            val.style.backgroundColor='white';
            val.style.transition='0.3s';
        });
    };

let custom_size=document.querySelector('#custom_button');
custom_size.onclick=function(){
    let boxes=document.querySelectorAll('.box');
    boxes.forEach((val)=>{
           val.remove();
        });
    let maincontainer=document.querySelector('.maincontainer');
    let size=parseInt(prompt('enter size between 2 and 100'));
    maincontainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    maincontainer.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    action(size);
    
};

let gray_button=document.querySelector('#gray_button');
gray_button.onclick=function(){
    let boxes=document.querySelectorAll('.box');
    boxes.forEach((val)=>{
        val.addEventListener('mouseover',function(){
           let randomgray= (Math.random()*(256)|0).toString(16);
            val.style.backgroundColor='#'+randomgray+randomgray+randomgray;
            val.style.transition='0.3s';
        });
    });
    
}

let colorbutton=document.querySelector('#color_button');
colorbutton.onclick=function(){
    let boxes=document.querySelectorAll('.box');
    boxes.forEach((val)=>{
        val.addEventListener('mouseover',function(){
           let randomColor= '#'+Math.floor(Math.random()*16777215).toString(16);
            val.style.backgroundColor=randomColor;
            val.style.transition='0.3s';
        });
    })
};

function colorpallete(){
    let palletes=document.querySelectorAll('.palletes img');
    palletes.forEach((value)=>{
        value.addEventListener('click',()=>{
            if(value.dataset.val==1)
                {
                    let arrcolor=['#f76a8c','#f8dc88','#f8fab8','#ccf0e1'];
                    setcolorpallete(arrcolor);
                }
            else if(value.dataset.val==2)
                {
                    let arrcolor=['#a8d8ea','#aa96da','#fcbad3','#ffffd2'];
                    setcolorpallete(arrcolor);
                }
           else  if(value.dataset.val==3)
                {
                    let arrcolor=['#edffea','#75daad','#216353','#7a4d1d'];
                    setcolorpallete(arrcolor);
                }
           else  if(value.dataset.val==4)
                {
                    let arrcolor=['#f1fcfc','#40e0d0','#72b5b7','#633a82'];
                    setcolorpallete(arrcolor);
                }
        })
    })
}
function action(grid=16){
    let maincontainer=document.querySelector('.maincontainer');
    for(let i=0;i<grid * grid ;i++)
        {
            let box=document.createElement('div');
            box.classList.add('box');
            maincontainer.appendChild(box);
        }
    let boxes=document.querySelectorAll('.box');
    boxes.forEach((val)=>{
        val.addEventListener('mouseover',function(){
           let randomColor= '#'+Math.floor(Math.random()*16777215).toString(16);
            val.style.backgroundColor=randomColor;
            val.style.transition='0.3s';
        });
    })
}

function setcolorpallete(arr)
{
     let boxes=document.querySelectorAll('.box');
    boxes.forEach((val)=>{
        val.addEventListener('mouseover',function(){
           let randomNum=Math.floor((Math.random() * 4) + 0);
           let randomColor=arr[randomNum];
            val.style.backgroundColor=randomColor;
            val.style.transition='0.3s';
        });
    })
}
colorpallete();





