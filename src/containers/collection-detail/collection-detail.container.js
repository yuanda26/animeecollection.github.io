import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import {
    Wrapper,
    NotFound,
    PageTitle,
    EditButton,
} from "./collection-detail.styled";
import {
    ErrorText,
    WarningText,
    InputCollection,
    PopupContentWrapper,
} from "../collection/collection.styled";
import { Card, Navs, Popup } from "../../components";

const CollectionDetailContainer = () => {
    const { id } = useParams();
    const collectionStorage = JSON.parse(localStorage.getItem("collection"));

    const [value, setValue] = useState("");
    const [mode, setMode] = useState("update");
    const [currentId, setCurrentId] = useState(0);
    const [errorText, setError] = useState(false);
    const [showPopup, setShowPopup] = useState(false);
    const [collection, setCollection] = useState(null);

    useEffect(() => {
        const collectionStorage = JSON.parse(localStorage.getItem("collection"));
        const findCollection =
            collectionStorage && collectionStorage.length > 0
                ? collectionStorage.find(
                      (item) =>
                          item.title.replace(/ /g, "-").toLowerCase() === id
                  )
                : null;

        setValue(findCollection ? findCollection.title : "");
        setCollection(findCollection ? findCollection : null);
    }, [id]);

    const togglePopup = (mode, id = null) => {
        setMode(mode);
        setShowPopup(!showPopup);
        if (mode === "delete") setCurrentId(id);
    };

    const handleIput = (e) => {
        const val = e.target.value;
        var format = /[^a-zA-Z0-9 ]/;

        if (!format.test(val)) {
            setValue(val);
            setError(false);
        } else {
            setError("No Special Character or Symbol Allowed!");
        }
    };

    const handleClose = () => {
        setError(false);
        setShowPopup(!showPopup);
    };

    const handleSave = () => {
        if (value !== "") {
            if (mode === "update") {
                const updatedCollection = collectionStorage.map((item) =>
                    item.id === collection.id
                        ? {
                              ...item,
                              title: value,
                              updatedAt: new Date().toISOString(),
                          }
                        : item
                );
                setCollection({
                    ...collection,
                    title: value,
                });
                localStorage.setItem(
                    "collection",
                    JSON.stringify(updatedCollection)
                );
            } else {
                const filtereditems = collection.items.filter(
                    (item) => item.id !== currentId
                );
                const updatedItems = {
                    ...collection,
                    updatedAt: new Date().toISOString(),
                    items: filtereditems,
                };
                const updatedCollection = collectionStorage.map((item) =>
                    item.id === collection.id
                        ? {
                              ...item,
                              items: filtereditems,
                              updatedAt: new Date().toISOString(),
                          }
                        : item
                );

                setCollection(updatedItems);
                localStorage.setItem(
                    "collection",
                    JSON.stringify(updatedCollection)
                );
            }
            handleClose();
        } else {
            setError("Collection Title Must Not Empty");
        }
    };

    return (
        <Wrapper>
            {collection ? (
                <>
                    <Navs title="Collection" />
                    <EditButton onClick={() => togglePopup("update")}>
                        Edit Collection Title
                    </EditButton>
                    <PageTitle>{collection.title}</PageTitle>
                    <Card
                        data={collection.items}
                        deletable
                        handleDelete={togglePopup}
                    />
                    <Popup
                        mode={mode}
                        height="220px"
                        show={showPopup}
                        handleSave={handleSave}
                        handleClose={handleClose}
                        title="Collection Title"
                    >
                        <PopupContentWrapper>
                            {mode === "delete" ? (
                                <WarningText>
                                    Are you sure want to delete this anime from
                                    your collection?
                                </WarningText>
                            ) : (
                                <>
                                    <InputCollection
                                        autoFocus
                                        type="text"
                                        value={value}
                                        maxLength={100}
                                        onChange={handleIput}
                                    />
                                    {errorText && (
                                        <ErrorText>{errorText}</ErrorText>
                                    )}
                                </>
                            )}
                        </PopupContentWrapper>
                    </Popup>
                </>
            ) : (
                <NotFound>
                    <span>
                        <PageTitle>Collection Not Found</PageTitle>
                        <Link to={"/collection"}>Go back</Link>
                    </span>
                </NotFound>
            )}
        </Wrapper>
    );
};

export default CollectionDetailContainer;
