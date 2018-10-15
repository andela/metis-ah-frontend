import React from 'react';
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  EmailShareButton,

  EmailIcon,
  FacebookIcon,
  TwitterIcon,
  WhatsappIcon,
} from 'react-share';

const sharing = () => {
  const shareUrl = 'www.google.com';

  const shareAction = () => {
    console.log('shared');
  };

  return <div>
			<FacebookShareButton url={shareUrl} onShareWindowClose={shareAction}>
				<FacebookIcon size={32} round />
			</FacebookShareButton>

			<TwitterShareButton url={shareUrl} onShareWindowClose={shareAction}>
				<TwitterIcon size={32} round />
			</TwitterShareButton>

			<WhatsappShareButton url={shareUrl}>
				<WhatsappIcon size={32} round />
			</WhatsappShareButton>

			<EmailShareButton url={shareUrl}>
				<EmailIcon size={32} round />
			</EmailShareButton>
		</div>;
};

export default sharing;
