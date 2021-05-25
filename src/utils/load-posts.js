export const loadPosts = async() =>{
    const responsePosts =  fetch('https://jsonplaceholder.typicode.com/posts')
    const responsePhotos = fetch('https://jsonplaceholder.typicode.com/photos')

    const   [posts, photos]   = await Promise.all([responsePosts, responsePhotos])

    const postJson = await posts.json()
    const photoJson = await photos.json()

    const postAndPhotos = postJson.map((post, index) =>{
      return {...post, cover: photoJson[index].url}
    })
    return postAndPhotos
 }