import React from "react";

class Show extends React.Component {
  render() {
    return (
      <>
        <div className="details">
          <h3>Bookmark Info:</h3>
          <hr />
          <h2> {this.props.bookmark.title} Bookmark </h2>
          <h4> {this.props.bookmark.url} Bookmark </h4>
        </div>
      </>
    );
  }
}
export default Show;
