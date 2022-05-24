import React from "react";
import { Link } from "react-router-dom";
import { SVG } from "../../assets";
import { Row, CardImg, CardTitle, MediaCard, DeleteIcon } from "./card.styled";

const Card = (props) => {
    return (
        <Row>
            {props.data.map((item) => (
                <MediaCard key={item.id}>
                    {props.deletable && (
                        <DeleteIcon onClick={() => props.handleDelete("delete", item.id)}>
                            <SVG.Delete />
                        </DeleteIcon>
                    )}
                    <Link to={`/${item.id}`}>
                        <CardImg
                            src={item.coverImage.large}
                            alt={item.title.userPreferred}
                        />
                    </Link>
                    <Link to={`/${item.id}`}>
                        <CardTitle>{item.title.userPreferred}</CardTitle>
                    </Link>
                </MediaCard>
            ))}
        </Row>
    );
};

export default Card;
