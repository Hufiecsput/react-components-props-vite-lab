function Article({title, date, preview}){
    return (
        <>
        <article>
            <h3>
             name :{title}
            </h3>

            <small>
                {date}
            </small>

            <p>
                {preview}
            </p>
        </article>
        </>
    )
};

export default Article;