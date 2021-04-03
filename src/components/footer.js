import React from 'react';
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';

function Footer(props) {
    return (
		<div style={{ marginTop: '45px', display: 'flex', justifyContent: 'space-between', padding: '20px' }}>
			<a href="http://www.twitter.com" target="_blank">
				<FaTwitter size={40} />
			</a>
			<a href="http://www.facebook.com/sanjana.sharmin.77" target="_blank">
				<FaFacebook size={40} />
			</a>
			<a href="http://www.instagram.com/sharmin6780" target="_blank">
				<FaInstagram size={40} />
			</a>
			<a href="http://www.linkedin.com/https://www.linkedin.com/in/dasshishir" target="_blank">
				<FaLinkedin size={40} />
			</a>
			<a href="http://www.youtube.com/UCbHkPTYYFETw1DLdpglm3xg" target="_blank">
				<FaYoutube size={40} />
			</a>
		</div>
	);
}

export default Footer;