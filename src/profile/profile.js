
const profile = ({ fullname, bio, profession, show }) => {
    return (
        <div  className="box">
            <button onClick={() => show(fullname)}>click me</button>
            <h1>{fullname}</h1>
            <p>{bio}</p>
            <h3>{profession}</h3>
        </div>
    )
}

export default profile
