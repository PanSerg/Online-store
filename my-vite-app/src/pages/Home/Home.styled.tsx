import styled from "styled-components";

export const ProductsContainer = styled.div`
	width: 100%;
	max-width: 1440px;
	margin: 32px auto 0 auto;
    padding: 88px 16px 0 16px; /* top padding accounts for fixed header (64px) + spacing */
	color: #171717;
	@media (max-width: 1440px) {
		padding: 88px 16px 0 16px;
	}
`;