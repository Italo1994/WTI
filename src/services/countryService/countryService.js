export const countryService = () => {
    fetch(process.env.REACT_APP_API)
    .then(response => response.json());
}