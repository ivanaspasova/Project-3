import React from "react";

const styles = {
  copyright: {
    padding: "30px",
    margin: "10px",
    background: "#fff"
  }
};
class Copyright extends React.Component {
  render() {
    return (
      <div style={styles.copyright} id="copyright">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <footer>©NewTech 2019</footer>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Copyright;
