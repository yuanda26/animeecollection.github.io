export const ParseDate = ({ day, month, year }) => {
    const date = new Date(year, month, day);
    const parseMonth = date.toLocaleString("default", { month: "short" });

    return `${parseMonth} ${day}, ${year}`;
};

export const isCollectionExist = (title) => {
    const collection = localStorage.getItem("collection")
        ? JSON.parse(localStorage.getItem("collection"))
        : [];

    if (collection.length > 0) {
        const isExist = collection.find(
            (item) => item.title.toLowerCase() === title.toLowerCase()
        );
        return isExist ? true : false;
    } else {
        return false;
    }
};
