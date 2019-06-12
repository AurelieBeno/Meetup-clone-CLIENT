import React, { Component } from "react";
import "./style/SearchBar.scss";

class SearchBar extends Component {
  render() {
    return (
      <section className="searchBar-container">
        <form id="Form">
          <div className="dropdow callout">
            <input
              type="text"
              className="dropdown-toggle ellipzise"
              placeholder="Rechercher"
              size="30"
              // value="Rechercher"
              onChange={this.props.onChange}
            />
            {/* <ul className='dropdown-menu'>
                <li></li>
              </ul> */}
            <button type="submit" />
            <label htmlFor="" className="labelFormSearch">
              dans un rayon de <span>5 km </span> de
              <span> Paris,FR</span>
            </label>
          </div>
        </form>
      </section>
    );
  }
}

export default SearchBar;
