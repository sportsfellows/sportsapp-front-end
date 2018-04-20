import React from 'react';

export class CommentItem extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    let { comment } = this.props;
    return ( 
      <div className='comment-item container'>
        <div className='comment-photo-div'>
          
          <div className='comment-commenter'> {comment.username} </div>
          <img src={this.props.image} />
        </div>
        <div className='comment-text-div'>
          <p className='comment-content'>{comment.content}</p>
        </div>
      </div>
    );
  }
}

export default CommentItem;