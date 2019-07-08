import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlayCircle } from "@fortawesome/free-regular-svg-icons";

export default class Episodes extends Component {
  render() {
    let { title, description } = this.props.item;

    return (
      <div className="flex flex-wrap p-3 w-full md:w-1/2 lg:w-1/3">
        <div className="flex flex-wrap items-start shadow p-3 h-48">
          <div className="flex items-center content-start justify-start w-full mb-2">
            <span className="text-base font-bold">{title}</span>
          </div>
          <div className="flex items-center content-start justify-start w-full mb-5">
            <p className="text-sm font-thin" dangerouslySetInnerHTML={{ __html: `${description.replace('&nbsp;', '').slice(0, 175)}...` }}/>
          </div>
          <div className="flex items-center content-start justify-start w-full mt-auto">
            <div className="flex items-center">
              <p className="flex items-center text-blue-600 uppercase cursor-pointer transition hover:text-green-custom text-xs">
                <FontAwesomeIcon
                  icon={faPlayCircle}
                  className="mr-2"
                />
                <span>listen now</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}