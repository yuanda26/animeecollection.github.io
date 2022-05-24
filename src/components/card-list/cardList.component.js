import React from "react";
import { Link } from "react-router-dom";
import {
    Row,
    CardImg,
    CardTitle,
    MediaCard,
    CardAllTitle,
    IconWrapper,
} from "./cardList.styled";
import { SVG } from "../../assets";

const CardList = (props) => {
    return (
        <Row>
            {props.data.map((item) => (
                <MediaCard key={item.id}>
                    <Link to={`/collection/${item.url}`}>
                        <CardImg src={item.coverImage} alt={item.title} />
                    </Link>
                    <div>
                        <Link to={`/collection/${item.url}`}>
                            <CardTitle>{item.title}</CardTitle>
                        </Link>
                        {item.allTitle ? (
                            <CardAllTitle>
                                {item.allTitle.join(", ")}
                            </CardAllTitle>
                        ) : (
                            <CardAllTitle>Collection is Empty</CardAllTitle>
                        )}
                    </div>
                    <IconWrapper>
                        <div onClick={() => props.togglePopup("update", item.id)}>
                            <SVG.Edit />
                        </div>
                        <div onClick={() => props.togglePopup("delete", item.id)}>
                            <SVG.Delete />
                        </div>
                    </IconWrapper>
                </MediaCard>
            ))}
        </Row>
    );
};

export default CardList;
