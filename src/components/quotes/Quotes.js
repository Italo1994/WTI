export const Quotes = ( {quote, speaker } ) => {
    return(
        <>
            <p>{quote}</p>
            <p>{speaker}</p>
            <button>Informações</button>
        </>
    );
}