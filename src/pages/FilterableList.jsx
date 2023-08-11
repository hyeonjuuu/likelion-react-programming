import styleModule from '@/styles/FilterableList.module.css';

console.log(styleModule);

function FilterableList() {
  return (
    <>
      <form>
        <div>
          <label htmlFor="todo"></label>
          <input
            id="todo"
            type="text"
            placeholder="휴일에 할 일"
            className={styleModule.primary}
          />
        </div>
        <button type="submit"></button>
      </form>
    </>
  );
}

export default FilterableList;
