import React from 'react';

function FilterableList() {
  return (
    <>
      <form>
        <div>
          <label htmlFor="todo"></label>
          <input id="todo" type="text" placeholder="휴일에 할 일" />
        </div>
        <button type="submit"></button>
      </form>
    </>
  );
}

export default FilterableList;
