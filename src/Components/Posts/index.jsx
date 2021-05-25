import {PostList} from '../PostList'
import './style.css'

export const Posts = ({posts}) =>(
<div className="posts">    
    {posts.map(post => (
        <PostList key={post.id} 
                    title={post.title}
                    body={post.body} 
                    cover={post.cover}/>

    ))}
</div> 
)