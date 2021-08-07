import React from "react";
import "./ChefMainFilters.css";
import { NavLink } from "react-router-dom";

const ChefMainFilters = ({ chefFilterProp }) => {
  return (
    <div className="chefMainFilters">
      {chefFilterProp ? (
        <>
          <NavLink to="/chef/order-history" activeClassName="filterchef-active" 
          className='chefMainFilters__mySale'>
            My Sales
          </NavLink>
          <NavLink
            to="/chef/order-history/my-purchases"
            activeClassName="filterchef-active"
            className='chefMainFilters__myPurchases'
          >
            My Purhases
          </NavLink>
        </>
      ) : (
        <>
          <NavLink
            to="/chef/home/feed"
            activeClassName="cheffilter2"
            className="chefMainFilters__allposts"
          >
            ALL
          </NavLink>
          <NavLink
            to="/chef/feed/my-posts"
            activeClassName="cheffilter2"
            className="chefMainFilters__myposts"
          >
            MY POSTS
          </NavLink>
        </>
      )}
    </div>
  );
};

export default ChefMainFilters;
