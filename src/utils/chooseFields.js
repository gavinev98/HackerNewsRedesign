//destructure data retrieved from api to choose fields needed.
export const chooseFields = ({id, by, url, time, title, score} = {}) => ({
    id,
    by,
    url,
    time,
    title,
    score,
})