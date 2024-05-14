import PropTypes from 'prop-types';
function List(props){
    alert(props)
    const itemLists = props.items;
    const listItems = itemLists.map(item => 
                                        <li key={item.id}>
                                            {item.name}: &nbsp; <b>{item.calories}</b>
                                        </li>
                                    )
    return (
        <>
            <div className='ml-5 p-3'>
                <h2 className="text-3xl rounded-md p-2 bg-amber-500 text-white border mt-5 w-44 flex justify-center items-center">{props.category}</h2>
                <ul>
                    {listItems}
                </ul>
            </div>
        </>
    );
}
List.propTypes = {
    category: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        calories: PropTypes.number,
    })),
}
List.defaultProps = {
    category: "Category",
    items: [],   
}
export default List;