import React,{useEffect,useState} from "react";


function YourBotArmy({bot}){
const [items, setItems] = useState([])
const [favorites, setFavorite]= useState([])

useEffect(() =>{

    fetch(" http://localhost:8001/bots")
    .then(res => res.json())
    .then(data => setItems(data))
    
  },[])

  function handleClick(id){
    const item = items.find(item => item.id ===id)
    const favors = favorites.find(item => item.id ===id)
    favors? alert("Existing") : setFavorite([...favorites, item])
  }

  function handleDelete(id){
   const newFavorites = favorites.filter((item) => item.id !== id)
   setFavorite(newFavorites)

}
 function completeDelete(id){
    fetch(`http://localhost:8001/bots/${id}`,{
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        }
    })
    .then(res=>res.json())
  .then(data=>document.location.reload())
 }


    return(
        <>
        <div className="row" style={{gap: "3%"}}>
            <h1>Your Favourite Bot Army</h1>

           {Array.isArray(favorites)
          ? favorites.map((fav, index) => {
              return (
                <div onClick={()=>handleDelete(fav.id)} className="col-2 mb-4">
                  <div className="row no-gutters">
                    <div
                      key={index}
                      className="card p-0 m-1"
                      style={{ width: "100%" }}
                    >
                      <div className="col md-3">
                        <img
                          src={fav.avatar_url}
                          class="card-img-top"
                          alt="..."
                        />
                      </div>
                      <div className="card-body">
                        <p className="text-danger">{fav.name}</p>
                        <p className="card-text">{fav.catchphrase}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          : null}
        </div>
        <div className="row" style={{gap: "3%"}}>

           <h1>Choose Favourite Bot</h1>

           {Array.isArray(items)
          ? items.map((item, index) => {
              return (
                <div  className="col-2 mb-4">
                  <div className="row no-gutters">
                    <div
                      key={index}
                      className="card p-0 m-1"
                      style={{ width: "100%" }}

                    >
                      <div onClick={()=> handleClick(item.id)}  className="col md-3">
                        <img
                          src={item.avatar_url}
                          class="card-img-top"
                          alt="..."
                        />
                      </div>
                      <div className="card-body">
                        <p className="text-danger">{item.name}</p>
                        <p className="card-text">{item.catchphrase}</p>
                        <button onClick={() => completeDelete(item.id)} className="btn btn-danger">X</button>
                      </div>
                    </div>

                  </div>
                </div>
              );
            })
          : null}


          </div>
        </>
    )
}

export default YourBotArmy;