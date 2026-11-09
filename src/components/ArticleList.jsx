function ArticleList ({posts = []}){
    return (
        <main>
            
            { posts.map((post) => (
                <Article
                key = {post.id}
                minutes = {post.minutes}
                preview = {post.preview}
                id = {post.id}
                date= {post.date}
                title= {post.title}
                />
            )) }
          
        </main>

    )
}

export default ArticleList;