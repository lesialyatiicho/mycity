function App() {
    const city = "Mariupol";
    const country = "Ukraine";
    const founded = "1778";

    const photos = [
        "/images/mariupol1.jpg",
        "/images/mariupol2.jpg",
        "/images/mariupol3.jpg"
    ];

    return (
        <div
            style={{
                minHeight: "100vh",
                backgroundColor: "lightblue",
                padding: "40px 20px",
                fontFamily: "Arial, sans-serif",
                color: "white",

            }}
        >
            <div
                style={{
                    maxWidth: 900,
                    margin: "0 auto",
                    textAlign: "center"
                }}
            >
                <h1>My Native City</h1>

                <p><b>City:</b> {city}</p>
                <p><b>Country:</b> {country}</p>
                <p><b>Founded:</b> {founded}</p>

                <h2>City Photos</h2>

                <div
                    style={{
                        display: "flex",
                        gap: 12,
                        flexWrap: "wrap",
                        justifyContent: "center",
                    }}
                >
                    {photos.map((photo, index) => (
                        <img
                            key={index}
                            src={photo}
                            alt="Mariupol"
                            style={{
                                width: 360,
                                height: 270,
                                objectFit: "cover",
                                borderRadius: 10,
                            }}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default App;
