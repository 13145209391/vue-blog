import ShowBlogs from './components/ShowBlogs.vue'
import AddBlog from './components/AddBlog.vue'
import SingLeBlog from './components/SingLeBlog.vue'
import EditBlog from './components/EditBlog.vue'
export default[
    {path:"/",component:ShowBlogs},
    {path:"/add",component:AddBlog},
    {path:"/blog/:id",component:SingLeBlog},
    {path:"/edit/:id",component:EditBlog}
]