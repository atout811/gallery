import React, { useState } from "react";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ChatBubbleIcon from "@material-ui/icons/ChatBubble";
import IconButton from "@material-ui/core/IconButton";

import {
  Wrapper,
  UserBlock,
  UserImage,
  UserName,
  Interaction,
  LoveReact,
  Comment,
  url,
  ImageWrapper,
  img,
} from "./postStyle";

export default function Post() {
  const [likes, setLikes] = useState(0);

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
        <IconButton>
          <ChatBubbleIcon style={{ height: "50px", width: "50px" }} />
        </IconButton>
      </Interaction>
    </Wrapper>
  );
}
