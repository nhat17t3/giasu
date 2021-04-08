import { newPost,editPost, deletePost, setPosts,
    setPostError, newPostError, editPostError, deletePostError } from '../features/student/PostSlice';
import { toast } from 'react-toastify';

const ToastMiddleware = () => next => action => {
    switch(action.type) {
        case setPosts.type:
            toast.success('call api successfully');
            break;
        case newPost.type:
            toast.success('New post added successfully');
            break;
        case editPost.type:
            toast.success('Post edited successfully');
            break;
        case deletePost.type:
            toast.success('Post deleted successfully');
            break;
        case setPostError.type:
            toast.error('Error loading post');
            break;
        case newPostError.type:
            toast.error('Error adding new post');
            break;
        case editPostError.type:
            toast.error('Error editing post');
            break;
        case deletePostError.type:
            toast.error('Error deleting post');
            break;
        default:
            break;
    }
    return next(action);
}

export default ToastMiddleware;
