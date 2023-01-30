//Реализовать функционал получения постов и комментариев к ним с сервера.

//1.Получить список всех постов с эндпоинта https://jsonplaceholder.typicode.com/posts и отрисовать их на странице.
//2.В каждом посте должна находится кнопка с текстом Show comments, которая отвечает за получение комментариев к этому конкретному посту.
//3.При нажатии на кнопку, на сервер по адресу https://jsonplaceholder.typicode.com/posts/{postId}/comments (где ВМЕСТО postId должeн находится 
//id поста) отправляется запрос, к которому необходимо запросить комментарии.
//4.Полученные комментарии нужно отрендерить в посте (где-то под ним, выбов визуального оформления остается за вами).
//5.Когда комментарии отрендерены, текст в кнопке необходимо заменить на Hide comments.
//6.Повторное нажатие на кнопку (если комменты уже отрендерены), удаляет их с поста. Текст кнопки снова меняется на Show comments.


const containerPosts = document.getElementById('collectionPosts');
const postElem = document.getElementById('post_Id');
const BASE_URL = 'https://jsonplaceholder.typicode.com/posts';

let text = 'SHOW COMMENTS'

const getPost = ()=>{
    return new Promise((resolve) =>{
        const getPostRequest = new XMLHttpRequest();
        getPostRequest.open('GET', BASE_URL);
        getPostRequest.responseType = "json";
        getPostRequest.send();

        getPostRequest.onload = () => {
            const{response: post} = getPostRequest;
            resolve(post)
        }
    })
}


const getComments = (postId, event) => {

        const getCommentsRequest = new XMLHttpRequest();
        getCommentsRequest.open('GET',`${BASE_URL}/${postId}/comments`);
        getCommentsRequest.responseType = "json";
        getCommentsRequest.send();
        
        const button = event.target;
        const parent = event.target.parentNode;

        getCommentsRequest.onload = () => {
            let comments = getCommentsRequest.response;

            if (button.innerText === 'SHOW COMMENTS'){
                button.innerText = 'HIDE COMMENTS'
                showComments(comments, parent)
            }else if (button.innerText === 'HIDE COMMENTS'){
                button.innerText = 'SHOW COMMENTS'
                hideComments(parent)
            }

        }

            
}


const showComments = (comments, div) => {
    
    commentsWrapper = document.createElement('div');
     
    comments.forEach((elem) => {
         const commentElem = document.createElement('p');
         commentElem.setAttribute('class', 'text_comments')
         commentElem.innerText = elem.body;
 
         commentsWrapper.append(commentElem);
         
     }) 
 
     div.append(commentsWrapper)
    
}

const hideComments = (div) => {
    let comment = div.lastElementChild
    comment.remove()
  
}

 const renderPost = (post) => {
   
    post.map((element) => {

    const divPost = document.createElement('div')
    const postTitle = document.createElement('h1');
    const postBody = document.createElement('p');
    const button = document.createElement('button');
    
    divPost.setAttribute('class', 'postItem');
    button.setAttribute('class', 'button_show');

    postTitle.innerText = element.title;
    postBody.innerText = element.body;
    button.innerText = text;

    divPost.append(postTitle, postBody, button);
    
    postElem.append(divPost);

    const postId = element.id;

        button.addEventListener('click', (event) => {

            getComments(postId, event)
                
        }) 
    });
};

getPost()
.then((res) => {
renderPost(res)
})
.catch((err) =>{
    if(err.status !== undefined){
        if(err.status === 404){
            alert('post do not find')
        }
    }
})







    






