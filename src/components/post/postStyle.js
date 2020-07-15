import styled from "styled-components";

export const url =
  "https://cdn.pixabay.com/photo/2018/08/28/13/29/avatar-3637561_960_720.png";

export const img =
  "https://www.samma3a.com/tech/ar/wp-content/uploads/sites/3/2019/07/Best-photo-editing-apps.jpg";

export const UserImage = styled.img`
  width: 85px;
  height: 85px;
  border-radius: 35px;
  margin: 8px;
  border: solid 1px grey;
`;

export const UserBlock = styled.div`
  display: flex;
  margin: 10px;
`;

export const UserName = styled.span`
  margin-top: 15px;
  margin-left: 15px;
  font-size: 1.6em;
  margin-bottom: 2px;
`;

export const ImageWrapper = styled.img`
  width: 500px;
  height: 500px;
  margin: 5px;
  border-radius: 10px;
  :hover {
    animation: shake 5s;
    cursor: pointer;
  }
`;

export const Wrapper = styled.div``;

export const Interaction = styled.div`
  marign-left: 8px;
`;
export const LoveReact = styled.img`
  width: 60px;
  height: 60px;
  margin-right: 8px;
  :hover {
    animation: shake 5s;
    cursor: pointer;
  }
`;
export const Comment = styled.img`
  width: 40px;
  height: 40px;
  margin-bottom: 10px;
`;
