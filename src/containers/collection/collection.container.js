import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import {
    AddNewButton,
    ErrorText,
    InputCollection,
    PageTitle,
    PopupContentWrapper,
    Wrapper,
} from "./collection.styled";
import { Images } from "../../assets";
import { Search, CardList, Popup, Navs } from "../../components";

const CollectionContainer = () => {
    const collection = JSON.parse(localStorage.getItem("collection"));

    // Map Collection Data
    const mappedCollection = collection
        .map((item) => {
            const data = {
                id: item.id,
                allTitle: null,
                title: item.title,
                coverImage: Images.placeholder,
                url: item.title.replace(/ /g, "-").toLowerCase(),
            };

            if (item.items.length > 0) {
                const [firstItem] = item.items;
                const allTitle = item.items.map(
                    (data) => data.title.userPreferred
                );

                data.allTitle = allTitle;
                data.coverImage = firstItem.coverImage.large;
            }

            return data;
        })
        .sort((a, b) => b.updatedAt - a.updatedAt);

    const [value, setValue] = useState("");
    const [mode, setMode] = useState("create");
    const [keyword, setKeyword] = useState("");
    const [currentId, setCurrentId] = useState(0);
    const [errorText, setError] = useState(false);
    const [showPopup, setShowPopup] = useState(false);

    const togglePopup = (mode, id = null) => {
        if (mode === "create") {
            setValue("");
        } else if (mode === "update") {
            const currentItem = mappedCollection.find((item) => item.id === id);
            setValue(currentItem.title);
            setCurrentId(id);
        } else {
            setCurrentId(id);
        }

        setMode(mode);
        setError(false);
        setShowPopup(!showPopup);
    };

    const handleClose = () => {
        setError(false);
        setShowPopup(!showPopup);
    };

    const handleSearch = () => {
        if (keyword.length > 2) console.log(keyword);
    };

    const handleSave = () => {
        if (value !== "") {
            if (mode === "create") {
                collection.push({
                    id: uuidv4(),
                    title: value,
                    items: [],
                    createdAt: new Date().toISOString(),
                    updatedAt: new Date().toISOString(),
                });
                localStorage.setItem("collection", JSON.stringify(collection));
            } else if (mode === "update") {
                const updatedCollection = collection.map((item) =>
                    item.id === currentId
                        ? {
                              ...item,
                              title: value,
                              updatedAt: new Date().toISOString(),
                          }
                        : item
                );
                localStorage.setItem(
                    "collection",
                    JSON.stringify(updatedCollection)
                );
            } else {
                const updatedCollection = collection.filter(
                    (item) => item.id !== currentId
                );
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

    return (
        <Wrapper>
            <Navs title="Collection" />
            <Search onChange={setKeyword} handleSearch={handleSearch} />
            <AddNewButton onClick={() => togglePopup("create")}>
                Create New Collection
            </AddNewButton>
            <CardList
                data={mappedCollection}
                togglePopup={togglePopup}
                setCurrentId={setCurrentId}
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
                        <ErrorText>
                            Are you sure want to delete this collection?
                        </ErrorText>
                    ) : (
                        <>
                            <InputCollection
                                autoFocus
                                type="text"
                                value={value}
                                maxLength={100}
                                onChange={handleIput}
                            />
                            {errorText && <ErrorText>{errorText}</ErrorText>}
                        </>
                    )}
                </PopupContentWrapper>
            </Popup>
        </Wrapper>
    );
};

export default CollectionContainer;
