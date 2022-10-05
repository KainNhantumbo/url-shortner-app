import styled from 'styled-components';

export const FooterContainer = styled.footer`
	width: 100%;
	height: min-content;
	position: relative;
	font-family: Inter, 'Open Sans', Montserrat, Poppins, 'PT Sans';
	display: flex;
	flex-direction: column;
	gap: 10px;
	background: rgb(${({ theme }) => theme.foreground});
	border-radius: 20px 20px 0 0;
	background: rgba(${({ theme }) => theme.foreground}, 0.2);
	display: flex;
	flex-direction: column;
	gap: 10px;
	background: rgb(${({ theme }) => theme.foreground});
	border-radius: 20px 20px 0 0;
	padding: 20px;
	line-height: 1.6rem;
	font-family: inter;

	.disclaimer {
		background: rgb(${({ theme }) => theme.alternative_a});
		padding: 20px;
		border-radius: 20px;
    max-width: 1100px;
    margin: 0 auto;
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
			background: rgb(${({ theme }) => theme.alternative_b});
			border-radius: 10px;
			padding: 10px;
			width: 40px;
			height: 40px;
			position: relative;

			:hover {
				color: rgb(${({ theme }) => theme.secondary});
				svg {
					color: rgb(${({ theme }) => theme.neutral});
				}
			}
		}
		svg {
			position: absolute;
			left: calc(50% - 11px);
			top: calc(50% - 11px);
			width: 22px;
			height: 22px;
			color: rgb(${({ theme }) => theme.secondary});
		}
	}

	div {
		text-align: center;
		display: flex;
		flex-direction: column;
		span {
			font-weight: 500;
		}
	}
`;
