  import React from "react";
import { IndexLink, Link } from "react-router";

export default class RecipeItem extends React.Component {
  getLink(id) {
    return this.props.path + "/" + id;
  }
  render() {
    const item  = this.props.item;
    const image = item.image;
    const name  = item.name;
    const blurb = item.blurb;
    const id    = item.id;

    return (

      <div class="col-xs-12 col-sm-6 col-md-3 col-lg-3">
        <Link to={this.getLink(id)}>
        <div class="thumbnail">
          <div class="image">

              <img class="img img-responsive full-width thumb" src={image} />

          </div>

          <div class="caption">

              <h5 class="grid">
                {name}
              </h5>
              <p>
                {blurb}
              </p>

          </div>
        </div>
        </Link>
      </div>
    );
  }
}
