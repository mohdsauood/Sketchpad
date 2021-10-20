window.addEventListener('load', action());

const clear_button=document.querySelector('#clear_button');
clear_button.addEventListener("click", ()=>{
    const boxes=document.querySelectorAll('.box');
    boxes.forEach((val)=>{
            val.style.backgroundColor='white';
            val.style.transition='0.3s';
        });
    });

const custom_size=document.querySelector('#custom_button');
custom_size.addEventListener("click", ()=>{
    const boxes=document.querySelectorAll('.box');
    boxes.forEach((val)=>{
           val.remove();
        });
    const maincontainer=document.querySelector('.maincontainer');
    const size=parseInt(prompt('enter size between 2 and 100'));
    maincontainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    maincontainer.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    action(size);
});

const gray_button=document.querySelector('#gray_button');
gray_button.addEventListener("click", ()=>{
    const boxes=document.querySelectorAll('.box');
    boxes.forEach((val)=>{
        val.addEventListener('mouseover',function(){
            const randomgray= (Math.random()*(256)|0).toString(16);
            val.style.backgroundColor='#'+randomgray+randomgray+randomgray;
            val.style.transition='0.3s';
        });
    });
});

const colorbutton=document.querySelector('#color_button');
colorbutton.addEventListener("click", ()=>{
    const boxes=document.querySelectorAll('.box');
    boxes.forEach((val)=>{
        val.addEventListener('mouseover',function(){
            const randomColor= '#'+Math.floor(Math.random()*16777215).toString(16);
            val.style.backgroundColor=randomColor;
            val.style.transition='0.3s';
        });
    })
});

const colorbutton=document.querySelector('#dark_button');
colorbutton.addEventListener("click", ()=>{
    const boxes=document.querySelectorAll('.box');
    boxes.forEach((val)=>{
        val.addEventListener('mouseover',function(){
            const randomColor= '#'+Math.floor(Math.random()*16777215).toString(16);
            val.style.backgroundColor=randomColor;
            val.style.transition='0.3s';
        });
    })
});

function colorpallete(){
    const palletes=document.querySelectorAll('.palletes img');
    palletes.forEach((value)=>{
        value.addEventListener('click',()=>{
            if(value.dataset.val==1)
                {
                    const arrcolor=['#f76a8c','#f8dc88','#f8fab8','#ccf0e1'];
                    setcolorpallete(arrcolor);
                }
            else if(value.dataset.val==2)
                {
                    const arrcolor=['#a8d8ea','#aa96da','#fcbad3','#ffffd2'];
                    setcolorpallete(arrcolor);
                }
           else  if(value.dataset.val==3)
                {
                    const arrcolor=['#edffea','#75daad','#216353','#7a4d1d'];
                    setcolorpallete(arrcolor);
                }
           else  if(value.dataset.val==4)
                {
                    const arrcolor=['#f1fcfc','#40e0d0','#72b5b7','#633a82'];
                    setcolorpallete(arrcolor);
                }
			else  if(value.dataset.val==5)
                {
                    const arrcolor=['#ffff','#ffff','#ffff','#ffff'];
                    setcolorpallete(arrcolor);
                }
        });
    });
}
function action(grid=16){
    const maincontainer=document.querySelector('.maincontainer');
    for(let i=0;i<grid * grid ;i++)
        {
            const box=document.createElement('div');
            box.classList.add('box');
            maincontainer.appendChild(box);
        }
    const boxes=document.querySelectorAll('.box');
    boxes.forEach((val)=>{
        val.addEventListener('mouseover',function(){
            const randomColor= '#'+Math.floor(Math.random()*16777215).toString(16);
            val.style.backgroundColor=randomColor;
            val.style.transition='0.3s';
        });
    })
}

function setcolorpallete(arr)
{
    const boxes=document.querySelectorAll('.box');
    boxes.forEach((val)=>{
        val.addEventListener('mouseover',function(){
            const randomNum=Math.floor((Math.random() * 4) + 0);
            const randomColor=arr[randomNum];
            val.style.backgroundColor=randomColor;
            val.style.transition='0.3s';
        });
    })
}
colorpallete();





