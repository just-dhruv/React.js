import { useState } from "react"

const LikeButton = () => {
    const [ like, setLike ] = useState (true);

    return (
        <>
            <button onClick={() => setLike(!like)}>
                {like ? " ❤️Liked" : "🤍Like" }
            </button>
        </>
    )
}

export default LikeButton;