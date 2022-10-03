import { FooterContainer as Container } from '../styles/footer';
import { FC } from 'react';
import { FaGithub, FaWhatsapp } from 'react-icons/fa';
import { ImBlog, ImLinkedin2 } from 'react-icons/im';
import { motion } from 'framer-motion';
import { IoDocuments, IoWarning } from 'react-icons/io5';

interface FooterLinks {
	name: string;
	icon: JSX.Element;
	link: string;
}

const footerData: FooterLinks[] = [
	{
		name: 'View my portfolio',
		icon: <IoDocuments />,
		link: 'https://github.com/KainNhantumbo',
	},
	{
		name: 'Find me on Github',
		icon: <FaGithub />,
		link: 'https://github.com/KainNhantumbo',
	},
	{
		name: 'Find me on Whatsapp',
		icon: <FaWhatsapp />,
		link: 'https://wa.me/258844002535',
	},
	{
		name: 'Find me on LinkedIn',
		icon: <ImLinkedin2 />,
		link: 'https://www.linkedin.com/in/kain-nhantumbo-aa380317a',
	},
	{
		name: 'Visit my blog',
		icon: <ImBlog />,
		link: 'https://publish-it-programming.vercel.app/',
	},
];

const Footer: FC = (): JSX.Element => {
	return (
		<Container>
			<section className='disclaimer'>
				<h3>
					<IoWarning />
					<span>Disclaimer</span>
				</h3>
				<p>
					This application was made for pratice, learn and for improving my
					coding skills only. Do not use this application for commercial or
					professional purposes but you're free to test. Please understand that
					all saved shortned urls are periodicaly deleted from the database by
					the back-end API to avoid higher server costs and that will lead them
					to stop working. Thanks.
				</p>
			</section>
			<h3>
				<strong>Find me on the web by:</strong>
			</h3>
			<ul>
				{footerData.map((link, index) => {
					return (
						<motion.li
							key={index}
							whileHover={{ scale: 1.2 }}
							title={link.name}
						>
							<a href={link.link} target={'_blank'} rel={'noreferrer noopener'}>
								{link.icon}
							</a>
						</motion.li>
					);
				})}
			</ul>
			<div>
				<span>Url Shortner App - Version 0.9.0 (beta)</span>
				<span>Copyright &copy; 2022 Kain Nhantumbo. All Rights Reserved. </span>
			</div>
		</Container>
	);
};

export default Footer;
