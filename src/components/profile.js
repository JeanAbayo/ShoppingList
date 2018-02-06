import React, { Component } from "react";
import { connect } from "react-redux";

class Profile extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-4 col-md-12 col-sm-12 col-xs-12 sl_hero_form">
            <div className="panel panel-default">
              <div className="panel-heading">
                <strong className="">
                  Welcome Lorem ipsum dolor sit amet, consectetur adipisicing
                  elit. Explicabo debitis aut molestias obcaecati porro
                  molestiae cupiditate consectetur quo ullam autem facere nam
                  voluptatum a dicta, earum, deserunt, animi quam aspernatur
                  maxime, eveniet voluptates? Totam ipsum saepe, quasi itaque
                  veritatis voluptates, possimus consequatur commodi facilis
                  nemo, aperiam atque tenetur veniam dolorem excepturi similique
                  corporis. Facilis dolore omnis sapiente temporibus doloremque
                  officia quos veniam mollitia incidunt amet qui praesentium
                  harum similique voluptatem rerum sunt nam quae, maxime nihil
                  earum. Laudantium debitis maiores, iure molestias corporis
                  labore aperiam rerum non dolores voluptate, nisi omnis est.
                  Consectetur beatae ducimus natus dolorem? Velit numquam,
                  nulla!
                </strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { error, payload, isAuthenticated } = state.login;
  return {
    error,
    payload,
    isAuthenticated
  };
}

export default connect(mapStateToProps, {})(Profile);
