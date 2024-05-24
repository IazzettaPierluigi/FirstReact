import profilePic from './assets/Naruto_Uzumaki_profilo.webp'


function Card(){

return(
<div className="card">
    <img className='card-image' src={profilePic} alt="mypic" />
    <h2 className='card-title'>Pierluigi</h2>
    <p className='card-text'>Il mio primo progetto in react, sono carico.</p>
</div>
);

}

export default Card;