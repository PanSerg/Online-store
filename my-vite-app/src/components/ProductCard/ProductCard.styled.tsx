import styled from "styled-components";

export const ProductCardWrapper = styled.div`
width: 240px;
height: 405px;
background-color: #F2F5F7;
border-radius: 8px;
 box-shadow: 0 2px 8px rgba(0,0,0,0.1);
 box-sizing: border-box;
 display: flex;
 flex-direction: column;
 align-items: center;
`;

export const ProductPhoto = styled.img`
 width: 100%;
 height: 245px;
 object-fit: cover;
 margin: 8px;
 `;

export const ProductName = styled.h3`
margin: 8px;
font-family: Inter;
font-weight: 400;
font-style: normal;
font-size: 16px;
leading-trim: NONE;
line-height: 20px;
letter-spacing: 0%;
color: #0C0C0C;
text-align: center;
`;
  
export const ProductPrice = styled.p`
font-family: Inter;
font-weight: 400;
font-style: Regular;
font-size: 24px;
leading-trim: NONE;
line-height: 20px;
letter-spacing: 0%;
color: #0C0C0C;
text-align: start;
margin-left: 8px;
`;

export const AddToCartButton = styled.button`
width: 224px;
height: 36px;
background-color: #00AE1C;
color: white;
border-radius: 8px;
font-family: Roboto;
font-weight: 400;
font-style: normal;
font-size: 15px;
line-height: 20px;
letter-spacing: -0.3px;
text-align: center;
cursor: pointer;
display: flex;
align-items: center;
justify-content: center;
gap: 8px;
margin-bottom: 8px;

		svg,
		img {
			width: 16px;
			height: 16px;
			display: block;
			flex: 0 0 16px;
			transition: transform 160ms ease, opacity 160ms ease;
		}

	span {
		display: inline-block;
	}

	&[aria-pressed="true"] {
		background-color: #009016;

		svg {
			transform: translateY(-1px) scale(0.98);
			opacity: 0.95;
		}
	}
`;