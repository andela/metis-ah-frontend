import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Image from 'Images/Group.png';
import './style.scss';

const ImageUploadButton = (props) => {
  const { handler } = props;
  return (
    <Fragment>
      <label htmlFor="upload" className="uploadLabel">
        <img src={Image} alt="banner" height="20px" />
      </label>
      <input id="upload" type="file" className="upload" name="article Image" onChange={handler} accept="image/*" />
    </Fragment>
  )
};

ImageUploadButton.propTypes = {
  handler: PropTypes.func.isRequired
};

export default ImageUploadButton;
