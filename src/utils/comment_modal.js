import React , { Component } from 'react';
import { findDOMNode } from 'react-dom';
import { postComment, fetchComments } from '../actions/index';
import { connect } from 'react-redux';
import uuidv1 from 'uuid/v1';

/*
  In the parent component, to assign the modal body, just put text in between the component decorators.
  Example 1: <GModal>This is going to be the content of the modal</GModal>
  props to pass:
  buttonName - This will be the title of the button
  modalTitle - Title of the Modal
  Example 2:
  <CommentModal
  primaryBtnName={`Post Comment`}
  modalTitle={`This is the test title`}
  buttonName={`TheButton`}>
    This is going to be the content of the modal
  </CommentModal>
*/
class CommentModal extends Component {
  constructor(props){
    super(props);
    this.state = {
      id: uuidv1(),
      timestamp: Date.now(),
      body: '',
      author: '',
      parentId: this.props.parentId
    }
  }
  submitComment() {
    this.props.postComment({ ...this.state, parentId: this.props.parentId})
      .then(() => this.props.fetchComments(this.props.parentId))
      .then(this.setState({ id: uuidv1()}))
      .then(() => this.closeButton.click());
  }
  handleInputChange(e) {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  render() {
    return(
      <div>
        <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#myModal">
          {this.props.buttonName ? this.props.buttonName : 'Default Button Name'}
        </button>
        <div className="modal fade" id="myModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  {this.props.modalTitle ? this.props.modalTitle : 'Modal title'}
                </h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Author</label>
                    <input onChange={this.handleInputChange.bind(this)} name="author" type="text" className="form-control" placeholder="Enter title" />
                  </div>

                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Body</label>
                    <input onChange={this.handleInputChange.bind(this)} name="body" type="text" className="form-control" placeholder="Enter body" />
                  </div>


                </form>
              </div>
              <div className="modal-footer">
                <button
                ref={closeButton => this.closeButton = closeButton}
                type="button" 
                className="btn btn-secondary" 
                data-dismiss="modal">Close</button>
                <button onClick={this.submitComment.bind(this)} type="button" className="btn btn-primary">{this.props.primaryBtnName}</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(null, { postComment, fetchComments })(CommentModal);