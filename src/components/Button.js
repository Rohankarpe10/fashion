import styled from 'styled-components';

export const ButtonContainer = styled.button`
text-transform: capitalize;
font-size: 2rem;
background: transparent;
border: 0.25rem solid var(--lightBlue);
border-color:${props => props.cart ? "var(--mainPurple)" : "var(--lightBlue)"};
background:${props => props.cart ? "var(--lightBlue)" : "transparent"};
color:${props => props.cart ? "var(--mainPurple)" : "var(--lightBlue)"} !important;
border-radius: 0.5rem;
padding: 0.2rem 0.5rem;
cursor:pointer;
margin: 0.2rem 0.5rem 0.2rem 0;
transition:all 0.5s ease-in-out;
&:hover{
    background:${props => props.cart ? "var(--mainPurple)" : "var(--mainLime)"} !important;
    color:${props => props.cart ? "var(--mainWhite)" : "var(--mainBlack)"} !important;
    font-size:${props => props.cart ? "2.1rem" : "2.1rem"}; 
    border:none; 
}
&:focus{
    outline:${props => props.cart ? "var(--mainLime)" : "none"};
}
`;

export const ButtonContainer1 = styled.button`
text-transform: capitalize;
font-size: 2rem;
border: 0.25rem solid;
border-color:var(--mainPurple);
background:var(--lightBlue);
color:var(--mainPurple);
border-radius: 0.5rem;
padding: 0.2rem 0.5rem;
cursor:pointer;
margin: 0.2rem 0.5rem 0.2rem 0;
transition:all 0.5s ease-in-out;
&:hover{
    background:var(--mainPurple);
    color:var(--mainWhite) !important;
    font-size: 2.1rem; 
    border:none; 
}
`;