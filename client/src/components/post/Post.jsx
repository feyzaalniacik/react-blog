import "./post.css"

export default function Post() {
  return (
    <div className="post">
        <img className="postImg" src="" alt="" />
        <div className="postInfo">
            <div className="postCats">
                <span className="postCat">Music</span>
                <span className="postCat">Life</span>
            </div>
            <span className="postTitle">Lorem dipisicing. Id, molestiae?</span>
            <hr />
            <span className="postDate">1 hour ago</span>
        </div>
        <p className="postDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus possimus distinctio modi maxime pariatur, nesciunt eius fuga cum error repellat?</p>
    </div>
  )
}
