
function TodoItem2(){

  let itemName = 'Bread';
  let itemDate = '14/09/2024';

  return <div class="container text-center">
          <div class="row">
            <div class="col-4">
              <p>{itemName}</p>
            </div>
            <div class="col-4">
              <p>{itemDate}</p>
            </div>
            <div class="col-2">
            <button type="button" class="btn btn-danger">
                delete
              </button>
            </div>
          </div>
        </div>

}

export default TodoItem2;