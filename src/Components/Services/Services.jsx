import React, { Component } from "react";

// imports react-icons
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";

// imports components
import Title from "../Title/Title";

export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: "free cocktails",
        info:
          "room3.",
      },
      {
        icon: <FaHiking />,
        title: "endless hiking",
        info:
          "room3",
      },
      {
        icon: <FaShuttleVan />,
        title: "free shuttle",
        info:
          "room2",
      },
      {
        icon: <FaBeer />,
        title: "storages beer",
        info:
          "room1",
      },
    ],
  };

  render() {
    return (
      <section className="services">
        <Title title="services" />

        <div className="services-center">
          {this.state.services.map((item, index) => {
            return (
              <article key={index} className="services">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
