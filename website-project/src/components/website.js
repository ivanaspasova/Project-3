import React from "react";

const styles = {
  card: {
    margin: 20
  }
};

class Website extends React.Component {
  render() {
    return (
      <div style={styles.card} id="card">
        <div className="container">
          <section className="section">
            <div className="row">
              <div className="col-md-12 text-center">
                <h1>Online Store with the Latest Technology</h1>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default Website;
