import React, {Component} from 'react';
import './style.css'

import { Posts } from '../../Components/Posts'
import {loadPosts} from '../../utils/load-posts'
import {BtnNext} from '../../Components/BtnNext'
import {SearchInput} from '../../Components/SearchInput'

export default class Home extends Component{
  state = {
    posts:[],
    allPosts:[],
    page: 0,
    postsPerPage: 4,
    searchValue:''
  }

  async componentDidMount(){
    const {page, postsPerPage}= this.state;
    const postAndPhotos = await loadPosts()
    this.setState({ posts: postAndPhotos.slice(page, postsPerPage),
                    allPosts: postAndPhotos })
  }
loadMorePosts = () =>{
  const {posts, allPosts, 
        page, postsPerPage} = this.state
  const nextPage = page + postsPerPage
  const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage)
    posts.push(...nextPosts)

    this.setState({ posts, page: nextPage})
}
handleChange = (e) => {
const {value} = e.target
this.setState({ searchValue: value})

}
  render(){
    const { posts, page, searchValue,
            postsPerPage, allPosts } = this.state;

    const noMorePosts = page + postsPerPage >= allPosts.length

      const filteredPosts = !!searchValue?
      allPosts.filter(post=>{
        return post.title.toLowerCase().includes(
          searchValue.toLowerCase()
        )
      }):posts

    return(
      <section className="containe">

      <div className="search-container">
        <SearchInput handleChange={this.handleChange} searchValue={searchValue}/>
        {filteredPosts.length === 0 && (
       <h3>Desculpe, não achamos o que procura</h3>
       )}
      </div>

      {filteredPosts.length > 0 && (
       <Posts posts={filteredPosts}/>
       )}
       
      
       <div className='btn-container'>
       {!searchValue && 
       <BtnNext disabled={noMorePosts} 
              onClick={this.loadMorePosts} 
              text='Carregar Mais' /> }
         
       </div>
     </section>
    )
  }   
}


