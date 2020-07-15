import React, { useState } from "react";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ChatBubbleIcon from "@material-ui/icons/ChatBubble";
import IconButton from "@material-ui/core/IconButton";
import TextField from "@material-ui/core/TextField";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";

import {
  Wrapper,
  UserBlock,
  UserImage,
  UserName,
  Interaction,
  url,
  ImageWrapper,
  img,
  CommentWrapper,
} from "./postStyle";

export default function Post() {
  const [likes, setLikes] = useState(0);
  const [show, setShow] = useState(false);
  const [typingComment, setTypingComment] = useState();
  const [comments, setComments] = useState([]);

  const clickHandle = e => {
    setLikes(likes + 1);
    console.log(likes);
  };

  const getDate = () => {
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, "0");
    let mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    let yyyy = today.getFullYear();

    return (today = dd + "/" + mm + "/" + yyyy);
  };
  const commentClickHandle = () => {
    setShow(!show);
  };

  return (
    <Wrapper>
      <UserBlock>
        <UserImage src={url}></UserImage>
        <UserName>
          Hesham
          <div style={{ display: "block", fontSize: "0.6em" }}>{getDate()}</div>
        </UserName>
      </UserBlock>
      <IconButton onDoubleClick={() => clickHandle()}>
        <ImageWrapper src={img} />
      </IconButton>
      <Interaction>
        <IconButton onClick={() => clickHandle()}>
          <FavoriteIcon style={{ height: "50px", width: "50px" }} />
          <div>{likes}</div>
        </IconButton>
        <IconButton onClick={() => commentClickHandle()}>
          <ChatBubbleIcon style={{ height: "50px", width: "50px" }} />
          <div>{comments.length}</div>
        </IconButton>
        <CommentWrapper>
          <List>
            {comments.map((comment, index) => (
              <ListItem key={index}>
                <ListItemAvatar>
                  <UserImage src={url}></UserImage>
                </ListItemAvatar>
                <ListItemText primary={comment} />
              </ListItem>
            ))}
          </List>
        </CommentWrapper>

        {show ? (
          <div style={{ marginLeft: "20px" }}>
            <form
              onSubmit={event => {
                event.preventDefault();
                setComments([...comments, typingComment]);
                setShow();
              }}
            >
              <TextField
                id="outlined-basic"
                label="Your Comment"
                onChange={event => setTypingComment(event.target.value)}
              />
            </form>
          </div>
        ) : null}
      </Interaction>
    </Wrapper>
  );
}
