import ListItem from './ListItem';
import PropTypes from 'prop-types';

export default function List({ items, clickHandler }) {
  return (
    <ul>
      {items.map((e) => (
        <ListItem item={e} key={e.id} clickHandler={clickHandler} />
      ))}
    </ul>
  );
}
  
List.propTypes = {
  items: PropTypes.array,
  item: PropTypes.array,
  clickHandler: PropTypes.func,
}
  
List.defaultProps = {
  item: [],
  clickHandler: () => console.log('Тут, вероятно, должна быть функция...')
}
