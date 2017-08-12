import React , { Component } from 'react';
import { findDOMNode } from 'react-dom';
import { postComment, fetchComments, editComment } from '../actions/index';
import { connect } from 'react-redux';
import uuidv1 from 'uuid/v1';

class EditCommentModal extends Component {
  constructor(props){
    super(props);
    this.state = {
      id: this.props.id,
      timestamp: Date.now(),
      body: ''
    }
  }
  componentDidMount() {
    this.setState({ body: this.props.body });
  }
  submitComment() {
    this.props.editComment(this.state);
    this.props.fetchComments(this.props.parentId);
    this.closeButton.click();
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
        <button type="button" className="btn btn-primary" data-toggle="modal" data-target={`#${this.state.id}Modal`}>
          {this.props.buttonName ? this.props.buttonName : 'Default Button Name'}
        </button>
        <div className="modal fade" id={`${this.state.id}Modal`} tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
                    <label htmlFor="exampleInputEmail1">Body</label>
                    <input value={this.state.body} onChange={this.handleInputChange.bind(this)} name="body" type="text" className="form-control" placeholder="Enter body" />
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button
                ref={closeButton => this.closeButton = closeButton}
                type="button" 
                className="btn btn-secondary" 
                data-dismiss="modal">Close</button>
                <button onClick={this.submitComment.bind(this)} type="button" className="btn btn-primary">Submit Edit!</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(null, { postComment, fetchComments, editComment })(EditCommentModal);