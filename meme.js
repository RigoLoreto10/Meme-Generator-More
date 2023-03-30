const submission = document.querySelector('#submission');
const topInput = document.getElementById('top');
const bottomInput = document.getElementById('bottom');
const imgP = document.createElement("img");
const urlInput = document.getElementById('img');
const meme = document.querySelector('.meme');

// const space = document.querySelector('.meme');


submission.addEventListener('submit', function(event){
    event.preventDefault();
    
    const newDiv = document.createElement('div');
    newDiv.setAttribute('class','meme-Div');
    
    let url = urlInput.value;
    const image = document.createElement("img");
    image.setAttribute('id','img');
    image.src = url;
        
    const topTxt = document.createElement("p");
    topTxt.innerText = topInput.value;
    topTxt.setAttribute('id','topMeme');

    const bottomTxt = document.createElement("p");
    bottomTxt.innerText = bottomInput.value;
    bottomTxt.setAttribute('id','bottomMeme');

    const deleteB = document.createElement("button");
    deleteB.innerText="Delete";
    deleteB.setAttribute('id','delete');
    deleteB.addEventListener('click',function(e){
        e.target.parentElement.remove();
    });

    newDiv.appendChild(image);
    newDiv.appendChild(topTxt);
    newDiv.appendChild(bottomTxt);
    newDiv.appendChild(deleteB);

    meme.append(newDiv);
    topInput.value='';
    bottomInput.value='';
    urlInput.value='';
    
});
