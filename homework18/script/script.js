//Реализовать функционал получения постов и комментариев к ним с сервера.

//1.Получить список всех постов с эндпоинта https://jsonplaceholder.typicode.com/posts и отрисовать их на странице.
//2.В каждом посте должна находится кнопка с текстом Show comments, которая отвечает за получение комментариев к этому конкретному посту.
//3.При нажатии на кнопку, на сервер по адресу https://jsonplaceholder.typicode.com/posts/{postId}/comments (где ВМЕСТО postId должeн находится 
//id поста) отправляется запрос, к которому необходимо запросить комментарии.
//4.Полученные комментарии нужно отрендерить в посте (где-то под ним, выбов визуального оформления остается за вами).
//5.Когда комментарии отрендерены, текст в кнопке необходимо заменить на Hide comments.
//6.Повторное нажатие на кнопку (если комменты уже отрендерены), удаляет их с поста. Текст кнопки снова меняется на Show comments.


const containerPosts = document.getElementById('collectionPosts');
const postElem = document.getElementById('postId');
const BASE_URL = 'https://jsonplaceholder.typicode.com/posts';

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

getPost()
.then((res) => {
renderPost(res)
})


 const renderPost = (post) => {

    post.forEach(element => {
    const postId = element.id;
    
    const divPost = document.createElement('div')
    const postTitle = document.createElement('h1');
    const postBody = document.createElement('p');
    const buttonShow = document.createElement('button');
    
    divPost.setAttribute('class', 'postItem');
    buttonShow.setAttribute('class', 'button_show');
    buttonShow.setAttribute('id', 'show');

    postTitle.innerText = element.title;
    postBody.innerText = element.body;
    buttonShow.innerText = 'SHOW COMMENTS';

    divPost.append(postTitle, postBody, buttonShow);
    postElem.append(divPost);
   
    let text = 'SHOW COMMENTS';

     getComments(postId)
    .then((comments) =>{
    const divComments = renderComments(comments);
    
        divPost.append(postTitle, postBody, buttonShow, divComments);
        postElem.append(divPost);

        buttonShow.addEventListener('click', ()=>{
            if(text === 'SHOW COMMENTS'){
                text = 'HIDDEN COMMENTS';
                buttonShow.innerText = text;
            }else{
                text = 'SHOW COMMENTS';
                buttonShow.innerText = text;
            }

            divComments.classList.toggle('comments_wrapper');
            
        })
    })
    .catch((err) =>{
        if(err.status !== undefined){
            if(err.status === 404){
                alert('post do not find')
            }
        }
    })
    
    });
};



const getComments = (postId) => {
    return new Promise((resolve) =>{

        const getCommentsRequest = new XMLHttpRequest();
        getCommentsRequest.open('GET',`${BASE_URL}/${postId}/comments`);
        getCommentsRequest.responseType = "json";
        getCommentsRequest.send();
        

        getCommentsRequest.onload = () => {
            const{response: comments} = getCommentsRequest;
           
            resolve(comments);
        }
       
    })
}

const renderComments = (comments) => {

    const commentsWrapper = document.createElement('div');
    commentsWrapper.setAttribute('class', 'comments_wrapper');
    commentsWrapper.setAttribute('id', 'comments_wrapper')
    
    comments.forEach((elem) => {
        const commentElem = document.createElement('p');
        commentElem.setAttribute('class', 'text_comments')
        commentElem.innerText = elem.body;

        commentsWrapper.append(commentElem);
        
    }) 

    return commentsWrapper;

} 







    






