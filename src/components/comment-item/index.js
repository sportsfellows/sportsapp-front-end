import './_comment-item.scss';
import React from 'react';

export class CommentItem extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    let { comment } = this.props;
    return ( 
      <div className='comment-item'>
        <div className='comment-photo-div'>
          <img src={this.props.image} />
        </div>
        <div className='comment-text-div'>
          <span className='comment-commenter'> {comment.username} </span>
          <p className='comment-content'>{comment.content}</p>
        </div>
      </div>
    );
  }
}

export default CommentItem;