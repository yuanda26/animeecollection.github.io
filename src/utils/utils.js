export const ParseDate = ({ day, month, year }) => {
    const date = new Date(year, month, day);
    const parseMonth = date.toLocaleString('default', { month: 'short' });

    return `${parseMonth} ${day}, ${year}`
}