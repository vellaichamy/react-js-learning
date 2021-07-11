import React from 'react'

import PostList from './chapter03_2/post/PostList'
import CreatePost from './chapter03_2/post/CreatePost'
import UserBar from './chapter03_2/user/UserBar'

const user = 'Vellai Chamy'
const posts = [
    { title: 'React Hooks', content: 'The greatest thing since sliced bread!', author: 'Vellai Chamy' },
    { title: 'Using React Fragments', content: 'Keeping the DOM tree clean!', author: 'Vellai Chamy' }
]

export default function App () {
    return (
        <div style={{ padding: 8 }}>
            <UserBar />
            <br />
            <CreatePost user={user} />
            <br />
            <hr />
            <PostList posts={posts} />
        </div>
    )
}
