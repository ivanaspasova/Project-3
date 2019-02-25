import React from "react";

const styles = {
  card: {
    width: "300px",
    background: "#e8eaf6"
  }
};

class Paragraph extends React.Component {
  render() {
    return (
      <div style={styles.card}>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="card">
                <div className="card-header">Apple iPhone X</div>
                <div className="card-body">
                  <img src="https://eg.jumia.is/r9Upo9mrVkxrqOirMp_6-edOXJc=/fit-in/680x680/filters:fill(white)/product/28/79422/1.jpg" />
                  <a href="cart.html" className="btn btn-primary">
                    Purchase
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-4">
            <div className="card">
              <div className="card-header">Samsung Galaxy Note9</div>
              <div className="card-body">
                <img src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1543421697-galaxynote9-1537878363.jpg?crop=1xw:1xh;center,top&resize=768:*" />
                <a href="#" className="btn btn-primary">
                  Purchase
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-4">
            <div className="card">
              <div className="card-header">Apple iPhone XR</div>
              <div className="card-body">
                <img src="https://tech2tech.com.cy/wp-content/uploads/iPhone_XR_black.jpg" />
                <a href="#" className="btn btn-primary">
                  Purchase
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Paragraph;
