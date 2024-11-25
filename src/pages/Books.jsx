export default function Books() {
    return (
        <>
            <header>
                <div className="logo">
                    LOGO
                </div>
                <MainMenu />

                <nav>
                    <a href="/home">Home</a>
                    <a href="/">Books</a>
                    <a href="/about">About</a>
                    <a href="/contacts">Contacts</a>
                </nav>
            </header>

            <main>
                <h1>Books</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Accusamus tempore nesciunt cum! Assumenda officia doloribus
                    repudiandae ea asperiores ducimus veniam ex, non aliquid
                    itaque? Possimus fugit odio omnis voluptates nulla.</p>
            </main>

            <footer>
                <p>copywrite 2024</p>
            </footer>
        </>
    )
}