import styled from 'styled-components';

export const FooterContainer = styled.footer`
	width: 100vw;
	height: min-content;
	position: relative;
	font-family: Inter, 'Open Sans', Montserrat, Poppins, 'PT Sans';
	display: flex;
	flex-direction: column;
	gap: 10px;
	padding-bottom: 10px;
	background: rgba(${({ theme }) => theme.foreground}, 0.2);

	.disclaimer {
		background: rgb(${({ theme }) => theme.alternative_a});
		padding: 10px;
		border-radius: 20px;
		h3 {
			color: rgb(${({ theme }) => theme.primary});
			font-weight: 500;
			font-size: 1.1rem;
			display: flex;
			flex-flow: row nowrap;
			gap: 8px;
			align-items: center;
			justify-content: center;
		}
	}

	h3 {
		text-align: center;
		line-height: 2rem;
	}

	ul {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: row;
		gap: 15px;

		li {
			display: grid;
			place-content: center;
			place-items: center;
			background: rgb(${({ theme }) => theme.foreground});
			border-radius: 10px;
			padding: 10px;
			width: 40px;
			height: 40px;

			:hover {
				color: rgb(${({ theme }) => theme.secondary});

				svg {
					color: rgb(${({ theme }) => theme.alternative_a});
				}
			}
		}
		svg {
			width: 20px;
			height: 20px;
			color: rgb(${({ theme }) => theme.secondary});
		}
	}

	p {
		text-align: center;
		padding: 10px;
		line-height: 1.4rem;
		font-weight: 500;
		font-size: 0.9rem;
	}
`;
