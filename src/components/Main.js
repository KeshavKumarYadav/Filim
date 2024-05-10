import './Main.css'
import MovieBox from "./MovieBox"

const Main = ({children}) => {
    return (
        <main className="main">
            {children}
        </main>
    )
}

export default Main