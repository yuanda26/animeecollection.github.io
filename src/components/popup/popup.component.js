import React from "react";
import {
    PopupTitle,
    PopupButton,
    PopupWrapper,
    ButtonWrapper,
    PopupModalContainer,
} from "./popup.styled";

const Popup = (props) => {
    return (
        <PopupModalContainer className={props.show ? "show" : "hide"} height={props.height}>
            <PopupWrapper>
                <PopupTitle>{props.title}</PopupTitle>
                {props.children}
                <ButtonWrapper className={props.show ? "show" : "hide"}>
                    {props.mode === 'delete' ? (
                        <PopupButton
                            className="delete"
                            onClick={() => props.handleSave()}
                        >
                            Delete
                        </PopupButton>
                    ) : (

                        <PopupButton
                            className="save"
                            onClick={() => props.handleSave()}
                        >
                            Save
                        </PopupButton>
                    )}
                    <PopupButton
                        className="cancel"
                        onClick={() => props.handleClose()}
                    >
                        Cancel
                    </PopupButton>
                </ButtonWrapper>
            </PopupWrapper>
        </PopupModalContainer>
    );
};

export default Popup;
