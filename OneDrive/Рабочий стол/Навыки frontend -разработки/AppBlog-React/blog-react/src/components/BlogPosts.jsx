import PropTypes from 'prop-types';

const BlogPosts = ({ posts, btnDeletePost  }) => {
    return (
        <div className="posts-container">
            {posts.length === 0 ? (
                <p>Нет постов</p>
            ) : (
            posts.map((post) => (
                <div key = {post.id} className='post'>
                    <button 
                        className='btn-delete-post'
                        onClick={() => btnDeletePost(post.id) } >
                        Удалить
                    </button>
                    <div className="post-content">
                        <h3 className="post-title">{post.title}</h3>
                        <p>{post.description}</p>
                        <p className="post-date"><em>{post.date}</em></p>
                    </div>
                </div>
                ))
            )}
        </div>
    );
}
//posts является массивом объектов, каждый из которых имеет указанную структуру
BlogPosts.propTypes = {
    posts: PropTypes.arrayOf(  //пост должен быть массивом
        PropTypes.shape({ //какие поля должен содержать каждый объект
            id: PropTypes.string.isRequired, //поле обязательно, то есть, если id не будет передан, появится предупреждение.
            title: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            date: PropTypes.string.isRequired,
        })
    ).isRequired,//массив posts также является обязательным.

    btnDeletePost: PropTypes.func.isRequired,//должен быть функцией (func) и также является обязательным.
};

export default BlogPosts;