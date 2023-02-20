import React from "react";

import {
  Dimensions,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { Feather } from "@expo/vector-icons";

import {
  PostsContainer,
  PostsItemContainer,
  PostsItemImg,
  CommentsContainer,
  CommentsSubContainer,
  CommentsAvatarContainer,
  CommentsTextContainer,
  CommentsText,
  CommentsData,
  CommentsInputContainer,
  CommentsInput,
  CommentsSendBtn,
} from "../../ui/main";

import userData from "../../testData/userData";
import testImg from "../../assets/img/postsImg02_opt.jpg";

const calculatedScreenWidth = `${Math.floor(
  Dimensions.get("window").width - 32
)}px`;

export default function CommentsScreen({ route }) {
  const { id } = route.params;
  const onScreenPress = () => {
    Keyboard.dismiss();
  };
  // const resultItem = userData.userPosts.filter((post) => {post.id === id})
  // console.log(userData.userPosts.find(id));
  // console.log(id);
  const resultItem = userData.userPosts.find((post) => post.id === id);
  console.log(resultItem);
  console.log(resultItem.comments.comments.length);
  // console.log(image);
  return (
    <TouchableWithoutFeedback onPress={onScreenPress}>
      <PostsContainer>
        <PostsItemContainer>
          {/* {resultItem.map(item => {return <PostsItemImg key={id} source={item.image}></PostsItemImg>})} */}
          {/* <PostsItemImg></PostsItemImg>; */}
          <PostsItemImg isCommentPage source={testImg}></PostsItemImg>
          <CommentsContainer>
            {/* <CommentsSubContainer>
          <CommentsAvatarContainer></CommentsAvatarContainer>
          <CommentsTextContainer>
            <CommentsText>Some text</CommentsText>
            <CommentsData>Some data</CommentsData>
          </CommentsTextContainer>
        </CommentsSubContainer> */}

            {resultItem.comments.comments.length > 0 &&
              resultItem.comments.comments.map((comment) => {
                const { id, owner, text, date } = comment;
                const { name, avatar } = owner;
                return (
                  <CommentsSubContainer key={id}>
                    <CommentsAvatarContainer
                      source={avatar}
                    ></CommentsAvatarContainer>
                    <CommentsTextContainer>
                      <CommentsText>{text}</CommentsText>
                      <CommentsData>{date}</CommentsData>
                    </CommentsTextContainer>
                  </CommentsSubContainer>
                );
              })}
          </CommentsContainer>
          <KeyboardAvoidingView
            behavior={Platform.OS == "ios" ? "padding" : ""}
          >
            <CommentsInputContainer>
              <CommentsInput placeholder="Коментувати..."></CommentsInput>
              <CommentsSendBtn>
                <Feather name="arrow-up" size={24} color="#fff" />
              </CommentsSendBtn>
            </CommentsInputContainer>
          </KeyboardAvoidingView>
        </PostsItemContainer>
      </PostsContainer>
    </TouchableWithoutFeedback>
  );
}
