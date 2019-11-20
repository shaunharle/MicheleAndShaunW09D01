import React from "react";
import axios from "axios";

class UpdateForm extends React.Component {
  render() {
    return (
      <div className="modal edit">
        <form>
          <div className="row">
            <label htmlFor="title">title</label>
            <input type="text" id="title" />

            <label htmlFor="url">Link</label>
            <input type="text" id="url" />
            <label htmlFor="description">Description</label>
            <textarea className="u-full-width" id="description"></textarea>
            <input
              type="submit"
              value="Update Bookmarks"
              className="button-primary"
            />
            <button className="button-red"> Don't Update </button>
          </div>
        </form>
      </div>
    );
  }
}

export default UpdateForm;
