import styled from "styled-components";

export const Container = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;
    gap:10px;
    height:100vh;

`

export const Content = styled.div`
    gap:15px;
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;
    width:100%;
    box-shadow: 0 1px 2px #0003;
    background-color:white;
    max-width: 790px;
    height:600px;
    padding: 20px;
    border-radius:50px;

`

export const Label = styled.label`
    font-size:25px;
    font-weight:600;
    color:#fdfdfd;
    margin-bottom: 1rem;

`
export const LabelSignup = styled.label`
    font-size:16px;
    color:#676767;

`
export const LabelError = styled.label`
    font-size:14px;
    color:red;
`
export const Strong = styled.strong`
    cursor:pointer;
    a{
        text-decoration:none;
        color:#676767
    }
`
