function Tunji(props) {
    return<h1>Welcome to my page. I am a {props.job.role} developer</h1>
};
function Glo() {
       const person={name:"ola", job:"Glo", role:"backend"};

    return(
        <div>
            <h1>My name is GLORY</h1><Tunji job={person}/>
            
        </div>
    );

    }
    export default Glo;