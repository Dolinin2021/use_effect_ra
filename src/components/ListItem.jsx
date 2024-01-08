import PropTypes from 'prop-types';

export default function ListItem({ item, clickHandler }) {
  return (
    <li
      className={item.selected ? 'selected' : ''}
      onClick={() => clickHandler(item.id)}
    >
      {item.name}
    </li>
  );
}
  
ListItem.propTypes = {
  item: PropTypes.object.isRequired,
  clickHandler: PropTypes.func,
}
  
ListItem.defaultProps = {
  clickHandler: () => console.log('Тут, вероятно, должна быть функция...')
}
