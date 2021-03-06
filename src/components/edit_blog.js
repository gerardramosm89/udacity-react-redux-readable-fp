import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSinglePost, editBlog } from '../actions/index';

class EditBlog extends Component {
  constructor(props){
    super(props);
    this.state = {
      title: '',
      body: '',
      id: ''
    }
  }
  componentWillMount() {
    this.props.fetchSinglePost(this.props.match.params.id)
    .then((res) => {
      let { title, body, id } = res.payload.post.data;
      this.setState({
        title, body, id
      });
    });
  }
  onFormSubmit(e) {
    e.preventDefault();
    this.props.editBlog(this.state)
      .then(() => {
        this.props.history.push('/');
      });
  }
  handleInputChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  render() {
    return(
      <div>
        <div className="container">
          <div className="row">
            <div className="col-8 offset-2">
              <form onSubmit={this.onFormSubmit.bind(this)}>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Title</label>
                  <input value={this.state.title} name="title" onChange={this.handleInputChange.bind(this)} className="form-control" placeholder="Enter title for post" />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleTextarea">Example textarea</label>
                  <textarea value={this.state.body} onChange={this.handleInputChange.bind(this)} name="body" className="form-control" rows="5"></textarea>
                </div>
                <button className="btn btn-primary">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    singlePost: state.singlePost.singlePost
  }
}

export default connect(mapStateToProps, { fetchSinglePost, editBlog })(EditBlog);