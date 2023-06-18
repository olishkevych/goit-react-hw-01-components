import { FriendListItem } from "../FriendListItem/FriendListItem";
import {FriendsList} from "./FriendList.styled"
import {Section, Header} from "../CommonCSSComp/CommonCSSComp"
import PropTypes from 'prop-types';

export let FriendList = ({friends}) => {
    return (<Section>
        <Header>Friends</Header>
    <FriendsList>
       { friends.map(friend => (<FriendListItem 
        key={friend.id} 
        avatar={friend.avatar} 
        isOnline={friend.isOnline} 
        name = {friend.name}
        />))} 
    </FriendsList>
    </Section>)
};

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            avatar: PropTypes.string,
            name: PropTypes.string.isRequired,
            isOnline: PropTypes.bool,
            id: PropTypes.number.isRequired
        })
    )
}
