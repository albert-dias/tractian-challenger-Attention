import styled from "styled-components";

export const Container = styled.div<{ isBlack: boolean }>`
	display: flex;
	align-items: center;
	justify-content: space-between;
	background-color: ${({ isBlack }) => (isBlack ? "#1c1c1c" : "#224eba")};
	color: ${({ isBlack }) => (isBlack ? "#51e602" : "#22d3ee")};
	width: 100%;
	height: 100%;
	padding: 6rem 0;

	@media (max-width: 1023px) {
		flex-direction: column;
		justify-content: center;
		gap: 2rem;

		&:last-child {
			height: 100%;
			width: 100%;
		}
	}
`;

export const DetailList = styled.ul`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: flex-start;
	gap: 2rem;
	width: 48%;
	padding: 0 1.5rem;

	@media (max-width: 1023px) {
		margin-top: 2.5rem;
		width: 100%;
	}
`;

export const DetailItem = styled.li<{ active: boolean; isBlack: boolean }>`
	width: 100%;
	height: 12rem;
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 2rem;
	background-color: ${({ active }) => (active ? "rgba(255, 255, 255, 0.1)" : "transparent")};
	border-radius: 0.8rem;
	padding: 1.5rem;
	transition: all 0.4s ease-in-out;

	&:hover {
		background-color: rgba(255, 255, 255, 0.1);
	}

	h3 {
		color: var(--gray-50);
		color: ${({ isBlack, active }) => (isBlack && active ? "#51e602" : active && "#22d3ee")};
		font-size: 1.8rem;
		font-weight: 600;
	}

	div:last-child {
		align-items: flex-start;
		justify-content: flex-start;
		display: flex;
		flex-direction: column;
		gap: 0.25rem;

		p {
			color: var(--gray-50);
			font-weight: 500;
			font-size: 1.4rem;
		}
	}
`;

export const NumberBall = styled.div<{ active: boolean; isBlack: boolean }>`
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;
	color: var(--black);
	width: 4rem;
	height: 4rem;
	font-size: 1.8rem;
	font-weight: 600;
	align-self: flex-start;
	z-index: 2;

	span {
		z-index: 1;
	}

	&::before {
		position: absolute;
		content: "";
		width: 40px;
		background-color: var(--gray-50);
		background-color: ${({ isBlack, active }) =>
			isBlack && active ? "#51e602" : active && "#22d3ee"};
		height: 40px;
		z-index: 1;
		border-radius: 50%;
		bottom: 1%;
		left: -46%;
	}
`;