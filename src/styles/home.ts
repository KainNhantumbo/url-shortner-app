import styled from 'styled-components';
import { StyledInputs } from './generics/form';

export const HomeContainer = styled.div`
	display: flex;
	justify-content: flex-start;
	flex-direction: column;
	gap: 50px;

	header {
		display: flex;
		flex-direction: column;
		margin-bottom: 50px;
		position: relative;

		img {
			position: absolute;
			top: 0;
			left: 0;
			border-radius: 0 0 20px 20px;
			object-fit: cover;
			width: 100%;
			height: 110%;
			filter: opacity(90%) brightness(0.4);
		}

		.intro,
		.intro-complement {
			z-index: 5000;
			color: rgb(${({ theme }) => theme.neutral});
		}

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

				div {
					display: flex;
					gap: 5px;
					align-items: center;
					flex-flow: row nowrap;
				}
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
				color: rgb(${({ theme }) => theme.secondary});
			}

			a {
				background: rgb(${({ theme }) => theme.primary});
				color: rgb(${({ theme }) => theme.neutral});
				width: fit-content;
				padding: 8px 25px;
				border-radius: 40px;
				font-size: 1.4rem;
				font-family: inter;
				margin-top: 50px;
			}
		}
	}

	main {
		padding: 0 20px;
		width: 100%;
		article {
			display: flex;
			flex-direction: column;
			gap: 40px;

			form {
				display: flex;
				flex-direction: row;
				justify-content: center;

				input {
					width: 100%;
					max-width: 800px;
					height: fit-content;
					border: none;
					padding: 12px;
					line-height: 1.2rem;
					font-size: 1.2rem;
					font-weight: 500;
					outline: none;
					border-radius: 25px 0 0 25px;
					background: rgb(${({ theme }) => theme.background});
					border: 2px solid rgb(${({ theme }) => theme.primary});
					border-right: none;
					:focus {
						border: 2px solid rgb(${({ theme }) => theme.secondary});
						border-right: none;
					}
					::placeholder {
						color: rgba(${({ theme }) => theme.font}, 0.8);
						font-size: 1rem;
					}
				}

				button {
					border: none;
					background: rgb(${({ theme }) => theme.primary});
					border-radius: 0 25px 25px 0;
					position: relative;
					padding: 10px 15px;
					color: rgb(${({ theme }) => theme.neutral});
					width: fit-content;
					cursor: pointer;
					:hover {
						color: rgb(${({ theme }) => theme.font});
						background: rgb(${({ theme }) => theme.secondary});
					}
					svg {
						width: 18px;
						height: 18px;
						position: absolute;
						top: calc(50% - 10px);
						right: 10px;
						pointer-events: none;
					}
					span {
						padding-right: 20px;
						font-weight: 500;
						pointer-events: none;
					}
				}
			}

			.urls-wrapper {
				display: flex;
				flex-direction: column;
				gap: 20px;
				align-items: center;

				h2 {
					font-family: inter;
					font-weight: 600;
					line-height: 1.6rem;
					font-size: 1.2rem;
					color: rgb(${({ theme }) => theme.primary});
					display: flex;
					gap: 8px;
					flex-flow: row nowrap;
				}

				.urls-container {
					display: flex;
					flex-direction: column;
					gap: 10px;
					align-items: center;
					justify-content: center;

					.no-urls {
						width: 100%;
						min-height: 300px;
						line-height: 1.6rem;
						font-size: 1.4rem;
						font-weight: 500;
            display: grid;
            place-content: center;
            background: rgb(${({ theme }) => theme.alternative_a});
            padding: 40px;
            border-radius: 20px;

            div {
              display: flex;
              align-items: center;
              flex-direction: column;
              gap: 20px;
            } 

            svg {
              width: 70px;
              height: 70px;
            }

					}

					.url {
						box-shadow: 0 0 1px rgba(${({ theme }) => theme.accent}, 0.3);
						background: rgb(${({ theme }) => theme.foreground});
						padding: 20px;
						max-width: 700px;
						display: flex;
						flex-direction: column;
						gap: 10px;
						justify-content: flex-start;
						border-radius: 15px;
						word-wrap: break-word;
						word-break: break-all;

						:hover {
							box-shadow: 0 0 25px rgba(${({ theme }) => theme.accent}, 0.1);
							transition: all 200ms ease;
						}

						.links {
							display: flex;
							flex-direction: column;
							gap: 10px;

							a {
								font-weight: 500;
								line-height: 1.4rem;
								display: flex;
								gap: 5px;
								align-items: baseline;
								svg {
									padding-top: 5px;
									width: 18px;
									height: 18px;
								}
							}

							.short-url {
								color: rgb(${({ theme }) => theme.primary});
							}
						}

						.actions-container {
							display: flex;
							align-items: center;
							justify-content: space-between;
							flex-flow: row wrap-reverse;
							gap: 10px;

							.date {
								background: rgb(${({ theme }) => theme.secondary});
								color: rgb(${({ theme }) => theme.neutral});
								padding: 5px 10px;
								border-radius: 15px;
							}

							.buttons {
								display: flex;
								gap: 10px;

								button {
									border: none;
									background: rgb(${({ theme }) => theme.primary});
									border-radius: 15px;
									position: relative;
									padding: 5px 10px;
									color: rgb(${({ theme }) => theme.neutral});
									width: fit-content;
									cursor: pointer;
									:hover {
										color: rgb(${({ theme }) => theme.font});
										background: rgb(${({ theme }) => theme.secondary});
									}
									svg {
										width: 20px;
										height: 20px;
										position: absolute;
										top: calc(50% - 10px);
										right: 7px;
										pointer-events: none;
									}
									span {
										padding-right: 20px;
										font-weight: 500;
										pointer-events: none;
									}
								}
							}
						}
					}
				}
			}
		}
	}
`;
