import styled from 'styled-components';

export const HomeContainer = styled.div`
	header {
		display: flex;
		flex-direction: column;
		margin-bottom: 50px;
		.intro {
			display: flex;
			flex-flow: row wrap;
			justify-content: space-between;
			align-items: center;
			padding: 20px 40px;
			font-weight: 600;
			gap: 10px;

			.logo {
				font-size: 1.4rem;
			}

			p {
				color: rgb(${({ theme }) => theme.font});
			}
		}

		.intro-complement {
			display: flex;
			flex-direction: column;
			justify-items: flex-start;
			padding: 0 5%;
			gap: 20px;
			font-weight: 500;
			font-size: 2rem;
			line-height: 2.6rem;
			width: 100%;
			max-width: 1100px;
      margin-top: 50px;

			h2 {
				font-family: inter;
				font-weight: 600;
			}

			a {
				background: rgb(${({ theme }) => theme.primary});
				color: rgb(${({ theme }) => theme.neutral});
				width: fit-content;
				padding: 10px 20px;
				border-radius: 40px;
				font-size: 1.6rem;
				font-family: inter;
        margin-top: 50px;
			}
		}
	}
`;
