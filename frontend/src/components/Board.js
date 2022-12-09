import React from 'react'

function Board() {
  return (
    <>
  {/*MANAGEMENT BOARD*/}
  <section id="board">
    <div className="container">
      <div className="row-mb-5">
        <div className="col-md-8 mx-auto text-center">
          <h6 className="text-primary">Management Board</h6>
          <h1>Meet Our Board of Management</h1>
          <p>
            Board of Management is in charge of the hospital’s corporate
            governance. The board members attach great importance to the need to
            conduct the hospital’s business operations with integrity and in
            accordance with generally accepted corporate practice. They also
            endorse the internationally developed principles of good corporate
            governance.
          </p>
        </div>
      </div>
      <div className="row text-center g-4">
        <div className="col-lg-3 col-sm-6">
          <div className="board-member card-effect">
            <img src="1board.png" alt="" />
            <h5 className="mb-0 ">Wambui Njeri</h5>
            <h6>Chairperson</h6>
          </div>
        </div>
        <div className="col-lg-3 col-sm-6">
          <div className="board-member card-effect">
            <img src="2board.png" alt="" />
            <h5 className="mb-0 ">Obi Rhamaphosa</h5>
            <h6>Vice Chairperson</h6>
          </div>
        </div>
        <div className="col-lg-3 col-sm-6">
          <div className="board-member card-effect">
            <img src="6board.png" alt="" />
            <h5 className="mb-0 ">Anne Joubert</h5>
            <h6>Board Member</h6>
          </div>
        </div>
        <div className="col-lg-3 col-sm-6">
          <div className="board-member card-effect">
            <img src="4board.png" alt="" />
            <h5 className="mb-0 ">Tesfaye Habimana</h5>
            <h6>Board Member</h6>
          </div>
        </div>
        <div className="col-lg-3 col-sm-6">
          <div className="board-member card-effect">
            <img src="5board.png" alt="" />
            <h5 className="mb-0 ">John Stone</h5>
            <h6>Board Member</h6>
          </div>
        </div>
        <div className="col-lg-3 col-sm-6">
          <div className="board-member card-effect">
            <img src="3board.png" alt="" />
            <h5 className="mb-0 ">Kody Dikeledi</h5>
            <h6>Board Member</h6>
          </div>
        </div>
        <div className="col-lg-3 col-sm-6">
          <div className="board-member card-effect">
            <img src="7board.png" alt="" />
            <h5 className="mb-0 ">Isaac Sachs</h5>
            <h6>Board Member</h6>
          </div>
        </div>
        <div className="col-lg-3 col-sm-6">
          {" "}
          {/*On larger devices it'll cover 4 column spaces & on smaller 6 col. spaces*/}
          <div className="board-member card-effect">
            <img src="8board.png" alt="" />
            <h5>Sonmi Wannity</h5>
            <h6>Board Member</h6>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/*MANAGEMENT BOARD ENDS HERE*/}
</>

  )
}

export default Board