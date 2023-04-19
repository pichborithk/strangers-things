import { Link, Outlet, useNavigate, useParams } from 'react-router-dom';
import { Message, ViewPostProps } from '../types/types';
import { useEffect, useState } from 'react';
import { deletePost } from '../api/auth';

const ViewPost = ({
  posts,
  token,
  userData,
  getPosts,
  getUserData,
}: ViewPostProps) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [messagesList, setMessagesList] = useState<Message[]>([]);
  const [isEditing, setIsEditing] = useState(false);
  const post = posts ? posts.find((post) => post._id === id) : undefined;

  useEffect(() => {
    if (!token || !posts || !userData) {
      navigate('/');
      return;
    }
    if (post?.author._id === userData?._id) {
      const newMessagesList = userData!.posts!.find(
        (userPost) => userPost._id === id
      )!.messages;
      setMessagesList(newMessagesList);
    }
  }, [token, id]);

  async function handleDelete() {
    const result = await deletePost(id!, token!);
    if (result) {
      getPosts();
      getUserData(token!);
      navigate('/');
    }
  }

  function handleEdit() {
    setIsEditing(true);
    navigate(`/${post?._id}/edit`);
  }

  return (
    <div className='post-view'>
      <div className='post'>
        <h2>{post?.title}</h2>
        <span>{post?.description}</span>
        <p>{post?.price}</p>
        {post?.author._id !== userData?._id && <p>{post?.author.username}</p>}
        {post?.author._id !== userData?._id && <p>{post?.location}</p>}
        <p>{post?.__v} view(s)</p>
        {post?.author._id === userData?._id && (
          <div>
            <button
              onClick={() => handleDelete()}
              type='button'
              className='delete-btn'
            >
              DELETE
            </button>
            <button
              onClick={() => handleEdit()}
              className={isEditing ? 'edit-btn active' : 'edit-btn'}
              disabled={isEditing}
            >
              {isEditing ? 'EDITING' : 'EDIT'}
            </button>
          </div>
        )}
      </div>
      <Outlet
        context={{ token, id, post, messagesList, userData, setIsEditing }}
      />
    </div>
  );
};

export default ViewPost;
