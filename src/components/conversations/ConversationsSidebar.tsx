import {
  ConversationSideBarContainer,
  ConversationSidebarHeader,
  ConversationSideBarItem,
  ConversationsSidebarStyle
} from "../../utils/styles";
import {RiChatNewLine} from 'react-icons/ri';

import {ConversationType} from "../../utils/types";
import {FC} from "react";

import styles from "./index.module.scss"

type Props = {
  conversations: ConversationType[];
}

export const ConversationsSidebar: FC<Props> = ({
  conversations
}) => {
  return <ConversationsSidebarStyle>
    <ConversationSidebarHeader>
      <h1>Conversations </h1>
      <RiChatNewLine size={32}/>
    </ConversationSidebarHeader>
    <ConversationSideBarContainer>
      {
        conversations.map(
          (conversation) =>
          <ConversationSideBarItem>
            <div className={styles.conversationAvatar}></div>
            <div>
              <span className={styles.conversationName}>{conversation.name}</span>
              <span className={styles.conversationLastMessage}>{conversation.lastMessage}</span>
            </div>
          </ConversationSideBarItem>
        )
      }
    </ConversationSideBarContainer>
  </ConversationsSidebarStyle>
}