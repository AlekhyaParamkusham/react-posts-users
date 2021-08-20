import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import { Form, Table, Button, Modal } from "react-bootstrap";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
  Link,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Alert from "react-bootstrap/Alert";

const API_URL = "https://jsonplaceholder.typicode.com/posts";
const USERS_URL = "https://jsonplaceholder.typicode.com/users";

const Posts = () => {
  const [name, setName] = useState("");
  const [userId, setUserId] = useState("");
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [id, setId] = useState("");
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    website: "",
  });

  const [comments, setComments] = useState([]);

  const getPosts = async () => {
    // API call to server to fetch posts
    const response = await fetch(`${API_URL}/?_limit=10`);
    const posts = await response.json();
    setPosts(posts);
    setLoading(false);
  };

  useEffect(() => {
    getPosts();
  }, [API_URL]);

  const createPost = async () => {
    //   API Call to server and add new post

    const { data } = await axios.post(API_URL, {
      userId,
      title,
      body,
    });

    posts.push(data);
    setPosts(posts);
    setUserId("");
    setTitle("");
    setBody("");
    setId("");
  };

  const updatePost = async () => {
    // API Call to server and update an existing post
    const { data } = await axios.put(`${API_URL}/${id}`, {
      userId,
      title,
      body,
    });

    console.log(data);
    const index = posts.findIndex((post) => post.id === id);
    posts[index] = data;

    setPosts(posts);
    setUserId("");
    setTitle("");
    setBody("");
    setId("");
  };

  const selectPost = (post) => {
    // To select the post
    console.log(post);
    setUserId(post.userId);
    setTitle(post.title);
    setBody(post.body);
    setId(post.id);
  };

  const deletePost = async (id) => {
    // API call to server to delete a post
    console.log(`${API_URL}/${id}`);
    await axios.delete(`${API_URL}/${id}`);

    let postData = posts.filter((post) => post.id !== id);

    setPosts(postData);
  };

  const getUser = async (postId) => {
    // API Call to get post's user info
    console.log(postId);
    const { data } = await axios.get(`${USERS_URL}/${postId}/?_limit=10`);
    console.log(data);
    setUser({
      name: data.name,
      email: data.email,
      phone: data.phone,
      website: data.website,
    });
    setShow1(true);
  };

  const getComments = async (postId) => {
    // API Call to get post comments
    console.log(postId);
    const { data } = await axios.get(
      `${USERS_URL}/${postId}/comments/?_limit=10`
    );
    setComments(data);
    setShow2(true);
  };

  // Handling form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted...");
    if (id) {
      updatePost();
    } else createPost();
  };

  return (
    <>
      <h2 class="abouth2">Posts</h2>
      <div className="formClass">
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="userId">
            <Form.Label className="formLabel">User ID</Form.Label>
            <Form.Control
              className="formInput"
              size="sm"
              type="number"
              placeholder="Enter ID"
              name="userId"
              value={userId}
              required
              onChange={(e) => setUserId(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="title">
            <Form.Label className="formLabel">Title</Form.Label>
            <Form.Control
              className="formInput"
              size="sm"
              type="text"
              placeholder="Enter title"
              name="title"
              value={title}
              required
              onChange={(e) => setTitle(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="body">
            <Form.Label className="formLabel">Body</Form.Label>
            <Form.Control
              className="formInput"
              size="sm"
              type="text"
              placeholder="Enter Body"
              name="body"
              value={body}
              required
              onChange={(e) => setBody(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3 submitBtn" controlId="formBasicCheckbox">
            <Button variant="dark" type="submit">
              Submit
            </Button>
          </Form.Group>
        </Form>
      </div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Id</th>
            <th>UserId</th>
            <th>Title</th>
            <th>Body</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post) => {
            return (
              <tr key={post.id}>
                <td>{post.id}</td>
                <td>{post.userId}</td>
                <td>{post.title}</td>
                <td>{post.body}</td>
                <td>
                  {/* Button to select the post */}
                  <Button
                    variant="success"
                    size="sm"
                    onClick={() => selectPost(post)}
                  >
                    <i className="far fa-edit"></i>
                  </Button>
                  <br />
                  <br />

                  {/* Button for User info */}
                  <Button size="sm" onClick={() => getUser(post.id)}>
                    <i className="fas fa-info-circle"></i>
                  </Button>

                  {/* Modal for post User details  */}
                  <Modal
                    show={show1}
                    onHide={() => setShow1(false)}
                    dialogClassName="modal-90w"
                    aria-labelledby="userInfo"
                  >
                    <Modal.Header closeButton>
                      <Modal.Title id="comments">User Details</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <p>
                        <strong>Name : </strong>
                        {user.name}
                      </p>
                      <p>
                        <strong>Email Id : </strong>
                        {user.email}
                      </p>
                      <p>
                        <strong>Phone no. : </strong>
                        {user.phone}
                      </p>
                      <p>
                        <strong>Website : </strong>
                        {user.website}
                      </p>
                    </Modal.Body>
                  </Modal>
                  <br />
                  <br />

                  {/* Button for post comments */}
                  <Button size="sm" onClick={() => getComments(post.id)}>
                    <i className="far fa-comments"></i>
                  </Button>

                  {/* Modal for getting post comments */}
                  <Modal
                    show={show2}
                    onHide={() => setShow2(false)}
                    dialogClassName="modal-90w"
                    aria-labelledby="comments"
                  >
                    <Modal.Header closeButton>
                      <Modal.Title id="comments">Comments Section</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <div>
                        {comments.map((ele) => {
                          return (
                            <>
                              <p>
                                <strong>Name: </strong>
                                {ele.name}
                              </p>
                              <p>
                                <strong>Comment: </strong>
                                {ele.body}
                              </p>
                              <p>
                                <strong>By: </strong>
                                {ele.email}
                              </p>
                              <hr />
                            </>
                          );
                        })}
                      </div>
                    </Modal.Body>
                  </Modal>
                  <br />
                  <br />

                  {/* Button for deleting post */}
                  <Button
                    variant="danger"
                    size="sm"
                    onClick={() => deletePost(post.id)}
                  >
                    <i className="fas fa-trash"></i>
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
};

export default Posts;
