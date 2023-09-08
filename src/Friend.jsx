export default function Friend({friend}){
    console.log(friend)
    const {name,email,website} = friend
    return(
        <div className="card-cont">
            <h3>Name:{name}</h3>
            <h3>Email:{email}</h3>
            <h3>Website:{website}</h3>

        </div>
    )
}