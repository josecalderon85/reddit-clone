import React, {Component} from 'react';

class Posts extends Component {
    render() {
        let posts = this.props.posts;

        if(!posts){
            return false;
        }

        if(this.props.loading){
            return(
                <div>
                    <h1>Loading...</h1>
                </div>
            );
        }
     
		this.handleUpVote=(post, key)=>{
			this.props.firebaseRef.ref('posts/'+key).set({
				title: post.title,
				upvote: post.upvote +1,
				downvote: post.downvote
			});
		}

      		this.handleDownVote=(post, key)=>{
			this.props.firebaseRef.ref('posts/'+key).set({
				title: post.title,
				upvote: post.upvote,
				downvote: post.downvote + 1
			});
		}
        return(
			<div className="Posts">
				{Object.keys(posts).map((key)=>{
					return(
						<div key = {key}>							
							<div>Title: { posts[key].title } </div>
							<div>Upvote: { posts[key].upvote } </div>
							<div>Downvote: { posts[key].downvote } </div>
							<button onClick={this.handleUpVote.bind(this, posts[key], key)} type="button">UPVOTE</button>
							<button onClick={this.handleDownVote.bind(this, posts[key], key)} type="button">DOWNVOTE</button>
						</div>
					);
				})}
			</div>
		)
	}
}

export default Posts;
