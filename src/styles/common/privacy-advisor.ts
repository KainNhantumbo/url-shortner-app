import styled from 'styled-components';

export const AdvisorContainer = styled.div`
	z-index: 3000;
	position: fixed;
	bottom: 0;
	left: 0;
	width: 100%;

	div {
    border-top: 1px solid rgba(${({ theme }) => theme.accent}, 0.1);
		background: rgb(${({ theme }) => theme.foreground});
		padding: 8px 10px;
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 10px;


		strong {
			color: rgb(${({ theme }) => theme.alternative_b});
      cursor: pointer;
		}

		button {
			padding: 7px 10px;
			background: rgb(${({ theme }) => theme.primary});
			border-style: none;
			border: none;
			border-radius: 3px;
			position: relative;
			cursor: pointer;

			:hover {
				background-color: rgb(${({ theme }) => theme.alternative_b});
				transition: all 200ms ease-out;
			}

			svg {
				position: absolute;
				width: 15px;
				height: 15px;
				left: 3px;
				top: 9px;
				color: rgb(${({ theme }) => theme.font});
			}

			span {
				font-weight: 400;
				color: rgb(${({ theme }) => theme.neutral});
			}
		}
	}
`;
