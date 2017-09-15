import React from 'react';
import ReactDOM from 'react-dom';
import data from './data.json';


class UserProfile extends React.Component {
  state = {
    user: data.user1,
    userLikes: data.user1.likes,
    userFollowers: data.user1.followers,
    comments: data.user1.comments,
    textAreaContent: 'Add a comment',
    commentsContainerClasses: 'comments',
    commentInfo: 'Hide comments',
    clicks: 1
  }

  addLike = (e) => {
        e.preventDefault();
        this.setState({
          userLikes: this.state.userLikes + 1
        });
      }

  addFollower = (e) => {
        e.preventDefault();
        this.setState({
          userFollowers: this.state.userFollowers + 1
        });
      }

  hideComments = (e) => {
      e.preventDefault();
      if (this.state.clicks == 1) {
        this.setState({
            commentsContainerClasses: 'comments hide',
            commentInfo: 'Show comments',
            clicks: 2
        });
      } else {
        this.setState({
            commentsContainerClasses: 'comments',
            commentInfo: 'Hide comments',
            clicks: 1
        });
     }
  }

  addComment = (e) => {
    if(e.charCode == 13){
      e.preventDefault();
      const newComments = this.state.comments;
      newComments.push({"author": this.state.user.name, "comment": e.target.value})
      console.log(this.state.comments);
      this.setState({
        comments: newComments
      });
      e.target.value = ''
    }
  }

    render() {


    var commentsArray = this.state.comments.map((element, i) => {
      return(
        <div key={i}>
          <img src="./images/userImage.png" alt="user image" height="40px" width="40px" className="commentAuthorImg"></img>
          <div className="comment">
            <div className="commentAuthor">{element.author}</div>
            <div className="dayAgo">1d</div>
            <div className="commentContent">{element.comment}</div>
          </div>
          <div className="divideLine2"></div>
        </div>
      )
    });

        return (
          <div className='container'>
            <div className='topPanel'></div>
            {console.log(this.state.comments)}
            <div className='userInfo'>
              <img src="./images/goBackBtn.png" alt="go back" height="10.1px" width="10.1px" className="goBackBtn"/>
              <img src="./images/userImage.png" alt="user image" height="70px" width="70px" className="userImg"/>
              <div className="userNameLocalization">
                <div className="userName">{this.state.user.name} {this.state.user.surname}</div>
                <div className="userLocalization">{this.state.user.localization}</div>
              </div>
              <img src="./images/likeBtn.png" alt="like" height="10.7px" width="12px" className="likeUser" onClick={e => this.addLike(e)}/>
              <div className="infoPanel">
                <div className="likes">
                  <div className="nrOfLikes">{this.state.userLikes}</div>
                  <div>Likes</div>
                </div>
                <div className="divideLine"></div>
                <div className="following">
                  <div className="nrOfFollowing">{this.state.user.following}</div>
                  <div>Following</div>
                </div>
                <div className="divideLine"></div>
                <div className="followers">
                  <div className="nrOfFollowers">{this.state.userFollowers}</div>
                  <div>Followers</div>
                </div>
                <div className="followBtn" onClick={e => this.addFollower(e)}>
                  <div className="followBtnText">Follow</div>
                </div>
              </div>
            </div>
            <div className={this.state.commentsContainerClasses}>
              <div className="hideComments" onClick={e => this.hideComments(e)}>{this.state.commentInfo} ({this.state.comments.length})</div>
              {commentsArray}
              <input type='text' placeholder='Add a comment' onKeyPress={e => this.addComment(e)}></input>
              <div className="divideLine3"></div>
            </div>
          </div>
        );
     }
  }


export default UserProfile;
