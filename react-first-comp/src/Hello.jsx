function Hello(){

  let myName = 'Pradeep';
  let fullName = () => {
    return 'Pradeep Ranjan';
  }

  return <h3>
    This is good learning for  Candidate: {myName} <br></br>
    His full name : {fullName()}
    </h3>

}

export default Hello;