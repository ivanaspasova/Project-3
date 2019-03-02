import React from "react";

class Paragraph extends React.Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-md-12  text-center">
              <div className="headings">
                <h1 className="display-4">Why go to the store?</h1>
                <p className="lead">
                  Purchase Now.Receive purchase in few hours!
                </p>
                <hr className="my-4" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Paragraph;
