import { css } from "@emotion/react";
import BounceLoader from "react-spinners/BounceLoader";
import { useState } from 'react';

const override = css`
  display: block;
  border-color: red;
  width: 50px;
    height: 50px;
    position: absolute;
    top: 50%;
    left: 50%;
    margin: -25px 0 0 -25px;
`;


const Loading = (props) => {

    let [loading, setLoading] = useState(true);
    let [color, setColor] = useState("#F27088");

    return (
        <>
            <div className="sweet-loading">
                <BounceLoader color={color} loading={loading} css={override} size={60}/>
            </div>
        </>
    )
}

export default Loading;