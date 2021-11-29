import styled from "styled-components";

export const Container = styled.div`
	padding: 0.8rem 1.6rem;
	width: 100%;
	height: 100%;
	color: #575757;
	transition: background-color 0.5s;

	display: flex;
	align-items: flex-start;
	justify-content: flex-start;
	gap: 1rem;

	& > svg {
		color: var(--blue-700);
		font-size: 2.5rem;
	}

	&:hover {
		background-color: rgb(234, 238, 244);
		transition: background-color 0.5s;
	}

	&:first-child:hover {
		border-radius: 0.8rem 0.8rem 0 0;
	}

	&:last-child:hover,
	&:last-child {
		border-radius: 0 0 0.8rem 0.8rem;
	}
`;

export const TextContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: flex-start;
	gap: 0.6rem;

	p {
		font-size: 1.3rem;
	}
`;
